import { useCountUp } from "./useCountUp";
import { useReveal } from "./useReveal";

type Stat = {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
};

const STATS: Stat[] = [
  { value: 10000, suffix: "+", label: "Devices Installed" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Tracking Accuracy" },
  { value: 24, suffix: "/7", label: "Live Monitoring" },
  { value: 12, suffix: "+", label: "Years of Expertise" },
];

function format(v: number, s: Stat) {
  if (s.decimals) return v.toFixed(s.decimals);
  return Math.round(v).toLocaleString();
}

function StatCell({ s, delay }: { s: Stat; delay: number }) {
  const { ref, value } = useCountUp(s.value, 1800);
  return (
    <div
      className="reveal text-center md:text-left"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-semibold tracking-tight text-black tabular-nums">
        <span ref={ref}>{format(value, s)}</span>
        <span className="text-black">{s.suffix}</span>
      </div>
      <div className="mt-2 text-sm text-black/70">{s.label}</div>
    </div>
  );
}

export function Stats() {
  const r = useReveal();
  return (
    <section className="relative py-20 px-6">
      <div ref={r} className="reveal max-w-6xl mx-auto">
        <div className="relative rounded-[28px] border border-border bg-white/70 backdrop-blur-xl px-8 py-12 md:px-12 md:py-14 shadow-[0_20px_60px_-30px_rgba(10,132,255,0.25)] overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-20 size-72 rounded-full bg-primary/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-20 size-72 rounded-full bg-sky-300/20 blur-3xl"
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            {STATS.map((s, i) => (
              <StatCell key={s.label} s={s} delay={i * 90} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}