import showcaseImg from "@/assets/bltdas140-showcase.jpg";
import { useReveal } from "./useReveal";
import { useTilt } from "./useTilt";
import { MapPin, Layers, Lock } from "lucide-react";

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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src={showcaseImg}
                alt="BLTDAS140 detail"
                width={1280}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-1000"
              />
            </div>
            <div className="mt-8">
              <p className="text-[12px] text-muted-foreground mb-2">BLTDAS140</p>
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
          ].map((c) => (
            <div
              key={c.t}
              className="surface-1 rounded-3xl border border-border p-8 hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="size-10 rounded-xl bg-tint-blue grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                <c.Icon className="size-5 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{c.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}