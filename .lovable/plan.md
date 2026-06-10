# Replace VLTDAIS140 product renders

## Goal
Swap the current `vltdais140-hero.jpg` and `vltdais140-showcase.jpg` images with new, premium **Studio Hero, transparent PNG, front 3/4, compact matte-black tracker** renders so the device floats naturally over the site's ambient mesh background.

## Deliverables
1. `src/assets/vltdais140-hero.png` — large hero render (1536×1536, transparent, premium quality).
2. `src/assets/vltdais140-showcase.png` — secondary showcase render, slightly different framing (1280×1280, transparent, premium quality).

## Image direction
- Compact matte-black plastic GPS tracker, rounded-rectangle body, single soft LED indicator, small antenna stub, subtle engraved "Secure Experts" mark.
- Front 3/4 angle, eye-level, device tilted ~10° to feel airborne.
- Soft Apple-style studio lighting: large overhead softbox + gentle rim light from camera-right.
- Crisp specular highlights on edges; faint contact shadow beneath the device.
- Pure transparent background (on a clean white background in the source prompt so the alpha cutout is clean).
- No text overlays, no UI mockups, no environment.

## Code changes
- Update imports in `src/routes/index.tsx`, `src/components/home/Hero.tsx`, and `src/components/home/ProductShowcase.tsx` from `.jpg` → `.png`.
- Delete the old `vltdais140-hero.jpg` and `vltdais140-showcase.jpg` after the new PNGs are in place.
- No layout, copy, or motion changes — the existing float / tilt / signal-ring system already expects a transparent product image and will benefit immediately.

## Out of scope
- No copy changes, no new sections, no motion/animation changes, no palette changes.
- No new pages.

## Verification
- Reload preview, confirm hero & showcase render the new device with transparent edges over the ambient background, no white box artifacts.
