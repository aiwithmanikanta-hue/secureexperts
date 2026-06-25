# Services Page — Image Quality, Alignment & Loading Fix

Scope: only image-related changes on `/services`. No design, layout, color, typography, or spacing changes.

## Problems found in current code

1. **`IndustriesGrid.tsx`** — uses 10 Unsplash hotlinks. Several IDs are broken/return 404 (e.g. construction `1581094271901-8022df4466f9`, mining, government, agriculture variants), and **Logistics and Fuel Tankers reference the exact same Unsplash photo** (duplicate image). Hotlinks are also unreliable in production.
2. **`IndustriesChecklist.tsx`** — single Unsplash hotlink for the side illustration; same risk of 404 / inconsistent quality.
3. **No `width`/`height` on `<img>` tags** in industry/checklist cards → CLS as Unsplash loads.
4. **No explicit `decoding="async"` / `fetchpriority`** hints.
5. Aspect-ratio is set on the wrapper (`aspect-[4/3]`), which is good, but the images themselves should declare intrinsic dimensions to fully eliminate layout shift.
6. Other Services-page components (`ServicesHero`, `ServiceCategories`, `TechStack`, `PlatformBento`, `FuelAnalytics`, `WhyChoose`, `ServicesCTA`) use icons/SVGs only — no raster images to fix. They will be re-checked but not modified unless an issue is found.

## Fix plan

### 1. Generate 11 high-quality, on-brand images (Lovable image generator, premium-quality photographic style, 1600×1200 = 4:3, .jpg)

Stored under `src/assets/services/` and externalized via `lovable-assets` so the repo stays light and the CDN serves them with cache headers (no 404 risk).

| File | Subject |
|---|---|
| `industry-logistics.jpg` | Indian highway with logistics trucks, blue sky, modern |
| `industry-school.jpg` | Yellow school bus, kids boarding, safe morning scene |
| `industry-fuel-tanker.jpg` | Fuel tanker truck at depot, clean industrial look |
| `industry-construction.jpg` | Construction site with heavy equipment, cranes |
| `industry-mining.jpg` | Open-pit mining haul truck, rugged terrain |
| `industry-corporate.jpg` | Corporate sedan fleet in glass-tower parking |
| `industry-government.jpg` | Government/utility vehicle convoy, official look |
| `industry-delivery.jpg` | Last-mile delivery van + courier, urban street |
| `industry-passenger.jpg` | Modern tourist coach / intercity bus |
| `industry-agriculture.jpg` | Tractor on green farmland at golden hour |
| `checklist-hero.jpg` | Tall 4:5 hero — Indian highway truck POV at dusk, premium |

All generated at consistent dimensions per section (industries: 1600×1200, checklist: 1200×1500) so card heights match exactly.

### 2. Refactor `IndustriesGrid.tsx`

- Import each image's `.asset.json`, use `it.img.url`.
- Add explicit `width={1600} height={1200}` and `decoding="async"` to every `<img>`.
- Keep existing wrapper `aspect-[4/3]`, `object-cover`, `object-center`, hover scale, gradient overlay, border-radius, shadow — unchanged.
- Remove the duplicate Logistics/Fuel-Tanker image (now distinct assets).

### 3. Refactor `IndustriesChecklist.tsx`

- Replace Unsplash hotlink with the generated `checklist-hero.jpg.asset.json`.
- Add `width={1200} height={1500}`, `decoding="async"`.
- Keep `aspect-[4/5] sm:aspect-[5/6]`, `object-cover`, rounded corners, blob halo, floating overlay cards — unchanged.

### 4. Re-audit pass

After changes, scan each Services component for any remaining `<img>` without size hints or with external hotlinks and confirm none remain. Confirm `ServicesHero` (SVG/lucide only) and other sections have no raster images.

### 5. Verify

- `bun run build` to ensure imports resolve.
- Visual spot-check via Playwright at 1280px and 390px viewports, screenshot the Industries grid + checklist to confirm no broken icons, uniform card heights, no overflow, no CLS.

## Out of scope

- No changes to layout grid, spacing, typography, colors, animations, copy, or any non-image element.
- No changes to other pages.
- No new components or routes.

## Files to edit

- `src/components/services/IndustriesGrid.tsx`
- `src/components/services/IndustriesChecklist.tsx`

## Files to add

- 11 generated `.jpg` images under `src/assets/services/`, each with its `.asset.json` pointer (binaries removed post-upload per the assets workflow).
