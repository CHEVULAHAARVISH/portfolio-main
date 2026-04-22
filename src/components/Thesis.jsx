import { motion } from 'framer-motion';

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10% 0px' },
};

const domains = [
  {
    id: 'D.01',
    name: 'Servers',
    env: 'Data center · cloud',
    stakes: 'Latency and revenue',
    constraint: 'Millisecond-level SLO under peak load',
    anchor: ['Sanas', 'Temperstack'],
  },
  {
    id: 'D.02',
    name: 'Robots',
    env: 'Field · autonomous',
    stakes: 'Uptime and physical safety',
    constraint: 'Remote triage, no field tech on hand',
    anchor: ['Ferronyx'],
    flagship: true,
  },
  {
    id: 'D.03',
    name: 'Spacecraft',
    env: 'Orbital · no human loop',
    stakes: 'Mission loss, orbital commons',
    constraint: '20-min link, sub-watt compute',
    anchor: ['SORA'],
  },
];

const pipeline = ['Ingest', 'Detect', 'Isolate', 'Forecast', 'Act'];

export default function Thesis() {
  return (
    <section
      id="thesis"
      className="relative py-28 md:py-36 border-t hairline"
    >
      <div className="container-edge">
        {/* Eyebrow */}
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest2 mb-6">
          <span className="flex items-center gap-3">
            <span style={{ color: 'var(--accent)' }}>[S.03]</span>
            <span style={{ color: 'var(--fg)' }}>Thesis</span>
            <span style={{ color: 'var(--faint)' }}>· The throughline</span>
          </span>
          <span style={{ color: 'var(--faint)' }}>
            Same shape · three environments
          </span>
        </div>
        <div className="rule mb-16" />

        {/* Large statement */}
        <motion.div
          {...inView}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-5xl"
        >
          <p
            className="font-display italic leading-[1.02]"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              color: 'var(--fg)',
            }}
          >
            Observability and{' '}
            <span style={{ color: 'var(--accent)' }}>runtime autonomy</span>{' '}
            aren't three different problems — they're the same problem in
            progressively harsher conditions.
          </p>
        </motion.div>

        {/* Three co-equal domain panels */}
        <motion.div
          {...inView}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-20 border-t border-b hairline-strong"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {domains.map((d, i) => (
              <DomainPanel key={d.id} d={d} last={i === domains.length - 1} />
            ))}
          </div>
        </motion.div>

        {/* Shared pipeline strip — the punchline */}
        <motion.div
          {...inView}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-14"
        >
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <span
              className="font-mono text-[11px] uppercase tracking-widest2"
              style={{ color: 'var(--faint)' }}
            >
              Shared runtime pipeline · runs in every environment
            </span>
            <span
              className="font-mono text-[11px] uppercase tracking-widest2"
              style={{ color: 'var(--muted)' }}
            >
              5 stages
            </span>
          </div>

          <PipelineStrip />
        </motion.div>

        {/* Closing manifesto */}
        <motion.div
          {...inView}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          <div className="md:col-span-3">
            <div
              className="font-mono text-[11px] uppercase tracking-widest2"
              style={{ color: 'var(--faint)' }}
            >
              Position
            </div>
          </div>
          <div className="md:col-span-9 max-w-3xl">
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: 'var(--muted)' }}
            >
              The engineering is the same shape at every environment:
              ingest heterogeneous telemetry, detect the anomaly, isolate
              the root cause, forecast degradation, act autonomously when a
              human can't respond in time. The difference is that each rung
              strips away another thing you were relying on — a pager, a
              field tech, a ground link.
            </p>
            <p
              className="mt-6 text-lg md:text-xl leading-relaxed"
              style={{ color: 'var(--fg)' }}
            >
              That's what I work on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DomainPanel({ d, last }) {
  return (
    <div
      className={`relative p-8 md:p-10 ${
        last ? '' : 'md:border-r border-b md:border-b-0 hairline-strong'
      }`}
      style={{
        background: d.flagship ? 'var(--card)' : 'transparent',
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <span
          className="font-mono text-[11px] uppercase tracking-widest2"
          style={{ color: d.flagship ? 'var(--accent)' : 'var(--faint)' }}
        >
          {d.id}
        </span>
        {d.flagship && (
          <span
            className="font-mono text-[10px] uppercase tracking-widest2 px-2 py-0.5 border"
            style={{ color: 'var(--accent)', borderColor: 'var(--accent-dim)' }}
          >
            Flagship
          </span>
        )}
      </div>
      <h4
        className="font-display italic text-4xl md:text-5xl leading-none mb-2"
        style={{ color: d.flagship ? 'var(--accent)' : 'var(--fg)' }}
      >
        {d.name}
      </h4>
      <div
        className="font-mono text-[11px] uppercase tracking-widest2 mb-6"
        style={{ color: 'var(--faint)' }}
      >
        {d.env}
      </div>

      <DomainFact label="Stakes" value={d.stakes} />
      <DomainFact label="Hard part" value={d.constraint} />

      <div className="mt-6 flex flex-wrap gap-1.5">
        {d.anchor.map((a) => (
          <span
            key={a}
            className="font-mono text-[10px] uppercase tracking-widest2 px-1.5 py-0.5 border hairline-strong"
            style={{ color: 'var(--fg)' }}
          >
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}

function DomainFact({ label, value }) {
  return (
    <div className="mb-4">
      <div
        className="font-mono text-[10px] uppercase tracking-widest2 mb-1"
        style={{ color: 'var(--faint)' }}
      >
        {label}
      </div>
      <div className="text-[15px] leading-snug" style={{ color: 'var(--fg)' }}>
        {value}
      </div>
    </div>
  );
}

function PipelineStrip() {
  return (
    <div
      className="relative rounded-sm border hairline-strong overflow-hidden"
      style={{ background: 'var(--card)' }}
    >
      <div className="grid grid-cols-5 divide-x hairline-strong relative z-10">
        {pipeline.map((stage, i) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="relative p-4 md:p-5 text-center"
          >
            <div
              className={`font-mono text-[10px] uppercase tracking-widest2 mb-2 stage-hi-${i}`}
              style={{ color: 'var(--faint)' }}
            >
              P.0{i + 1}
            </div>
            <div
              className="font-display italic text-xl md:text-2xl"
              style={{ color: 'var(--fg)' }}
            >
              {stage}
            </div>

            {i < pipeline.length - 1 && (
              <svg
                className="absolute right-[-7px] top-1/2 -translate-y-1/2 z-20"
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                style={{ background: 'var(--bg)' }}
              >
                <path
                  d="M1 5 H12 M9 2 L12 5 L9 8"
                  stroke="var(--accent)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            )}
          </motion.div>
        ))}
      </div>

      {/* Traveling pulse — runs left-to-right across full width */}
      <div
        className="pipeline-pulse absolute top-1/2 -translate-y-1/2 z-0 pointer-events-none"
        aria-hidden="true"
        style={{ left: '0%' }}
      >
        <div className="relative -translate-x-1/2">
          <span
            className="absolute -left-1.5 top-1/2 -translate-y-1/2 block h-[2px] w-12 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, transparent, var(--accent) 50%, transparent)',
              opacity: 0.6,
            }}
          />
          <span
            className="relative inline-block h-2 w-2 rounded-full"
            style={{
              background: 'var(--accent)',
              boxShadow: '0 0 12px var(--accent)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
