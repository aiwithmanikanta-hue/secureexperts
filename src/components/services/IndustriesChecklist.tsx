import { Check, MapPin, Activity } from "lucide-react";
import { useReveal } from "@/components/home/useReveal";
import checklistHero from "@/assets/services/checklist-hero.jpg";

const industries = [
  "Logistics",
  "School Buses",
  "Construction",
  "Mining",
  "Fuel Tankers",
  "Delivery Vehicles",
  "Corporate Fleets",
  "Government Vehicles",
  "Passenger Transport",
];

export function IndustriesChecklist() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6 surface-2">
      <div ref={r} className="reveal max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex px-3 py-1 rounded-full bg-background border border-border text-[12px] text-muted-foreground mb-5">
            Who we serve
          </div>
          <h2 className="text-fluid-h2 font-semibold text-balance mb-6">
            Built for every fleet on Indian roads.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            From a school bus running a single route to a 500-truck logistics network — Secure
            Experts scales to keep every vehicle visible and accountable.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {industries.map((label, i) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-background border border-border px-4 py-3 transition-all hover:border-primary/30 hover:-translate-y-0.5"
                style={{ animation: `reveal-up 0.6s ${0.05 + i * 0.04}s cubic-bezier(0.16,1,0.3,1) both` }}
              >
                <span className="grid size-7 place-items-center rounded-full bg-tint-blue text-primary shrink-0">
                  <Check className="size-4" strokeWidth={2.4} />
                </span>
                <span className="text-[15px] font-medium text-foreground">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[40px] bg-primary/10 blur-3xl pointer-events-none ambient-blob" />
          <div className="relative rounded-[28px] overflow-hidden border border-border shadow-lift aspect-[4/5] sm:aspect-[5/6]">
            <img
              src={checklistHero}
              alt="Indian highway with a truck under tracking"
              width={1216}
              height={1504}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

            <div
              className="absolute top-4 left-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/70 px-3.5 py-2.5 text-[12px] shadow-soft"
              style={{ animation: "float-card-a 7s ease-in-out infinite" }}
            >
              <div className="flex items-center gap-2 font-medium text-foreground">
                <span className="grid size-7 place-items-center rounded-lg bg-tint-blue text-primary">
                  <Activity className="size-3.5" />
                </span>
                Live · 12 sats
              </div>
              <div className="text-muted-foreground mt-0.5">54 km/h · Ignition ON</div>
            </div>

            <div
              className="absolute bottom-4 right-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/70 px-3.5 py-2.5 text-[12px] shadow-soft"
              style={{ animation: "float-card-b 8s ease-in-out 1s infinite" }}
            >
              <div className="flex items-center gap-2 font-medium text-foreground">
                <span className="grid size-7 place-items-center rounded-lg bg-tint-blue text-primary">
                  <MapPin className="size-3.5" />
                </span>
                Vijayawada → Vizag
              </div>
              <div className="text-muted-foreground mt-0.5">ETA 4h 12m</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}