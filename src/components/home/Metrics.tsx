import { useCountUp } from "./useCountUp";
import { RevealOnScroll } from "./RevealOnScroll";

const STATS = [
  { v: 10000, suffix: "+", l: "Devices Installed", format: (n: number) => `${Math.round(n / 1000)}k+` },
  { v: 99.9, suffix: "%", l: "Tracking Accuracy", format: (n: number) => `${n.toFixed(1)}%` },
  { v: 24, suffix: "/7", l: "Monitoring Support", format: (n: number) => `${Math.round(n)}/7` },
  { v: 500, suffix: "+", l: "Business Customers", format: (n: number) => `${Math.round(n)}+` },
  { v: 50, suffix: "+", l: "Cities Covered", format: (n: number) => `${Math.round(n)}+` },
];

function Stat({ v, l, format }: typeof STATS[number]) {
  const { ref, value } = useCountUp(v, 1800);
  return (
    <div className="group relative rounded-2xl border border-border bg-background/70 backdrop-blur-xl p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:border-primary/30">
      <div className="text-4xl md:text-5xl font-semibold tabular-nums tracking-tight">
        <span ref={ref}>
        {format(value)}
        </span>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{l}</div>
      <span aria-hidden className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

export function Metrics() {
  return (
    <section className="relative py-32 px-6 surface-2">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <div className="inline-flex px-3 py-1 rounded-full bg-background border border-border text-[12px] text-muted-foreground mb-5">
              By the numbers
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
              Trusted performance at scale.
            </h2>
          </div>
        </RevealOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {STATS.map((s, i) => (
            <RevealOnScroll key={s.l} delay={i * 80}>
              <Stat {...s} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}