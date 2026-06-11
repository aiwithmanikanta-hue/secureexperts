
## Important caveat (read first)

The Lovable preview/build pipeline is wired around TanStack Start via `@lovable.dev/vite-tanstack-config`. After this migration:

- **Lovable's in-editor preview may behave differently** — the preview server expects a TanStack Start app. It will still load (it's a Vite project), but Lovable-internal features tied to SSR (sitemap server route, `head()` meta) will be removed.
- **The exported ZIP will work perfectly on cPanel / any static host** — which is your actual goal.
- **No backend** — all `createServerFn` / Supabase / `src/lib/leads.functions.ts` / `src/integrations/supabase/*` / `src/server.ts` / `src/start.ts` are deleted. Forms only open WhatsApp.
- **SEO meta tags** move to `react-helmet-async` (client-injected). Initial HTML will be a generic shell — crawlers that execute JS will still see correct titles.
- **Visual / behavioral output: unchanged.** Every component in `src/components/**` is plain React and ports 1:1.

---

## Target structure

```text
src/
  main.tsx                  # Vite entry (replaces src/start.ts + src/server.ts)
  App.tsx                   # <BrowserRouter> + <Routes> + <FloatingActions>
  index.css                 # renamed from src/styles.css (import path update)
  pages/
    Home.tsx                # wraps <Home /> from components/home + Helmet
    Products.tsx            # wraps <ProductsListPage /> + Helmet
    ProductDetail.tsx       # reads useParams() slug, renders <ProductDetailPage />
    NotFound.tsx
  components/               # UNCHANGED — all existing files kept as-is
    home/**                 # Hero, Nav, Contact, Footer, etc. (no edits)
    products/**             # ProductCard, catalog, WhatsAppButton (no edits)
    chatbot/**              # FloatingActions, Chatbot, whatsapp.ts (no edits)
    ui/**                   # shadcn (no edits)
  assets/
    index.ts                # UNCHANGED — already uses /assets/... strings
  hooks/use-mobile.tsx      # UNCHANGED
  lib/utils.ts              # UNCHANGED (cn helper)
public/
  assets/**                 # UNCHANGED — all images/videos already here
  index.html                # NEW — Vite SPA shell with #root div
  _redirects                # NEW — `/* /index.html 200` (SPA fallback for static hosts)

index.html                  # NEW — Vite entry HTML at project root
vite.config.ts              # REPLACED — plain Vite + @vitejs/plugin-react
package.json                # REWRITTEN — TanStack/Supabase deps removed, react-router-dom + react-helmet-async added
tsconfig.json               # UPDATED — remove TanStack-specific options
```

## Files to delete

- `src/routes/` (entire folder — `__root.tsx`, `index.tsx`, `products.tsx`, `products.$slug.tsx`, `sitemap[.]xml.ts`, `README.md`)
- `src/routeTree.gen.ts`
- `src/router.tsx`
- `src/server.ts`, `src/start.ts`
- `src/integrations/supabase/` (entire folder)
- `src/lib/api/example.functions.ts`
- `src/lib/config.server.ts`
- `src/lib/leads.functions.ts`
- `src/lib/error-capture.ts`, `src/lib/error-page.ts`, `src/lib/lovable-error-reporting.ts` (SSR-error-handling specific; replaced with a simple React `ErrorBoundary` in `App.tsx`)
- `supabase/` (entire folder)
- `.lovable/` (Lovable scaffolding, optional cleanup)

## Files to create

1. **`index.html`** — root Vite shell:
   - `<title>`, meta tags (default SEO), `<link rel="icon" href="/assets/logo/secure-experts-logo.png">`
   - Google Fonts `<link>` (Inter + JetBrains Mono) — moved from `__root.tsx`
   - JSON-LD Organization script — moved from `__root.tsx`
   - `<div id="root"></div>` + `<script type="module" src="/src/main.tsx">`

2. **`src/main.tsx`** — `ReactDOM.createRoot(...).render(<HelmetProvider><BrowserRouter><App /></BrowserRouter></HelmetProvider>)` + `import './index.css'`

3. **`src/App.tsx`** — React Router routes:
   ```text
   /                  → <Home />
   /products          → <Products />
   /products/:slug    → <ProductDetail />
   *                  → <NotFound />
   ```
   Renders `<FloatingActions />` outside `<Routes>` so chatbot/WhatsApp button is global.

4. **`src/pages/Home.tsx`** — `<Helmet>` (title, og, JSON-LD Product) + `<Home />` from `@/components/home/Home`. Meta content copied verbatim from current `src/routes/index.tsx`.

5. **`src/pages/Products.tsx`** — `<Helmet>` + `<ProductsListPage />`. Meta from `src/routes/products.tsx`.

6. **`src/pages/ProductDetail.tsx`** — `useParams<{ slug: string }>()`, validate against `PRODUCTS` from `@/components/products/catalog`, render `<ProductDetailPage product={...} />` or `<Navigate to="/products" />` if invalid. `<Helmet>` derived from product.

7. **`src/pages/NotFound.tsx`** — copy markup from `__root.tsx`'s `NotFoundComponent`, swap `<Link>` import to `react-router-dom`.

8. **`public/_redirects`** — `/* /index.html 200` (Netlify-style; also works on most static hosts; for cPanel add `.htaccess` too — see below).

9. **`public/.htaccess`** — Apache/cPanel SPA fallback:
   ```text
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

10. **`vite.config.ts`** — replace with plain Vite:
    ```ts
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import tailwindcss from '@tailwindcss/vite';
    import path from 'path';
    export default defineConfig({
      plugins: [react(), tailwindcss()],
      resolve: { alias: { '@': path.resolve(__dirname, './src') } },
    });
    ```

## Component edits (minimal, mechanical)

These are the ONLY files inside `src/components/**` that need touching, because they import from TanStack Router:

- Search `src/components/**` for `@tanstack/react-router` and replace `Link` with `react-router-dom`'s `Link` (prop is the same: `to`). Replace `useNavigate` / `useRouter` calls if any.
- Replace any `useLoaderData` / `useParams` from TanStack with `react-router-dom` equivalents (only `ProductDetailPage` likely affected — but it receives `product` as a prop in the new wrapper, so no change inside the component itself).
- Remove `@/integrations/supabase/*` imports from `Contact.tsx` (current Contact.tsx already only uses WhatsApp — confirmed clean).

I'll grep these on entry to build mode and patch them in one batch.

## package.json changes

**Remove:** `@tanstack/react-router`, `@tanstack/react-start`, `@tanstack/router-plugin`, `@tanstack/react-query`, `@supabase/supabase-js`, `@lovable.dev/vite-tanstack-config`, `nitro`.

**Add:** `react-router-dom@^6`, `react-helmet-async@^2`.

**Keep:** all Radix UI, lucide-react, tailwindcss, tailwind-merge, clsx, class-variance-authority, sonner, vaul, embla-carousel-react, react-hook-form, zod, etc.

**Scripts:** `dev: "vite"`, `build: "vite build"`, `preview: "vite preview"`.

## What stays pixel-identical

- All Tailwind classes & `src/styles.css` tokens → unchanged
- All `src/components/home/**` (Hero, Nav, Contact, Stats, ProductShowcase, Features, ProductBenefits, WhyUs, Specs, Trust, FinalCTA, SiteFooter, AmbientBackground, animations, useReveal, useTilt, etc.)
- All `src/components/products/**` (ProductCard, ProductDetailPage, ProductsHero, catalog, WhatsAppButton)
- All `src/components/chatbot/**` (Chatbot, FloatingActions, FaqEngine, whatsapp.ts)
- All `src/components/ui/**` (shadcn)
- All `public/assets/**` (logo, product images, hero/showcase, WhatsApp icon, videos)

## Validation after build mode runs

1. `bun install` succeeds with new deps.
2. `bun run build` succeeds → produces `dist/index.html` + `dist/assets/`.
3. Preview at `/`, `/products`, `/products/vltd-4g`, `/products/vltd-2g`, `/products/v5-basic`, `/contact` (anchor on home).
4. Verify: logo renders, WhatsApp button opens correct URL, chatbot opens, contact form opens WhatsApp on submit, all product images load, hero animations play.
5. Verify direct deep-link refresh works (relies on `_redirects` / `.htaccess` on host; in Vite dev server React Router handles it natively).

## Out of scope (per your "no changes" rule)

- No redesign, no UI tweaks, no animation changes, no color/typography changes.
- No new features. No removed features (other than the unused server fns).
- Sitemap.xml.ts deletion is the one tradeoff — if you want a sitemap, I'll generate a static `public/sitemap.xml` with the 5 known URLs.

Confirm and I'll execute. Once you approve, I'll do the migration in one batch: delete TanStack files, create the new entry/router/pages, patch component imports, rewrite `package.json` and `vite.config.ts`, install deps, and verify the build.
