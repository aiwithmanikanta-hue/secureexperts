import { Nav } from "@/components/home/Nav";
import { SiteFooter } from "@/components/home/SiteFooter";
import { LiveTrackingDemo } from "@/components/home/LiveTrackingDemo";
import { ServicesHero } from "./ServicesHero";
import { ServiceCategories } from "./ServiceCategories";
import { IndustriesChecklist } from "./IndustriesChecklist";
import { TechStack } from "./TechStack";
import { PlatformBento } from "./PlatformBento";
import { FuelAnalytics } from "./FuelAnalytics";
import { IndustriesGrid } from "./IndustriesGrid";
import { WhyChoose } from "./WhyChoose";
import { ServicesCTA } from "./ServicesCTA";

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <ServicesHero />
        <ServiceCategories />
        <IndustriesChecklist />
        <TechStack />
        <LiveTrackingDemo />
        <PlatformBento />
        <FuelAnalytics />
        <IndustriesGrid />
        <WhyChoose />
        <ServicesCTA />
      </main>
      <SiteFooter />
    </div>
  );
}