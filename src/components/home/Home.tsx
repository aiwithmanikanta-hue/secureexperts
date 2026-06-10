import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { ProductShowcase } from "./ProductShowcase";
import { Features } from "./Features";
import { WhyUs } from "./WhyUs";
import { Specs } from "./Specs";
import { Trust } from "./Trust";
import { FinalCTA } from "./FinalCTA";
import { SiteFooter } from "./SiteFooter";

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Nav />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <WhyUs />
        <Specs />
        <Trust />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}