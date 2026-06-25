import { Helmet } from "react-helmet-async";
import { ServicesPage } from "@/components/services/ServicesPage";

export default function ServicesRoute() {
  return (
    <>
      <Helmet>
        <title>Services — GPS Tracking, Fuel Monitoring & Fleet Management | Secure Experts</title>
        <meta
          name="description"
          content="Smart tracking solutions for every business — GPS tracking, fuel monitoring, fleet management, AIS-140, vehicle cameras and asset tracking across India."
        />
        <meta property="og:title" content="Secure Experts — Services" />
        <meta
          property="og:description"
          content="Intelligent GPS tracking, fuel monitoring, fleet management and vehicle security for businesses across India."
        />
        <meta name="twitter:title" content="Secure Experts — Services" />
        <meta
          name="twitter:description"
          content="Intelligent GPS tracking, fuel monitoring, fleet management and vehicle security for businesses across India."
        />
        <link rel="canonical" href="/services" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "GPS Tracking & Fleet Management",
          provider: {
            "@type": "Organization",
            name: "Secure Experts",
            url: "https://secureexperts.lovable.app",
            email: "info@secureexperts.in",
            telephone: "+91 733 743 3351",
          },
          areaServed: "IN",
          description:
            "GPS tracking, fuel monitoring, fleet management, AIS-140 solutions, vehicle cameras and asset tracking for businesses across India.",
        })}</script>
      </Helmet>
      <ServicesPage />
    </>
  );
}