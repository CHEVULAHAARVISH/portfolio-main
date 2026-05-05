# Engineering Brief — Design System

> A reference for anyone rebuilding this aesthetic elsewhere
> (e.g. `ferronyx.com`, future landing pages, research microsites).
>
> Not a style guide in the bureaucratic sense. A set of decisions,
> tokens, and patterns that make this portfolio feel the way it does —
> and what would break it if applied loosely.

---

## 1. Philosophy

### 1.1 Aesthetic direction

**Engineering Brief.** The visual grammar of observability tooling and
aerospace technical documents, executed with editorial restraint.
Think:

- Old NASA mission reports and JPL telemetry plates
- Observatory logbooks
- Engineering drawings with corner registration marks
- Editorial magazines (Wallpaper*, MIT Tech Review) for typographic
  tone
- The physical artifact of a well-printed technical manual

**Not:**

- Generic SaaS landing pages with purple gradients
- Consumer app aesthetics (soft rounded cards, playful illustrations)
- Brutalist-for-the-sake-of-it (this is precision, not rawness)
- Cyberpunk / retro-terminal kitsch (no scan lines, no CRT glow)

### 1.2 Core principles

1. **Precision over volume.** Every pixel is intentional. Every line
   is load-bearing.
2. **Monospace for meta, serif for editorial, sans for body.**
   Three fonts, each with a clear job.
3. **One accent color, used sparingly.** Orange marks what matters.
   If everything is accented, nothing is.
4. **Hairlines do the work of borders.** 1px, semi-transparent,
   frequently dashed. The grid is implied, not shouted.
5. **Illustrations must have subjects.** No decoration for
   decoration's sake. If it isn't visualizing a real thing (a
   spacecraft, a robot, a domain triangle), don't draw it.
6. **Motion is ambient or entrance — never both at once.** A moment
   lands, then settles. The page does not wiggle.
7. **Dark mode is default.** Light mode is a switch, not a second
   design.

---

## 2. Design Tokens

Defined as CSS variables on `:root` (dark) and `:root.light`
(light mode override). Using variables is non-negotiable — every
illustration and component reads from them so theme flips work
automatically.

### 2.1 Color — Dark (default)

```css
:root {
  --bg: #080808;                              /* near-black, warm */
  --fg: #f5f0e8;                              /* warm off-white — not pure */
  --muted: rgba(245, 240, 232, 0.72);         /* body text secondary */
  --faint: rgba(245, 240, 232, 0.50);         /* mono meta labels */
  --line: rgba(245, 240, 232, 0.10);          /* hairline */
  --line-strong: rgba(245, 240, 232, 0.22);   /* stronger hairline */
  --accent: #e16349;                          /* plasma orange */
  --accent-dim: rgba(225, 99, 73, 0.22);      /* accent tint fills */
  --card: rgba(245, 240, 232, 0.02);          /* card bg */
  --card-hover: rgba(245, 240, 232, 0.04);    /* card hover */
}
```

### 2.2 Color — Light (toggle)

```css
:root.light {
  --bg: #f5f0e8;
  --fg: #0a0a0a;
  --muted: rgba(10, 10, 10, 0.62);
  --faint: rgba(10, 10, 10, 0.38);
  --line: rgba(10, 10, 10, 0.10);
  --line-strong: rgba(10, 10, 10, 0.22);
  --accent: #c9462a;                          /* darker orange for contrast */
  --accent-dim: rgba(201, 70, 42, 0.14);
  --card: rgba(10, 10, 10, 0.02);
  --card-hover: rgba(10, 10, 10, 0.04);
}
```

### 2.3 Accent usage rules

Orange (`--accent`) is used for, and only for:

- Section numbers (`[S.01]`, `[S.02]`)
- Active section highlight on the rail
- Primary CTA text or underline decoration
- Status dots that indicate **live** or **active** state
- One highlighted element per "vertex" or "stage" (see Triangle,
  PipelineStrip) — the rest sit in neutral tones
- Illustration flagship elements (ROBOTS vertex, antenna tip,
  scenario badge border)
- The period after the section title: `Ferronyx.` `SORA.`

Orange is **not** used for:

- Body text (ever)
- Decorative dividers
- Generic links (use `underline` with hairline decoration instead)
- Background fills on large surfaces
- Buttons (use outlined border + accent on hover, not filled)

The rule of thumb: if you remove an accent element, does the hierarchy
break? If yes, keep it. If no, remove it.

---

## 3. Typography

### 3.1 The three fonts

| Role | Family | Weight | Source |
|---|---|---|---|
| **Display** | Instrument Serif | 400 (italic) | Google Fonts |
| **Body** | IBM Plex Sans | 300-700 | Google Fonts |
| **Meta / telemetry** | JetBrains Mono | 300-600 | Google Fonts |

Load all three together in the HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
  rel="stylesheet"
/>
```

### 3.2 Why these three

- **Instrument Serif italic** is the signature. A distinctive
  slanted serif with the character of an engraved astronomical
  chart. Used only for display moments — names, section titles,
  large metric values, pull quotes. Never for body text. Italic is
  the default — the upright version exists but is rarely right here.
- **IBM Plex Sans** has engineering provenance (IBM's corporate
  font) without being a cliché choice. Warmer than Inter, more
  characterful than Roboto, not overused in the AI-era startup
  aesthetic cluster.
- **JetBrains Mono** is the standard monospace for engineering-tool
  interfaces. Ligatures, tabular figures, legible at small sizes.
  Used for *all* meta — timestamps, coordinates, section numbers,
  status dots, button chrome.

### 3.3 Anti-patterns (typography)

Do **not** use: Inter, Roboto, Arial, Helvetica, system-ui, Poppins,
Montserrat, Space Grotesk, Geist, Open Sans. These are the "AI-slop
typography cluster" — using any of them immediately reads as a
generic AI-generated site.

Do **not** pair two serifs or two sans-serifs. The three fonts each
play a distinct role; swapping out a role with a similar font
collapses the hierarchy.

### 3.4 Type scale

```
Display (Instrument Serif italic):
  - Hero name:         clamp(3.6rem, 14vw, 12rem)   tracking: -0.01em
  - Section title:     clamp(5rem, 14vw, 13rem)     tracking: -0.01em
  - Section sub-title: clamp(3rem, 8vw, 6.5rem)
  - Large quote:       clamp(2.5rem, 6vw, 5.5rem)
  - Medium heading:    text-4xl md:text-5xl
  - Pull-quote:        text-2xl md:text-3xl

Body (IBM Plex Sans):
  - Lead paragraph:    text-lg md:text-xl (18-20px)
  - Body:              text-base (16px)
  - Small body:        text-sm (14px)

Meta (JetBrains Mono):
  - Standard meta:     text-[11px] uppercase letter-spacing: 0.18em
  - Small meta:        text-[10px] uppercase letter-spacing: 0.18em
  - Tiny meta:         text-[9px] uppercase letter-spacing: 0.18em
```

**The 0.18em letter-spacing on mono labels is the signature.** It's
what makes meta text feel like telemetry labels instead of code
comments. Never omit it on uppercase mono.

A Tailwind custom utility:

```js
// tailwind.config.js
theme: {
  extend: {
    letterSpacing: { widest2: '0.18em' },
  },
},
```

Usage: `font-mono text-[11px] uppercase tracking-widest2`.

### 3.5 Font feature settings

```css
html, body {
  font-family: 'IBM Plex Sans', system-ui, sans-serif;
  font-feature-settings: 'ss01', 'ss02', 'cv11';
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.font-mono {
  font-feature-settings: 'zero', 'ss02';
  /* `zero` gives slashed zero — tabular feel */
}
```

Tabular numbers on any numeric meta label: add `tabular-nums` to the
className. Live clocks, counters, coordinates all get this.

---

## 4. Composition Grammar

### 4.1 The container

One horizontal rhythm across all sections:

```css
.container-edge {
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 24px;
}
@media (min-width: 768px)  { .container-edge { padding-inline: 48px; } }
@media (min-width: 1200px) { .container-edge { padding-inline: 72px; } }
```

No content extends beyond this width except the illustrations and
decorative overlays positioned absolute inside the section.

### 4.2 Section structure

Every major section follows this exact shape:

```
[eyebrow row]  — [S.XX] + section name + tagged sub-label (left)
               — date / status meta (right)
[hair rule]    — thin gradient rule across full width
[big title]    — Instrument Serif italic, clamp-sized
[content]      — the actual section content
[CTA / close]  — optional closing block
```

The eyebrow row pattern (JSX):

```jsx
<div className="flex flex-wrap items-center justify-between gap-y-2 text-[11px] font-mono uppercase tracking-widest2 mb-6">
  <span className="flex items-center gap-3">
    <span style={{ color: 'var(--accent)' }}>[S.02]</span>
    <span style={{ color: 'var(--fg)' }}>SORA</span>
    <span style={{ color: 'var(--faint)' }}>· Research</span>
  </span>
  <span style={{ color: 'var(--faint)' }}>
    Status · <span style={{ color: 'var(--fg)' }}>Active R&D</span>
  </span>
</div>
<div className="rule mb-14" />
```

`flex-wrap + gap-y-2` is mandatory — prevents the eyebrow from
overflowing on narrow screens.

### 4.3 The hair rule

```css
.rule {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--line-strong) 8%,
    var(--line-strong) 92%,
    transparent
  );
}
```

Fades in and out at the edges — softer than a solid border, still
does the structural job.

### 4.4 Section numbering

Use `[S.00]`, `[S.01]`, `[S.02]` notation for eyebrow tags.
Zero-indexed for the hero (identity page) — because the hero is the
origin, not the first section of work.

Numbering across this portfolio:

- **S.00** — Identity (hero)
- **S.01** — Flagship (Ferronyx)
- **S.02** — Research (SORA)
- **S.03** — Thesis
- **S.04** — Trajectory (work history)
- **S.05** — Contact

For a product site like Ferronyx, the numbering would shift:

- **S.00** — Hero / what Ferronyx is
- **S.01** — Problem (ROS2 fleet pain)
- **S.02** — Product (features)
- **S.03** — Customers / social proof
- **S.04** — Pricing
- **S.05** — Get started

Keep zero-indexing. It's distinctive and committed.

### 4.5 Vertical rhythm

Section vertical padding:

```
<section className="py-20 md:py-36">
```

80px mobile / 144px desktop. Generous on desktop, compressed on
mobile. Never `py-28` on mobile — it's wasteful.

Gap between eyebrow and title: `mb-14` (56px).
Gap between title and body: `mt-8` — `mt-16` depending on content.
Gap between body and CTA: `mt-20` — `mt-24`.

---

## 5. Motion System

### 5.1 Philosophy

Motion is either **entrance** (plays once when content appears) or
**ambient** (continuous, subtle, reinforces "live system"). Never
both on the same element. Never decorative transitions between
states for the sake of it.

### 5.2 Entrance patterns

**Overflow reveal** — text slides up out of a clipped container.
Used on the hero name for a strong first impression:

```jsx
function OverflowReveal({ children, delay = 0 }) {
  return (
    <span className="block overflow-hidden" style={{ lineHeight: 0.92 }}>
      <motion.span
        initial={{ y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
```

**Scroll-into-view reveal** — most sections fade+rise on scroll:

```jsx
const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10% 0px' },
};
```

**Ease curve:** `[0.2, 0.8, 0.2, 1]` is the standard custom ease for
all entrance motion. It has a fast start and a gentle settle — feels
confident without being jumpy.

### 5.3 Staggered page-load choreography

The hero runs a deliberately orchestrated entrance sequence:

```
Time    Element
──────  ───────────────────────────
0ms     [page visible, empty]
240ms   TelemetryBar progress bar tick 1
520ms   TelemetryBar progress bar tick 2
780ms   TelemetryBar progress bar tick 3
1040ms  TelemetryBar progress bar tick 4
1300ms  TelemetryBar progress bar tick 5
1480ms  TelemetryBar "booted" — live state reveals
1500ms  Hero eyebrow fades in
1600ms  Hero hair rule scales in horizontally
1700ms  Hero name fades in
1750ms  "Haarvish" slides up from overflow clip
1900ms  "Chevula." slides up from overflow clip
2200ms  Triangle scale+fade in
2300ms  Thesis paragraph fades up
2600ms  Identity chips fade in
3000ms  Scroll cue fades in
```

This is deliberate. A well-orchestrated page load does more work
than 20 scattered micro-interactions.

### 5.4 Ambient motion

Continuous motion is reserved for:

- **Live clocks** (tabular-nums, updates every 1000ms)
- **Packet counter** (irregular interval, 120-300ms — feels "real")
- **Pulse dots** (2s ease-in-out opacity, `pulse-dot` class)
- **Rotating orbital markers** (on mission patches, satellites —
  45-80s per revolution, very slow)
- **SVG scan arcs** (LIDAR, visor — 3-8s loops)

CSS keyframes used:

```css
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(0.85); }
}
.pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.blink { animation: blink 1s steps(1) infinite; }
```

### 5.5 Reduced motion

Always honored via global override:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

SMIL animations (`<animate>`, `<animateTransform>`) don't respect
this automatically. For a commercial product site, wrap SMIL-heavy
illustrations in a `useReducedMotion()` hook and conditionally skip
them.

---

## 6. Illustration System

### 6.1 Rules

1. **Stroke-only, no fills.** Exceptions: backgrounds with
   semi-transparent fills, gradients for glint effects, `var(--bg)`
   fills to mask line intersections. Never solid-colored shapes as
   the primary illustration.
2. **Every illustration has a subject.** Triangle = thesis. Humanoid
   = Ferronyx's robot domain. Spacecraft = SORA. AGV = the robot
   being diagnosed. Role glyphs = the role's industry. If there's
   no subject, don't draw.
3. **Use CSS variables for stroke colors.** `var(--fg)`,
   `var(--accent)`, `var(--line)`, `var(--line-strong)`. Never
   hardcoded hex. Theme-flip must work.
4. **Labels inside SVGs use JetBrains Mono.** `fontFamily="JetBrains
   Mono, monospace"`, `fontSize=7-9`, `letterSpacing=1.3-1.6`.
5. **SMIL for animation where the pivot matters.** `<animateTransform
   type="rotate" values="-6 x y; 6 x y; -6 x y">` lets you set
   explicit rotation pivots that CSS transforms on SVG elements
   can't reliably do across browsers.
6. **Small annotations are encouraged.** "J1", "J2", "DATUM",
   "UMBRA" — they make the illustration feel like a real engineering
   drawing, not a stylized icon.

### 6.2 The illustration vocabulary

Every illustration uses a subset of these primitives:

- **Thin strokes** (`strokeWidth="1-1.3"`)
- **Dashed lines** (`strokeDasharray="2 4"` for most, `"1 3"` for
  finer)
- **Joint circles** (solid outer + small inner dot)
- **Corner registration marks** (L-shaped strokes at corners of a
  container)
- **Dimensional tick marks** (small lines perpendicular to an axis)
- **Leader lines** (dashed line + mono label pointing to a feature)
- **Datum lines** (dashed horizontal or vertical reference)
- **Pulsing accent dots** (where life matters — antenna tips,
  warn indicators, center lockups)

### 6.3 Sizing convention

Illustrations render in the right side of sections, desktop only
(`hidden lg:block`). Size ranges:

- **Hero triangle**: 300-460px wide (sits in flex row with the name)
- **Section illustrations** (humanoid, spacecraft): 220-360px wide,
  absolute positioned upper-right, opacity 0.85-0.9
- **Inline diagrams** (AGVSchematic): 180-300px, in-flow inside
  their container
- **Role glyphs**: 16-24px, inline

All are `hidden lg:block` or `hidden md:block` so mobile stays
clean — illustrations are a desktop-only enrichment.

### 6.4 Anti-patterns (illustrations)

- Don't use raster images (PNG, JPG). All illustrations are inline
  SVG so they theme-flip and scale to any size.
- Don't add glow, shadow, or blur filters. Line art, not luxury.
- Don't use more than one accent color per illustration. Orange is
  the only brand color; everything else is neutral.
- Don't animate continuously-rotating geometry more than one at a
  time per section. The eye needs somewhere to rest.

---

## 7. Writing Voice

### 7.1 Principles

- **Mono labels are telegraphic.** `MODE · AUTONOMOUS BLACKOUT`,
  not "Autonomous blackout mode active."
- **Italic serif lines are punchy.** `Runtime intelligence for
  autonomous systems.` — not "We build runtime intelligence
  platforms for autonomous enterprise systems."
- **No sales language.** Never "delightful", "seamless",
  "revolutionary", "empower", "streamline", "transform". Use
  concrete verbs: built, shipped, instrumented, reduced.
- **Numbers are concrete.** "MTTR hours → minutes" beats
  "faster incident response."
- **Uppercase mono for meta, sentence case for body, Title Case
  for proper nouns only.**

### 7.2 Specific conventions

- Section eyebrows: `[S.XX] · [SECTION NAME] · [SUB-LABEL]`
- Timestamps: `T+00:42:30` (mission-elapsed format) when dramatic,
  `HH:MM:SS UTC` or `HH:MM:SS IST` for clocks.
- Coordinate labels: `NODE/HC-01`, `AGV-047`, `BUS-2`. Brief,
  alphanumeric, technical.
- Status indicators: `● LIVE`, `● OPERATIONAL`, `● ACTIVE R&D`,
  `░ RESTRICTED`. Pulse dot + one word + optional qualifier.
- Button labels: verbs, not nouns. `See Ferronyx →`, `Request brief
  →`, `Read architecture ↓`.

### 7.3 The "End of transmission" register

The portfolio mixes technical register (telemetry, module numbers,
scenario badges) with editorial register (italic serif names,
thoughtful prose paragraphs). The combination is the voice. Neither
alone is enough.

**Technical without editorial** = dashboard screenshot. Boring.
**Editorial without technical** = magazine. Generic.
**Both** = Engineering Brief. Specific.

---

## 8. Component Patterns

### 8.1 TelemetryBar (top-of-page runtime console)

Sticky bar at the top. Boots in with a progress animation, then
settles into a live state showing:

- Left: `NODE/HC-01`, optional packet counter `SIG #42,831`
- Right: `BLR · HH:MM:SS IST` clock, status pills, theme toggle

Why this is powerful: it makes the whole site read as a live system,
not a static marketing page. The packet counter ticking irregularly
+ the clock ticking every second is the ambient signal.

For a product site like Ferronyx, it could show:

- Active customer fleets, total robots monitored, live incidents
  resolved today. Real numbers if you have them; plausible ambient
  numbers if you don't.

### 8.2 Expand/collapse for dense content

For sections that have a lot to say but shouldn't dump it all on
entry:

```jsx
const [expanded, setExpanded] = useState(false);

// Teaser content always visible
<TeaserContent />

// Expand toggle
<button onClick={() => setExpanded(e => !e)}>
  {expanded ? 'Collapse architecture' : 'Read architecture'} ↓
</button>

<AnimatePresence initial={false}>
  {expanded && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
      style={{ overflow: 'hidden' }}
    >
      <DetailContent />
    </motion.div>
  )}
</AnimatePresence>
```

### 8.3 Redaction pattern (for protected content)

Visual redaction beats hiding content entirely. Shows viewer
something exists, signals seriousness:

```css
.redact-bar {
  background-image: repeating-linear-gradient(
    90deg,
    var(--fg) 0px,
    var(--fg) 6px,
    transparent 6px,
    transparent 10px
  );
  opacity: 0.85;
  border-radius: 1px;
}
```

Use for: architecture modules pending publication, redacted metrics,
customer names under NDA. Pair with a `░ RESTRICTED` badge.

### 8.4 Live terminal mock

A container styled like a terminal window but embedded inline:

- Header bar: `● Fleet · live` + context label
- Body: monospace topic rows with `[OK]` / `[WARN]` status tags
- Rows animate in with a stagger
- One `[WARN]` row flashes orange on arrival then fades to neutral
- Separator dashed line
- `AI-RCA` block (accent-tinted prefix badge) with typed-in diagnosis

High signal-to-noise ratio. Shows rather than tells what the product
does.

### 8.5 Eyebrow + rule + title — the section starter

Every major section uses this pattern. See Section 4.2.

### 8.6 SectionRail (vertical progress nav)

Fixed left-edge rail (desktop only), shows S.00 through S.0N, current
section highlighted in orange. IntersectionObserver-driven.

**Critical:** labels must be `position: absolute` + `pointer-events:
none` so they don't inflate each button's hit area. A 20px-wide
button with an invisible 200px label next to it creates phantom
click zones.

---

## 9. Anti-patterns (what will break this aesthetic)

- ❌ Any of: **Inter, Roboto, Arial, Helvetica, Poppins, Montserrat,
  Space Grotesk, Geist, Open Sans, system-ui**.
- ❌ Purple-to-blue gradient backgrounds on cards.
- ❌ Emoji in UI copy.
- ❌ Rounded full pill buttons with fat drop shadows.
- ❌ More than one accent color. Orange is it.
- ❌ Generic stock illustrations or isometric SVGs.
- ❌ Testimonial cards with avatar photos and quotation marks.
- ❌ "We ♡ open source" badges, "Trusted by" logo walls with
  Helvetica.
- ❌ Sidescroll carousels.
- ❌ Content stacked in 3-column equal-width cards with identical
  weight — breaks the editorial composition.
- ❌ Cursor: pointer on everything. Only interactive elements get
  the pointer.
- ❌ Continuous rotating backgrounds (the orbital-arcs problem from
  v1 — they were cool but killed the engineering feel).

---

## 10. Applying to Ferronyx Product Site

### 10.1 What to keep verbatim

- All design tokens (colors, fonts, spacing, opacities)
- Typography system (Instrument Serif + IBM Plex Sans + JetBrains
  Mono)
- Orange accent, same hex
- Hairline + rule conventions
- Mono meta label style (uppercase + 0.18em tracking)
- Section numbering `[S.XX]`
- TelemetryBar at top (but with live product metrics instead of
  personal identity)
- Line-art illustration vocabulary (stroke-only, pulse dots,
  registration marks)
- Expand/collapse pattern for detail-heavy sections
- Redaction pattern for customer NDA content
- Reduced-motion fallback

### 10.2 What to adapt

| Area | Portfolio | Ferronyx product site |
|---|---|---|
| **Primary CTA** | "See Ferronyx ↗" | "Start a fleet trial →" / "Book a demo →" |
| **Top nav** | Identity-focused (name, role) | Product-focused (Platform, Docs, Pricing, Blog, Sign in) |
| **Hero** | "Haarvish Chevula." | "The intelligence layer for robotics." (lead with product claim, not founder name) |
| **Sections** | Work / Thesis / Trajectory | Problem / Product / Customers / Pricing |
| **Social proof** | None needed | Add a customer-logo strip, quietly styled |
| **Pricing** | n/a | A single clean pricing grid, 3-4 tiers, mono meta for feature labels |
| **Docs link** | n/a | Prominent in nav — engineers will jump straight to docs |

### 10.3 Recommended Ferronyx page structure

```
[ TelemetryBar — live stats: X robots monitored, Y incidents this
  week, Z customers ]

[ Nav: FERRONYX / Platform · Docs · Pricing · Blog · Sign in ]

S.00  HERO
  "The intelligence layer for robotics."
  Subcopy: real-time ROS2 observability, AI-assisted RCA,
  fleet-wide diagnostics.
  CTA: Start a trial →   Secondary: See docs ↗

S.01  THE PROBLEM
  Hair rule.
  Big italic: "Robot fleets fail silently."
  Three short paragraphs on the fragmentation problem in ROS2
  observability, calibrated with concrete numbers.

S.02  THE PRODUCT
  Live terminal mock (reuse the same animated terminal pattern).
  Shows a real AGV diagnosis.
  Expand-collapse for architecture detail.

S.03  CUSTOMERS (if you have them)
  A quiet logo strip — grayscale, thin. Three short named
  testimonials as pull-quotes in italic serif.

S.04  PRICING
  3 tiers in a grid. Mono feature labels. One
  "Most popular" tag in accent.

S.05  DOCS / GET STARTED
  Minimal. Two big CTAs: Install CLI, Book a demo.

[ Footer: copyright + build meta + mono links ]
```

### 10.4 One illustrative moment per section

Reuse the subject-first rule. For Ferronyx:

- **Hero:** the three-node signal-flow diagram (fleet → cloud →
  engineer's laptop)
- **Problem:** a fragmented topology diagram (scattered log sources,
  no correlation)
- **Product:** the AGV schematic with LIDAR + battery cells, reused
- **Customers:** no illustration — logos do the work
- **Pricing:** a small "tier marker" diagram (tick marks at tier
  boundaries)
- **Docs:** a terminal icon or code-bracket glyph

### 10.5 Voice for Ferronyx specifically

- Every sentence should pass the "would a robotics engineer roll
  their eyes at this" test. No marketing fluff.
- Use ROS2-specific terminology unapologetically: topic, node, tf,
  QoS, DDS. Your audience knows these.
- Prices in USD / INR / EUR as tabular-nums monospace.
- Customer testimonials, if included, get the technical cred first
  (title + company + scale of fleet), then the quote. "Fleet ops
  lead, 450-AMR warehouse" reads better than "Senior Director of
  Robotics Operations."

### 10.6 What NOT to copy from the portfolio

- The "I / me / my" voice — product sites speak about the *product*
  and the *customer*, not the founder.
- The "research / SORA / spacecraft" framing — belongs to the
  personal site, not a product site for robot observability.
- The Mission Patch concept — was cut for a reason, don't resurrect
  it for Ferronyx.

---

## 11. Technical stack (for reference)

- **Build:** Vite 5 + React 18
- **Styling:** Tailwind CSS 3 + CSS custom properties
- **Motion:** framer-motion for React; SMIL inside SVG for pivoted
  rotations
- **Fonts:** Google Fonts (Instrument Serif, IBM Plex Sans,
  JetBrains Mono)
- **Icons:** none — every visual element is a bespoke SVG

Keep the stack the same for Ferronyx unless there's a reason to
change. Next.js is a fine substitute if SEO / SSR matters for the
product site (it does).

---

## 12. Maintenance

This doc should be updated when:

- A new design token is introduced
- A new component pattern is added across 2+ usages
- An anti-pattern is encountered and resolved (add to Section 9)

Not updated for:

- One-off stylistic choices in a single component
- Copy changes
- Asset swaps

The goal is to be thorough enough that a new designer could
recreate the aesthetic without access to the implementation, and
terse enough that it's still scannable a year from now.

---

*End of document.*
