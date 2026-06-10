import { Truck, Car, Bus, Package, HardHat, Building2, Landmark, Box } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const ITEMS = [
  { Icon: Truck, t: "Fleet Management", d: "Optimize routes, fuel, and driver behavior across the fleet.", span: "md:col-span-2 md:row-span-2" },
  { Icon: Car, t: "Personal Vehicles", d: "Always know where your car is, with theft-recovery alerts." },
  { Icon: Bus, t: "School Transportation", d: "Safe, supervised commutes with parent notifications." },
  { Icon: Package, t: "Logistics", d: "Track shipments end-to-end with delivery proof." , span: "md:col-span-2"},
  { Icon: HardHat, t: "Construction", d: "Monitor heavy equipment and prevent unauthorized use." },
  { Icon: Building2, t: "Corporate Vehicles", d: "Manage executive cars with usage analytics." },
  { Icon: Landmark, t: "Government Ops", d: "Secure, auditable tracking for public service vehicles." },
  { Icon: Box, t: "Asset Tracking", d: "Trailers, containers, generators — anywhere, anytime." },
];

export function Industries() {
  return (
    <section className="relative py-32 px-6 surface-2">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex px-3 py-1 rounded-full bg-background border border-border text-[12px] text-muted-foreground mb-5">
              Industries
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
              Designed for every industry.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4">
          {ITEMS.map((it, i) => (
            <RevealOnScroll key={it.t} delay={i * 60} className={it.span ?? ""}>
              <div className="group relative h-full rounded-3xl border border-border bg-background/70 backdrop-blur-xl p-6 overflow-hidden transition-all duration-500 hover:shadow-lift hover:border-primary/30 hover:-translate-y-1">
                <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                <span aria-hidden className="pointer-events-none absolute -bottom-10 -right-10 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <it.Icon className="size-40 text-primary/10" strokeWidth={1} />
                </span>
                <div className="relative flex h-full flex-col">
                  <div className="size-10 rounded-xl bg-tint-blue grid place-items-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <it.Icon className="size-5 text-primary" strokeWidth={2} />
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-lg font-semibold">{it.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">{it.d}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}