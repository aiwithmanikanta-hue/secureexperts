## Diagnostic summary

### Current media files found

| File | Exists | Current usage |
|---|---:|---|
| `public/favicon.ico` | Yes | Browser favicon only |
| `src/assets/logo/secure-experts-logo.png` | Yes | `Logo.tsx`, chatbot header, root favicon/apple touch icon, Organization JSON-LD |
| `src/assets/products/product-vltd-4g.png` | Yes | Product catalog: VLTD 4G |
| `src/assets/products/product-vltd-2g.png` | Yes | Product catalog: VLTD 2G |
| `src/assets/products/product-v5-basic.png` | Yes | Product catalog: V5 Basic |
| `src/assets/icons/whatsapp-icon.png` | Yes | `WhatsAppButton.tsx` |
| `src/assets/backgrounds/vltdais140-hero.png` | Yes | Home hero, chatbot product cards, home route OG/Twitter/JSON-LD image |
| `src/assets/gallery/vltdais140-showcase.png` | Yes | Home product showcase |

### Broken/dependency findings

- No current code references to `.asset.json` were found, but the dev server log still contains stale `.asset.json` transform errors from earlier asset moves.
- No `images.lovable.dev`, `/__l5e/assets-v1`, or other Lovable-hosted media references were found in active source files.
- No case-collision asset filenames were found.
- No video files currently exist in `src` or `public`; therefore there are no video references to repair unless assets are added later.
- Media is still imported from `src/assets`, while the requested portable structure is `public/assets/...`.
- `@` alias is provided by the Lovable TanStack Vite config; `vite.config.ts` does not override it. I’ll keep the code independent of asset aliasing by using public `/assets/...` URLs for media.

## Repair plan

1. **Create the portable asset structure**
   ```text
   public/assets/logo/
   public/assets/products/
   public/assets/backgrounds/
   public/assets/icons/
   public/assets/gallery/
   public/assets/videos/
   ```

2. **Move/copy every existing media file into `public/assets`**
   - `secure-experts-logo.png` → `public/assets/logo/secure-experts-logo.png`
   - `product-vltd-4g.png` → `public/assets/products/product-vltd-4g.png`
   - `product-vltd-2g.png` → `public/assets/products/product-vltd-2g.png`
   - `product-v5-basic.png` → `public/assets/products/product-v5-basic.png`
   - `whatsapp-icon.png` → `public/assets/icons/whatsapp-icon.png`
   - `vltdais140-hero.png` → `public/assets/backgrounds/vltdais140-hero.png`
   - `vltdais140-showcase.png` → `public/assets/gallery/vltdais140-showcase.png`
   - Keep `public/favicon.ico` as-is unless replacing it is needed.

3. **Replace asset imports with stable local public paths**
   - Rewrite `src/assets/index.ts` to export constants like:
     ```ts
     export const logo = "/assets/logo/secure-experts-logo.png";
     export const vltd4g = "/assets/products/product-vltd-4g.png";
     ```
   - This avoids Vite transform/cache issues for image modules and works after ZIP download on localhost, Vercel, Netlify, and static hosts.

4. **Remove obsolete source asset binaries**
   - Delete migrated files from `src/assets/...` after references are rebuilt.
   - Leave `src/assets/index.ts` as the single asset manifest used by the app.
   - Remove empty `src/assets` subfolders if they remain empty.

5. **Audit and fix code references**
   - Confirm all JSX `<img>` sources resolve through the asset manifest or `/assets/...` paths.
   - Confirm root metadata, Open Graph, Twitter image, JSON-LD, chatbot, product cards, hero, and showcase use the repaired paths.
   - Confirm there are no `.asset.json`, Lovable CDN, temporary preview URL, missing import, or invalid relative media paths.

6. **Verify case sensitivity and Vite alias**
   - Re-scan actual filenames vs references exactly.
   - Confirm `@` still resolves through the existing Vite config; if asset references no longer depend on `@/assets/...` image imports, localhost portability is less fragile.

7. **Validate runtime and production behavior**
   - Run the available project checks after implementation.
   - Restart the dev server to clear stale Vite module cache.
   - Use browser/preview diagnostics to check for 404 media requests and console errors.

## Final report I’ll provide after implementation

- Every repaired asset path.
- Where each asset is used.
- Confirmation that no Lovable CDN or `.asset.json` references remain.
- Confirmation of localhost/export-safe path strategy.