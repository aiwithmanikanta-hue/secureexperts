import { RevealOnScroll } from "./RevealOnScroll";

const ROW_A = ["Schools", "Logistics", "Fleet Operators", "Corporates", "Government", "Construction", "Retail Chains", "Healthcare"];
const ROW_B = ["Public Transport", "Food Delivery", "E-commerce", "Manufacturing", "Energy & Utilities", "Banking", "Education", "Hospitality"];

function Track({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden mask-fade-x">
      <div className={`flex gap-3 w-max ${reverse ? "marquee-rev" : "marquee"}`}>
        {doubled.map((label, i) => (
          <div key={i} className="group flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-border bg-background/70 backdrop-blur shrink-0 transition-all hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-soft">
            <span className="size-2 rounded-full bg-primary/60 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(10,132,255,0.6)] transition-all" />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="relative py-32 px-6 surface-2">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <div className="inline-flex px-3 py-1 rounded-full bg-background border border-border text-[12px] text-muted-foreground mb-5">
              Trusted By
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
              Trusted by businesses across industries.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-3">
          <Track items={ROW_A} />
          <Track items={ROW_B} reverse />
        </div>
      </div>
    </section>
  );
}