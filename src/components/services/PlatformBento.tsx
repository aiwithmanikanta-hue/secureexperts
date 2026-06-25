import {
  MapPin, Fuel, Radio, UserCheck, Hexagon, Power, Rewind,
  Smartphone, Monitor, BarChart3, AlertTriangle, ShieldAlert,
} from "lucide-react";
import { useReveal } from "@/components/home/useReveal";

const features = [
  { Icon: MapPin, title: "Live GPS Tracking", desc: "Second-by-second vehicle telemetry.", span: "sm:col-span-2 sm:row-span-2" },
  { Icon: Fuel, title: "Fuel Monitoring", desc: "Tank levels & fills in real time." },
  { Icon: Radio, title: "RFID Tracking", desc: "Driver & cargo identification." },
  { Icon: UserCheck, title: "Driver Monitoring", desc: "Behaviour, hours and fatigue." },
  { Icon: Hexagon, title: "Geo-fencing", desc: "Custom virtual boundaries with alerts." },
  { Icon: Power, title: "Engine On/Off", desc: "Instant ignition state alerts." },
  { Icon: Rewind, title: "Trip Playback", desc: "Replay any trip up to 90 days." },
  { Icon: Smartphone, title: "Mobile App", desc: "iOS & Android for owners and drivers." },
  { Icon: Monitor, title: "Web Dashboard", desc: "Browser-based fleet command center." },
  { Icon: BarChart3, title: "Reports & Analytics", desc: "Exportable insights on demand." },
  { Icon: AlertTriangle, title: "Fuel Theft Detection", desc: "AI-flagged siphoning events." },
  { Icon: ShieldAlert, title: "SOS Alerts", desc: "Emergency signal to your control room." },
];

export function PlatformBento() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6 surface-2">
      <div ref={r} className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-background border border-border text-[12px] text-muted-foreground mb-5">
            Platform
          </div>
          <h2 className="text-fluid-h2 font-semibold text-balance">
            Everything you need <span className="text-muted-foreground">in one platform.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 auto-rows-[minmax(140px,auto)] gap-3 sm:gap-4">
          {features.map(({ Icon, title, desc, span }) => (
            <div
              key={title}
              className={`group relative overflow-hidden rounded-3xl bg-background border border-border p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:border-primary/30 ${span ?? ""}`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-12 -right-12 size-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <span className="grid size-10 place-items-center rounded-xl bg-tint-blue text-primary mb-3 transition-transform duration-500 group-hover:scale-110">
                <Icon className="size-5" strokeWidth={1.8} />
              </span>
              <h3 className="text-base font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}