/**
 * Sleek industrial humanoid robot — stroke-only line art.
 * Front view. Subtle head pan, breathing, chest status pulse,
 * and a visor scan line.
 *
 * Geometry in a 280x440 viewBox, centerline at x=140.
 */
export default function Humanoid({ className = '' }) {
  const headPan = '-4 140 60; 4 140 60; -4 140 60';
  const bodyBreathe = '0 0; 0 -1; 0 0';

  return (
    <svg
      className={className}
      viewBox="0 0 280 440"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="visor-clip">
          <rect x="112" y="46" width="56" height="18" rx="3" />
        </clipPath>
        <linearGradient id="visor-glint" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Label header */}
      <g
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        letterSpacing="1.6"
      >
        <text x="10" y="24" fill="var(--muted)">
          HUMANOID / UNIT-H
        </text>
        <text x="10" y="38" fill="var(--faint)">
          MODE · STANDBY
        </text>
      </g>

      {/* Ground line */}
      <line
        x1="10"
        y1="428"
        x2="270"
        y2="428"
        stroke="var(--line)"
        strokeDasharray="2 5"
        strokeWidth="0.8"
      />

      {/* Ground label */}
      <text
        x="10"
        y="420"
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        letterSpacing="1.3"
        fill="var(--faint)"
      >
        DATUM
      </text>

      {/* WHOLE BODY — very subtle breathing translate */}
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          values={bodyBreathe}
          keyTimes="0; 0.5; 1"
          dur="4s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          additive="sum"
        />

        {/* LEGS — drawn first so pelvis overlaps cleanly on top */}
        {/* Left leg */}
        <g stroke="var(--fg)" strokeWidth="1.2" strokeOpacity="0.85">
          {/* Thigh — double parallel */}
          <line x1="108" y1="260" x2="107" y2="332" />
          <line x1="124" y1="260" x2="123" y2="332" />
          {/* Shin — double parallel */}
          <line x1="107" y1="348" x2="107" y2="408" />
          <line x1="123" y1="348" x2="123" y2="408" />
        </g>
        {/* Left knee joint */}
        <g>
          <circle
            cx="115"
            cy="340"
            r="9"
            fill="var(--bg)"
            stroke="var(--fg)"
            strokeWidth="1.2"
            strokeOpacity="0.85"
          />
          <circle cx="115" cy="340" r="3" fill="var(--fg)" fillOpacity="0.6" />
        </g>
        {/* Left foot */}
        <g stroke="var(--fg)" strokeWidth="1.1" strokeOpacity="0.8">
          <rect x="94" y="408" width="42" height="14" rx="2" fill="var(--bg)" />
          <line x1="115" y1="408" x2="115" y2="422" strokeOpacity="0.4" />
        </g>

        {/* Right leg */}
        <g stroke="var(--fg)" strokeWidth="1.2" strokeOpacity="0.85">
          <line x1="156" y1="260" x2="157" y2="332" />
          <line x1="172" y1="260" x2="173" y2="332" />
          <line x1="157" y1="348" x2="157" y2="408" />
          <line x1="173" y1="348" x2="173" y2="408" />
        </g>
        <g>
          <circle
            cx="165"
            cy="340"
            r="9"
            fill="var(--bg)"
            stroke="var(--fg)"
            strokeWidth="1.2"
            strokeOpacity="0.85"
          />
          <circle cx="165" cy="340" r="3" fill="var(--fg)" fillOpacity="0.6" />
        </g>
        <g stroke="var(--fg)" strokeWidth="1.1" strokeOpacity="0.8">
          <rect x="144" y="408" width="42" height="14" rx="2" fill="var(--bg)" />
          <line x1="165" y1="408" x2="165" y2="422" strokeOpacity="0.4" />
        </g>

        {/* Knee joint labels — datum ticks */}
        <g
          fontFamily="JetBrains Mono, monospace"
          fontSize="7"
          letterSpacing="1.2"
          fill="var(--faint)"
        >
          <text x="92" y="344" textAnchor="end">
            J3
          </text>
        </g>

        {/* PELVIS */}
        <g>
          <rect
            x="102"
            y="240"
            width="76"
            height="22"
            rx="2"
            stroke="var(--fg)"
            strokeWidth="1.2"
            strokeOpacity="0.85"
            fill="var(--bg)"
          />
          {/* Pelvis detail line */}
          <line
            x1="140"
            y1="244"
            x2="140"
            y2="260"
            stroke="var(--fg)"
            strokeOpacity="0.35"
            strokeWidth="0.8"
          />
          {/* Hip joint markers */}
          <circle cx="115" cy="260" r="5" fill="var(--bg)" stroke="var(--fg)" strokeWidth="1" strokeOpacity="0.7" />
          <circle cx="165" cy="260" r="5" fill="var(--bg)" stroke="var(--fg)" strokeWidth="1" strokeOpacity="0.7" />
        </g>

        {/* TORSO */}
        <g>
          {/* Torso silhouette (trapezoid, tapering to hips) */}
          <path
            d="M 92 128 L 188 128 L 178 240 L 102 240 Z"
            stroke="var(--fg)"
            strokeWidth="1.3"
            strokeOpacity="0.9"
            fill="var(--bg)"
          />
          {/* Side vent lines */}
          <g stroke="var(--fg)" strokeOpacity="0.35" strokeWidth="0.8">
            <line x1="96" y1="160" x2="100" y2="160" />
            <line x1="96" y1="172" x2="100" y2="172" />
            <line x1="96" y1="184" x2="100" y2="184" />
            <line x1="180" y1="160" x2="184" y2="160" />
            <line x1="180" y1="172" x2="184" y2="172" />
            <line x1="180" y1="184" x2="184" y2="184" />
          </g>

          {/* Chest plate */}
          <rect
            x="118"
            y="146"
            width="44"
            height="58"
            rx="3"
            stroke="var(--fg)"
            strokeWidth="1"
            strokeOpacity="0.65"
            fill="none"
          />
          {/* Chest plate inner divider */}
          <line
            x1="118"
            y1="170"
            x2="162"
            y2="170"
            stroke="var(--fg)"
            strokeOpacity="0.3"
            strokeWidth="0.8"
          />
          {/* Chest status indicator */}
          <circle cx="140" cy="158" r="3" fill="var(--accent)">
            <animate
              attributeName="opacity"
              values="1; 0.35; 1"
              keyTimes="0; 0.5; 1"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="140"
            cy="158"
            r="7"
            fill="none"
            stroke="var(--accent)"
            strokeOpacity="0.35"
            strokeWidth="0.8"
          />
          {/* Chest ID label */}
          <text
            x="140"
            y="190"
            fontFamily="JetBrains Mono, monospace"
            fontSize="6"
            letterSpacing="1.3"
            fill="var(--faint)"
            textAnchor="middle"
          >
            UNIT-H.01
          </text>
        </g>

        {/* SHOULDERS — sit on top of torso */}
        <g>
          <rect
            x="80"
            y="108"
            width="120"
            height="22"
            rx="3"
            stroke="var(--fg)"
            strokeWidth="1.3"
            strokeOpacity="0.9"
            fill="var(--bg)"
          />
          <line
            x1="140"
            y1="108"
            x2="140"
            y2="130"
            stroke="var(--fg)"
            strokeOpacity="0.3"
            strokeWidth="0.8"
          />
        </g>

        {/* ARMS — hanging at sides */}
        {/* Left arm */}
        <g>
          {/* Shoulder joint */}
          <circle
            cx="90"
            cy="124"
            r="9"
            fill="var(--bg)"
            stroke="var(--fg)"
            strokeWidth="1.2"
            strokeOpacity="0.85"
          />
          <circle cx="90" cy="124" r="3" fill="var(--fg)" fillOpacity="0.6" />
          {/* Upper arm — double parallel */}
          <g stroke="var(--fg)" strokeWidth="1.2" strokeOpacity="0.85">
            <line x1="82" y1="130" x2="76" y2="178" />
            <line x1="98" y1="130" x2="92" y2="178" />
          </g>
          {/* Elbow */}
          <circle
            cx="84"
            cy="182"
            r="7"
            fill="var(--bg)"
            stroke="var(--fg)"
            strokeWidth="1.2"
            strokeOpacity="0.85"
          />
          <circle cx="84" cy="182" r="2.5" fill="var(--fg)" fillOpacity="0.55" />
          {/* Forearm */}
          <g stroke="var(--fg)" strokeWidth="1.2" strokeOpacity="0.85">
            <line x1="78" y1="188" x2="72" y2="236" />
            <line x1="91" y1="188" x2="85" y2="236" />
          </g>
          {/* Hand */}
          <g stroke="var(--fg)" strokeWidth="1.1" strokeOpacity="0.8">
            <rect x="66" y="236" width="22" height="18" rx="2" fill="var(--bg)" />
            {/* Finger groove */}
            <line x1="77" y1="240" x2="77" y2="254" strokeOpacity="0.4" />
          </g>
        </g>

        {/* Right arm */}
        <g>
          <circle
            cx="190"
            cy="124"
            r="9"
            fill="var(--bg)"
            stroke="var(--fg)"
            strokeWidth="1.2"
            strokeOpacity="0.85"
          />
          <circle cx="190" cy="124" r="3" fill="var(--fg)" fillOpacity="0.6" />
          <g stroke="var(--fg)" strokeWidth="1.2" strokeOpacity="0.85">
            <line x1="182" y1="130" x2="188" y2="178" />
            <line x1="198" y1="130" x2="204" y2="178" />
          </g>
          <circle
            cx="196"
            cy="182"
            r="7"
            fill="var(--bg)"
            stroke="var(--fg)"
            strokeWidth="1.2"
            strokeOpacity="0.85"
          />
          <circle cx="196" cy="182" r="2.5" fill="var(--fg)" fillOpacity="0.55" />
          <g stroke="var(--fg)" strokeWidth="1.2" strokeOpacity="0.85">
            <line x1="189" y1="188" x2="195" y2="236" />
            <line x1="202" y1="188" x2="208" y2="236" />
          </g>
          <g stroke="var(--fg)" strokeWidth="1.1" strokeOpacity="0.8">
            <rect x="192" y="236" width="22" height="18" rx="2" fill="var(--bg)" />
            <line x1="203" y1="240" x2="203" y2="254" strokeOpacity="0.4" />
          </g>
        </g>

        {/* Shoulder labels */}
        <g
          fontFamily="JetBrains Mono, monospace"
          fontSize="7"
          letterSpacing="1.2"
          fill="var(--faint)"
        >
          <text x="68" y="128" textAnchor="end">
            J1
          </text>
          <text x="212" y="128">
            J1
          </text>
        </g>

        {/* NECK */}
        <g>
          <path
            d="M 130 92 L 150 92 L 148 110 L 132 110 Z"
            stroke="var(--fg)"
            strokeWidth="1.1"
            strokeOpacity="0.75"
            fill="var(--bg)"
          />
        </g>

        {/* HEAD GROUP — pans left and right */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            values={headPan}
            keyTimes="0; 0.5; 1"
            dur="8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />

          {/* Head shell */}
          <rect
            x="104"
            y="26"
            width="72"
            height="66"
            rx="16"
            stroke="var(--fg)"
            strokeWidth="1.3"
            strokeOpacity="0.9"
            fill="var(--bg)"
          />
          {/* Forehead divider */}
          <line
            x1="108"
            y1="42"
            x2="172"
            y2="42"
            stroke="var(--fg)"
            strokeOpacity="0.3"
            strokeWidth="0.8"
          />
          {/* Chin divider */}
          <line
            x1="114"
            y1="82"
            x2="166"
            y2="82"
            stroke="var(--fg)"
            strokeOpacity="0.3"
            strokeWidth="0.8"
          />
          {/* Ear bumps */}
          <g stroke="var(--fg)" strokeWidth="1" strokeOpacity="0.65" fill="var(--bg)">
            <rect x="100" y="54" width="6" height="18" rx="1" />
            <rect x="174" y="54" width="6" height="18" rx="1" />
          </g>

          {/* Visor */}
          <g>
            <rect
              x="112"
              y="46"
              width="56"
              height="18"
              rx="3"
              stroke="var(--fg)"
              strokeWidth="1.1"
              strokeOpacity="0.85"
              fill="var(--card)"
            />
            {/* Eye indicators */}
            <circle cx="128" cy="55" r="1.8" fill="var(--accent)" fillOpacity="0.8">
              <animate
                attributeName="fill-opacity"
                values="0.9; 0.4; 0.9"
                keyTimes="0; 0.5; 1"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="152" cy="55" r="1.8" fill="var(--accent)" fillOpacity="0.8">
              <animate
                attributeName="fill-opacity"
                values="0.9; 0.4; 0.9"
                keyTimes="0; 0.5; 1"
                dur="2.8s"
                begin="0.3s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Visor scan line — sweeps across */}
            <g clipPath="url(#visor-clip)">
              <rect y="46" width="28" height="18" fill="url(#visor-glint)">
                <animate
                  attributeName="x"
                  values="84; 168"
                  keyTimes="0; 1"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
          </g>

          {/* Antenna / crown tick */}
          <line
            x1="140"
            y1="26"
            x2="140"
            y2="20"
            stroke="var(--fg)"
            strokeOpacity="0.55"
            strokeWidth="1"
          />
          <circle cx="140" cy="18" r="1.8" fill="var(--fg)" fillOpacity="0.7" />

          {/* Head label */}
          <text
            x="140"
            y="77"
            fontFamily="JetBrains Mono, monospace"
            fontSize="6"
            letterSpacing="1.2"
            fill="var(--faint)"
            textAnchor="middle"
          >
            COGNIO
          </text>
        </g>
      </g>
    </svg>
  );
}
