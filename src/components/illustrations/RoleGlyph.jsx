/**
 * RoleGlyph — small line-art markers for the Work / Trajectory section.
 * Uses currentColor so the caller controls tint via parent color.
 *
 * Variants:
 *   audio  — 5-bar waveform (voice AI: Sanas)
 *   alert  — bell + pulse halo (incident response: Temperstack)
 *   camera — lens with aperture blades (CV developer: AMS India)
 *   scan   — frame with corner brackets (deep vision: Mirasys)
 *   people — three small figures (non-profit: Youth India Foundation)
 *
 * viewBox 24x24. Stroke-only, 1.2 width, round caps.
 */
export default function RoleGlyph({ type, className = '' }) {
  const props = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  switch (type) {
    case 'audio':
      return (
        <svg {...props}>
          {/* Five bars of varying heights, waveform-style */}
          <line x1="3" y1="10" x2="3" y2="14" />
          <line x1="7" y1="6" x2="7" y2="18" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="17" y1="8" x2="17" y2="16" />
          <line x1="21" y1="11" x2="21" y2="13" />
        </svg>
      );

    case 'alert':
      return (
        <svg {...props}>
          {/* Bell outline */}
          <path d="M 6 16 Q 6 8 12 8 Q 18 8 18 16 Z" />
          {/* Bell clapper */}
          <line x1="11" y1="18.5" x2="13" y2="18.5" />
          {/* Top stem */}
          <line x1="12" y1="6" x2="12" y2="8" />
          {/* Pulse halo */}
          <path d="M 3 9 Q 4 4 8 3" opacity="0.55" />
          <path d="M 21 9 Q 20 4 16 3" opacity="0.55" />
        </svg>
      );

    case 'camera':
      return (
        <svg {...props}>
          {/* Outer lens */}
          <circle cx="12" cy="12" r="8" />
          {/* Aperture ring */}
          <circle cx="12" cy="12" r="4" />
          {/* Aperture blades — 6 tick lines */}
          <line x1="12" y1="4" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="20" />
          <line x1="4" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="20" y2="12" />
          <line x1="6.3" y1="6.3" x2="7.7" y2="7.7" />
          <line x1="16.3" y1="16.3" x2="17.7" y2="17.7" />
        </svg>
      );

    case 'scan':
      return (
        <svg {...props}>
          {/* Four corner brackets only (like a camera viewfinder) */}
          <path d="M 3 7 V 3 H 7" />
          <path d="M 17 3 H 21 V 7" />
          <path d="M 21 17 V 21 H 17" />
          <path d="M 7 21 H 3 V 17" />
          {/* Center scan line */}
          <line x1="5" y1="12" x2="19" y2="12" opacity="0.6" strokeDasharray="2 2" />
          {/* Center crosshair dot */}
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        </svg>
      );

    case 'people':
      return (
        <svg {...props}>
          {/* Three small figures — head + shoulders */}
          {/* Left */}
          <circle cx="5.5" cy="9" r="1.8" />
          <path d="M 3 19 Q 3 14 5.5 14 Q 8 14 8 19" />
          {/* Center */}
          <circle cx="12" cy="7.5" r="2" />
          <path d="M 9 19 Q 9 13 12 13 Q 15 13 15 19" />
          {/* Right */}
          <circle cx="18.5" cy="9" r="1.8" />
          <path d="M 16 19 Q 16 14 18.5 14 Q 21 14 21 19" />
        </svg>
      );

    default:
      return null;
  }
}
