/**
 * Industrial 3-joint articulated arm — stroke-only line art.
 * Shoulder + elbow sweep on a slow idle loop. End-effector pulses.
 *
 * Geometry (SVG user units):
 *   Base plate:   y = 280–310
 *   Base pillar:  around (120, 250)
 *   Shoulder pt:  (120, 240)
 *   Elbow pt:     (120, 140)    — before any rotation
 *   Tool pt:      (180, 80)     — at rest
 */
export default function RoboticArm({ className = '' }) {
  // Animation values (degrees) for joint sweeps
  const shoulderSweep = '-6 120 240; 6 120 240; -6 120 240';
  const elbowSweep = '-9 120 140; 9 120 140; -9 120 140';

  return (
    <svg
      className={className}
      viewBox="0 0 240 360"
      fill="none"
      aria-hidden="true"
    >
      {/* Ground line + mount bolts (decorative engineering flourish) */}
      <g stroke="var(--line)" strokeWidth="0.8">
        <line x1="10" y1="320" x2="230" y2="320" strokeDasharray="2 4" />
      </g>

      {/* Base plate */}
      <g stroke="var(--fg)" strokeWidth="1.2" strokeOpacity="0.7">
        <rect x="55" y="292" width="130" height="18" rx="1" />
        <line x1="70" y1="310" x2="70" y2="316" />
        <line x1="170" y1="310" x2="170" y2="316" />
      </g>

      {/* Base pillar */}
      <g stroke="var(--fg)" strokeWidth="1.2" strokeOpacity="0.7">
        <rect x="104" y="250" width="32" height="42" />
        <line x1="112" y1="258" x2="128" y2="258" strokeOpacity="0.35" />
        <line x1="112" y1="266" x2="128" y2="266" strokeOpacity="0.35" />
      </g>

      {/* Datum ticks at base — engineering feel */}
      <g
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        letterSpacing="1.4"
        fill="var(--faint)"
      >
        <text x="40" y="318" textAnchor="end">
          J0
        </text>
      </g>

      {/* SHOULDER GROUP — rotates around (120, 240) */}
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values={shoulderSweep}
          keyTimes="0; 0.5; 1"
          dur="9s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
        />

        {/* Shoulder joint */}
        <circle
          cx="120"
          cy="240"
          r="11"
          fill="var(--bg)"
          stroke="var(--fg)"
          strokeWidth="1.2"
          strokeOpacity="0.8"
        />
        <circle
          cx="120"
          cy="240"
          r="4"
          fill="var(--fg)"
          fillOpacity="0.7"
        />

        {/* Upper arm — two parallel lines for depth */}
        <g stroke="var(--fg)" strokeWidth="1.2" strokeOpacity="0.85">
          <line x1="112" y1="240" x2="112" y2="140" />
          <line x1="128" y1="240" x2="128" y2="140" />
          <line x1="112" y1="192" x2="128" y2="192" strokeOpacity="0.4" />
        </g>

        {/* Datum label for J1 */}
        <text
          x="140"
          y="244"
          fontFamily="JetBrains Mono, monospace"
          fontSize="7"
          letterSpacing="1.4"
          fill="var(--faint)"
        >
          J1
        </text>

        {/* ELBOW GROUP — rotates around (120, 140) */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            values={elbowSweep}
            keyTimes="0; 0.5; 1"
            dur="9s"
            begin="1.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />

          {/* Elbow joint */}
          <circle
            cx="120"
            cy="140"
            r="9"
            fill="var(--bg)"
            stroke="var(--fg)"
            strokeWidth="1.2"
            strokeOpacity="0.8"
          />
          <circle
            cx="120"
            cy="140"
            r="3"
            fill="var(--fg)"
            fillOpacity="0.7"
          />

          {/* Forearm — rising to upper-right */}
          <g stroke="var(--fg)" strokeWidth="1.2" strokeOpacity="0.85">
            <line x1="125" y1="133" x2="185" y2="74" />
            <line x1="115" y1="147" x2="175" y2="88" />
            <line
              x1="150"
              y1="115"
              x2="160"
              y2="105"
              strokeOpacity="0.4"
            />
          </g>

          {/* Datum label for J2 */}
          <text
            x="100"
            y="144"
            fontFamily="JetBrains Mono, monospace"
            fontSize="7"
            letterSpacing="1.4"
            fill="var(--faint)"
            textAnchor="end"
          >
            J2
          </text>

          {/* Wrist + tool head */}
          <g>
            {/* Wrist joint */}
            <circle
              cx="180"
              cy="81"
              r="5"
              fill="var(--bg)"
              stroke="var(--fg)"
              strokeWidth="1"
              strokeOpacity="0.75"
            />

            {/* Tool head — small gripper silhouette */}
            <g stroke="var(--fg)" strokeWidth="1.1" strokeOpacity="0.85">
              <line x1="182" y1="76" x2="196" y2="62" />
              <line x1="185" y1="83" x2="201" y2="68" />
              <line x1="196" y1="62" x2="201" y2="68" />
            </g>

            {/* End-effector status halo + pulsing dot */}
            <circle
              cx="198"
              cy="65"
              r="9"
              fill="none"
              stroke="var(--accent)"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
            <circle cx="198" cy="65" r="3.2" fill="var(--accent)">
              <animate
                attributeName="opacity"
                values="1; 0.4; 1"
                keyTimes="0; 0.5; 1"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>
      </g>

      {/* Angle dimension indicator — always static, drawn relative to base */}
      <g
        stroke="var(--line-strong)"
        strokeWidth="0.8"
        strokeDasharray="1 3"
        fill="none"
      >
        <path d="M 90 240 A 30 30 0 0 1 120 210" />
      </g>
      <text
        x="85"
        y="228"
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        letterSpacing="1.3"
        fill="var(--faint)"
        textAnchor="end"
      >
        θ₁
      </text>

      {/* Label header */}
      <g
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        letterSpacing="1.6"
      >
        <text x="10" y="30" fill="var(--muted)">
          MANIPULATOR / 3-DOF
        </text>
        <text x="10" y="44" fill="var(--faint)">
          REV · A
        </text>
      </g>
    </svg>
  );
}
