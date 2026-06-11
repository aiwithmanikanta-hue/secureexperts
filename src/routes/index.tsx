import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/home/Home";
import { heroDevice as heroImg } from "@/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Secure Experts — VLTDAIS140 Premium GPS Tracking Device" },
      {
        name: "description",
        content:
          "Advanced GPS tracking built for security, control, and confidence. Meet the VLTDAIS140 — a precision instrument for real-time visibility and modern protection.",
      },
      { property: "og:title", content: "Secure Experts — VLTDAIS140 GPS Tracking Device" },
      {
        property: "og:description",
        content:
          "Smart, reliable, powerful tracking for fleets, vehicles, and high-value assets. Engineered for total precision.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "VLTDAIS140",
          image: `https://secureexperts.lovable.app${heroImg}`,
          description:
            "AIS 140-compliant intelligent GPS tracking device with real-time tracking, instant alerts, route monitoring, and AES-256 encrypted telemetry for fleets and high-value assets.",
          brand: {
            "@type": "Brand",
            name: "Secure Experts",
          },
        }),
      },
    ],
  }),
  component: Home,
});
