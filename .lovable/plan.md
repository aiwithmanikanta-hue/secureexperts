## Goal

Layer a cohesive, system-level premium motion language across the entire homepage — building on the cinematic hero motion already in place — so every component (buttons, cards, links, images, backgrounds) responds intelligently and feels Apple/Linear/Stripe-level expensive.

## What's already done (keep, don't redo)

- Hero cursor parallax on the product + floating info cards + SVG connection lines
- Drifting ambient blobs, dual shimmer reflection sweeps, slow `float-y`
- Count-up stats in Product Benefits
- Light-wave background + breathing primary CTA in Final CTA
- 3D tilt on the main Product Showcase card
- `reveal-up` on-scroll system via `useReveal` IntersectionObserver
- `prefers-reduced-motion` guard

## What this plan adds

### 1. Motion primitives (new hooks)

- `useMagnetic.ts` — cursor-attraction for buttons (translate toward cursor within radius, springs back on leave; capped at ~8px).
- `useMouseParallax.ts` — section-scoped mouse tracker that publishes `--mx` / `--my` CSS vars so background gradients/blobs can drift with the cursor without React re-renders.
- `useScrollProgress.ts` — section-scoped scroll progress (0→1) for image scale-in / parallax zoom.
- Extend `useReveal.ts` with a `delay` argument so card grids can stagger naturally (60–90ms apart).

### 2. Reusable motion components

- `<MagneticButton>` — wraps primary/secondary CTAs. Adds magnetic translate, 1.03 scale, soft glow expansion, label nudge (2–3px), 250ms timing. Replaces raw `<a>` CTAs in Hero, FinalCTA, Nav, ProductShowcase.
- `<GlassCard>` — frosted card with tilt-on-hover, light-sweep reflection on hover, dynamic shadow depth, conditional border-glow. Used by Features, WhyUs, Trust, ProductShowcase secondary cards.
- `<RevealOnScroll delay>` — thin wrapper around `useReveal` for stagger.
- `<ParallaxImage>` — wraps product images; scales 1→1.06 as section enters viewport, with a one-time light-sweep on first reveal.

### 3. Global motion utilities (append to `src/styles.css`)

New `@utility` classes + keyframes:
- `mesh-bg` — slow-shifting multi-radial mesh gradient (uses `--mx`/`--my` for cursor drift, 30s animated background-position).
- `glass-premium` — refined glass: stronger blur, inner highlight, hover-only border-glow ring.
- `light-sweep` — on-hover diagonal sweep across cards/images (only triggers via `:hover` to stay calm).
- `magnetic-glow` — soft expanding box-shadow ring keyed to a `--pulse` state.
- `link-underline` — animated underline growth for in-content links and nav items.
- `image-zoom` — `scale-105` on hover with 700ms cubic-bezier; pairs with `light-sweep`.
- Keyframes: `mesh-shift`, `aurora-drift`, `pulse-ring`, `signal-wave` (concentric GPS rings).

### 4. Section-by-section upgrades

**Nav**
- Magnetic primary CTA, animated underline on nav links, subtle scale on logo hover.

**Hero**
- Add concentric `signal-wave` rings behind product (3 expanding rings, 4s loop, very low opacity).
- Replace primary CTA with `<MagneticButton variant="primary">` (adds magnetic + breathing glow on idle).
- Section gets `mesh-bg` layer for slow mesh-gradient motion that also reacts to cursor (very subtle).

**ProductShowcase**
- Convert the three small feature cards to `<GlassCard>` (tilt + hover light sweep + border glow).
- Main image becomes `<ParallaxImage>` (scroll-driven scale 1→1.05).
- Stagger card reveals 80ms apart.

**Features (the 2×3 bento)**
- Convert each tile to `<GlassCard>` with tilt + hover glow + icon micro-bounce.
- Stagger reveals.

**ProductBenefits**
- Each row reveals individually with stagger; stat number gets a subtle scale pulse the moment count-up completes.

**WhyUs**
- Cards become `<GlassCard>` with lift + dynamic shadow; staggered reveal.

**Specs**
- Two-column spec rows reveal row-by-row (60ms stagger) as they enter viewport.

**Trust**
- Testimonial cards: stack-in animation (slight Y + scale from 0.98), then float gently on hover.
- Trust badges fade in with stagger, hover-scale 1.05.

**FinalCTA**
- Primary CTA upgraded to `<MagneticButton>` (keeps breathing glow already in place).
- Add slow aurora drift behind the card.

**SiteFooter**
- Link underline grow on hover; subtle social-icon micro-movement.

### 5. Entry/loading sequence

A short (1.6s) intro overlay shown once per session (localStorage flag):
1. White overlay with centered Secure Experts wordmark fades in (300ms)
2. Wordmark fade-out + overlay scales away (400ms)
3. Hero content runs its existing `reveal-up` cascade (already staggered)

Keeps it minimal, dismissable instantly on `prefers-reduced-motion` or repeat visits.

### 6. Background motion system (global)

- Add a single fixed-position decorative layer in `Home.tsx` (`-z-20`, pointer-events-none) holding two huge slow-drifting blurred gradient blobs — provides continuous low-level ambient motion behind all sections without each section needing its own.

## Technical details

### Files to add
- `src/components/home/useMagnetic.ts`
- `src/components/home/useMouseParallax.ts`
- `src/components/home/useScrollProgress.ts`
- `src/components/home/MagneticButton.tsx`
- `src/components/home/GlassCard.tsx`
- `src/components/home/ParallaxImage.tsx`
- `src/components/home/RevealOnScroll.tsx`
- `src/components/home/SignalWaves.tsx` (the concentric rings behind hero device)
- `src/components/home/AmbientBackground.tsx` (global drifting blobs)
- `src/components/home/IntroOverlay.tsx`

### Files to edit
- `src/styles.css` — add utilities + keyframes listed above
- `src/components/home/Home.tsx` — mount `<AmbientBackground />` + `<IntroOverlay />`
- `src/components/home/Nav.tsx` — magnetic CTA, animated underlines
- `src/components/home/Hero.tsx` — `<SignalWaves />`, magnetic CTAs, mesh layer
- `src/components/home/ProductShowcase.tsx` — `<GlassCard>` + `<ParallaxImage>`
- `src/components/home/Features.tsx` — `<GlassCard>` + stagger
- `src/components/home/ProductBenefits.tsx` — stagger + stat pulse on complete
- `src/components/home/WhyUs.tsx` — `<GlassCard>` + stagger
- `src/components/home/Specs.tsx` — row stagger
- `src/components/home/Trust.tsx` — stack-in cards + badge stagger
- `src/components/home/FinalCTA.tsx` — magnetic CTA, aurora drift
- `src/components/home/SiteFooter.tsx` — link underline utility

### Performance & accessibility
- All cursor/scroll handlers use `requestAnimationFrame` throttling and write to `transform`/CSS vars only (no layout thrash)
- All animations honor `prefers-reduced-motion` (already global rule in styles.css)
- IntersectionObserver `unobserve` after first reveal — no idle listeners
- Magnetic/tilt listeners attached per-element and cleaned up on unmount
- No third-party motion libraries — pure React + CSS to keep bundle lean

### Animation timing language (consistent across system)
- Hover micro: 250ms `cubic-bezier(0.16, 1, 0.3, 1)`
- Reveal: 900ms same curve
- Ambient loops: 7–24s `ease-in-out`
- Magnetic spring: 350ms with `cubic-bezier(0.22, 1, 0.36, 1)`

## Out of scope (intentionally)
- No new pages or routes
- No copy or layout changes — purely motion + interaction polish
- No new images
- No third-party animation libraries (Framer Motion / GSAP) — CSS + small hooks only

## Acceptance feel
Every hover, scroll, and mouse movement produces a small, refined response. Nothing flashes, spins fast, or distracts. The page reads as a single coordinated motion system — luxury technology product launch, not a website.