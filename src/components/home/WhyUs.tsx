import { Sparkles, ShieldCheck, Cpu, Headphones } from "lucide-react";
import { useReveal } from "./useReveal";
import { GlassCard } from "./GlassCard";
import { RevealOnScroll } from "./RevealOnScroll";

const items = [
  { Icon: Sparkles, t: "Premium quality", d: "Every component sourced and assembled to a single uncompromising standard." },
  { Icon: ShieldCheck, t: "Customer safety", d: "Your safety is the metric we engineer to. It informs every decision." },
  { Icon: Cpu, t: "Technology-driven", d: "In-house silicon and firmware deliver end-to-end accountability." },
  { Icon: Headphones, t: "Professional support", d: "Direct line to our engineers — never tier-one queues." },
];

export function WhyUs() {
  const r = useReveal();
  return (
    <section id="about" className="relative py-32 px-6 surface-2">
      <div ref={r} className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex px-3 py-1 rounded-full bg-background border border-border text-[12px] text-muted-foreground mb-5">
            Why Secure Experts
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
            Trust is engineered.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, idx) => (
            <RevealOnScroll key={it.t} delay={idx * 80}>
              <GlassCard tiltMax={4}>
                <div className="size-10 rounded-xl bg-tint-blue grid place-items-center mb-5 transition-transform duration-500 group-hover:scale-110">
                  <it.Icon className="size-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold mb-2">{it.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}