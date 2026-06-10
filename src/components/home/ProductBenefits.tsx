import { useReveal } from "./useReveal";

const rows = [
  {
    eyebrow: "Accuracy",
    title: "Centimeter-grade precision.",
    body: "Quad-constellation GNSS fusion delivers reliable position data even in dense urban canyons and shielded environments.",
    stat: "±0.5m",
    statLabel: "typical accuracy",
  },
  {
    eyebrow: "Endurance",
    title: "Built to outlast.",
    body: "Up to 180 days of standby on a single charge. Intelligent power management adapts to motion in real time.",
    stat: "180d",
    statLabel: "standby battery",
  },
  {
    eyebrow: "Reliability",
    title: "Always reporting. Always on.",
    body: "Redundant LTE-M, NB-IoT and quad-band GSM ensure your device stays connected, anywhere it travels.",
    stat: "99.99%",
    statLabel: "global uptime",
  },
];

export function ProductBenefits() {
  const r = useReveal();
  return (
    <section className="relative py-32 px-6">
      <div ref={r} className="reveal max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
            Product Benefits
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
            Designed for the long haul.
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {rows.map((r) => (
            <div key={r.title} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-14">
              <div className="md:col-span-3">
                <p className="text-[12px] uppercase tracking-widest text-primary mb-2">{r.eyebrow}</p>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 leading-tight">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{r.body}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <div className="text-4xl font-semibold text-foreground">{r.stat}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}