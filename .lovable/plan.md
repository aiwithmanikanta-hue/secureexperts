## Mobile Optimization — Secure Experts

A non-destructive pass that tunes layout, type, spacing, and touch targets for ≤768px while preserving the current design language, colors, branding, content, WhatsApp/AI chatbot behavior, and product info.

### Guardrails
- No color/brand/logo/content edits.
- No changes to WhatsApp or Chatbot logic — only their mobile positioning and safe-area padding.
- All work in frontend presentation only (CSS classes, fluid type, conditional spans).

### Global

- `index.html` viewport already correct. Add `overflow-x: hidden` safeguard on `body/html` in `src/styles.css` to kill any horizontal scroll.
- Add fluid type utilities in `styles.css`:
  - `--fs-hero: clamp(2rem, 6vw + 0.5rem, 5.5rem)`
  - `--fs-h2: clamp(1.75rem, 3.5vw + 0.5rem, 3rem)`
  - `--fs-h3: clamp(1.25rem, 1.5vw + 0.75rem, 1.5rem)`
  - apply via small helper classes (`text-fluid-hero`, etc.) so we only swap classnames, not rewrite hierarchy.
- Replace fixed `px-6` page gutters with `px-4 sm:px-6` site-wide where currently `px-6`.
- Standardize CTA min-height: `h-12 sm:h-12` is fine on desktop; ensure mobile CTAs are `min-h-[48px]` and full-width inside narrow stacks (`w-full sm:w-auto` on the primary CTAs in Hero, AboutHero, AboutCTA, FinalCTA, ProductDetailPage hero).
- Reduce mobile section padding from `py-24/28/32` to `py-16 sm:py-24 md:py-28` across Hero, Contact, AboutPage sections, Solutions, WhyChooseUs, IndustriesBento, Commitment, AboutCTA, FinalCTA.

### Navbar (`src/components/home/Nav.tsx`)
Already has hamburger + drawer; refine:
- Drawer: add slide-in transform (`translate-x-full → translate-x-0`) in addition to opacity for the premium feel.
- Add WhatsApp CTA link inside the mobile drawer below "Get Quote".
- Increase tap area of menu links to `py-5` and ensure each is ≥48px tall.
- Ensure body scroll-lock already present continues to work.

### Hero (`src/components/home/Hero.tsx`)
- Stack order is already vertical. Reduce mobile top padding (`pt-28` on mobile vs `pt-36`).
- Floating feature chips and "Live · 24 satellites" widget are already `hidden md:flex` — keep.
- Cursor parallax is mouse-only; safe on mobile. Ensure SignalWaves/blob blurs are toned down on mobile (`blur-2xl sm:blur-3xl`).
- CTAs: stack full-width on `<sm`.

### Products list (`src/components/products/ProductsListPage.tsx`, `ProductCard.tsx`)
- Force single column `<sm`, 2-col `sm`, 3-col `lg`. Increase card image area on mobile and ensure `object-contain` with adequate aspect ratio.
- Cards full-width with comfortable padding; CTA full-width on mobile.

### Product Detail (`src/components/products/ProductDetailPage.tsx`)
- Hero is `lg:grid-cols-2` — already stacks. Move image first on mobile via `order-1 lg:order-2` and text `order-2 lg:order-1` so the user sees the product image at the top per spec.
- CTAs (`WhatsApp`, `Request Quote`, `Request Demo`) become full-width on `<sm` and stack.
- Feature/Spec/FAQ/CTA sections already vertical. Tighten gutters and font sizes; ensure no `whitespace-nowrap` truncation in spec rows.

### About Page (`src/components/about/AboutPage.tsx`)
- AboutHero: stack with headline first, image card second, CTAs third (already). Image card padding reduced (`p-6 sm:p-10`).
- WhoWeAre, MissionVision, Solutions, WhyChooseUs, Commitment: keep single column `<md`; adjust paddings and large round radii (`rounded-[28px] sm:rounded-[36px]`).
- Industries Bento: convert to **swipeable carousel on mobile** using a horizontal snap scroller (`flex overflow-x-auto snap-x snap-mandatory` with `snap-center` cards, `min-w-[78%]`), no library needed. Keep desktop bento grid as-is via `md:` breakpoint. Hide scrollbar with existing utility or new `.no-scrollbar` rule. Each card retains its image fully visible with `object-cover` and a sensible mobile aspect (`aspect-[4/3]`). Indian vehicle imagery preserved.

### Contact (`src/components/home/Contact.tsx`)
- Reorder on mobile to: Form → Office Details → Map → WhatsApp CTA, using `order-*` classes inside the existing grid.
- Inputs already `h-12`; keep. Ensure correct `inputMode`/`type` attributes: `type="tel" inputMode="tel"` on phone, `type="email" inputMode="email"` on email.
- Map iframe: enforce `aspect-video sm:aspect-[4/3]` and `w-full` to avoid overflow.

### Floating actions (`src/components/chatbot/FloatingActions.tsx`)
- Move from `bottom-6 right-6` to `bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))]` so iOS notch/home-bar safe area is respected.
- Ensure proper vertical spacing between WhatsApp FAB and Chatbot FAB (`gap-4` mobile, `gap-5` desktop) so neither covers content.

### Chatbot window (`src/components/chatbot/Chatbot.tsx`)
- On `<sm`, render full-width sheet anchored bottom with `max-h-[85vh]`, rounded only on top corners, safe-area padding bottom. Desktop chat panel unchanged.
- Input row: 16px font-size to prevent iOS zoom on focus.

### Images / performance
- Add `loading="lazy"` to all non-LCP images (industries, product list cards, gallery showcase). Hero device stays eager.
- Add `decoding="async"` and explicit `width`/`height` where missing to stabilize CLS.
- No format conversion (no build-system change requested); keep current PNGs.

### Animations on mobile
- In `styles.css`, wrap heavy keyframes (`aurora-drift`, `shimmer`, multiple `ambient-blob`s) with `@media (max-width: 640px)` overrides that disable or shorten them, and respect `prefers-reduced-motion` (already partly honored).

### Files touched
- `src/styles.css` — fluid type utilities, overflow guard, mobile animation throttles, `.no-scrollbar`.
- `src/components/home/Nav.tsx` — slide-in drawer + WhatsApp link.
- `src/components/home/Hero.tsx` — paddings, CTA stacking.
- `src/components/home/Contact.tsx` — order classes, input modes, map aspect.
- `src/components/home/FinalCTA.tsx`, `SiteFooter.tsx`, `Features.tsx`, `WhyUs.tsx`, `Trust.tsx`, `Stats.tsx`, `ProductBenefits.tsx`, `ProductShowcase.tsx`, `Specs.tsx`, `LiveTrackingDemo.tsx` — section paddings + CTA width fixes.
- `src/components/products/ProductsListPage.tsx`, `ProductCard.tsx`, `ProductsHero.tsx` — single-col mobile, larger images, CTA width.
- `src/components/products/ProductDetailPage.tsx` — order swap, CTA stacking, gutter trims.
- `src/components/about/AboutPage.tsx` — bento → mobile carousel, paddings, image card tightening.
- `src/components/chatbot/FloatingActions.tsx` — safe-area + mobile gap.
- `src/components/chatbot/Chatbot.tsx` — mobile bottom-sheet sizing, 16px input.

### Out of scope (explicit)
- No content/copy edits.
- No new pages, no router changes.
- No backend changes.
- No image regeneration or asset conversion (WebP, vite-imagetools) — would change build config; can be a follow-up if you want a perf-only PR later.
- No PageSpeed audit run as part of this task; targets are best-effort via lazy-loading + dimensions.
