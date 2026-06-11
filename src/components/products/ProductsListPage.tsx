import { Nav } from "@/components/home/Nav";
import { SiteFooter } from "@/components/home/SiteFooter";
import { AmbientBackground } from "@/components/home/AmbientBackground";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { ProductsHero } from "./ProductsHero";
import { ProductCard } from "./ProductCard";
import { PRODUCTS } from "./catalog";
import { ShieldCheck, Headset, Wrench, BadgeCheck } from "lucide-react";

const trust = [
  { icon: ShieldCheck, label: "1-Year Warranty" },
  { icon: Wrench, label: "Certified Installation" },
  { icon: Headset, label: "WhatsApp Support" },
  { icon: BadgeCheck, label: "Trusted by Owners & Businesses" },
];

export function ProductsListPage() {
  const [flagship, ...rest] = PRODUCTS;
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Nav />
      <main>
        <ProductsHero />

        {/* Grid */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-7 lg:grid-cols-2">
              <RevealOnScroll className="lg:row-span-2">
                <ProductCard product={flagship} featured />
              </RevealOnScroll>
              {rest.map((p, i) => (
                <RevealOnScroll key={p.slug} delay={120 + i * 100}>
                  <ProductCard product={p} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-white/70 backdrop-blur-xl p-8 md:p-10 shadow-soft">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trust.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}