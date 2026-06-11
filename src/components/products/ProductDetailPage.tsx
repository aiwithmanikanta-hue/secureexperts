import { Link } from "@tanstack/react-router";
import {
  Satellite,
  Signal,
  ShieldAlert,
  MapPin,
  FileCheck2,
  BatteryCharging,
  History,
  Wrench,
  ShieldCheck,
  Smartphone,
  ChevronRight,
  Check,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Nav } from "@/components/home/Nav";
import { SiteFooter } from "@/components/home/SiteFooter";
import { AmbientBackground } from "@/components/home/AmbientBackground";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { MagneticButton } from "@/components/home/MagneticButton";
import { GlassCard } from "@/components/home/GlassCard";
import { WhatsAppButton } from "./WhatsAppButton";
import { PRODUCTS, type Product } from "./catalog";

const iconMap: Record<string, typeof Satellite> = {
  Satellite,
  Signal,
  ShieldAlert,
  MapPin,
  FileCheck2,
  BatteryCharging,
  History,
  Wrench,
  ShieldCheck,
  Smartphone,
};

export function ProductDetailPage({ product }: { product: Product }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Nav />
      <main>
        {/* Breadcrumb */}
        <div className="pt-28 px-6">
          <div className="mx-auto max-w-6xl flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3" />
            <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="px-6 pt-10 pb-20">
          <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                {product.badge}
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
                {product.name}
              </h1>
              <p className="mt-3 text-[15px] uppercase tracking-[0.18em] text-muted-foreground">
                {product.tagline}
              </p>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/75 max-w-xl">
                {product.summary}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <WhatsAppButton productName={product.name} size="lg">
                  Talk on WhatsApp
                </WhatsAppButton>
                <MagneticButton href="/#contact" variant="primary" className="!h-12 !px-6 !text-[15px]">
                  Request Demo
                </MagneticButton>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <div className="relative aspect-square rounded-[2.5rem] bg-gradient-to-br from-white via-[var(--tint-sky)] to-[var(--tint-blue)] border border-border shadow-lift overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  width={1024}
                  height={1024}
                  className="absolute inset-0 size-full object-contain p-12"
                  style={{ animation: "float-y 6s ease-in-out infinite" }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-15deg]"
                  style={{ animation: "shimmer 6s ease-in-out infinite" }}
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Overview */}
        <section className="px-6 py-20 surface-2 border-y border-border">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll>
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">Overview</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                Built around how you actually use it.
              </h2>
            </RevealOnScroll>

            <div className="mt-10 grid lg:grid-cols-3 gap-6">
              {product.overview.map((para, i) => (
                <RevealOnScroll key={i} delay={i * 100}>
                  <GlassCard tilt={false}>
                    <p className="text-[15px] leading-relaxed text-foreground/80">
                      {para}
                    </p>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll>
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">Features</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                Engineered for everyday reliability.
              </h2>
            </RevealOnScroll>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.features.map((f, i) => {
                const Icon = iconMap[f.icon] ?? ShieldCheck;
                return (
                  <RevealOnScroll key={f.title} delay={i * 80}>
                    <div className="group h-full rounded-3xl border border-border bg-white/70 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                      <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon className="size-5" strokeWidth={1.75} />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="px-6 py-24 surface-2 border-y border-border">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll>
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">Specifications</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                The technical detail, neatly laid out.
              </h2>
            </RevealOnScroll>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.specs.map((s, i) => (
                <RevealOnScroll key={s.label} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-border bg-white/80 backdrop-blur-xl p-5 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">{s.label}</p>
                    <p className="mt-2 text-[15px] font-medium text-foreground leading-snug">{s.value}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll>
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">Use Cases</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                Built for the way you operate.
              </h2>
            </RevealOnScroll>

            <div className="mt-10 flex flex-wrap gap-3">
              {product.useCases.map((u, i) => (
                <RevealOnScroll key={u} delay={i * 60}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 backdrop-blur-xl px-5 py-2.5 text-sm font-medium text-foreground/80 hover:border-primary/30 hover:text-foreground transition-all">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {u}
                  </span>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="px-6 py-24 surface-2 border-y border-border">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll>
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">Compare</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                See where {product.name} fits in the range.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <div className="mt-10 overflow-x-auto rounded-3xl border border-border bg-white/80 backdrop-blur-xl shadow-soft">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-5 font-semibold text-foreground">Product</th>
                      <th className="p-5 font-semibold text-foreground">Network</th>
                      <th className="p-5 font-semibold text-foreground">Best For</th>
                      <th className="p-5 font-semibold text-foreground">Highlights</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRODUCTS.map((p) => {
                      const active = p.slug === product.slug;
                      return (
                        <tr
                          key={p.slug}
                          className={`border-b border-border last:border-0 ${active ? "bg-primary/5" : ""}`}
                        >
                          <td className="p-5 align-top">
                            <Link
                              to="/products/$slug"
                              params={{ slug: p.slug }}
                              className="font-semibold text-foreground hover:text-primary transition-colors"
                            >
                              {p.name}
                            </Link>
                            <p className="mt-1 text-xs text-muted-foreground">{p.tagline}</p>
                          </td>
                          <td className="p-5 align-top text-foreground/80">{p.specs[0]?.value}</td>
                          <td className="p-5 align-top text-foreground/80">{p.useCases.slice(0, 2).join(", ")}</td>
                          <td className="p-5 align-top">
                            <ul className="space-y-1.5">
                              {p.highlights.slice(0, 3).map((h) => (
                                <li key={h} className="flex items-start gap-2 text-foreground/75">
                                  <Check className="size-3.5 mt-0.5 shrink-0 text-primary" strokeWidth={3} />
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <RevealOnScroll>
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold text-center">FAQ</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-center">
                Answers to common questions.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <Accordion type="single" collapsible className="mt-10 rounded-3xl border border-border bg-white/80 backdrop-blur-xl shadow-soft px-2">
                {product.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border">
                    <AccordionTrigger className="px-5 text-left text-[15px] font-medium hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-28">
          <div className="mx-auto max-w-6xl relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-white via-[var(--tint-sky)] to-[var(--tint-blue)] p-10 md:p-16 text-center shadow-lift">
            <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 size-[40vw] rounded-full bg-primary/10 blur-[120px]" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">Get Started</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Ready to deploy {product.name}?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Talk to Secure Experts on WhatsApp for pricing, installation, and a personalized demo.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <WhatsAppButton productName={product.name} size="lg">
                Talk to Secure Experts
              </WhatsAppButton>
              <MagneticButton href="/#contact" variant="primary" className="!h-12 !px-6 !text-[15px]">
                Get a Quote
              </MagneticButton>
              <MagneticButton href="/#contact" variant="secondary" className="!h-12 !px-6 !text-[15px]">
                Book a Demo
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}