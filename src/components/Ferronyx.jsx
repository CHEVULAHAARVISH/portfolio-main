import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Humanoid from './illustrations/Humanoid.jsx';

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10% 0px' },
};

export default function Ferronyx() {
  return (
    <section
      id="ferronyx"
      className="relative py-28 md:py-36 border-t hairline"
    >
      <div className="container-edge relative">
        {/* Humanoid robot illustration — upper right, desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 }}
          className="absolute right-0 xl:right-4 top-20 w-[220px] xl:w-[260px] hidden lg:block pointer-events-none z-0"
        >
          <Humanoid />
        </motion.div>

        {/* Eyebrow row */}
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest2 mb-6">
          <span className="flex items-center gap-3">
            <span style={{ color: 'var(--accent)' }}>[S.01]</span>
            <span style={{ color: 'var(--fg)' }}>Ferronyx</span>
            <span style={{ color: 'var(--faint)' }}>· Flagship</span>
          </span>
          <span style={{ color: 'var(--faint)' }}>
            2025 <span className="mx-1">—</span> present
          </span>
        </div>
        <div className="rule mb-14" />

        {/* Big title */}
        <motion.h2
          {...inView}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display italic leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(5rem, 14vw, 13rem)' }}
        >
          Ferronyx
          <span style={{ color: 'var(--accent)' }}>.</span>
        </motion.h2>

        {/* Tagline */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 max-w-4xl"
        >
          <p
            className="text-2xl md:text-[28px] leading-snug"
            style={{ color: 'var(--fg)' }}
          >
            The intelligence layer for robotics.
          </p>
          <p
            className="mt-4 text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: 'var(--muted)' }}
          >
            Real-time ROS2 observability, AI-assisted root cause analysis, and
            fleet-wide diagnostics — the platform for teams running autonomous
            machines that cannot afford to be offline.
          </p>
        </motion.div>

        {/* Metric row */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 border-y hairline-strong"
        >
          <Metric
            label="Robot MTTR"
            value="Hours → Minutes"
            sub="Diagnose and recover from fleet-wide incidents before the next shift starts."
          />
          <Metric
            label="Platform"
            value="Native ROS2"
            sub="Built on the middleware the industry actually runs. No translation layer, no lossy bridge."
            bordered
          />
          <Metric
            label="Scope"
            value="Fleet-wide"
            sub="One pane across every robot, every node, every topic — from lab bench to production floor."
            last
          />
        </motion.div>

        {/* Mock terminal + capabilities */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            {...inView}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <TerminalMock />
          </motion.div>

          <motion.div
            {...inView}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="lg:col-span-2 flex flex-col gap-0 border-t hairline-strong"
          >
            <Capability
              n="01"
              title="Real-time Observability"
              body="Live topic graphs, node health, message rates, and QoS diagnostics streamed across the fleet."
            />
            <Capability
              n="02"
              title="AI-assisted RCA"
              body="Autonomous correlation across nodes, transforms, and sensor streams — the agent tells you why the robot stopped, not just that it did."
            />
            <Capability
              n="03"
              title="Fleet Diagnostics"
              body="Cross-vehicle pattern detection. Firmware regressions and hardware-cohort drift surface at the fleet level before they surface at the robot level."
            />
            <Capability
              n="04"
              title="Anywhere Access"
              body="Debug a robot in the field from a laptop. Remote triage without a VPN dance, without a bridge, without flying an engineer out."
              last
            />
          </motion.div>
        </div>

        {/* CTA bar */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 border-t hairline-strong"
        >
          <a
            href="https://ferronyx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-8 md:py-10"
          >
            <div className="flex flex-col">
              <span
                className="font-mono text-[11px] uppercase tracking-widest2"
                style={{ color: 'var(--faint)' }}
              >
                Visit the platform
              </span>
              <span
                className="font-display italic text-4xl md:text-6xl leading-tight transition-colors"
                style={{ color: 'var(--fg)' }}
              >
                See{' '}
                <span
                  className="underline underline-offset-4 decoration-[1px]"
                  style={{ textDecorationColor: 'var(--accent-dim)' }}
                >
                  Ferronyx
                </span>
              </span>
            </div>
            <span
              className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest2"
              style={{ color: 'var(--muted)' }}
            >
              <span className="hidden md:inline">ferronyx.com</span>
              <span
                className="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-full border hairline-strong transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: 'var(--fg)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Metric({ label, value, sub, bordered, last }) {
  return (
    <div
      className={`px-0 md:px-8 py-8 ${
        bordered ? 'md:border-x hairline-strong' : ''
      } ${last ? '' : 'border-b md:border-b-0'} hairline-strong`}
    >
      <div
        className="font-mono text-[11px] uppercase tracking-widest2 mb-4"
        style={{ color: 'var(--faint)' }}
      >
        {label}
      </div>
      <div
        className="font-display italic text-4xl md:text-5xl leading-none mb-4"
        style={{ color: 'var(--fg)' }}
      >
        {value}
      </div>
      <p
        className="text-sm leading-relaxed max-w-[36ch]"
        style={{ color: 'var(--muted)' }}
      >
        {sub}
      </p>
    </div>
  );
}

function Capability({ n, title, body, last }) {
  return (
    <div className={`py-6 ${last ? '' : 'border-b hairline-strong'}`}>
      <div className="flex items-baseline gap-4">
        <span
          className="font-mono text-[11px] uppercase tracking-widest2 pt-1"
          style={{ color: 'var(--accent)' }}
        >
          /{n}
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-1.5" style={{ color: 'var(--fg)' }}>
            {title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Terminal mock (animated) ---------- */
const TERMINAL_LINES = [
  { t: '/agv_047/cmd_vel', s: 'OK', meta: 'latency 3ms · 50Hz' },
  { t: '/agv_047/lidar/scan', s: 'OK', meta: '12.1 Hz · 0 drops' },
  { t: '/agv_047/tf', s: 'OK', meta: 'chain complete · 1.2ms' },
  { t: '/agv_047/localization', s: 'OK', meta: 'drift < 0.02 m' },
  { t: '/agv_047/battery', s: 'WARN', meta: '17% · cell Δ detected' },
  { t: '/agv_047/camera_front', s: 'OK', meta: '30 fps · hw-enc' },
];

function TerminalMock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <div
      ref={ref}
      className="relative rounded-sm border hairline-strong overflow-hidden"
      style={{ background: 'var(--card)' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b hairline-strong"
        style={{ background: 'var(--card-hover)' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full pulse-dot"
            style={{ background: 'var(--accent)' }}
          />
          <span
            className="font-mono text-[11px] uppercase tracking-widest2"
            style={{ color: 'var(--muted)' }}
          >
            Fleet · live
          </span>
        </div>
        <span
          className="font-mono text-[10px] uppercase tracking-widest2"
          style={{ color: 'var(--faint)' }}
        >
          ferronyx / runtime
        </span>
      </div>

      {/* Topic rows — streamed in */}
      <div className="font-mono text-[12px] md:text-[13px] px-4 py-4 min-h-[320px]">
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.18, delayChildren: 0.2 },
            },
          }}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {TERMINAL_LINES.map((l, i) => (
            <TerminalRow key={i} line={l} />
          ))}
        </motion.div>

        {/* Separator + AI-RCA — appears after rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2 + TERMINAL_LINES.length * 0.18 + 0.25,
          }}
        >
          <div
            className="my-3"
            style={{ borderTop: '1px dashed var(--line-strong)' }}
          />

          <div className="flex items-start gap-3">
            <span
              className="font-mono text-[10px] uppercase tracking-widest2 mt-0.5 px-1.5 py-0.5"
              style={{
                background: 'var(--accent-dim)',
                color: 'var(--accent)',
              }}
            >
              AI-RCA
            </span>
            <div>
              <TypeLine
                trigger={isInView}
                delay={0.2 + TERMINAL_LINES.length * 0.18 + 0.45}
              >
                <div style={{ color: 'var(--fg)' }}>
                  Root cause{' '}
                  <span style={{ color: 'var(--accent)' }}>battery</span>{' '}
                  cell-3 degradation (confidence 0.92).
                </div>
              </TypeLine>
              <TypeLine
                trigger={isInView}
                delay={0.2 + TERMINAL_LINES.length * 0.18 + 0.95}
              >
                <div style={{ color: 'var(--muted)' }}>
                  Correlation across /battery/voltage, /temp/core and
                  discharge curve since T−00:17.
                </div>
              </TypeLine>
              <TypeLine
                trigger={isInView}
                delay={0.2 + TERMINAL_LINES.length * 0.18 + 1.45}
              >
                <div className="mt-2 flex items-center gap-2">
                  <span style={{ color: 'var(--accent)' }}>▸</span>
                  <span>
                    Suggest: isolate AGV-047, dispatch replacement pack,
                    schedule teardown.
                  </span>
                  <span className="blink" style={{ color: 'var(--accent)' }}>
                    ▮
                  </span>
                </div>
              </TypeLine>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TerminalRow({ line }) {
  const isWarn = line.s !== 'OK';
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -6 },
        show: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
      className="grid grid-cols-[auto_1fr_auto] gap-4 py-1.5 items-baseline"
      style={{ color: 'var(--fg)' }}
    >
      {isWarn ? (
        <motion.span
          initial={{ background: 'var(--accent-dim)' }}
          animate={{ background: 'rgba(0,0,0,0)' }}
          transition={{ duration: 1.6, delay: 0.05 }}
          className="px-1 -mx-1"
          style={{ color: 'var(--accent)' }}
        >
          [{line.s}]
        </motion.span>
      ) : (
        <span style={{ color: 'var(--muted)' }}>[{line.s}]</span>
      )}
      <span className="truncate">{line.t}</span>
      <span
        style={{ color: 'var(--faint)' }}
        className="hidden sm:inline"
      >
        {line.meta}
      </span>
    </motion.div>
  );
}

function TypeLine({ children, trigger, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 3 }}
      animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 3 }}
      transition={{ duration: 0.35, delay }}
    >
      {children}
    </motion.div>
  );
}
