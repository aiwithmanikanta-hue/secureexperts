## Plan: Secure Experts — Precision Blueprint homepage

Build a single-page homepage at `/` with the locked Precision Blueprint design tokens (deep black background `#05070a`, silver-blue accent `#38bdf8`, Inter + JetBrains Mono, italic uppercase display headlines, blueprint grid, animated floating product, technical overlays).

### Design tokens (verbatim from selected direction)
Port the prototype's tokens into `src/styles.css` under `@theme inline` mapping to root variables. Add `@keyframes float`, `pulse-glow`, `scan-line` and `.blueprint-grid` utility. Load Inter + JetBrains Mono via `<link>` in `__root.tsx` head (never `@import` URL).

### Sections (composition matches prototype, with all user-required sections added)
1. **Sticky nav** — Logo "Secure Experts" (extrabold italic uppercase), menu: Home, Product, Features, Specs, About, Contact, "Get Quote" CTA. Blurred translucent.
2. **Hero** — Blueprint grid bg + glow. Left: status pill, oversized italic uppercase headline ("Advanced GPS Tracking Built for Security, Control, and Confidence" — adapted to direction's stacked, accent-second-line style), subhead, two CTAs (Explore Product / Request Demo), trust indicator row. Right: floating product render in surface card with technical coordinate overlays + crosshair lines + pulse glow.
3. **Product Showcase** — Premium framed product display with 5 benefit points (real-time tracking, compact design, secure performance, easy installation, accurate monitoring) in mono numbered list style.
4. **Key Features grid** — 6 feature cards in the prototype's hairline-bordered grid (01 // Tracking … 06 // Trust) with Lucide icons + animated underline bar.
5. **Why Secure Experts** — split section: italic headline + 5 pillar cards (quality, safety focus, tech-driven, professional support, reliability).
6. **Specifications** — exact prototype layout: left intro + bullet pills, right framed mono spec table (Device, Type, Tracking, Power, Size, Connectivity, Usage).
7. **Trust / Social Proof** — 3 testimonial cards + row of 4 trust badges ("Reliable Products", "Customer First", "Secure Solutions", "Professional Support").
8. **Final CTA** — Bold centered "Upgrade Your Security with BLTDAS140" with two buttons (Contact / Buy Now) on glow backdrop.
9. **Footer** — As in prototype, with brand, Company, Legal, Contact columns, social icons row, mono copyright.

### Implementation
- Replace `src/routes/index.tsx` with the new homepage. Break into components under `src/components/home/`: `Nav`, `Hero`, `ProductShowcase`, `Features`, `WhyUs`, `Specs`, `Trust`, `FinalCTA`, `Footer`.
- Update `<head>` in route: title "Secure Experts — BLTDAS140 GPS Tracking Device", description, og tags, og:image (generated hero product render).
- Update `__root.tsx`: add Google Fonts `<link>` tags (preconnect + Inter + JetBrains Mono). Keep `<Outlet />`.
- Update `src/styles.css`: add the theme tokens, keyframes, and `.blueprint-grid` utility via `@utility`. Keep existing shadcn token block (untouched if needed) — but since this is a fresh dark brand, replace `:root` color values with the direction's palette and remove the unused `.dark` variant complexity; keep `@theme inline` mapping so shadcn primitives still work.
- Motion: Tailwind animate utilities + the custom `float` / `pulse-glow` keyframes. Add scroll-reveal via simple CSS (`animate-fade-in` on mount) — no heavy library required.
- Icons: `lucide-react` (Satellite, ShieldCheck, Battery, Cpu, Lock, Zap, MapPin, etc.).

### Assets (generated images)
- `src/assets/bltdas140-hero.jpg` — sleek matte-black GPS tracker, single blue LED, studio lighting (premium tier for product clarity).
- `src/assets/bltdas140-showcase.jpg` — angled product detail shot for showcase section.
- Both also serve as og:image.

### Technical notes
- TanStack Start route file pattern; no router changes.
- All semantic colors via tokens (`bg-background`, `text-accent`, etc.) — no raw hex in JSX.
- Single `<h1>` in hero. Alt text on images. Responsive: stack hero on mobile, grids collapse to single column, nav menu hidden < md (keep CTA visible).
- No backend, no auth, no Cloud needed.