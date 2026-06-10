import { Satellite, ShieldCheck, Cpu, Plug, Award, Activity } from "lucide-react";
import { useReveal } from "./useReveal";
import { GlassCard } from "./GlassCard";
import { RevealOnScroll } from "./RevealOnScroll";

const features = [
  { Icon: Satellite, t: "Live GPS tracking", d: "Continuous fix across GPS, GLONASS, Galileo, BeiDou." },
  { Icon: ShieldCheck, t: "End-to-end security", d: "AES-256 encryption with hardware-isolated keys." },
  { Icon: Cpu, t: "Compact & durable", d: "Aerospace-grade housing, IP68 rated for any climate." },
  { Icon: Plug, t: "Effortless integration", d: "REST, MQTT, and SDK support for fleet platforms." },
  { Icon: Award, t: "Trusted globally", d: "Specified by professionals in 142 countries." },
  { Icon: Activity, t: "Dependable monitoring", d: "24/7 telemetry with intelligent geofencing." },
];

export function Features() {
  const r = useReveal();
  return (
    <section id="features" className="relative py-32 px-6 surface-2">
      <div ref={r} className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
            Core Features
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
            Engineered for clarity.<br className="sm:hidden" />{" "}
            <span className="text-muted-foreground">Built for trust.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <RevealOnScroll key={f.t} delay={i * 70}>
              <GlassCard tiltMax={4}>
                <div className="size-10 rounded-xl bg-tint-blue grid place-items-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <f.Icon className="size-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}