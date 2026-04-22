import { motion } from 'framer-motion';

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10% 0px' },
};

const channels = [
  {
    label: 'Primary',
    href: 'mailto:haarvish@gmail.com',
    value: 'haarvish@gmail.com',
    note: 'Partnerships, research, press',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chevulahaarvish',
    value: 'linkedin.com/in/chevulahaarvish',
    note: 'Professional network',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/CHEVULAHAARVISH',
    value: 'github.com/CHEVULAHAARVISH',
    note: 'Code · experiments',
  },
  {
    label: 'Telephone',
    href: 'tel:+918341735406',
    value: '+91 83417 35406',
    note: 'Direct · time-sensitive',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 border-t hairline"
    >
      <div className="container-edge">
        {/* Eyebrow */}
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest2 mb-6">
          <span className="flex items-center gap-3">
            <span style={{ color: 'var(--accent)' }}>[S.05]</span>
            <span style={{ color: 'var(--fg)' }}>Contact</span>
            <span style={{ color: 'var(--faint)' }}>· Open channel</span>
          </span>
          <span
            className="flex items-center gap-2"
            style={{ color: 'var(--faint)' }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full pulse-dot"
              style={{ background: 'var(--accent)' }}
            />
            Response · within 48h
          </span>
        </div>
        <div className="rule mb-16" />

        {/* Headline */}
        <motion.h2
          {...inView}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display italic leading-[0.95] max-w-5xl"
          style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
        >
          Open a channel.
          <br />
          <span style={{ color: 'var(--muted)' }}>
            Partnerships, research collaboration,
          </span>
          <br />
          <span style={{ color: 'var(--muted)' }}>press &amp; investors.</span>
        </motion.h2>

        {/* Primary email — prominent */}
        <motion.a
          {...inView}
          transition={{ duration: 0.8, delay: 0.2 }}
          href="mailto:haarvish@gmail.com"
          className="group mt-14 inline-flex items-baseline gap-4 border-b hairline-strong pb-3 hover:border-[var(--accent)] transition-colors"
          style={{ borderColor: 'var(--line-strong)' }}
        >
          <span
            className="font-mono text-[11px] uppercase tracking-widest2"
            style={{ color: 'var(--accent)' }}
          >
            ▸
          </span>
          <span
            className="font-display italic leading-none"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              color: 'var(--fg)',
            }}
          >
            haarvish@gmail.com
          </span>
        </motion.a>

        {/* Channel grid */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t hairline-strong"
        >
          {channels.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group p-6 md:p-7 border-b hairline-strong ${
                i !== channels.length - 1 ? 'md:border-r' : ''
              } transition-colors hover:bg-[var(--card-hover)]`}
            >
              <div
                className="font-mono text-[11px] uppercase tracking-widest2 mb-4"
                style={{ color: 'var(--faint)' }}
              >
                {c.label}
              </div>
              <div
                className="font-display italic text-xl md:text-[22px] leading-tight mb-2 break-all"
                style={{ color: 'var(--fg)' }}
              >
                {c.value}
              </div>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>
                {c.note}
              </div>
              <div
                className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ color: 'var(--accent)' }}
              >
                Open
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Coordinates block */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Coord label="Station" value="Bengaluru · IN" />
          <Coord label="Latitude / Longitude" value="12.9716° N · 77.5946° E" />
          <Coord label="Timezone" value="IST (UTC +05:30)" />
        </motion.div>
      </div>
    </section>
  );
}

function Coord({ label, value }) {
  return (
    <div className="border-t hairline-strong pt-5">
      <div
        className="font-mono text-[11px] uppercase tracking-widest2 mb-1.5"
        style={{ color: 'var(--faint)' }}
      >
        {label}
      </div>
      <div className="font-mono text-[13px]" style={{ color: 'var(--fg)' }}>
        {value}
      </div>
    </div>
  );
}
