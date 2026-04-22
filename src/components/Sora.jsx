import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Spacecraft from './illustrations/Spacecraft.jsx';

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10% 0px' },
};

const EXPAND_EASE = [0.2, 0.8, 0.2, 1];
const BRIEF_MAILTO =
  'mailto:haarvish@gmail.com?subject=SORA%20research%20brief%20request&body=Name%3A%20%0AAffiliation%3A%20%0AContext%20%2F%20research%20interest%3A%20%0A%0A%28Optional%3A%20describe%20specific%20modules%20or%20results%20of%20interest%29';

export default function Sora() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section
      id="sora"
      className="relative py-20 md:py-36 border-t hairline"
    >
      <div className="container-edge relative">
        {/* Spacecraft illustration — upper right, desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 0.85, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 }}
          className="absolute right-0 xl:right-4 top-24 w-[320px] xl:w-[360px] hidden lg:block pointer-events-none z-0"
        >
          <Spacecraft />
        </motion.div>

        {/* Eyebrow row */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 text-[11px] font-mono uppercase tracking-widest2 mb-6">
          <span className="flex items-center gap-3">
            <span style={{ color: 'var(--accent)' }}>[S.02]</span>
            <span style={{ color: 'var(--fg)' }}>SORA</span>
            <span style={{ color: 'var(--faint)' }}>· Research</span>
          </span>
          <span
            className="flex items-center gap-3"
            style={{ color: 'var(--faint)' }}
          >
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
              <span style={{ color: 'var(--fg)' }}>Restricted</span>
            </span>
            <span className="opacity-40 hidden sm:inline">/</span>
            <span className="hidden sm:inline">Pending publication</span>
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

        {/* Designation */}
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

        {/* Pull-quote (philosophy, not IP) */}
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

        {/* Primary CTA + status — always visible, compact */}
        <motion.div
          {...inView}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-16"
        >
          <a
            href={BRIEF_MAILTO}
            className="group inline-flex items-baseline gap-3 border-b hairline-strong pb-2 hover:border-[var(--accent)] transition-colors max-w-full"
            style={{ borderColor: 'var(--line-strong)' }}
          >
            <span
              className="font-mono text-[11px] uppercase tracking-widest2 shrink-0"
              style={{ color: 'var(--accent)' }}
            >
              ▸
            </span>
            <span
              className="font-display italic leading-none break-words"
              style={{
                fontSize: 'clamp(1.4rem, 4vw, 3rem)',
                color: 'var(--fg)',
              }}
            >
              Request research brief{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
          <div
            className="mt-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest2 flex-wrap"
            style={{ color: 'var(--faint)' }}
          >
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full pulse-dot"
                style={{ background: 'var(--accent)' }}
              />
              <span style={{ color: 'var(--fg)' }}>Active R&D</span>
            </span>
            <span className="opacity-40">/</span>
            <span>Pending publication</span>
            <span className="opacity-40">/</span>
            <span>NDA available</span>
          </div>
        </motion.div>

        {/* Expand toggle — reveals gaps + architecture + detailed validation */}
        <motion.div
          {...inView}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10"
        >
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="group inline-flex items-center gap-3 py-3 px-5 border hairline-strong hover:bg-[var(--card-hover)] transition-colors font-mono text-[11px] uppercase tracking-widest2"
            style={{ color: 'var(--fg)' }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            <span>
              {expanded
                ? 'Collapse framework overview'
                : 'Read framework overview'}
            </span>
            <span
              className="transition-transform duration-300"
              style={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                color: 'var(--muted)',
              }}
            >
              ↓
            </span>
          </button>
        </motion.div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="sora-detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: EXPAND_EASE }}
              style={{ overflow: 'hidden' }}
            >
              {/* Dual-gap framing */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-0 border-y hairline-strong">
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
              </div>

              {/* Architecture — redacted */}
              <div className="mt-20">
                <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
                  <h3
                    className="font-display italic text-4xl md:text-5xl"
                    style={{ color: 'var(--fg)' }}
                  >
                    Architecture
                  </h3>
                  <span
                    className="flex items-center gap-2 px-2 py-0.5 border font-mono text-[11px] uppercase tracking-widest2"
                    style={{
                      color: 'var(--accent)',
                      borderColor: 'var(--accent-dim)',
                    }}
                  >
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full pulse-dot"
                      style={{ background: 'var(--accent)' }}
                    />
                    Restricted · Pending publication
                  </span>
                </div>
                <div className="rule mb-10" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t hairline-strong">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <RedactedModule
                      key={i}
                      n={String(i + 1).padStart(2, '0')}
                    />
                  ))}
                </div>

                <div className="mt-8 max-w-3xl">
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: 'var(--muted)' }}
                  >
                    Framework scope ·{' '}
                    <span style={{ color: 'var(--fg)' }}>
                      Ingestion → Anomaly detection → Root-cause isolation →
                      Prognostic forecasting → Autonomous lifecycle
                      disposition
                    </span>
                    , with a fleet-aggregation layer above.{' '}
                    <span style={{ color: 'var(--faint)' }}>
                      Specifics — models, training corpora, compute envelope,
                      and failure-mode coverage — are withheld pending
                      publication and partner review.
                    </span>
                  </p>
                </div>
              </div>

              {/* Detailed validation paragraph */}
              <div className="mt-16 border-t hairline-strong pt-10 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <div
                    className="font-mono text-[11px] uppercase tracking-widest2 mb-2"
                    style={{ color: 'var(--faint)' }}
                  >
                    Validation
                  </div>
                </div>
                <div className="md:col-span-9 max-w-3xl">
                  <p
                    className="text-[15px] md:text-base leading-relaxed"
                    style={{ color: 'var(--muted)' }}
                  >
                    Validation is underway against{' '}
                    <span style={{ color: 'var(--fg)' }}>
                      NASA SMAP and MSL
                    </span>{' '}
                    labeled-anomaly telemetry, with terrestrial generalization
                    tested against the Ferronyx robotic-fleet corpus.
                    Physics-based fault-injection simulation covers documented
                    spacecraft failure modes beyond the available labeled
                    set.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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

function RedactedModule({ n }) {
  return (
    <div className="p-6 md:p-7 border-b border-r hairline-strong relative">
      <div className="flex items-center justify-between mb-5">
        <span
          className="font-mono text-[11px] uppercase tracking-widest2"
          style={{ color: 'var(--faint)' }}
        >
          M.{n}
        </span>
        <span
          className="font-mono text-[10px] uppercase tracking-widest2 px-1.5 py-0.5 border hairline-strong"
          style={{ color: 'var(--accent)', borderColor: 'var(--accent-dim)' }}
        >
          ░ Restricted
        </span>
      </div>

      {/* Redacted title bar */}
      <div
        className="redact-bar mb-4"
        style={{
          height: '28px',
          width: '72%',
        }}
        aria-label="Redacted module name"
      />

      {/* Redacted description lines */}
      <div className="space-y-2">
        <div
          className="redact-bar"
          style={{ height: '10px', width: '100%', opacity: 0.55 }}
        />
        <div
          className="redact-bar"
          style={{ height: '10px', width: '92%', opacity: 0.55 }}
        />
        <div
          className="redact-bar"
          style={{ height: '10px', width: '68%', opacity: 0.55 }}
        />
      </div>

      {/* Redacted tag row */}
      <div className="mt-5 flex gap-1.5">
        <div
          className="redact-bar"
          style={{ height: '14px', width: '68px', opacity: 0.5 }}
        />
        <div
          className="redact-bar"
          style={{ height: '14px', width: '52px', opacity: 0.5 }}
        />
      </div>
    </div>
  );
}
