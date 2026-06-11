
## Context

The site has exactly **7 images**, all already stored as Lovable CDN `.asset.json` pointers in `src/assets/` and imported cleanly across the codebase. There are no external URLs, no broken refs, no duplicates, no `public/` images, and no unused assets.

```
src/assets/
├── product-v5-basic.png.asset.json
├── product-vltd-2g.png.asset.json
├── product-vltd-4g.png.asset.json
├── secure-experts-logo.png.asset.json
├── vltdais140-hero.png.asset.json
├── vltdais140-showcase.png.asset.json
└── whatsapp-icon.png.asset.json
```

So the real, useful work here is **organization + a single import point** — not re-downloading binaries to disk (which would bloat the repo and lose CDN delivery).

## What I'll do

### 1. Reorganize pointers into subfolders

```
src/assets/
├── logo/
│   └── secure-experts-logo.png.asset.json
├── products/
│   ├── product-vltd-4g.png.asset.json
│   ├── product-vltd-2g.png.asset.json
│   └── product-v5-basic.png.asset.json
├── icons/
│   └── whatsapp-icon.png.asset.json
└── banners/
    ├── vltdais140-hero.png.asset.json
    └── vltdais140-showcase.png.asset.json
```

Empty folders (`gallery/`, `backgrounds/`, `misc/`) — I'll skip them; empty dirs don't exist in git and add noise. Easy to create later when needed.

### 2. Create a central barrel

`src/assets/index.ts` re-exports every image URL as a named string:

```ts
import logoAsset from "./logo/secure-experts-logo.png.asset.json";
import vltd4gAsset from "./products/product-vltd-4g.png.asset.json";
// ...
export const logo = logoAsset.url;
export const vltd4g = vltd4gAsset.url;
export const vltd2g = vltd2gAsset.url;
export const v5Basic = v5BasicAsset.url;
export const whatsappIcon = whatsappIconAsset.url;
export const heroDevice = heroAsset.url;
export const showcaseDevice = showcaseAsset.url;
```

### 3. Update every call site to import from the barrel

Files touched:
- `src/routes/__root.tsx`
- `src/routes/index.tsx`
- `src/components/home/Logo.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/ProductShowcase.tsx`
- `src/components/chatbot/Chatbot.tsx`
- `src/components/products/WhatsAppButton.tsx`
- `src/components/products/catalog.ts`

New shape everywhere:
```ts
import { logo, heroDevice, vltd4g } from "@/assets";
<img src={logo} alt="..." />
```

### 4. Verify

Build + load the preview to confirm every image renders and no console/network 404s appear.

## What I will NOT do (and why)

- **Won't download CDN images into the repo as local binaries.** That's the opposite of how Lovable serves assets — it would bloat the repo, slow git, and drop CDN edge caching.
- **Won't convert PNG → WebP.** Images are served from CDN, not bundled. A WebP pass would require re-uploading each image as a new asset and is a separate optimization task — happy to do it as a follow-up if you confirm.
- **Won't create empty `gallery/`, `backgrounds/`, `misc/` folders** — git doesn't track empty dirs and they just add clutter until something actually goes in them.

## Result

One import location (`@/assets`), assets grouped by purpose, zero broken refs, zero unused pointers. Confirm and I'll execute.
