const pillars = [
  { k: "01", t: "Premium Quality", d: "Every component sourced and assembled to a single uncompromising standard." },
  { k: "02", t: "Customer Safety", d: "Your safety is the metric we engineer to. Every decision flows from it." },
  { k: "03", t: "Technology-Driven", d: "In-house silicon and firmware ensure end-to-end accountability." },
  { k: "04", t: "Professional Support", d: "Dedicated specialists, never tier-one queues. Direct line to engineering." },
  { k: "05", t: "Proven Reliability", d: "99.99% device uptime measured across our deployed global fleet." },
];

export function WhyUs() {
  return (
    <section id="about" className="relative py-28 px-6 border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
              Why Secure Experts
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase italic tracking-tighter leading-[0.95] mb-6">
              Trust is<br />Engineered.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We are not a reseller. Secure Experts designs, manufactures, and supports
              the BLTDAS140 end-to-end — the only way to guarantee the precision our
              customers depend on.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
            {pillars.map((p) => (
              <div key={p.k} className="bg-background p-8 group hover:bg-card transition-colors">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-mono-tech text-[10px] text-accent tracking-widest">{p.k}</span>
                  <h3 className="text-lg font-bold uppercase tracking-tight">{p.t}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-9">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}