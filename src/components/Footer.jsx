export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t hairline" style={{ color: 'var(--muted)' }}>
      <div className="container-edge py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[11px] uppercase tracking-widest2">
          <div className="flex items-center gap-3 flex-wrap">
            <span style={{ color: 'var(--fg)' }}>© {year} Haarvish Chevula</span>
            <span className="opacity-40">/</span>
            <span>All signals reserved</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span>Built with intent · Vite · React · Tailwind</span>
            <span className="opacity-40">/</span>
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full pulse-dot"
                style={{ background: 'var(--accent)' }}
              />
              EOF
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
