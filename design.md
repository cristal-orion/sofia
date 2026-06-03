# Design — SofIA "Vivid Narrative"

Locked design system. Future Hallmark runs read this file first; pages defer
to it. Amend intentionally — the file is the rule. `tokens.css` is the
machine source of truth; this file is the human one.

## System
- Genre · modern-minimal (warm)
- Macrostructure · Tabbed Channels (4 equal pillars: Telefono · Chat · WhatsApp · Agenda, each detachable for per-niche A/B verticals)
- Theme · custom (vibe: "warm, human, tech-but-accessible")
- Axes · light paper / geometric-sans display / warm accent
- Voice · warm but professional; no robotic/dystopian AI clichés; accessible to low-digital-literacy users (Italian, "tu")

## Logo / wordmark
- "SofIA" set in **Syne 800 (ExtraBold)**, letter-spacing −0.02em. "IA" in coral, "Sof" in ink.
- Mark: rounded-square coral tile (`--radius` 9px) with a white dot.

## Tokens (canonical · `tokens.css` is the source of truth)
```css
:root {
  /* brand */
  --coral:      #ff5f49;  /* primary accent (orange) */
  --coral-600:  #ed4a33;  /* hover */
  --coral-700:  #cf3a25;  /* pressed / coral text on light */
  --coral-100:  #ffe4dc;  /* tint */
  --coral-050:  #fff1ec;

  --green:      #4a5d50;  /* secondary (forest) */
  --green-700:  #3a4a40;
  --green-900:  #28332c;  /* footer / deep surfaces */
  --green-100:  #dde6df;
  --green-050:  #eef2ee;

  --cream:      #f9f5e3;  /* page paper */
  --cream-soft: #fdfbf1;
  --taupe:      #88726f;  /* muted text / neutral */
  --taupe-300:  #b6a6a3;
  --taupe-050:  #ece3e1;
  --taupe-700:  #6b5754;

  /* semantic */
  --bg:        var(--cream);
  --surface:   #fffefa;
  --surface-2: var(--cream-soft);
  --ink:       #241f1d;   /* headings / body */
  --ink-soft:  #4c4441;
  --muted:     var(--taupe);
  --line:      rgba(36, 31, 29, 0.10);
  --accent:    var(--coral);

  /* type */
  --font-display: "Syne", system-ui, sans-serif;          /* headings + wordmark, 700/800 */
  --font-body:    "Plus Jakarta Sans", system-ui, sans-serif; /* body + labels, 400–800 */
  /* NEVER Inter. */
  /* Fluid type scale --step--1 … --step-5; 4-pt spacing; see tokens.css.    */

  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-reveal:  0.7s;

  --radius-sm: 12px;  --radius: 18px;  --radius-lg: 28px;  --radius-pill: 999px;
}
```

## CTA voice
- Primary · fill `--coral` · pill radius · `0.95rem 1.55rem` · coral glow shadow
- Inverted · fill `--green` · pill · for secondary-but-solid actions
- Outline / Ghost · transparent · `--line` border, coral on hover · same pill radius

## Motion stance
- Restrained: reveal-on-scroll (CSS transition orchestrated by GSAP ScrollTrigger, robust against frozen tabs) · tab-marker slide · one FAB pulse. Animate transform/opacity only.
- Reduced-motion fallback · reveals show instantly, loops off.

## Exports
`tokens.css` (in this project) is the source of truth. For Tailwind v4
`@theme`, DTCG `tokens.json`, or shadcn/ui CSS variables, ask *"extend
design.md with Tailwind exports"* — Hallmark will append them per
`export-formats.md`.
