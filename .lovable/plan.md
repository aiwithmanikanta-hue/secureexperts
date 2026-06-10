## Plan: Light Premium Redesign — Secure Experts

Replace the current dark Precision Blueprint with a light, minimalist Apple/Linear/Stripe-inspired homepage. The BLTDAS140 remains the visual hero.

### Design tokens (rewrite `src/styles.css`)
- Background: pure white `#FFFFFF`, surfaces `#FAFAFA`, `#F5F5F7`, `#F2F4F7`.
- Text: `#111111` foreground, `#1D1D1F` graphite, `#6E6E73` muted.
- Accent: soft blue `#0A84FF` (primary action) with tint surfaces `#EAF4FF`, `#F0F7FF`.
- Borders: hairline `#E5E7EB` and `rgba(0,0,0,0.06)`.
- Radius scale bumped (`--radius: 1rem`) for soft rounded corners.
- Typography: Inter via `<link>` (already loaded; keep). Drop JetBrains Mono from heavy use. Headings: tight tracking, font-weight 600/700 (not italic uppercase). Body: regular, generous leading.
- Soft shadows token: layered low-opacity (`0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.06)`).
- Remove dark `:root` palette; remove the `.dark` block from active use; keep blueprint-grid utility but replace with a subtle dot-grid utility (`.dot-grid`) for the hero background.
- Keep keyframes `float-y`, `reveal-up`, add gentle `drift` for particles and `shimmer` for glass reflection.

### Section rebuild (every component under `src/components/home/` rewritten)
1. **Nav** — translucent white with backdrop-blur, hairline bottom border on scroll. Logo wordmark, menu (Home/Product/Features/Specs/About/Contact), pill-shaped primary CTA "Get Quote".
2. **Hero** — Centered or split layout, generous whitespace. Eyebrow chip ("Introducing BLTDAS140"). H1 "Advanced GPS Security for the Modern World". Subhead. Two CTAs (filled blue "Explore Product", ghost "Contact Sales"). Trust pills row below. Floating product render inside a frosted-glass card with light reflection sweep, subtle drop shadow, soft blue radial halo, gentle floating animation. Background: soft gradient + dot grid + a few drifting particle dots.
3. **Product Showcase** — Asymmetric bento-style: large product image card + 3 smaller benefit tiles (Real-time, Compact, Secure). Frosted glass cards on off-white surface.
4. **Core Features** — Bento grid (2x3 or mixed sizes): 6 features with simple line icons, short labels, light dividers. Apple-style oversized headline above ("Engineered for clarity.").
5. **Product Benefits** — Three big rows alternating image/text (compact, accurate, reliable) with thin dividers between.
6. **Why Secure Experts** — 4 minimal cards in a row on light surface, each with thin icon + one-line statement.
7. **Technical Specifications** — Clean two-column spec layout (no mono table). Left: heading + intro. Right: spec rows separated by hairlines, label/value pairs.
8. **Customer Trust** — Centered headline + 3 testimonial cards (off-white) with avatar disc, name, role. Below: row of 4 trust badges with light icons.
9. **Premium CTA** — Centered headline on F2F4F7 surface inside a giant rounded card with soft glow. Two buttons.
10. **Footer** — Minimal. Wordmark, 4 link columns, social row, copyright. Hairline divider. Off-white background.

### Motion
- All reveal animations via CSS `@keyframes reveal-up` triggered by `IntersectionObserver` hook (small `useReveal()` util) → adds `data-revealed` to elements, CSS handles fade+slide.
- Hero product: float + shimmer reflection diagonal sweep every ~6s.
- Hover micro-interactions: cards lift 2px with shadow grow; CTA buttons subtle scale 1.02.
- Background: 6–8 tiny absolute-positioned dots with slow `drift` animation in the hero only — calm, not distracting.

### Files touched
- `src/styles.css` — rewrite tokens, keyframes, utilities.
- `src/routes/index.tsx` — minor: keep route, swap og:image alt copy if needed.
- `src/components/home/Home.tsx` — same shell, light bg class.
- Rewrite: `Nav.tsx`, `Hero.tsx`, `ProductShowcase.tsx`, `Features.tsx`, `WhyUs.tsx` (renamed concept, same file), `Specs.tsx`, `Trust.tsx`, `FinalCTA.tsx`, `SiteFooter.tsx`.
- Add: `src/components/home/useReveal.ts` (intersection-observer hook).
- Add: `src/components/home/ProductBenefits.tsx` (new section between Features and WhyUs).
- Update `Home.tsx` to include `ProductBenefits`.

### Assets
- Keep existing `bltdas140-hero.jpg` and `bltdas140-showcase.jpg` — both work on light backgrounds (matte black device pops on white).

### Quality guardrails
- No dark mode toggling; pure light theme.
- All colors via semantic tokens (no raw hex in JSX).
- Generous spacing (`py-32` / `py-40` between sections on desktop).
- Single H1 in hero. Alt text on images. Lazy-load non-hero images.
- Mobile: stacks cleanly; nav collapses menu (CTA always visible); grids → single column.