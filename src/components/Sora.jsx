import { motion } from 'framer-motion';

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10% 0px' },
};

const modules = [
  {
    id: 'M.01',
    name: 'Telemetry Ingestion',
    desc: 'Schema-agnostic pipeline that normalizes heterogeneous spacecraft streams into a unified time-series with orbital context appended as first-class features.',
    tags: ['EPS · ADCS · Thermal · OBC', '<100ms onboard'],
  },
  {
    id: 'M.02',
    name: 'Hybrid Anomaly Detection',
    desc: 'Statistical baselines + autoencoder reconstruction error + temporal correlation graph with causal priors from subsystem engineering.',
    tags: ['CUSUM / z-score', 'Autoencoder'],
  },
  {
    id: 'M.03',
    name: 'Fault Isolation',
    desc: 'Causal inference module that traces anomaly propagation across subsystems. Root-cause attribution, not full-system safemode.',
    tags: ['Dependency graph', 'Root-cause'],
  },
  {
    id: 'M.04',
    name: 'Prognostic Forecasting',
    desc: 'LSTM-based RUL prediction over documented degradation trajectories. Feeds directly into the terminal-action trigger of ALD.',
    tags: ['LSTM', 'Remaining Useful Life'],
  },
  {
    id: 'M.05',
    name: 'Autonomous Lifecycle Disposition',
    desc: 'Closes the loop from prognostic to terminal action: propulsive deorbit in LEO, solar-sail redirect in MEO/GEO. Pre-authorized, executed onboard.',
    tags: ['LEO deorbit', 'MEO/GEO sail'],
    flagship: true,
  },
  {
    id: 'M.06',
    name: 'Fleet Intelligence',
    desc: 'Anonymized fleet-wide anomaly aggregation. Cross-vehicle learning without raw telemetry uplink. Staggers ALD sequencing across a constellation.',
    tags: ['Constellation', 'Cross-vehicle'],
  },
];

const comparison = [
  {
    row: 'Telemetry anomaly depth',
    general: 'Surface statistical pattern',
    sora: 'Physics-grounded subsystem reasoning',
  },
  {
    row: 'Fault causal chain',
    general: 'Plausible but ungrounded',
    sora: 'Validated against mission FDIR logic',
  },
  {
    row: 'Onboard deployability',
    general: '70B+ params — infeasible',
    sora: '<7B quantized — edge deployable',
  },
  {
    row: 'Hallucination risk',
    general: 'High — no domain grounding',
    sora: 'Low — domain-locked inference',
  },
  {
    row: 'Training data',
    general: 'General web corpus',
    sora: 'NASA telemetry + mission anomaly DBs',
  },
  {
    row: 'Orbital context awareness',
    general: 'None',
    sora: 'Eclipse, radiation belts, solar flux',
  },
];

export default function Sora() {
  return (
    <section
      id="sora"
      className="relative py-28 md:py-36 border-t hairline"
    >
      <div className="container-edge">
        {/* Eyebrow row */}
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest2 mb-6">
          <span className="flex items-center gap-3">
            <span style={{ color: 'var(--accent)' }}>[S.02]</span>
            <span style={{ color: 'var(--fg)' }}>SORA</span>
            <span style={{ color: 'var(--faint)' }}>· Research</span>
          </span>
          <span style={{ color: 'var(--faint)' }}>
            Status · <span style={{ color: 'var(--fg)' }}>Active R&D</span>
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
          SORA
          <span style={{ color: 'var(--accent)' }}>.</span>
        </motion.h2>

        {/* Expanded name */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 max-w-5xl"
        >
          <div
            className="font-mono text-[11px] uppercase tracking-widest2 mb-3"
            style={{ color: 'var(--faint)' }}
          >
            Full designation
          </div>
          <p
            className="text-2xl md:text-[30px] leading-snug"
            style={{ color: 'var(--fg)' }}
          >
            Spacecraft Observability and Runtime Autonomy — an AI-native,
            domain-specialized health management and lifecycle autonomy
            framework for space systems.
          </p>
        </motion.div>

        {/* Pull-quote abstract */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-1">
            <div
              className="font-display italic text-6xl leading-none"
              style={{ color: 'var(--accent)' }}
            >
              “
            </div>
          </div>
          <p
            className="lg:col-span-11 font-display italic text-2xl md:text-3xl leading-snug max-w-5xl"
            style={{ color: 'var(--fg)' }}
          >
            Space fault management requires AI that knows spacecraft deeply,
            not AI that knows everything shallowly.
          </p>
        </motion.div>

        {/* Dual-gap framing */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-0 border-y hairline-strong"
        >
          <Gap
            n="G.01"
            title="The limits of static FDIR"
            body="Modern spacecraft health management is rule-based — hand-authored fault trees and threshold checks. Brittle across novel fault modes. Unable to correlate across subsystems. At 20-minute deep-space latency, undetected cascading failure means mission loss."
          />
          <Gap
            n="G.02"
            title="The end-of-life gap"
            bordered
            body="14,000+ active satellites, most without onboard end-of-life actuation intelligence. A 10,000-vehicle constellation without self-disposal needs 10,000 dedicated removal spacecraft — compounding the debris problem during the removal itself."
          />
        </motion.div>

        {/* Architecture — 6 modules */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-28"
        >
          <div className="flex items-end justify-between mb-6">
            <h3
              className="font-display italic text-4xl md:text-5xl"
              style={{ color: 'var(--fg)' }}
            >
              Architecture
            </h3>
            <span
              className="font-mono text-[11px] uppercase tracking-widest2"
              style={{ color: 'var(--faint)' }}
            >
              06 Modules · Onboard
            </span>
          </div>
          <div className="rule mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t hairline-strong">
            {modules.map((m) => (
              <ModuleCard key={m.id} m={m} />
            ))}
          </div>
        </motion.div>

        {/* Constraint badges */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 flex flex-wrap gap-2"
        >
          {[
            '< 50 MB RAM',
            '< 2 W average',
            '< 7B params quantized',
            'INT8 / INT4',
            'Radiation-tolerant edge',
            'Delay-tolerant',
            'Pre-authorized autonomy',
          ].map((c) => (
            <span
              key={c}
              className="px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest2 border hairline-strong"
              style={{ color: 'var(--muted)' }}
            >
              {c}
            </span>
          ))}
        </motion.div>

        {/* Comparison table — General AI vs SORA */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-28"
        >
          <div className="flex items-end justify-between mb-6">
            <h3
              className="font-display italic text-4xl md:text-5xl"
              style={{ color: 'var(--fg)' }}
            >
              Why not general AI
            </h3>
            <span
              className="font-mono text-[11px] uppercase tracking-widest2"
              style={{ color: 'var(--faint)' }}
            >
              Capability Matrix
            </span>
          </div>
          <div className="rule mb-6" />

          <div
            className="grid grid-cols-[1fr_1fr_1fr] text-sm md:text-[15px] border-t hairline-strong"
          >
            {/* Header */}
            <div
              className="p-4 md:p-5 border-b hairline-strong font-mono text-[11px] uppercase tracking-widest2"
              style={{ color: 'var(--muted)' }}
            >
              Capability
            </div>
            <div
              className="p-4 md:p-5 border-b border-l hairline-strong font-mono text-[11px] uppercase tracking-widest2"
              style={{ color: 'var(--muted)' }}
            >
              General AI (GPT-4 class)
            </div>
            <div
              className="p-4 md:p-5 border-b border-l hairline-strong font-mono text-[11px] uppercase tracking-widest2 flex items-center gap-2"
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
              <span style={{ color: 'var(--accent)' }}>SORA</span>
              <span style={{ color: 'var(--faint)' }}>· domain-locked</span>
            </div>

            {comparison.map((r, i) => (
              <RowFragment
                key={r.row}
                r={r}
                last={i === comparison.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Gap({ n, title, body, bordered }) {
  return (
    <div
      className={`p-8 md:p-10 ${bordered ? 'md:border-l hairline-strong' : ''}`}
    >
      <div
        className="font-mono text-[11px] uppercase tracking-widest2 mb-4 flex items-center gap-3"
      >
        <span style={{ color: 'var(--accent)' }}>[{n}]</span>
        <span style={{ color: 'var(--muted)' }}>The gap</span>
      </div>
      <h3
        className="font-display italic text-3xl md:text-4xl leading-tight mb-4"
        style={{ color: 'var(--fg)' }}
      >
        {title}
      </h3>
      <p
        className="text-[15px] leading-relaxed max-w-prose"
        style={{ color: 'var(--muted)' }}
      >
        {body}
      </p>
    </div>
  );
}

function ModuleCard({ m }) {
  return (
    <div
      className="p-6 md:p-7 border-b border-r hairline-strong relative group"
      style={{
        background: m.flagship ? 'var(--card)' : 'transparent',
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <span
          className="font-mono text-[11px] uppercase tracking-widest2"
          style={{ color: m.flagship ? 'var(--accent)' : 'var(--faint)' }}
        >
          {m.id}
        </span>
        {m.flagship && (
          <span
            className="font-mono text-[10px] uppercase tracking-widest2 px-2 py-0.5 border hairline-strong"
            style={{ color: 'var(--accent)', borderColor: 'var(--accent-dim)' }}
          >
            Flagship
          </span>
        )}
      </div>
      <h4
        className="font-display italic text-[26px] md:text-[28px] leading-tight mb-3"
        style={{ color: 'var(--fg)' }}
      >
        {m.name}
      </h4>
      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: 'var(--muted)' }}
      >
        {m.desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {m.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] uppercase tracking-widest2 px-1.5 py-0.5"
            style={{
              color: 'var(--faint)',
              background: 'var(--card-hover)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function RowFragment({ r, last }) {
  const cellBase = `p-4 md:p-5 text-[14px] md:text-[15px] leading-relaxed ${
    last ? '' : 'border-b hairline-strong'
  }`;
  return (
    <>
      <div
        className={`${cellBase} font-medium`}
        style={{ color: 'var(--fg)' }}
      >
        {r.row}
      </div>
      <div
        className={`${cellBase} border-l hairline-strong`}
        style={{ color: 'var(--muted)' }}
      >
        {r.general}
      </div>
      <div
        className={`${cellBase} border-l hairline-strong`}
        style={{ color: 'var(--fg)' }}
      >
        <span style={{ color: 'var(--accent)' }}>▸</span>{' '}
        {r.sora}
      </div>
    </>
  );
}
