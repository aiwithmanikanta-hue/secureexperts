import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-32 px-6 overflow-hidden border-t border-border">
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-accent/20 rounded-full pointer-events-none"
        style={{ animation: "pulse-glow 6s ease-in-out infinite", filter: "blur(120px)" }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
          Begin Deployment
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase italic tracking-tighter leading-[0.95] mb-6 text-balance">
          Upgrade Your Security<br />with <span className="text-accent">BLTDAS140.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Take control with a product built for trust, performance, and absolute precision.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="group px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-tighter text-sm hover:scale-[1.03] transition-transform duration-300 inline-flex items-center gap-2"
          >
            Contact Secure Experts
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#product"
            className="px-8 py-4 border border-border hover:bg-card hover:border-accent/40 transition-colors font-bold uppercase tracking-tighter text-sm"
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
}