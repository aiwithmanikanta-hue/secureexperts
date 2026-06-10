import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { ProductShowcase } from "./ProductShowcase";
import { Features } from "./Features";
import { ProductBenefits } from "./ProductBenefits";
import { WhyUs } from "./WhyUs";
import { Specs } from "./Specs";
import { Trust } from "./Trust";
import { FinalCTA } from "./FinalCTA";
import { Contact } from "./Contact";
import { SiteFooter } from "./SiteFooter";
import { AmbientBackground } from "./AmbientBackground";
import { IntroOverlay } from "./IntroOverlay";

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
        <FinalCTA />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}