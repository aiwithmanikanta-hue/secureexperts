import { Helmet } from "react-helmet-async";
import { AboutPage } from "@/components/about/AboutPage";

export default function AboutRoute() {
  return (
    <>
      <Helmet>
        <title>About — Secure Experts | GPS Tracking & Fleet Intelligence</title>
        <meta
          name="description"
          content="Secure Experts delivers advanced GPS tracking, fuel monitoring, AIS-140 devices, and fleet management — helping businesses stay connected and in control."
        />
        <meta property="og:title" content="About Secure Experts" />
        <meta
          property="og:description"
          content="Smarter vehicle security and fleet intelligence for businesses, fleets, and asset owners."
        />
        <link rel="canonical" href="/about" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Secure Experts",
          url: "https://secureexperts.lovable.app/about",
          description:
            "Technology-driven company specializing in GPS tracking, vehicle security, fuel monitoring, and fleet management solutions.",
          email: "info@secureexperts.in",
          telephone: "+91 733 743 3351",
        })}</script>
      </Helmet>
      <AboutPage />
    </>
  );
}