import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { ProductShowcase } from "./ProductShowcase";
import { Features } from "./Features";
import { ProductBenefits } from "./ProductBenefits";
import { WhyUs } from "./WhyUs";
import { Specs } from "./Specs";
import { Trust } from "./Trust";
import { FinalCTA } from "./FinalCTA";
import { SiteFooter } from "./SiteFooter";
import { AmbientBackground } from "./AmbientBackground";
import { IntroOverlay } from "./IntroOverlay";
import { LiveTrackingDemo } from "./LiveTrackingDemo";
import { MonitoringDashboard } from "./MonitoringDashboard";
import { Comparison } from "./Comparison";
import { Industries } from "./Industries";
import { LaunchVideo } from "./LaunchVideo";
import { Metrics } from "./Metrics";
import { Pricing } from "./Pricing";
import { TrustedBy } from "./TrustedBy";
import { BeforeAfter } from "./BeforeAfter";
import { LeadGen } from "./LeadGen";
import { AIAssistant } from "./AIAssistant";

export function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/15 selection:text-foreground">
      <IntroOverlay />
      <AmbientBackground />
      <Nav />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <ProductBenefits />
        <WhyUs />
        <Specs />
        <Trust />
        <LiveTrackingDemo />
        <MonitoringDashboard />
        <Comparison />
        <Industries />
        <LaunchVideo />
        <Metrics />
        <Pricing />
        <TrustedBy />
        <BeforeAfter />
        <LeadGen />
        <FinalCTA />
      </main>
      <SiteFooter />
      <AIAssistant />
    </div>
  );
}