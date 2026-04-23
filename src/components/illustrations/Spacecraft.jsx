/**
 * Satellite silhouette — stroke-only line art.
 * Subtle attitude drift (±3.5° over 22s), solar panel glint sweep,
 * and a pulsing antenna tip.
 *
 * Geometry centered around (180, 160) in a 360×320 viewBox.
 */
export default function Spacecraft({ className = '' }) {
  const drift = '-3.5 180 160; 3.5 180 160; -3.5 180 160';

  return (
    <svg
      className={className}
      viewBox="0 0 360 320"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {/* Clip paths so the glint highlight stays inside each panel */}
        <clipPath id="panel-L-clip">
          <rect x="22" y="144" width="128" height="42" />
        </clipPath>
        <clipPath id="panel-R-clip">
          <rect x="210" y="144" width="128" height="42" />
        </clipPath>

        {/* Glint gradient — soft horizontal highlight */}
        <linearGradient id="glint-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>

        {/* Earth fade — faint radial so limb doesn't overpower */}
        <radialGradient id="earth-fade" cx="20%" cy="90%" r="80%">
          <stop offset="0%" stopColor="var(--fg)" stopOpacity="0.07" />
          <stop offset="80%" stopColor="var(--fg)" stopOpacity="0.01" />
          <stop offset="100%" stopColor="var(--fg)" stopOpacity="0" />
        </radialGradient>

        {/* Umbra fill — deepens slightly toward the center of the cone */}
        <linearGradient id="umbra-fill" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="var(--fg)" stopOpacity="0.06" />
          <stop offset="60%" stopColor="var(--fg)" stopOpacity="0.03" />
          <stop offset="100%" stopColor="var(--fg)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ===== Earth limb + umbra cone (below spacecraft visually) ===== */}
      {/* Sun direction indicator — tiny arrow + label at bottom-left edge */}
      <g
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        letterSpacing="1.3"
        fill="var(--faint)"
      >
        <g stroke="var(--faint)" strokeWidth="0.8" fill="none">
          <line x1="16" y1="310" x2="4" y2="310" />
          <path d="M 8 306 L 4 310 L 8 314" />
        </g>
        <text x="20" y="313">SUN</text>
      </g>

      {/* Umbra cone — tapered dashed lines + subtle fill */}
      <g>
        <polygon
          points="0,252 148,316 360,280 360,232"
          fill="url(#umbra-fill)"
        />
        <line
          x1="0"
          y1="252"
          x2="360"
          y2="232"
          stroke="var(--fg)"
          strokeOpacity="0.3"
          strokeDasharray="2 5"
          strokeWidth="0.8"
        />
        <line
          x1="148"
          y1="316"
          x2="360"
          y2="280"
          stroke="var(--fg)"
          strokeOpacity="0.3"
          strokeDasharray="2 5"
          strokeWidth="0.8"
        />
      </g>

      {/* Earth — partial arc peeking in from bottom-left */}
      <g>
        <circle
          cx="-20"
          cy="440"
          r="200"
          fill="url(#earth-fade)"
          stroke="var(--fg)"
          strokeOpacity="0.42"
          strokeWidth="1"
        />
        {/* Atmospheric ring — very subtle halo above Earth surface */}
        <circle
          cx="-20"
          cy="440"
          r="210"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.18"
          strokeWidth="0.6"
        />
        {/* Terminator tick — day/night boundary hint */}
        <line
          x1="0"
          y1="252"
          x2="148"
          y2="316"
          stroke="var(--fg)"
          strokeOpacity="0.28"
          strokeDasharray="1 4"
          strokeWidth="0.7"
        />
        {/* Earth label */}
        <text
          x="26"
          y="298"
          fontFamily="JetBrains Mono, monospace"
          fontSize="7"
          letterSpacing="1.4"
          fill="var(--faint)"
        >
          EARTH · LIMB
        </text>
      </g>

      {/* UMBRA label — centered in cone, accent color for emphasis */}
      <g
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        letterSpacing="1.8"
      >
        <text x="255" y="263" fill="var(--accent)" fillOpacity="0.7">
          UMBRA
        </text>
      </g>

      {/* ===== Label header (now includes scenario) ===== */}
      <g
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        letterSpacing="1.6"
      >
        <text x="10" y="26" fill="var(--muted)">
          SPACECRAFT / BUS-2
        </text>
        <text x="10" y="40" fill="var(--faint)">
          MODE · AUTONOMOUS BLACKOUT
        </text>
      </g>

      {/* Scenario badge — top-right, bordered, accent-tinted */}
      <g>
        <rect
          x="222"
          y="16"
          width="128"
          height="28"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.55"
          strokeWidth="0.8"
        />
        <circle cx="233" cy="30" r="2.2" fill="var(--accent)">
          <animate
            attributeName="opacity"
            values="1; 0.35; 1"
            keyTimes="0; 0.5; 1"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="242"
          y="28"
          fontFamily="JetBrains Mono, monospace"
          fontSize="7.5"
          letterSpacing="1.5"
          fill="var(--accent)"
        >
          SCENARIO · ECLIPSE
        </text>
        <text
          x="242"
          y="39"
          fontFamily="JetBrains Mono, monospace"
          fontSize="7"
          letterSpacing="1.3"
          fill="var(--faint)"
        >
          T+00:42:30
        </text>
      </g>

      {/* Grid backdrop — very faint technical drawing frame */}
      <g stroke="var(--line)" strokeWidth="0.7">
        <line x1="10" y1="260" x2="350" y2="260" strokeDasharray="2 5" />
      </g>

      {/* Coordinate ticks — faint alt/azimuth indicators */}
      <g
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        letterSpacing="1.3"
        fill="var(--faint)"
      >
        <text x="10" y="275">REF-X</text>
        <text x="350" y="275" textAnchor="end">
          +Y
        </text>
      </g>

      {/* WHOLE SPACECRAFT — drifts slowly */}
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values={drift}
          keyTimes="0; 0.5; 1"
          dur="22s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
        />

        {/* Solar panel arms — thin connection to bus */}
        <g stroke="var(--fg)" strokeWidth="1" strokeOpacity="0.7">
          <line x1="148" y1="165" x2="152" y2="165" />
          <line x1="208" y1="165" x2="212" y2="165" />
        </g>

        {/* LEFT solar panel */}
        <g>
          <rect
            x="22"
            y="144"
            width="128"
            height="42"
            stroke="var(--fg)"
            strokeWidth="1.1"
            strokeOpacity="0.75"
            fill="var(--card)"
          />
          {/* Cell dividers — 8 cells across */}
          <g stroke="var(--fg)" strokeOpacity="0.35" strokeWidth="0.8">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <line
                key={`L${i}`}
                x1={22 + (128 / 8) * i}
                y1="144"
                x2={22 + (128 / 8) * i}
                y2="186"
              />
            ))}
            <line x1="22" y1="165" x2="150" y2="165" strokeOpacity="0.25" />
          </g>

          {/* Glint — sweeps across on 8s loop */}
          <g clipPath="url(#panel-L-clip)">
            <rect y="144" width="36" height="42" fill="url(#glint-grad)">
              <animate
                attributeName="x"
                values="-40; 22; 150"
                keyTimes="0; 0.2; 1"
                dur="8s"
                begin="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0; 0.9; 0.9; 0"
                keyTimes="0; 0.15; 0.85; 1"
                dur="8s"
                begin="3s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
        </g>

        {/* RIGHT solar panel */}
        <g>
          <rect
            x="210"
            y="144"
            width="128"
            height="42"
            stroke="var(--fg)"
            strokeWidth="1.1"
            strokeOpacity="0.75"
            fill="var(--card)"
          />
          <g stroke="var(--fg)" strokeOpacity="0.35" strokeWidth="0.8">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <line
                key={`R${i}`}
                x1={210 + (128 / 8) * i}
                y1="144"
                x2={210 + (128 / 8) * i}
                y2="186"
              />
            ))}
            <line x1="210" y1="165" x2="338" y2="165" strokeOpacity="0.25" />
          </g>

          {/* Glint on right panel offset from left */}
          <g clipPath="url(#panel-R-clip)">
            <rect y="144" width="36" height="42" fill="url(#glint-grad)">
              <animate
                attributeName="x"
                values="-40; 210; 338"
                keyTimes="0; 0.2; 1"
                dur="8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0; 0.9; 0.9; 0"
                keyTimes="0; 0.15; 0.85; 1"
                dur="8s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
        </g>

        {/* Bus body — octagonal silhouette */}
        <g>
          <polygon
            points="158,138 202,138 212,148 212,182 202,192 158,192 148,182 148,148"
            stroke="var(--fg)"
            strokeWidth="1.2"
            fill="var(--bg)"
          />
          {/* Bus detail — window/hatch + panel lines */}
          <g stroke="var(--fg)" strokeOpacity="0.45" strokeWidth="0.8">
            <rect x="170" y="152" width="20" height="10" />
            <line x1="158" y1="175" x2="202" y2="175" strokeDasharray="2 3" />
          </g>
          {/* Bus ID label */}
          <text
            x="180"
            y="172"
            fontFamily="JetBrains Mono, monospace"
            fontSize="6"
            letterSpacing="1.2"
            fill="var(--faint)"
            textAnchor="middle"
          >
            SC-01
          </text>
        </g>

        {/* Antenna — extending up from bus */}
        <g stroke="var(--fg)" strokeWidth="1" strokeOpacity="0.8">
          <line x1="180" y1="138" x2="180" y2="92" />
          {/* Dish — arc */}
          <path d="M 166 92 A 14 8 0 0 1 194 92" fill="none" />
          {/* Feed horn */}
          <line x1="180" y1="92" x2="180" y2="84" />
        </g>

        {/* Antenna tip — pulsing */}
        <circle cx="180" cy="82" r="3" fill="var(--accent)">
          <animate
            attributeName="opacity"
            values="1; 0.35; 1"
            keyTimes="0; 0.5; 1"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="180"
          cy="82"
          r="7"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.35"
          strokeWidth="0.8"
        />

        {/* Thruster at bottom */}
        <g stroke="var(--fg)" strokeWidth="1" strokeOpacity="0.7">
          <polygon
            points="172,192 188,192 192,210 168,210"
            fill="var(--card)"
          />
          {/* Exhaust ticks */}
          <line x1="174" y1="212" x2="174" y2="218" strokeOpacity="0.4" />
          <line x1="180" y1="212" x2="180" y2="222" strokeOpacity="0.4" />
          <line x1="186" y1="212" x2="186" y2="218" strokeOpacity="0.4" />
        </g>
      </g>
    </svg>
  );
}
