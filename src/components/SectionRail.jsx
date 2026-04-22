import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'identity', num: '00', label: 'Identity' },
  { id: 'ferronyx', num: '01', label: 'Ferronyx' },
  { id: 'sora', num: '02', label: 'SORA' },
  { id: 'thesis', num: '03', label: 'Thesis' },
  { id: 'work', num: '04', label: 'Trajectory' },
  { id: 'contact', num: '05', label: 'Contact' },
];

export default function SectionRail() {
  const [active, setActive] = useState('identity');

  useEffect(() => {
    const observers = [];
    const entries = new Map();

    const update = () => {
      let best = null;
      let bestRatio = 0;
      for (const [id, ratio] of entries.entries()) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = id;
        }
      }
      if (best) setActive(best);
    };

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (records) => {
          for (const r of records) {
            entries.set(id, r.intersectionRatio);
          }
          update();
        },
        {
          threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
          rootMargin: '-30% 0px -45% 0px',
        },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-0"
    >
      {SECTIONS.map(({ id, num, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => go(id)}
            aria-label={`Jump to ${label}`}
            aria-current={isActive ? 'true' : undefined}
            className="group relative block py-2 w-5"
          >
            {/* Rail tick — the only clickable shape */}
            <span
              className="block h-px transition-all duration-300"
              style={{
                background: isActive ? 'var(--accent)' : 'var(--line-strong)',
                width: isActive ? '20px' : '12px',
                opacity: isActive ? 1 : 0.7,
              }}
            />
            {/* Label — absolutely positioned, pointer-events-none so it
                cannot catch clicks and the button's hit area stays tiny */}
            <span
              className="pointer-events-none absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest2 transition-all duration-300"
              style={{
                color: isActive ? 'var(--accent)' : 'var(--muted)',
                opacity: isActive ? 1 : 0,
                transform: `translate(${isActive ? 0 : -4}px, -50%)`,
              }}
            >
              S.{num} · {label}
            </span>
            {/* Hover-only label for inactive items — also pointer-events-none */}
            {!isActive && (
              <span
                className="pointer-events-none absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: 'var(--muted)' }}
              >
                S.{num} · {label}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
