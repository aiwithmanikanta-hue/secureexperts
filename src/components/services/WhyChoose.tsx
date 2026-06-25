import { Check } from "lucide-react";
import { useReveal } from "@/components/home/useReveal";

const reasons = [
  "Real-Time Tracking",
  "Fuel Monitoring",
  "Instant Alerts",
  "AI Dashboard",
  "Professional Installation",
  "Mobile App",
  "Web Dashboard",
  "24/7 Customer Support",
  "Secure Cloud Platform",
  "Scalable Solutions",
];

export function WhyChoose() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6">
      <div ref={r} className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
            Why Secure Experts
          </div>
          <h2 className="text-fluid-h2 font-semibold text-balance">
            Ten reasons fleets choose us.
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {reasons.map((r) => (
            <li
              key={r}
              className="group flex items-center gap-3 rounded-2xl bg-card border border-border p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:border-primary/30"
            >
              <span className="grid size-8 place-items-center rounded-full bg-tint-blue text-primary shrink-0 transition-transform duration-500 group-hover:scale-110">
                <Check className="size-4" strokeWidth={2.4} />
              </span>
              <span className="text-[14px] font-medium text-foreground">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}