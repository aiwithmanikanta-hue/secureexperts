import { Check } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const WA = "917337433351";
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const TIERS = [
  {
    name: "Starter",
    audience: "Personal vehicles",
    price: "Contact for pricing",
    features: ["Single device install", "Live tracking app", "Email support", "Trip history (30 days)", "Geofence (1 zone)"],
    cta: "Talk to sales",
    msg: "Hi Secure Experts, I'm interested in the Starter plan for my personal vehicle.",
  },
  {
    name: "Business",
    audience: "Small fleets",
    price: "Contact for pricing",
    features: ["Up to 25 devices", "Web + mobile dashboard", "Priority support", "Trip history (12 months)", "Geofences + alerts", "Driver behavior insights"],
    cta: "Get a quote",
    msg: "Hi Secure Experts, I'd like a quote for the Business plan for my fleet.",
    featured: true,
  },
  {
    name: "Enterprise",
    audience: "Large organizations",
    price: "Custom",
    features: ["Unlimited devices", "Custom dashboards", "24/7 dedicated success", "API & SDK access", "Custom integrations", "SLA & compliance reports"],
    cta: "Contact sales",
    msg: "Hi Secure Experts, I'd like to discuss the Enterprise plan.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
              Pricing
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
              Choose the right solution.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-5">
          {TIERS.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 90}>
              <div className={`relative h-full rounded-3xl border p-8 transition-all duration-500 overflow-hidden bg-background/70 backdrop-blur-xl hover:-translate-y-1.5 hover:shadow-lift ${
                t.featured ? "border-primary/40 shadow-lift md:scale-[1.03]" : "border-border hover:border-primary/30"
              }`}>
                {t.featured && (
                  <div className="absolute top-5 right-5 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary text-primary-foreground font-semibold">
                    Recommended
                  </div>
                )}
                <div className="text-sm text-muted-foreground">{t.audience}</div>
                <div className="mt-1 text-2xl font-semibold">{t.name}</div>
                <div className="mt-5 text-sm text-muted-foreground">{t.price}</div>
                <ul className="mt-7 space-y-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 size-4 rounded-full grid place-items-center shrink-0 ${t.featured ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(t.msg)}
                  target="_blank" rel="noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center h-11 rounded-full text-sm font-medium transition-all hover:scale-[1.02] ${
                    t.featured ? "bg-foreground text-background hover:shadow-lift" : "bg-card border border-border hover:bg-muted"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}