/**
 * AGVSchematic — top-down view of AGV-047 for the Ferronyx terminal.
 *
 * Subject-of-investigation strip shown between the terminal header and
 * the topic rows. Reinforces the narrative: this is the robot the log
 * output below is describing.
 *
 * Features:
 *   · rectangular chassis with rounded corners + 4 wheels
 *   · central LIDAR puck with rotating scan arc
 *   · 4 battery cells along one edge — cell 3 tinted orange + pulsing
 *   · heading arrow
 *   · mono labels: AGV-047 (chassis), J3-WARN (leader line to cell 3)
 *
 * viewBox 320x100.
 */
export default function AGVSchematic({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 100"
      fill="none"
      aria-hidden="true"
    >
      {/* Ground/datum line */}
      <line
        x1="8"
        y1="94"
        x2="312"
        y2="94"
        stroke="var(--line)"
        strokeWidth="0.8"
        strokeDasharray="2 4"
      />

      {/* Chassis — rounded rect */}
      <rect
        x="64"
        y="20"
        width="190"
        height="56"
        rx="6"
        stroke="var(--fg)"
        strokeOpacity="0.8"
        strokeWidth="1.1"
        fill="none"
      />

      {/* Inner chassis divider */}
      <line
        x1="64"
        y1="48"
        x2="254"
        y2="48"
        stroke="var(--fg)"
        strokeOpacity="0.25"
        strokeDasharray="1 3"
        strokeWidth="0.7"
      />

      {/* Wheels — four ellipses at corners */}
      <g stroke="var(--fg)" strokeOpacity="0.7" strokeWidth="1" fill="var(--bg)">
        <rect x="58" y="18" width="12" height="22" rx="2" />
        <rect x="58" y="56" width="12" height="22" rx="2" />
        <rect x="248" y="18" width="12" height="22" rx="2" />
        <rect x="248" y="56" width="12" height="22" rx="2" />
      </g>

      {/* LIDAR puck (center) */}
      <g>
        {/* Scanning arc — rotates */}
        <g
          style={{
            transformOrigin: '160px 48px',
            transformBox: 'fill-box',
          }}
        >
          <path
            d="M 160 48 L 160 28 A 20 20 0 0 1 180 48 Z"
            fill="var(--accent)"
            fillOpacity="0.14"
            stroke="var(--accent)"
            strokeOpacity="0.45"
            strokeWidth="0.8"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 160 48"
              to="360 160 48"
              dur="3.2s"
              repeatCount="indefinite"
            />
          </path>
        </g>
        {/* Puck outline */}
        <circle
          cx="160"
          cy="48"
          r="6"
          fill="var(--bg)"
          stroke="var(--fg)"
          strokeOpacity="0.8"
          strokeWidth="1"
        />
        <circle cx="160" cy="48" r="2" fill="var(--fg)" fillOpacity="0.7" />
      </g>

      {/* Heading arrow — forward direction (right side) */}
      <g stroke="var(--accent)" strokeWidth="1" fill="none">
        <line x1="232" y1="48" x2="244" y2="48" />
        <path d="M 240 44 L 244 48 L 240 52" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Front-facing cameras — two small bumps on the front edge */}
      <g stroke="var(--fg)" strokeOpacity="0.6" strokeWidth="0.9" fill="var(--bg)">
        <rect x="248" y="30" width="6" height="4" />
        <rect x="248" y="62" width="6" height="4" />
      </g>

      {/* Battery cells — 4 small rects along bottom-inside of chassis */}
      <g>
        {[0, 1, 2, 3].map((i) => {
          const x = 78 + i * 20;
          const isWarn = i === 2; // cell 3 (0-indexed)
          return (
            <g key={i}>
              <rect
                x={x}
                y="62"
                width="14"
                height="10"
                rx="1"
                fill={isWarn ? 'var(--accent-dim)' : 'none'}
                stroke={isWarn ? 'var(--accent)' : 'var(--fg)'}
                strokeOpacity={isWarn ? 0.8 : 0.55}
                strokeWidth="0.9"
              />
              {isWarn && (
                <circle cx={x + 7} cy="67" r="1.6" fill="var(--accent)">
                  <animate
                    attributeName="opacity"
                    values="1; 0.3; 1"
                    keyTimes="0; 0.5; 1"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </g>

      {/* Leader line pointing to cell 3 */}
      <g>
        <line
          x1="125"
          y1="67"
          x2="125"
          y2="86"
          stroke="var(--accent)"
          strokeOpacity="0.5"
          strokeWidth="0.8"
          strokeDasharray="1 2"
        />
        <text
          x="128"
          y="90"
          fontFamily="JetBrains Mono, monospace"
          fontSize="7"
          letterSpacing="1.3"
          fill="var(--accent)"
        >
          J3 · WARN
        </text>
      </g>

      {/* AGV ID label (top-left of chassis) */}
      <text
        x="70"
        y="14"
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        letterSpacing="1.4"
        fill="var(--faint)"
      >
        AGV-047 · TOP VIEW
      </text>

      {/* Dimensional ticks at corners */}
      <g stroke="var(--line-strong)" strokeWidth="0.8" strokeOpacity="0.6">
        <line x1="4" y1="20" x2="8" y2="20" />
        <line x1="4" y1="76" x2="8" y2="76" />
        <line x1="312" y1="20" x2="316" y2="20" />
        <line x1="312" y1="76" x2="316" y2="76" />
      </g>
    </svg>
  );
}
