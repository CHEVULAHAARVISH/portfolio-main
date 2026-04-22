import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function formatUTC(d) {
  const pad = (n) => String(n).padStart(2, '0');
  return (
    `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ` +
    `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`
  );
}

export default function TelemetryBar({ theme, onToggle }) {
  const [booted, setBooted] = useState(false);
  const [stage, setStage] = useState(0);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 240),
      setTimeout(() => setStage(2), 520),
      setTimeout(() => setStage(3), 780),
      setTimeout(() => setStage(4), 1040),
      setTimeout(() => setStage(5), 1300),
      setTimeout(() => setBooted(true), 1480),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
      style={{
        borderColor: 'var(--line)',
        background:
          'color-mix(in srgb, var(--bg) 78%, transparent)',
      }}
      aria-label="Live telemetry bar"
    >
      <div className="container-edge flex items-center justify-between gap-4 py-2 text-[11px] font-mono">
        {/* Left cluster */}
        <div className="flex items-center gap-3 md:gap-5 overflow-hidden whitespace-nowrap">
          <AnimatePresence initial={false}>
            {!booted && (
              <motion.span
                key="boot"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="uppercase tracking-widest2"
                style={{ color: 'var(--accent)' }}
              >
                [BOOT<span className="blink">▮</span>] TELEMETRY INITIALIZING
              </motion.span>
            )}
          </AnimatePresence>

          {booted && (
            <>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="uppercase tracking-widest2"
                style={{ color: 'var(--muted)' }}
              >
                <span style={{ color: 'var(--fg)' }}>H.C</span>
                <span className="opacity-40 mx-2">/</span>
                OBSERVATORY
              </motion.span>

              <span
                className="hidden md:inline uppercase tracking-widest2"
                style={{ color: 'var(--muted)' }}
              >
                12.9716° N · 77.5946° E
              </span>
              <span
                className="hidden lg:inline uppercase tracking-widest2"
                style={{ color: 'var(--faint)' }}
              >
                BENGALURU / IN
              </span>
            </>
          )}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3 md:gap-5 whitespace-nowrap">
          {booted && (
            <>
              <span
                className="hidden sm:inline uppercase tracking-widest2"
                style={{ color: 'var(--muted)' }}
              >
                {formatUTC(now)}
              </span>

              <span className="hidden md:flex items-center gap-1.5 uppercase tracking-widest2">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full pulse-dot"
                  style={{ background: 'var(--accent)' }}
                />
                <span style={{ color: 'var(--fg)' }}>FERRONYX</span>
                <span style={{ color: 'var(--faint)' }}>LIVE</span>
              </span>

              <span className="hidden md:flex items-center gap-1.5 uppercase tracking-widest2">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: 'var(--fg)', opacity: 0.5 }}
                />
                <span style={{ color: 'var(--fg)' }}>SORA</span>
                <span style={{ color: 'var(--faint)' }}>[R&D]</span>
              </span>
            </>
          )}

          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            className="group flex items-center gap-1.5 px-2 py-1 border hairline-strong uppercase tracking-widest2 hover:bg-[var(--card-hover)] transition-colors"
            style={{ color: 'var(--muted)' }}
          >
            <span className={theme === 'dark' ? 'text-[var(--fg)]' : 'opacity-50'}>◐</span>
            <span className="hidden sm:inline">{theme === 'dark' ? 'DARK' : 'LIGHT'}</span>
          </button>
        </div>
      </div>

      {/* Hair-fine progress strip during boot */}
      <div
        className="h-[1px] w-full origin-left"
        style={{
          background: 'var(--accent)',
          transform: `scaleX(${booted ? 1 : stage / 5})`,
          transition: 'transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          opacity: booted ? 0 : 1,
        }}
      />
    </div>
  );
}
