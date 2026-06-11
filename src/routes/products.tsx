import { createFileRoute } from "@tanstack/react-router";
import { ProductsListPage } from "@/components/products/ProductsListPage";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Secure Experts GPS Tracking Devices" },
      {
        name: "description",
        content:
          "Explore Secure Experts' product range — VLTD 4G, VLTD 2G, and V5 Basic GPS Device. Premium tracking, real-time visibility, and smarter monitoring.",
      },
      { property: "og:title", content: "Products — Secure Experts" },
      {
        property: "og:description",
        content:
          "Three premium GPS tracking devices built for vehicle security, compliance, and everyday peace of mind.",
      },
    ],
  }),
  component: ProductsListPage,
});