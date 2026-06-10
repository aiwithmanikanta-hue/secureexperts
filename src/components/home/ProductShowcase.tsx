import showcaseImg from "@/assets/bltdas140-showcase.jpg";

const benefits = [
  { n: "01", title: "Real-Time Tracking", body: "Sub-meter accuracy with millisecond reporting cadence." },
  { n: "02", title: "Compact Design", body: "Aerospace-grade housing engineered for total discretion." },
  { n: "03", title: "Secure Performance", body: "AES-256 encrypted channels with hardware key isolation." },
  { n: "04", title: "Easy Installation", body: "Magnetic mount with zero-config pairing in under 60 seconds." },
  { n: "05", title: "Accurate Monitoring", body: "Quad-GNSS constellation lock across 142 countries." },
];

export function ProductShowcase() {
  return (
    <section id="product" className="relative py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 relative">
          <div className="relative rounded-3xl overflow-hidden border border-border ring-1 ring-white/5 bg-card">
            <img
              src={showcaseImg}
              alt="BLTDAS140 detail view on a blueprint surface"
              width={1280}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 font-mono-tech text-[10px] uppercase tracking-widest text-accent/80">
              BLTDAS140 · ASSET TRACKING UNIT
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-accent mb-5">
            The Product
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase italic tracking-tighter mb-6 leading-[0.95]">
            One Device.<br />Total Visibility.
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            The BLTDAS140 is the foundation of the Secure Experts ecosystem — a precision
            instrument engineered to monitor, protect, and report with absolute consistency.
          </p>

          <ul className="space-y-px bg-border">
            {benefits.map((b) => (
              <li
                key={b.n}
                className="bg-background p-5 flex gap-5 items-start group hover:bg-card transition-colors"
              >
                <span className="font-mono-tech text-[10px] text-accent mt-1 tracking-widest">{b.n}</span>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider">{b.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{b.body}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}