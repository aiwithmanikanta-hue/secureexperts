import { Link } from "react-router-dom";
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
import { PRODUCTS, openProductQuoteWhatsApp, type Product } from "./catalog";
import { FileText } from "lucide-react";

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
        <div className="pt-24 sm:pt-28 px-4 sm:px-6">
          <div className="mx-auto max-w-6xl flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3" />
            <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="px-4 sm:px-6 pt-8 sm:pt-10 pb-16 sm:pb-20">
          <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <RevealOnScroll className="order-2 lg:order-1">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                {product.badge}
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                {product.name}
              </h1>
              <p className="mt-3 text-[15px] uppercase tracking-[0.18em] text-muted-foreground">
                {product.tagline}
              </p>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/75 max-w-xl">
                {product.summary}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                <WhatsAppButton productName={product.name} size="lg" className="w-full sm:w-auto">
                  Talk on WhatsApp
                </WhatsAppButton>
                <button
                  type="button"
                  onClick={() => openProductQuoteWhatsApp(product.name)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-[15px] font-medium text-background shadow-soft transition-all duration-300 hover:scale-[1.03] hover:shadow-lift w-full sm:w-auto"
                  aria-label={`Request a quote for ${product.name}`}
                >
                  <FileText className="size-4" strokeWidth={1.75} />
                  Request Quote
                </button>
                <MagneticButton href="/#contact" variant="secondary" className="!h-12 !px-6 !text-[15px] w-full sm:w-auto">
                  Request Demo
                </MagneticButton>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150} className="order-1 lg:order-2">
              <div className="relative aspect-square overflow-hidden">
                {/* ambient glow */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-3/4 rounded-full bg-primary/15 blur-3xl"
                />
                <img
                  src={product.image}
                  alt={product.name}
                  width={1024}
                  height={1024}
                  className="absolute inset-0 size-full object-contain p-6 sm:p-12 product-float"
                  style={{ animation: "float-y 6s ease-in-out infinite" }}
                />
                {/* floor reflection */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-16 bottom-8 h-4 rounded-[50%] bg-foreground/20 blur-lg opacity-60"
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Product Details (labeled spec sheet) */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll>
              <div className="rounded-3xl border border-border bg-white/80 backdrop-blur-xl shadow-soft p-6 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">Product Details</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                  At a glance
                </h2>
                <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                  {[
                    ["Device Type", product.details.deviceType],
                    ["Technology", product.details.technology],
                    ["Working Condition", product.details.workingCondition],
                    ["Connectivity", product.details.connectivity],
                    ["Power Supply", product.details.powerSupply],
                    ["Installation", product.details.installation],
                    ...(product.details.accuracy ? [["Tracking Accuracy", product.details.accuracy]] : []),
                  ].map(([label, value]) => (
                    <div key={label as string} className="flex flex-col gap-1 border-b border-border/60 pb-4 sm:border-0 sm:pb-0">
                      <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                        {label}
                      </dt>
                      <dd className="text-[15px] font-medium text-foreground leading-snug">
                        {value}
                      </dd>
                    </div>
                  ))}
                  {product.details.accessibility && (
                    <div className="sm:col-span-2 flex flex-col gap-2">
                      <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                        Accessibility
                      </dt>
                      <dd className="flex flex-wrap gap-2">
                        {product.details.accessibility.map((a) => (
                          <span
                            key={a}
                            className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            <Check className="size-3" strokeWidth={3} /> {a}
                          </span>
                        ))}
                      </dd>
                    </div>
                  )}
                </dl>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                    Suitable For
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.applications.map((a) => (
                      <span
                        key={a}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-sm font-medium text-foreground/80"
                      >
                        <span className="size-1.5 rounded-full bg-primary" />
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
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
                              to={`/products/${p.slug}`}
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
              <button
                type="button"
                onClick={() => openProductQuoteWhatsApp(product.name)}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-[15px] font-medium text-background shadow-soft transition-all duration-300 hover:scale-[1.03] hover:shadow-lift"
              >
                <FileText className="size-4" strokeWidth={1.75} />
                Request Quote
              </button>
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