import { useReveal } from "./useReveal";
import { useCountUp } from "./useCountUp";
import { RevealOnScroll } from "./RevealOnScroll";

type Row = {
  eyebrow: string;
  title: string;
  body: string;
  stat: string;
  statLabel: string;
  countTo: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

const rows: Row[] = [
  {
    eyebrow: "Accuracy",
    title: "Centimeter-grade precision.",
    body: "Quad-constellation GNSS fusion delivers reliable position data even in dense urban canyons and shielded environments.",
    stat: "±0.5m",
    statLabel: "typical accuracy",
    countTo: 0.5,
    prefix: "±",
    suffix: "m",
    decimals: 1,
  },
  {
    eyebrow: "Endurance",
    title: "Built to outlast.",
    body: "Up to 180 days of standby on a single charge. Intelligent power management adapts to motion in real time.",
    stat: "180d",
    statLabel: "standby battery",
    countTo: 180,
    suffix: "d",
  },
  {
    eyebrow: "Reliability",
    title: "Always reporting. Always on.",
    body: "Redundant LTE-M, NB-IoT and quad-band GSM ensure your device stays connected, anywhere it travels.",
    stat: "99.99%",
    statLabel: "global uptime",
    countTo: 99.99,
    suffix: "%",
    decimals: 2,
  },
];

function StatNumber({ row }: { row: Row }) {
  const { ref, value, done } = useCountUp(row.countTo, 1800);
  const display = (row.decimals ? value.toFixed(row.decimals) : Math.round(value).toString());
  return (
    <span ref={ref} className={`tabular-nums inline-block ${done ? "stat-pop" : ""}`}>
      {row.prefix ?? ""}{display}{row.suffix ?? ""}
    </span>
  );
}

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
          {rows.map((row, i) => (
            <RevealOnScroll key={row.title} delay={i * 120}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-14">
                <div className="md:col-span-3">
                  <p className="text-[12px] uppercase tracking-widest text-primary mb-2">{row.eyebrow}</p>
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 leading-tight">{row.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{row.body}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <div className="text-4xl font-semibold text-foreground"><StatNumber row={row} /></div>
                  <div className="text-xs text-muted-foreground mt-1">{row.statLabel}</div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}