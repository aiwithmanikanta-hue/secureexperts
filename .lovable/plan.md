# Add Fuel Sensor & GPS Tracking Software

Adds two new products to the catalog and introduces a structured "spec sheet" layout that surfaces the labeled fields you provided (Device Type, Technology, Connectivity, Power Supply, Installation, etc.) on every product detail page. Existing 3 products remain in place and gain the same structured fields so the catalog stays consistent.

## What changes

**1. Catalog (`src/components/products/catalog.ts`)**
- Add two new products: `fuel-sensor`, `gps-tracking-software`.
- Extend the `Product` type with a `details` object holding the labeled fields:
  - `deviceType`, `technology`, `workingCondition`, `connectivity`, `powerSupply`, `installation`, `accuracy?`, `accessibility?` (array, for software)
  - `applications` (array — "Suitable For")
- Populate `details` for all 5 products using the exact wording from your spec.
- Keep existing `features`, `specs`, `overview`, `useCases`, `faqs` intact for the original 3 (no copy changes).
- For the 2 new products, write `overview`, `features`, `faqs` in the same voice as existing products.

**2. Product detail page (`src/components/products/ProductDetailPage.tsx`)**
- Add a new "Specifications" bento block near the top that renders the `details` object as a clean label/value grid (glass card, 2-column on desktop, single column on mobile). Order matches your spec: Device Type → Technology → Working Condition → Connectivity → Power Supply → Installation → Accessibility (software only).
- Add a **Request Quote** button next to the existing WhatsApp button in the hero CTA row. Both open WhatsApp; "Request Quote" uses a prefilled message: `Hello Secure Experts, I'd like to request a quote for [Product Name]. Please share pricing and details.`
- "Applications / Suitable For" gets its own chip row, replacing/augmenting the current `useCases` section so the label matches your spec.

**3. Product card (`src/components/products/ProductCard.tsx`)**
- Add a "Request Quote" link/button alongside the existing WhatsApp button on each card so the action is consistent with the detail page.

**4. Products list (`src/components/products/ProductsListPage.tsx` + `ProductsHero.tsx`)**
- Render all 5 products in the existing bento grid. No layout overhaul — just two more cards flowing into the grid.

**5. Images**
- Use neutral placeholder images for Fuel Sensor and GPS Tracking Software (simple branded gradient tiles in `src/assets/`) until you upload real assets. Image swap later is a one-line change in `catalog.ts`.

**6. WhatsApp helper (`src/components/products/catalog.ts`)**
- Add `openProductQuoteWhatsApp(name)` alongside the existing `openProductWhatsApp(name)` so the "Request Quote" CTA has a distinct prefilled message.

## Out of scope
- No color, font, logo, or brand changes.
- No backend, no quote form, no email — Request Quote goes through WhatsApp.
- No changes to Home, Nav, Footer, Chatbot, or the existing 3 products' copy.

## Files touched
- `src/components/products/catalog.ts` (edit: extend type, add 2 products, add quote helper)
- `src/components/products/ProductDetailPage.tsx` (edit: spec grid + Request Quote button)
- `src/components/products/ProductCard.tsx` (edit: Request Quote button)
- `src/assets/index.ts` (edit: export 2 new placeholder images)
- `src/assets/fuel-sensor.jpg`, `src/assets/gps-software.jpg` (add: placeholders)
