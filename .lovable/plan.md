# Products Page + Detail Pages

Build a luxury, light-themed Products section showcasing the three Secure Experts devices, plus an individual detail page per product.

## Routes (file-based, TanStack Start)

```
src/routes/products.tsx                          -> /products (listing + hero)
src/routes/products.vltd-4g-device.tsx           -> /products/vltd-4g-device
src/routes/products.vltd-2g-device.tsx           -> /products/vltd-2g-device
src/routes/products.v5-basic-gps-device.tsx      -> /products/v5-basic-gps-device
```

Each route gets its own `head()` with distinct title / description / og tags. Reuse the existing `Nav`, `SiteFooter`, `AmbientBackground`, and `FloatingActions` (WhatsApp + chatbot) for consistent shell.

Add "Products" link to the existing `Nav` menu pointing to `/products` (replacing the current `#product` anchor on the home page).

## Shared data + helpers

`src/components/products/catalog.ts` — single source of truth:
- `slug`, `name`, `tagline`, `badge` ("Recommended" | "Value Choice" | "Starter"), `summary`, `highlights[]`, `overview` (2–3 paragraphs), `features[{icon,title,desc}]` (6), `specs[{label,value}]`, `useCases[]`, `faqs[{q,a}]`, `image` (asset).
- `buildProductWhatsAppMessage(name)` → "Hello Secure Experts, I am interested in {name}. Please share details, pricing, and demo information." Uses existing `openWhatsApp` from `src/components/chatbot/whatsapp.ts`.

Product images: generate 3 premium product renders (light background, soft shadow) via image generation and store as CDN assets:
- `src/assets/product-vltd-4g.png.asset.json`
- `src/assets/product-vltd-2g.png.asset.json`
- `src/assets/product-v5-basic.png.asset.json`

## Components

`src/components/products/`
- `ProductsHero.tsx` — typing-animation headline (reuses existing `Typewriter`), subheadline, 2-line brand statement, "Talk on WhatsApp" + "Request Demo" CTAs, soft animated blur background.
- `ProductGrid.tsx` — responsive 3-column grid (1-col mobile, 2-col md, 3-col lg). Flagship (VLTD 4G) spans wider on lg via grid layout.
- `ProductCard.tsx` — image with light sweep, badge pill, name, short description, 4 highlights (check icons), "View Details" link (uses `<Link to>`), WhatsApp quick-action button. Uses existing `GlassCard` + `useTilt` for subtle 3D tilt + hover lift + border glow.
- `ProductDetailHero.tsx` — name, floating product image, summary, WhatsApp + Request Demo buttons.
- `ProductOverview.tsx` — paragraphs + benefit cards.
- `ProductFeatures.tsx` — 6 feature cards w/ lucide icons, hover lift.
- `ProductSpecs.tsx` — clean two-column spec list in glass cards.
- `ProductUseCases.tsx` — chip/card grid of vehicle/customer types.
- `ProductComparison.tsx` — table comparing all 3 products on key dimensions, highlighting the current product's column.
- `ProductFAQ.tsx` — accordion (shadcn `accordion` already in project) covering install / tracking / WhatsApp / warranty / usage.
- `ProductCTA.tsx` — final band with WhatsApp + Get Quote + Book Demo buttons.

Each detail route composes: `Nav` → `ProductDetailHero` → `ProductOverview` → `ProductFeatures` → `ProductSpecs` → `ProductUseCases` → `ProductComparison` → `ProductFAQ` → `ProductCTA` → `SiteFooter`. Reuses `RevealOnScroll`, `MagneticButton`, `ParallaxImage`, `useCountUp`, existing animation utilities.

## Visual system

- Background: `bg-background` (existing off-white token), generous spacing, rounded-3xl cards, soft shadows via existing `shadow-lift`.
- Accent: existing primary blue tokens. No new color tokens needed.
- WhatsApp buttons: emerald (matches existing `FloatingActions` styling).
- Typography: existing Inter stack. Large display headings, tracking-tight.
- All section reveals via `RevealOnScroll`; card tilt via `useTilt`; light sweep via existing pattern in `GlassCard` / `ParallaxImage`.

## WhatsApp integration

Every CTA labeled "WhatsApp" or "Talk on WhatsApp" calls `openWhatsApp(buildProductWhatsAppMessage(product.name))`. The fixed bottom-right floating WhatsApp button remains via existing `FloatingActions` in `__root.tsx`.

## Nav update

`src/components/home/Nav.tsx`: change the "Products" entry from `#product` (in-page anchor) to a real `<Link to="/products">`. Keep other entries as-is (they're home-page anchors). On non-home routes, anchor links route back to `/#section`.

## Out of scope

- No backend changes; no new tables.
- No changes to existing home sections beyond the nav link.
- No dark theme variant — light theme only as specified.
