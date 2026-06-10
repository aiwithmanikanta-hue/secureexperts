import showcaseImg from "@/assets/vltdais140-showcase.png";
import { useReveal } from "./useReveal";
import { useTilt } from "./useTilt";
import { MapPin, Layers, Lock } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { ParallaxImage } from "./ParallaxImage";
import { RevealOnScroll } from "./RevealOnScroll";

export function ProductShowcase() {
  const r1 = useReveal();
  const tilt = useTilt<HTMLDivElement>(4);
  return (
    <section id="product" className="relative py-32 px-6">
      <div ref={r1} className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
            The Product
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
            One device.<br className="sm:hidden" />{" "}
            <span className="text-muted-foreground">Total visibility.</span>
          </h2>
        </div>

        {/* Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div ref={tilt} className="tilt-card md:col-span-2 md:row-span-2 surface-1 rounded-3xl border border-border p-8 sm:p-12 relative overflow-hidden group hover:shadow-lift">
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/10 blur-3xl pointer-events-none ambient-blob" />
            <ParallaxImage
              src={showcaseImg}
              alt="VLTDAIS140 detail"
              width={1280}
              height={1024}
              loading="lazy"
              wrapperClassName="relative aspect-[4/3] rounded-2xl bg-muted"
              className="w-full h-full object-cover"
            />
            <div className="relative mt-8">
              <p className="text-[12px] text-muted-foreground mb-2">VLTDAIS140</p>
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight max-w-md">
                Precision tracking, engineered for everyday confidence.
              </h3>
            </div>
          </div>

          {[
            {
              Icon: MapPin,
              t: "Real-time",
              d: "Continuous position fix with sub-meter accuracy.",
            },
            {
              Icon: Layers,
              t: "Compact",
              d: "48 × 32 × 14mm aerospace-grade housing.",
            },
            {
              Icon: Lock,
              t: "Secure",
              d: "AES-256 encrypted telemetry, hardware key isolation.",
            },
          ].map((c, i) => (
            <RevealOnScroll key={c.t} delay={i * 90}>
              <GlassCard tiltMax={5}>
                <div className="size-10 rounded-xl bg-tint-blue grid place-items-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <c.Icon className="size-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}