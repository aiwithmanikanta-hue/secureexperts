import { createFileRoute, notFound } from "@tanstack/react-router";
import {
  PRODUCTS,
  getProduct,
  type ProductSlug,
} from "@/components/products/catalog";
import { ProductDetailPage } from "@/components/products/ProductDetailPage";

const SLUGS = new Set<ProductSlug>(PRODUCTS.map((p) => p.slug));

function isProductSlug(value: string): value is ProductSlug {
  return SLUGS.has(value as ProductSlug);
}

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    if (!isProductSlug(params.slug)) throw notFound();
    return { product: getProduct(params.slug) };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product not found — Secure Experts" }] };
    return {
      meta: [
        { title: `${p.name} — Secure Experts` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.name} — Secure Experts` },
        { property: "og:description", content: p.summary },
        { property: "og:image", content: p.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  component: ProductDetailRoute,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background text-foreground p-6 text-center">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Product not found</h1>
        <p className="mt-3 text-muted-foreground">
          The product you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/products"
          className="mt-6 inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
        >
          View all products
        </a>
      </div>
    </div>
  ),
});

function ProductDetailRoute() {
  const { product } = Route.useLoaderData();
  return <ProductDetailPage product={product} />;
}