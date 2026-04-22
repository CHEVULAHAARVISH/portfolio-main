import { motion } from 'framer-motion';

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10% 0px' },
};

const roles = [
  {
    range: '2025 — Present',
    company: 'Sanas',
    role: 'Software Engineer · Platform Performance',
    location: 'Bengaluru, IN',
    bullets: [
      'Led platform-wide performance engineering for a real-time voice system under production load.',
      'Instrumented 100% of microservices with New Relic — full-stack METL observability across metrics, events, logs and traces.',
      'Ran benchmarking and infrastructure profiling to validate scalability under peak and production-like conditions.',
      'Shipped end-user-impacting fixes across application code, inter-service communication, cloud infra, and autoscaling.',
    ],
    tags: ['New Relic', 'METL', 'Microservices', 'Autoscaling'],
  },
  {
    range: '2023 — 2025',
    company: 'Temperstack',
    role: 'Founding Engineer · AI Infrastructure & Reliability',
    location: 'Bengaluru, IN',
    bullets: [
      'Built an AI-powered SRE agent on LangGraph for smart runbook execution and autonomous incident resolution.',
      'Led development of alert correlation and auto-resolution engines; reduced MTTR ≈45% across customer deployments.',
      'Designed a self-healing daemon framework for infrastructure reliability.',
      'Shipped integrations across AWS, GCP, Azure and APMs (New Relic, Datadog, AppDynamics, Dynatrace).',
      'Built auto resource mapping, alert deployment, and on-call scheduling — end-to-end observability platform.',
    ],
    tags: ['LangGraph', 'Python / Flask', 'Vector DB', 'WebSockets', 'Multi-cloud'],
  },
];

const prior = [
  {
    range: '2022 — 2023',
    place: 'AMS India',
    role: 'Computer Vision Developer',
  },
  {
    range: '2021 — 2023',
    place: 'Mirasys',
    role: 'Student Intern — Deep Vision',
  },
  {
    range: '2021',
    place: 'Youth India Foundation',
    role: 'Management Intern',
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative py-20 md:py-36 border-t hairline"
    >
      <div className="container-edge">
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 text-[11px] font-mono uppercase tracking-widest2 mb-6">
          <span className="flex items-center gap-3">
            <span style={{ color: 'var(--accent)' }}>[S.04]</span>
            <span style={{ color: 'var(--fg)' }}>Trajectory</span>
            <span style={{ color: 'var(--faint)' }}>· Prior work</span>
          </span>
          <span style={{ color: 'var(--faint)' }}>2021 — present</span>
        </div>
        <div className="rule mb-14" />

        {/* Title */}
        <motion.h2
          {...inView}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display italic leading-[0.95]"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
        >
          Trajectory
          <span style={{ color: 'var(--accent)' }}>.</span>
        </motion.h2>

        <motion.p
          {...inView}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed"
          style={{ color: 'var(--muted)' }}
        >
          Before Ferronyx, the same thesis running at different altitudes — AI
          for infrastructure reliability, then platform performance at scale,
          then observability as its own product.
        </motion.p>

        {/* Role timeline */}
        <div className="mt-20 border-t hairline-strong">
          {roles.map((r, i) => (
            <RoleEntry key={r.company} role={r} index={i} />
          ))}
        </div>

        {/* Prior roles — condensed */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <div className="md:col-span-3">
            <div
              className="font-mono text-[11px] uppercase tracking-widest2 mb-2"
              style={{ color: 'var(--faint)' }}
            >
              Earlier
            </div>
            <div
              className="font-display italic text-3xl"
              style={{ color: 'var(--fg)' }}
            >
              Before.
            </div>
          </div>
          <div className="md:col-span-9 border-t hairline-strong">
            {prior.map((p) => (
              <div
                key={p.place}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-5 border-b hairline"
              >
                <div
                  className="md:col-span-3 font-mono text-[11px] uppercase tracking-widest2 pt-0.5"
                  style={{ color: 'var(--faint)' }}
                >
                  {p.range}
                </div>
                <div
                  className="md:col-span-4 text-base"
                  style={{ color: 'var(--fg)' }}
                >
                  {p.place}
                </div>
                <div
                  className="md:col-span-5 text-sm"
                  style={{ color: 'var(--muted)' }}
                >
                  {p.role}
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-5">
              <div
                className="md:col-span-3 font-mono text-[11px] uppercase tracking-widest2 pt-0.5"
                style={{ color: 'var(--faint)' }}
              >
                2019 — 2023
              </div>
              <div
                className="md:col-span-4 text-base"
                style={{ color: 'var(--fg)' }}
              >
                Jain University
              </div>
              <div
                className="md:col-span-5 text-sm"
                style={{ color: 'var(--muted)' }}
              >
                B.Tech · Mechatronics, Robotics & Automation
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RoleEntry({ role, index }) {
  return (
    <motion.div
      {...inView}
      transition={{ duration: 0.8, delay: 0.1 + index * 0.05 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-14 border-b hairline-strong"
    >
      {/* Date */}
      <div className="md:col-span-3">
        <div
          className="font-mono text-[11px] uppercase tracking-widest2 mb-2"
          style={{ color: 'var(--accent)' }}
        >
          {role.range}
        </div>
        <div
          className="font-mono text-[11px] uppercase tracking-widest2"
          style={{ color: 'var(--faint)' }}
        >
          {role.location}
        </div>
      </div>

      {/* Body */}
      <div className="md:col-span-9">
        <div className="flex items-baseline gap-3 flex-wrap mb-2">
          <h3
            className="font-display italic text-4xl md:text-5xl leading-none"
            style={{ color: 'var(--fg)' }}
          >
            {role.company}
          </h3>
        </div>
        <div
          className="text-sm md:text-base mb-6"
          style={{ color: 'var(--muted)' }}
        >
          {role.role}
        </div>

        <ul className="space-y-3 max-w-3xl">
          {role.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
              <span
                className="mt-2 h-px w-3 shrink-0"
                style={{ background: 'var(--accent)' }}
              />
              <span style={{ color: 'var(--fg)' }}>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {role.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-widest2 px-2 py-0.5 border hairline-strong"
              style={{ color: 'var(--muted)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
