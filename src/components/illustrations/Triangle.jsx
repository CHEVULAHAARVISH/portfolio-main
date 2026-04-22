export default function Triangle({ className = '' }) {
  const V = {
    top: { x: 220, y: 60 },
    bl: { x: 40, y: 340 },
    br: { x: 400, y: 340 },
  };

  const centroid = {
    x: (V.top.x + V.bl.x + V.br.x) / 3,
    y: (V.top.y + V.bl.y + V.br.y) / 3,
  };

  const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
  const m_top_bl = mid(V.top, V.bl);
  const m_top_br = mid(V.top, V.br);
  const m_bl_br = mid(V.bl, V.br);

  return (
    <svg
      className={className}
      viewBox="0 0 440 420"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer triangle */}
      <polygon
        points={`${V.top.x},${V.top.y} ${V.bl.x},${V.bl.y} ${V.br.x},${V.br.y}`}
        stroke="var(--line-strong)"
        strokeWidth="1"
        strokeDasharray="2 4"
      />

      {/* Medians to centroid (interior tick construction) */}
      <g stroke="var(--line)" strokeWidth="0.8" strokeDasharray="1 5">
        <line x1={V.top.x} y1={V.top.y} x2={m_bl_br.x} y2={m_bl_br.y} />
        <line x1={V.bl.x} y1={V.bl.y} x2={m_top_br.x} y2={m_top_br.y} />
        <line x1={V.br.x} y1={V.br.y} x2={m_top_bl.x} y2={m_top_bl.y} />
      </g>

      {/* Centroid mark */}
      <g>
        <line
          x1={centroid.x - 5}
          y1={centroid.y}
          x2={centroid.x + 5}
          y2={centroid.y}
          stroke="var(--line-strong)"
          strokeWidth="1"
        />
        <line
          x1={centroid.x}
          y1={centroid.y - 5}
          x2={centroid.x}
          y2={centroid.y + 5}
          stroke="var(--line-strong)"
          strokeWidth="1"
        />
      </g>

      {/* Edge midpoint ticks */}
      <g fill="var(--line-strong)">
        <circle cx={m_top_bl.x} cy={m_top_bl.y} r="1.5" />
        <circle cx={m_top_br.x} cy={m_top_br.y} r="1.5" />
        <circle cx={m_bl_br.x} cy={m_bl_br.y} r="1.5" />
      </g>

      {/* Vertices */}
      {/* Top — ROBOTS (flagship, accent) — expanding halo + strong pulse */}
      <g>
        <circle
          cx={V.top.x}
          cy={V.top.y}
          r="9"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeOpacity="0.45"
        >
          <animate
            attributeName="r"
            values="9; 16; 9"
            keyTimes="0; 0.5; 1"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.55; 0; 0.55"
            keyTimes="0; 0.5; 1"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={V.top.x} cy={V.top.y} r="3.5" fill="var(--accent)">
          <animate
            attributeName="opacity"
            values="1; 0.55; 1"
            keyTimes="0; 0.5; 1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Bottom-left — SERVERS */}
      <g>
        <circle
          cx={V.bl.x}
          cy={V.bl.y}
          r="7"
          fill="none"
          stroke="var(--fg)"
          strokeOpacity="0.4"
          strokeWidth="1"
        >
          <animate
            attributeName="r"
            values="7; 11; 7"
            keyTimes="0; 0.5; 1"
            dur="3.6s"
            begin="0.8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.5; 0; 0.5"
            keyTimes="0; 0.5; 1"
            dur="3.6s"
            begin="0.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx={V.bl.x}
          cy={V.bl.y}
          r="2.5"
          fill="var(--fg)"
          fillOpacity="0.55"
        >
          <animate
            attributeName="fill-opacity"
            values="0.85; 0.35; 0.85"
            keyTimes="0; 0.5; 1"
            dur="3.2s"
            begin="0.4s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Bottom-right — SPACECRAFT */}
      <g>
        <circle
          cx={V.br.x}
          cy={V.br.y}
          r="7"
          fill="none"
          stroke="var(--fg)"
          strokeOpacity="0.4"
          strokeWidth="1"
        >
          <animate
            attributeName="r"
            values="7; 11; 7"
            keyTimes="0; 0.5; 1"
            dur="3.6s"
            begin="1.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.5; 0; 0.5"
            keyTimes="0; 0.5; 1"
            dur="3.6s"
            begin="1.6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx={V.br.x}
          cy={V.br.y}
          r="2.5"
          fill="var(--fg)"
          fillOpacity="0.55"
        >
          <animate
            attributeName="fill-opacity"
            values="0.85; 0.35; 0.85"
            keyTimes="0; 0.5; 1"
            dur="3.2s"
            begin="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Traveling signal dots — flow around the triangle */}
      {/* Flow direction: ROBOTS → SERVERS → SPACECRAFT → ROBOTS (clockwise) */}
      <g>
        {/* Dot 1: ROBOTS → SERVERS (left edge) */}
        <circle r="3.2" fill="var(--accent)">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            path={`M ${V.top.x} ${V.top.y} L ${V.bl.x} ${V.bl.y}`}
          />
          <animate
            attributeName="opacity"
            values="0; 1; 1; 0"
            keyTimes="0; 0.05; 0.95; 1"
            dur="9s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Dot 2: SERVERS → SPACECRAFT (bottom edge) */}
        <circle r="3.2" fill="var(--accent)">
          <animateMotion
            dur="9s"
            begin="3s"
            repeatCount="indefinite"
            path={`M ${V.bl.x} ${V.bl.y} L ${V.br.x} ${V.br.y}`}
          />
          <animate
            attributeName="opacity"
            values="0; 1; 1; 0"
            keyTimes="0; 0.05; 0.95; 1"
            dur="9s"
            begin="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Dot 3: SPACECRAFT → ROBOTS (right edge) */}
        <circle r="3.2" fill="var(--accent)">
          <animateMotion
            dur="9s"
            begin="6s"
            repeatCount="indefinite"
            path={`M ${V.br.x} ${V.br.y} L ${V.top.x} ${V.top.y}`}
          />
          <animate
            attributeName="opacity"
            values="0; 1; 1; 0"
            keyTimes="0; 0.05; 0.95; 1"
            dur="9s"
            begin="6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Trailing glow behind each dot (optional, subtle) */}
        <circle r="8" fill="var(--accent)" fillOpacity="0.18">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            path={`M ${V.top.x} ${V.top.y} L ${V.bl.x} ${V.bl.y}`}
          />
          <animate
            attributeName="fill-opacity"
            values="0; 0.22; 0"
            keyTimes="0; 0.5; 1"
            dur="9s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="8" fill="var(--accent)" fillOpacity="0.18">
          <animateMotion
            dur="9s"
            begin="3s"
            repeatCount="indefinite"
            path={`M ${V.bl.x} ${V.bl.y} L ${V.br.x} ${V.br.y}`}
          />
          <animate
            attributeName="fill-opacity"
            values="0; 0.22; 0"
            keyTimes="0; 0.5; 1"
            dur="9s"
            begin="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="8" fill="var(--accent)" fillOpacity="0.18">
          <animateMotion
            dur="9s"
            begin="6s"
            repeatCount="indefinite"
            path={`M ${V.br.x} ${V.br.y} L ${V.top.x} ${V.top.y}`}
          />
          <animate
            attributeName="fill-opacity"
            values="0; 0.22; 0"
            keyTimes="0; 0.5; 1"
            dur="9s"
            begin="6s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Vertex labels (mono, uppercase, letter-spaced) */}
      <g
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        letterSpacing="1.6"
      >
        {/* ROBOTS */}
        <text
          x={V.top.x}
          y={V.top.y - 18}
          textAnchor="middle"
          fill="var(--accent)"
        >
          V.01 · ROBOTS
        </text>
        {/* SERVERS */}
        <text
          x={V.bl.x - 4}
          y={V.bl.y + 24}
          textAnchor="start"
          fill="var(--muted)"
        >
          V.02 · SERVERS
        </text>
        {/* SPACECRAFT */}
        <text
          x={V.br.x + 4}
          y={V.br.y + 24}
          textAnchor="end"
          fill="var(--muted)"
        >
          V.03 · SPACECRAFT
        </text>
      </g>

      {/* Small angle arc at top vertex — engineering drawing flourish */}
      <path
        d={`M ${V.top.x - 22} ${V.top.y + 28} A 28 28 0 0 0 ${V.top.x + 22} ${V.top.y + 28}`}
        stroke="var(--line-strong)"
        strokeWidth="0.8"
        fill="none"
      />

      {/* Centroid label */}
      <text
        x={centroid.x}
        y={centroid.y + 22}
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        letterSpacing="1.4"
        fill="var(--faint)"
      >
        CENTROID
      </text>
    </svg>
  );
}
