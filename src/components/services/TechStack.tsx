import { Satellite, Fuel, Cloud, Smartphone, BellRing, Sparkles } from "lucide-react";
import { useReveal } from "@/components/home/useReveal";

const stack = [
  { Icon: Satellite, title: "GPS Technology", desc: "Multi-constellation GNSS receivers for sub-meter accuracy, anywhere." },
  { Icon: Fuel, title: "Fuel Sensor Tech", desc: "Capacitive ITALON sensors with anti-tamper sealing and 0.1% precision." },
  { Icon: Cloud, title: "Cloud Software", desc: "Secure cloud infrastructure with 99.9% uptime and second-level telemetry." },
  { Icon: Smartphone, title: "Android & Web", desc: "Native mobile apps and a responsive web dashboard for every team." },
  { Icon: BellRing, title: "Live Alerts", desc: "SMS, push and email alerts the moment something needs attention." },
  { Icon: Sparkles, title: "AI Analytics", desc: "Pattern detection for fuel theft, harsh driving and route anomalies." },
];

export function TechStack() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6">
      <div ref={r} className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
            Technology
          </div>
          <h2 className="text-fluid-h2 font-semibold text-balance">Our technology stack.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Hardware, software and intelligence — engineered together.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {stack.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-3xl bg-card border border-border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:border-primary/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="grid size-10 place-items-center rounded-xl bg-tint-blue text-primary transition-transform duration-500 group-hover:scale-110">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-[14px] text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}