import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import { getProduct, PRODUCTS, type ProductSlug } from "@/components/products/catalog";
import { ProductDetailPage as ProductDetailView } from "@/components/products/ProductDetailPage";

const SLUGS = new Set<string>(PRODUCTS.map((p) => p.slug));

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !SLUGS.has(slug)) return <Navigate to="/products" replace />;
  const product = getProduct(slug as ProductSlug);
  return (
    <>
      <Helmet>
        <title>{`${product.name} — Secure Experts`}</title>
        <meta name="description" content={product.summary} />
        <meta property="og:title" content={`${product.name} — Secure Experts`} />
        <meta property="og:description" content={product.summary} />
        <meta property="og:image" content={product.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={product.image} />
      </Helmet>
      <ProductDetailView product={product} />
    </>
  );
}