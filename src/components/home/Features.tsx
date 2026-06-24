import { Satellite, ShieldCheck, Cpu, Plug, Award, Activity, Zap } from "lucide-react";
import { useReveal } from "./useReveal";
import { GlassCard } from "./GlassCard";
import { RevealOnScroll } from "./RevealOnScroll";

const small = [
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

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4">
          {/* Large feature — Live GPS */}
          <RevealOnScroll className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <GlassCard tiltMax={4} className="h-full !p-10 relative overflow-hidden">
              <span aria-hidden className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-primary/15 blur-3xl" />
              <div className="size-12 rounded-2xl bg-tint-blue grid place-items-center mb-6">
                <Satellite className="size-6 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 leading-tight">Live GPS tracking</h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                Continuous fix across GPS, GLONASS, Galileo, and BeiDou. Sub-meter accuracy,
                even in dense urban canyons and shielded environments.
              </p>
              {/* mini constellation */}
              <div className="mt-8 flex items-end gap-2 h-16">
                {[8, 14, 11, 18, 13, 22, 16, 24, 19, 26, 21, 28].map((h, i) => (
                  <span
                    key={i}
                    className="w-2 rounded-full bg-primary/60"
                    style={{
                      height: `${h * 2}px`,
                      animation: `soft-pulse ${2 + (i % 4) * 0.3}s ease-in-out ${i * 0.1}s infinite`,
                    }}
                  />
                ))}
              </div>
            </GlassCard>
          </RevealOnScroll>

          {/* Security card */}
          <RevealOnScroll delay={80} className="sm:col-span-1 lg:col-span-2">
            <GlassCard tiltMax={4} className="h-full relative overflow-hidden">
              <div className="flex items-start gap-5">
                <div className="size-10 rounded-xl bg-tint-blue grid place-items-center shrink-0">
                  <ShieldCheck className="size-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">End-to-end security</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    AES-256 encryption with hardware-isolated keys, secure boot, and signed firmware updates.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["AES-256", "Secure Boot", "TLS 1.3", "Signed OTA"].map((b) => (
                  <span key={b} className="text-[11px] px-2.5 py-1 rounded-full bg-background border border-border text-foreground/80">
                    {b}
                  </span>
                ))}
              </div>
            </GlassCard>
          </RevealOnScroll>

          {/* Small cards */}
          {small.map((f, i) => (
            <RevealOnScroll key={f.t} delay={140 + i * 70}>
              <GlassCard tiltMax={4} className="h-full">
                <div className="size-10 rounded-xl bg-tint-blue grid place-items-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <f.Icon className="size-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold mb-1.5">{f.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}

          {/* Wide highlight */}
          <RevealOnScroll delay={400} className="sm:col-span-2 lg:col-span-4">
            <GlassCard tiltMax={2} className="h-full relative overflow-hidden">
              <div className="grid sm:grid-cols-[auto_1fr_auto] items-center gap-6">
                <div className="size-12 rounded-2xl bg-tint-blue grid place-items-center">
                  <Zap className="size-6 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Built on a private telemetry backbone</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dedicated MQTT pipelines and redundant LTE-M / NB-IoT keep every byte flowing, with 99.99% measured uptime.
                  </p>
                </div>
                <div className="hidden sm:flex items-baseline gap-1 text-right">
                  <span className="text-3xl font-semibold tracking-tight tabular-nums text-foreground">99.99</span>
                  <span className="text-sm text-muted-foreground">% uptime</span>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}