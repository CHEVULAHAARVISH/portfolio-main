import { motion } from 'framer-motion';

const EASE = [0.2, 0.8, 0.2, 1];

export default function Hero() {
  return (
    <section
      id="identity"
      className="relative min-h-[92vh] pt-20 pb-28 overflow-hidden"
    >
      {/* Ambient orbital SVG */}
      <OrbitalBackdrop />

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
            <span>Identity</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="hidden sm:inline">Portfolio · v2.0</span>
            <span className="opacity-40">/</span>
            <span>Est. 2026</span>
          </span>
        </motion.div>

        {/* Hairline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.6 }}
          style={{ originX: 0 }}
          className="mt-3 mb-16 h-px"
        >
          <div className="rule" />
        </motion.div>

        {/* Name block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="font-display italic leading-[0.92] tracking-tight"
              style={{
                fontSize: 'clamp(4.2rem, 13vw, 11rem)',
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
          </div>

          {/* Right side meta block */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 2.3 }}
            className="md:max-w-[320px] md:pb-3 md:text-right"
          >
            <div
              className="font-mono text-[11px] uppercase tracking-widest2 mb-3"
              style={{ color: 'var(--faint)' }}
            >
              Status / <span style={{ color: 'var(--fg)' }}>Operational</span>
            </div>
            <div
              className="font-display italic text-2xl md:text-[28px] leading-tight"
              style={{ color: 'var(--fg)' }}
            >
              Engineering the
              <br />
              intelligence layer
              <br />
              for autonomous
              <br />
              <span style={{ color: 'var(--accent)' }}>systems</span>.
            </div>
          </motion.div>
        </div>

        {/* Thesis paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 2.5 }}
          className="mt-16 md:mt-20 max-w-3xl text-lg md:text-xl leading-relaxed"
          style={{ color: 'var(--muted)' }}
        >
          Autonomous observability and runtime autonomy — on the ground, in the
          field, and in orbit. I build the systems that let machines reason
          about their own health, isolate their own faults, and decide their own
          end-of-life without waiting for a human on the other end of a
          20-minute link.
        </motion.p>

        {/* Role trio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 border-t hairline-strong"
        >
          <RoleCard
            index="01"
            role="Founder"
            target="Ferronyx"
            desc="The intelligence layer for robotics. ROS2 observability, AI-assisted root cause, fleet-wide diagnostics."
          />
          <RoleCard
            index="02"
            role="Researcher"
            target="SORA"
            desc="Spacecraft Observability and Runtime Autonomy. Domain-specialized AI for onboard fault reasoning and autonomous disposal."
          />
          <RoleCard
            index="03"
            role="Engineer"
            target="Sanas"
            last
            desc="Platform-wide performance engineering. Full-stack observability across METL: Metrics · Events · Logs · Traces."
          />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.3 }}
          className="mt-24 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2"
          style={{ color: 'var(--faint)' }}
        >
          <span
            className="inline-block h-4 w-px"
            style={{ background: 'var(--line-strong)' }}
          />
          <span>Scroll · S.01 Ferronyx</span>
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

function RoleCard({ index, role, target, desc, last }) {
  return (
    <div
      className={`group px-0 md:px-6 py-6 md:py-7 border-b md:border-b-0 hairline-strong ${
        last ? '' : 'md:border-r'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-mono text-[11px] uppercase tracking-widest2"
          style={{ color: 'var(--accent)' }}
        >
          [{index}]
        </span>
        <span
          className="font-mono text-[11px] uppercase tracking-widest2"
          style={{ color: 'var(--muted)' }}
        >
          {role}
        </span>
      </div>
      <div className="font-display italic text-3xl md:text-[34px] leading-none mb-3">
        {target}
      </div>
      <p
        className="text-sm leading-relaxed max-w-[36ch]"
        style={{ color: 'var(--muted)' }}
      >
        {desc}
      </p>
    </div>
  );
}

function OrbitalBackdrop() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      {/* Outer orbital arc */}
      <svg
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 orbit-slow"
        width="1400"
        height="1400"
        viewBox="0 0 1400 1400"
        fill="none"
      >
        <ellipse
          cx="700"
          cy="700"
          rx="680"
          ry="320"
          stroke="var(--line-strong)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
        {/* Satellite on the orbit */}
        <g transform="translate(1380 700)">
          <circle r="3" fill="var(--accent)" />
          <circle r="9" fill="none" stroke="var(--accent)" strokeOpacity="0.4" />
        </g>
      </svg>

      {/* Inner orbital arc */}
      <svg
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 orbit-fast"
        width="900"
        height="900"
        viewBox="0 0 900 900"
        fill="none"
      >
        <ellipse
          cx="450"
          cy="450"
          rx="430"
          ry="180"
          stroke="var(--line)"
          strokeWidth="1"
        />
        <g transform="translate(20 450)">
          <circle r="2.5" fill="var(--fg)" opacity="0.6" />
        </g>
      </svg>

      {/* Faint tick marks at cardinal points (decorative) */}
      <svg
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
        width="1400"
        height="1400"
        viewBox="0 0 1400 1400"
      >
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const x1 = 700 + Math.cos(rad) * 680;
          const y1 = 700 + Math.sin(rad) * 320;
          const x2 = 700 + Math.cos(rad) * 690;
          const y2 = 700 + Math.sin(rad) * 325;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--line-strong)"
              strokeWidth="1"
            />
          );
        })}
      </svg>
    </div>
  );
}
