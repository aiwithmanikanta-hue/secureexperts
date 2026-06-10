import { Satellite, ShieldCheck, Cpu, Plug, Award, Activity } from "lucide-react";

const features = [
  { n: "01", tag: "Tracking", title: "Live GPS Tracking", body: "Continuous position fix with millisecond latency across encrypted mesh protocols.", Icon: Satellite },
  { n: "02", tag: "Security", title: "Strong Security Performance", body: "Hardware-isolated key store with AES-256 transport. Built for adversarial environments.", Icon: ShieldCheck },
  { n: "03", tag: "Form", title: "Compact & Durable", body: "Aerospace-grade aluminum housing, IP68 rated. Engineered for ten-year service life.", Icon: Cpu },
  { n: "04", tag: "System", title: "Easy Integration", body: "Drop-in compatibility with fleet platforms via REST, MQTT, and proprietary SDK.", Icon: Plug },
  { n: "05", tag: "Trust", title: "Trusted by Professionals", body: "Specified by security teams, fleet operators, and high-value asset managers worldwide.", Icon: Award },
  { n: "06", tag: "Monitor", title: "Dependable Monitoring", body: "24/7 telemetry with intelligent geofencing and instant exception alerting.", Icon: Activity },
];

export function Features() {
  return (
    <section id="features" className="relative py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
              Key Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase italic tracking-tighter leading-[0.95] max-w-xl">
              Engineered for<br />Total Dominance.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-sm leading-relaxed">
            Six pillars of precision define every BLTDAS140 unit shipped from our facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {features.map((f) => (
            <div
              key={f.n}
              className="bg-background p-10 group hover:bg-card transition-colors relative"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono-tech text-accent text-[10px] uppercase tracking-widest">
                  {f.n} // {f.tag}
                </span>
                <f.Icon className="size-4 text-accent/70 group-hover:text-accent transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{f.body}</p>
              <div className="w-10 h-px bg-accent/30 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}