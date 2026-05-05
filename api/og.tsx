import { ImageResponse } from '@vercel/og';

/**
 * Dynamic OG image — renders the hero plate at 1200×630 using the
 * site's actual typography (Instrument Serif italic + JetBrains Mono).
 *
 * Edit the JSX below and Vercel rebuilds the image on next request.
 */

const TEXT_SUBSET =
  'Haarvish Chevula. Runtime intelligence for autonomous systems on servers robots and orbit. ' +
  'IDENTITY ENGINEERING BRIEF FOUNDER RESEARCHER ENGINEER FERRONYX SORA SANAS BLR IN ' +
  'S.00 /01 /02 /03 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·.,—';

async function loadGoogleFont(family, weight, style) {
  const italic = style === 'italic' ? '1' : '0';
  const params = new URLSearchParams({
    family: `${family}:ital,wght@${italic},${weight}`,
    text: TEXT_SUBSET,
  });
  const cssUrl = `https://fonts.googleapis.com/css2?${params}&display=swap`;
  const css = await fetch(cssUrl, {
    headers: {
      // Force woff2 with a modern UA so Google returns the right format
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
    },
  }).then((r) => r.text());

  const match = css.match(/src:\s*url\((.+?)\)\s*format\('(woff2|truetype|opentype)'\)/);
  if (!match) throw new Error(`Font URL not found for ${family}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function handler() {
  const [serifItalic, monoRegular, monoMedium] = await Promise.all([
    loadGoogleFont('Instrument+Serif', 400, 'italic'),
    loadGoogleFont('JetBrains+Mono', 400, 'normal'),
    loadGoogleFont('JetBrains+Mono', 500, 'normal'),
  ]);

  const BG = '#080808';
  const FG = '#F5F0E8';
  const ACCENT = '#E16349';
  const MUTED = 'rgba(245, 240, 232, 0.7)';
  const FAINT = 'rgba(245, 240, 232, 0.45)';
  const LINE = 'rgba(245, 240, 232, 0.18)';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: BG,
          color: FG,
          padding: '64px 80px',
          fontFamily: 'JetBrains Mono',
          position: 'relative',
        }}
      >
        {/* Corner registration marks (top-left + top-right) */}
        <div
          style={{
            position: 'absolute',
            top: 28,
            left: 28,
            width: 22,
            height: 22,
            borderTop: `1px solid ${LINE}`,
            borderLeft: `1px solid ${LINE}`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 28,
            right: 28,
            width: 22,
            height: 22,
            borderTop: `1px solid ${LINE}`,
            borderRight: `1px solid ${LINE}`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            left: 28,
            width: 22,
            height: 22,
            borderBottom: `1px solid ${LINE}`,
            borderLeft: `1px solid ${LINE}`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            right: 28,
            width: 22,
            height: 22,
            borderBottom: `1px solid ${LINE}`,
            borderRight: `1px solid ${LINE}`,
          }}
        />

        {/* Eyebrow row */}
        <div
          style={{
            display: 'flex',
            fontSize: 18,
            letterSpacing: 3.2,
            textTransform: 'uppercase',
            color: MUTED,
            gap: 24,
            alignItems: 'center',
          }}
        >
          <span style={{ color: ACCENT, fontWeight: 500 }}>[S.00]</span>
          <span style={{ color: FG }}>IDENTITY</span>
          <span style={{ color: FAINT }}>· ENGINEERING BRIEF</span>
        </div>

        {/* Hairline */}
        <div
          style={{
            display: 'flex',
            marginTop: 18,
            height: 1,
            width: '100%',
            background: LINE,
          }}
        />

        {/* Big italic serif name */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 56,
            fontFamily: 'Instrument Serif',
            fontStyle: 'italic',
            fontSize: 188,
            lineHeight: 0.92,
            letterSpacing: -2,
            color: FG,
          }}
        >
          <div style={{ display: 'flex' }}>Haarvish</div>
          <div style={{ display: 'flex', paddingLeft: 100 }}>
            Chevula
            <span style={{ color: ACCENT }}>.</span>
          </div>
        </div>

        {/* Thesis line */}
        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontFamily: 'Instrument Serif',
            fontStyle: 'italic',
            fontSize: 30,
            color: MUTED,
            maxWidth: 760,
            lineHeight: 1.25,
          }}
        >
          Runtime intelligence for autonomous systems — on servers, on
          robots, in orbit.
        </div>

        {/* Spacer */}
        <div style={{ display: 'flex', flexGrow: 1 }} />

        {/* Bottom identity row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 17,
            letterSpacing: 2.6,
            textTransform: 'uppercase',
            color: MUTED,
            fontFamily: 'JetBrains Mono',
          }}
        >
          <div style={{ display: 'flex', gap: 36 }}>
            <span style={{ display: 'flex', gap: 10 }}>
              <span style={{ color: ACCENT }}>/01</span>
              <span style={{ color: FG }}>FOUNDER</span>
              <span>· FERRONYX</span>
            </span>
            <span style={{ display: 'flex', gap: 10 }}>
              <span style={{ color: ACCENT }}>/02</span>
              <span style={{ color: FG }}>RESEARCH</span>
              <span>· SORA</span>
            </span>
            <span style={{ display: 'flex', gap: 10 }}>
              <span style={{ color: ACCENT }}>/03</span>
              <span style={{ color: FG }}>ENGINEER</span>
              <span>· SANAS</span>
            </span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span
              style={{
                display: 'flex',
                width: 6,
                height: 6,
                borderRadius: 3,
                background: ACCENT,
              }}
            />
            <span style={{ color: FG }}>BLR</span>
            <span style={{ color: FAINT }}>· IN</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Instrument Serif',
          data: serifItalic,
          style: 'italic',
          weight: 400,
        },
        {
          name: 'JetBrains Mono',
          data: monoRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'JetBrains Mono',
          data: monoMedium,
          style: 'normal',
          weight: 500,
        },
      ],
      headers: {
        'Cache-Control':
          'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
      },
    },
  );
}
