import { Check, Minus } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const ROWS = [
  ["Tracking accuracy", "±2 m, multi-constellation", "10–25 m, single GPS"],
  ["Reliability", "99.9% uptime SLA", "Frequent dropouts"],
  ["Security features", "AES-256, hardware keys", "Basic / none"],
  ["Installation", "Guided, under 15 minutes", "Manual, technician needed"],
  ["Support", "24/7 priority response", "Email only, slow"],
  ["Performance", "Real-time, sub-second", "30–60 s latency"],
  ["Monitoring capabilities", "Geofence, alerts, analytics", "Position only"],
];

export function Comparison() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
              Why VLTDAIS140
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
              Built beyond standard GPS tracking.
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="rounded-3xl border border-border bg-background/70 backdrop-blur-xl overflow-hidden shadow-soft">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] text-sm">
              <div className="px-6 py-5 text-xs uppercase tracking-wider text-muted-foreground border-b border-border">Capability</div>
              <div className="px-6 py-5 border-b border-border bg-gradient-to-b from-primary/5 to-transparent">
                <div className="text-xs uppercase tracking-wider text-primary font-semibold">VLTDAIS140</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Intelligent GPS</div>
              </div>
              <div className="px-6 py-5 border-b border-border">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Generic GPS</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Off-the-shelf</div>
              </div>

              {ROWS.map(([label, ours, theirs], i) => (
                <div key={label} className="contents group">
                  <div className={`px-6 py-5 text-sm font-medium border-b border-border ${i === ROWS.length - 1 ? "border-b-0" : ""} transition-colors group-hover:bg-muted/40`}>
                    {label}
                  </div>
                  <div className={`px-6 py-5 border-b border-border ${i === ROWS.length - 1 ? "border-b-0" : ""} bg-gradient-to-b from-primary/[0.03] to-transparent transition-colors group-hover:bg-primary/10`}>
                    <div className="flex items-start gap-2 text-sm">
                      <Check className="size-4 text-primary mt-0.5 shrink-0" />
                      <span>{ours}</span>
                    </div>
                  </div>
                  <div className={`px-6 py-5 border-b border-border ${i === ROWS.length - 1 ? "border-b-0" : ""} transition-colors group-hover:bg-muted/40`}>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Minus className="size-4 mt-0.5 shrink-0" />
                      <span>{theirs}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}