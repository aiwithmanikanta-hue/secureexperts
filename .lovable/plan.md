## New About Us Page

Create a dedicated `/about` route replacing the old in-page About anchor, with all sections provided.

### Routing
- Add `src/pages/About.tsx` and register `<Route path="/about">` in `src/App.tsx`.
- Update `src/components/home/Nav.tsx`: change About link from `/#about` → `/about`, and mark active when `pathname.startsWith("/about")`.
- Remove/replace the existing in-home About section reference (the homepage `#about` anchor stays harmless if present, but nav no longer points to it).

### Page structure (`src/components/about/`)
Reuse existing primitives: `Nav`, `SiteFooter`, `AmbientBackground`, `GlassCard`, `RevealOnScroll`, `MagneticButton`, `useReveal`, design tokens from `styles.css`. No hardcoded colors.

1. **AboutHero** — small label "ABOUT SECURE EXPERTS", H1 "Empowering Smarter Vehicle Security & Fleet Intelligence", subheading, plus a premium product showcase visual on the right (reuse existing V5 device image from `src/assets/index.ts` with parallax/tilt — same treatment as ProductsHero).
2. **WhoWeAre** — two-column: title left, body paragraphs right, on a soft surface panel.
3. **MissionVision** — two GlassCards side-by-side (Mission, Vision) with distinct accent icons (Target, Eye from lucide).
4. **Solutions** — "Our Solutions" 3-column grid of 6 GlassCards with lucide icons (MapPin, Fuel, ShieldCheck, LayoutDashboard, Smartphone, Package), staggered reveal.
5. **WhyChooseUs** — "Why Businesses Choose Secure Experts" — 10 compact icon chips/cards in a responsive grid (2/3/5 cols) with check icon + label.
6. **IndustriesBento** — Bento grid (asymmetric spans on lg) listing the 9 industries, each tile with an icon and subtle gradient surface.
7. **Commitment** — centered statement section on a surface-4 panel with security-grid backdrop.
8. **AboutCTA** — mirrors `FinalCTA` styling: heading "Let's Build Smarter Mobility Together", copy, two `MagneticButton`s — WhatsApp (uses `WhatsAppButton` / `whatsapp.ts` helper) and Contact (`/#contact`).

### Design
- Premium light theme, generous spacing (`py-24`–`py-32`), reveal-on-scroll, hover lift, glassmorphism via `GlassCard`, sweep highlights.
- Fully responsive (1 col mobile → 2/3 col tablet → bento on lg).
- SEO: page-level `<title>` "About — Secure Experts", meta description ≤155 chars, single H1, semantic landmarks, alt text on hero image, Organization JSON-LD.

### Files
- add `src/pages/About.tsx`
- add `src/components/about/{AboutHero,WhoWeAre,MissionVision,Solutions,WhyChooseUs,IndustriesBento,Commitment,AboutCTA}.tsx`
- edit `src/App.tsx` (route)
- edit `src/components/home/Nav.tsx` (link + active state)

No backend or catalog changes.
