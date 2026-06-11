import { Helmet } from "react-helmet-async";
import { Home } from "@/components/home/Home";
import { heroDevice as heroImg } from "@/assets";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Secure Experts — VLTDAIS140 Premium GPS Tracking Device</title>
        <meta name="description" content="Advanced GPS tracking built for security, control, and confidence. Meet the VLTDAIS140 — a precision instrument for real-time visibility and modern protection." />
        <meta property="og:title" content="Secure Experts — VLTDAIS140 GPS Tracking Device" />
        <meta property="og:description" content="Smart, reliable, powerful tracking for fleets, vehicles, and high-value assets. Engineered for total precision." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={heroImg} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "VLTDAIS140",
          image: heroImg,
          description: "AIS 140-compliant intelligent GPS tracking device with real-time tracking, instant alerts, route monitoring, and AES-256 encrypted telemetry for fleets and high-value assets.",
          brand: { "@type": "Brand", name: "Secure Experts" },
        })}</script>
      </Helmet>
      <Home />
    </>
  );
}