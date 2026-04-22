import { motion } from 'framer-motion';

const EASE = [0.2, 0.8, 0.2, 1];

export default function Hero() {
  return (
    <section
      id="identity"
      className="relative min-h-[92vh] pt-20 pb-28 overflow-hidden"
    >
      <BlueprintBackdrop />

      <div className="container-edge relative z-10">
        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.5 }}
          className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest2"
          style={{ color: 'var(--muted)' }}
        >
          <span className="flex items-center gap-3">
            <span style={{ color: 'var(--accent)' }}>[S.00]</span>
            <span>Identity · Engineering Brief</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="hidden sm:inline">Rev · 2.0</span>
            <span className="opacity-40">/</span>
            <span>Updated {new Date().getFullYear()}</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.6 }}
          style={{ originX: 0 }}
          className="mt-3 mb-20 h-px"
        >
          <div className="rule" />
        </motion.div>

        {/* Name — owns the space */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="font-display italic leading-[0.92] tracking-tight"
          style={{
            fontSize: 'clamp(4.5rem, 14vw, 12rem)',
          }}
        >
          <OverflowReveal delay={1.75}>
            <span>Haarvish</span>
          </OverflowReveal>
          <OverflowReveal delay={1.9} className="block pl-2 md:pl-16">
            <span>
              Chevula
              <span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </OverflowReveal>
        </motion.h1>

        {/* Thesis paragraph — the one descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 2.3 }}
          className="mt-14 md:mt-16 max-w-3xl text-lg md:text-xl leading-relaxed"
          style={{ color: 'var(--muted)' }}
        >
          I build{' '}
          <span style={{ color: 'var(--fg)' }}>runtime intelligence</span> for
          autonomous systems — the observability, reasoning, and recovery
          layers that let machines run themselves when the operator can't
          answer in time. On servers. On robots. In orbit.
        </motion.p>

        {/* Identity chips — single line, mono, not competing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[11px] uppercase tracking-widest2"
          style={{ color: 'var(--muted)' }}
        >
          <span className="flex items-center gap-2">
            <span style={{ color: 'var(--accent)' }}>/01</span>
            <span style={{ color: 'var(--fg)' }}>Founder</span>
            <span className="opacity-50">·</span>
            <span>Ferronyx</span>
          </span>
          <span className="opacity-30">|</span>
          <span className="flex items-center gap-2">
            <span style={{ color: 'var(--accent)' }}>/02</span>
            <span style={{ color: 'var(--fg)' }}>Research</span>
            <span className="opacity-50">·</span>
            <span>SORA</span>
          </span>
          <span className="opacity-30">|</span>
          <span className="flex items-center gap-2">
            <span style={{ color: 'var(--accent)' }}>/03</span>
            <span style={{ color: 'var(--fg)' }}>Engineer</span>
            <span className="opacity-50">·</span>
            <span>Sanas</span>
          </span>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-28 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2"
          style={{ color: 'var(--faint)' }}
        >
          <span
            className="inline-block h-4 w-px"
            style={{ background: 'var(--line-strong)' }}
          />
          <span>
            Scroll ·{' '}
            <span style={{ color: 'var(--muted)' }}>
              S.01 Ferronyx — S.02 SORA — S.03 Thesis — S.04 Trajectory — S.05
              Contact
            </span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function OverflowReveal({ children, delay = 0, className = '' }) {
  return (
    <span
      className={`block overflow-hidden ${className}`}
      style={{ lineHeight: 0.92 }}
    >
      <motion.span
        initial={{ y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, ease: EASE, delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function BlueprintBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* Fine dot grid — engineering paper */}
      <div className="absolute inset-0 blueprint-grid opacity-60" />

      {/* Axis lines — like a technical drawing frame */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="var(--line)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
      </svg>

      {/* Corner marks — technical drawing registration marks */}
      <CornerMark className="top-6 left-6" />
      <CornerMark className="top-6 right-6" flipX />
      <CornerMark className="bottom-6 left-6" flipY />
      <CornerMark className="bottom-6 right-6" flipX flipY />

      {/* A subtle signal-flow diagram on the right — systems drawing */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.18] hidden md:block"
        width="520"
        height="520"
        viewBox="0 0 520 520"
        fill="none"
      >
        {/* Three nodes in a triangular flow */}
        <g stroke="var(--fg)" strokeWidth="1">
          <circle cx="120" cy="180" r="28" fill="none" />
          <circle cx="400" cy="180" r="28" fill="none" />
          <circle cx="260" cy="400" r="28" fill="none" />
          <path d="M148 180 L372 180" strokeDasharray="2 4" />
          <path d="M135 205 L250 375" strokeDasharray="2 4" />
          <path d="M385 205 L270 375" strokeDasharray="2 4" />
        </g>
        {/* Accent node */}
        <circle
          cx="260"
          cy="400"
          r="4"
          fill="var(--accent)"
        />
        {/* Labels */}
        <g
          fontFamily="JetBrains Mono, monospace"
          fontSize="9"
          letterSpacing="1.5"
          fill="var(--muted)"
          textAnchor="middle"
        >
          <text x="120" y="145">CLOUD</text>
          <text x="400" y="145">FIELD</text>
          <text x="260" y="450">ORBIT</text>
        </g>
      </svg>
    </div>
  );
}

function CornerMark({ className = '', flipX, flipY }) {
  const transform = [
    flipX ? 'scaleX(-1)' : '',
    flipY ? 'scaleY(-1)' : '',
  ].join(' ');
  return (
    <svg
      className={`absolute ${className}`}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      style={{ transform }}
    >
      <path
        d="M1 8 V1 H8"
        stroke="var(--line-strong)"
        strokeWidth="1"
      />
    </svg>
  );
}
