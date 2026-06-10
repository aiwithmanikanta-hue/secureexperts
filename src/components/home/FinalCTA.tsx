import { ArrowRight } from "lucide-react";
import { useReveal } from "./useReveal";
import { MagneticButton } from "./MagneticButton";

export function FinalCTA() {
  const r = useReveal();
  return (
    <section id="cta" className="relative py-32 px-6">
      <div ref={r} className="reveal max-w-5xl mx-auto">
        <div className="relative surface-4 rounded-[40px] border border-border px-8 py-20 sm:p-24 text-center overflow-hidden">
          {/* Slow light waves */}
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] bg-primary/15 rounded-full blur-3xl pointer-events-none"
            style={{ animation: "wave-shift 16s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-40 right-0 size-[500px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none"
            style={{ animation: "wave-shift 22s ease-in-out -8s infinite" }}
          />
          <div className="absolute inset-0 security-grid opacity-40 pointer-events-none" />
          <div className="relative">
            <div className="inline-flex px-3 py-1 rounded-full bg-background border border-border text-[12px] text-muted-foreground mb-6">
              Get Started
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] mb-5 text-balance">
              Upgrade your security<br className="sm:hidden" />{" "}
              <span className="text-muted-foreground">with BLTDAS140.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Take control with a product built for trust, performance, and absolute precision.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <MagneticButton href="#contact" variant="primary" glow>
                Contact Secure Experts
                <ArrowRight className="size-4" />
              </MagneticButton>
              <MagneticButton href="#product" variant="secondary">
                Buy Now
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}