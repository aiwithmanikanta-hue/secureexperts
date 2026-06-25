import { Satellite, Fuel, LayoutDashboard, ShieldCheck, Camera, Package } from "lucide-react";
import { useReveal } from "@/components/home/useReveal";

const items = [
  {
    Icon: Satellite,
    title: "GPS Tracking",
    desc: "Real-time vehicle tracking with route history, geofencing, speed monitoring and instant alerts.",
  },
  {
    Icon: Fuel,
    title: "Fuel Monitoring",
    desc: "Monitor fuel usage, fuel filling, theft detection and consumption analytics in one view.",
  },
  {
    Icon: LayoutDashboard,
    title: "Fleet Management",
    desc: "Manage multiple vehicles through one centralized, intelligent fleet platform.",
  },
  {
    Icon: ShieldCheck,
    title: "AIS-140 Solutions",
    desc: "Government-compliant GPS tracking for commercial vehicles, ready for certification.",
  },
  {
    Icon: Camera,
    title: "Vehicle Cameras",
    desc: "Live vehicle monitoring and on-road security surveillance with cloud recording.",
  },
  {
    Icon: Package,
    title: "Asset Tracking",
    desc: "Track valuable equipment, machinery and movable assets across sites in real time.",
  },
];

export function ServiceCategories() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6">
      <div ref={r} className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
            What we do
          </div>
          <h2 className="text-fluid-h2 font-semibold text-balance">
            Six services. <span className="text-muted-foreground">One connected platform.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border p-6 sm:p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:border-primary/30"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out"
              />
              <div className="relative">
                <span className="grid size-12 place-items-center rounded-2xl bg-tint-blue text-primary mb-5 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="text-fluid-h3 font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}