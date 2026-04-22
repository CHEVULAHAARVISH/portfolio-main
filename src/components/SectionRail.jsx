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
      // Pick the section with the largest intersection ratio currently visible
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
            className="group flex items-center gap-3 py-2 text-left"
            aria-current={isActive ? 'true' : undefined}
          >
            <span
              className="relative flex items-center justify-center h-4 w-4"
              aria-hidden="true"
            >
              <span
                className="absolute inline-block h-px w-3 transition-all duration-300"
                style={{
                  background: isActive ? 'var(--accent)' : 'var(--line-strong)',
                  width: isActive ? '20px' : '12px',
                  opacity: isActive ? 1 : 0.7,
                }}
              />
            </span>
            <span
              className="font-mono text-[10px] uppercase tracking-widest2 transition-all duration-300"
              style={{
                color: isActive ? 'var(--accent)' : 'var(--faint)',
                opacity: isActive ? 1 : 0,
                transform: `translateX(${isActive ? 0 : -4}px)`,
              }}
            >
              S.{num} · {label}
            </span>
            {/* Always-visible section number (even when inactive, appears on hover) */}
            {!isActive && (
              <span
                className="font-mono text-[10px] uppercase tracking-widest2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
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
