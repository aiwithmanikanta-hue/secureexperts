import { Helmet } from "react-helmet-async";
import { ProductsListPage } from "@/components/products/ProductsListPage";

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Products — Secure Experts GPS Tracking Devices</title>
        <meta name="description" content="Explore Secure Experts' product range — VLTD 4G, VLTD 2G, and V5 Basic GPS Device. Premium tracking, real-time visibility, and smarter monitoring." />
        <meta property="og:title" content="Products — Secure Experts" />
        <meta property="og:description" content="Three premium GPS tracking devices built for vehicle security, compliance, and everyday peace of mind." />
      </Helmet>
      <ProductsListPage />
    </>
  );
}