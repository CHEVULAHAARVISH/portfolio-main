import { motion } from 'framer-motion';

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10% 0px' },
};

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
            One problem at three altitudes
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
            aren't three different problems at three different altitudes —
            they're the same problem in progressively harsher conditions.
          </p>
        </motion.div>

        {/* Altitude diagram */}
        <motion.div
          {...inView}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-24"
        >
          <AltitudeDiagram />
        </motion.div>

        {/* Closing manifesto */}
        <motion.div
          {...inView}
          transition={{ duration: 0.9, delay: 0.35 }}
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
              At the server tier the stakes are{' '}
              <span style={{ color: 'var(--fg)' }}>latency and revenue</span>.
              At the robot tier they're{' '}
              <span style={{ color: 'var(--fg)' }}>
                uptime and physical safety
              </span>
              . At the spacecraft tier they're{' '}
              <span style={{ color: 'var(--fg)' }}>mission loss</span> and an
              orbital commons that cannot be cleaned up after the fact.
            </p>
            <p
              className="mt-6 text-lg md:text-xl leading-relaxed"
              style={{ color: 'var(--muted)' }}
            >
              The engineering is the same shape at every altitude: ingest
              heterogeneous telemetry, detect the anomaly, isolate the root
              cause, forecast degradation, act autonomously when a human can't
              respond in time. The difference is that each rung up strips away
              another thing you were relying on — a pager, a field tech, a
              ground link.
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

function AltitudeDiagram() {
  const tiers = [
    {
      alt: '0 km',
      name: 'Servers',
      tag: 'Cloud',
      body: 'Performance, reliability, recovery. METL observability. AI-driven incident response.',
      anchors: ['Sanas', 'Temperstack'],
    },
    {
      alt: '~ m — km',
      name: 'Robots',
      tag: 'Field',
      body: 'ROS2 telemetry, cross-node RCA, fleet-wide health. MTTR measured in minutes.',
      anchors: ['Ferronyx'],
      flagship: true,
    },
    {
      alt: '> 400 km',
      name: 'Spacecraft',
      tag: 'Orbit',
      body: 'Onboard anomaly reasoning. Autonomous disposal. Domain-locked AI under 50MB.',
      anchors: ['SORA'],
    },
  ];

  return (
    <div
      className="relative border-t border-b hairline-strong"
      aria-label="Altitude progression from servers to orbit"
    >
      {/* Background strata lines */}
      <div
        className="absolute inset-x-0 top-1/2 h-px"
        style={{ background: 'var(--line)' }}
      />
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px origin-left"
        style={{
          background:
            'linear-gradient(to right, var(--accent) 0%, var(--accent) 100%)',
          opacity: 0.3,
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 relative">
        {tiers.map((t, i) => (
          <div
            key={t.name}
            className={`relative p-8 md:p-10 ${
              i === 0 ? '' : 'md:border-l hairline-strong'
            } ${i !== tiers.length - 1 ? 'border-b md:border-b-0 hairline-strong' : ''}`}
          >
            <div
              className="font-mono text-[11px] uppercase tracking-widest2 mb-3"
              style={{ color: 'var(--faint)' }}
            >
              <span style={{ color: 'var(--accent)' }}>{t.tag}</span>{' '}
              <span className="mx-1 opacity-40">/</span> Alt {t.alt}
            </div>
            <h4
              className="font-display italic text-4xl md:text-5xl leading-none mb-5"
              style={{ color: t.flagship ? 'var(--accent)' : 'var(--fg)' }}
            >
              {t.name}
            </h4>
            <p
              className="text-sm leading-relaxed mb-5 max-w-[36ch]"
              style={{ color: 'var(--muted)' }}
            >
              {t.body}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {t.anchors.map((a) => (
                <span
                  key={a}
                  className="font-mono text-[10px] uppercase tracking-widest2 px-1.5 py-0.5 border hairline-strong"
                  style={{ color: 'var(--fg)' }}
                >
                  {a}
                </span>
              ))}
            </div>

            {/* Tier marker node on the centerline */}
            <div
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-4 w-4 rounded-full"
              style={{
                background: 'var(--bg)',
                border: `1px solid ${
                  t.flagship
                    ? 'var(--accent)'
                    : 'var(--line-strong)'
                }`,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: t.flagship ? 'var(--accent)' : 'var(--fg)',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
