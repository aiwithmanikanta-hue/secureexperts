import { useEffect, useState } from "react";
import { Activity, Fuel, Gauge, Satellite, ShieldCheck, MapPin } from "lucide-react";
import { useReveal } from "./useReveal";
import { trackingVideo } from "@/assets";

// Smooth route as a cubic Bezier-ish polyline
const ROUTE = "M 40 220 C 110 60, 220 320, 320 180 S 520 80, 580 200 S 700 320, 760 160";
const ROUTE_LEN = 1100; // approx pathLength used for dash math

export function LiveTrackingDemo() {
  const r = useReveal<HTMLDivElement>();
  const [t, setT] = useState(0); // 0..1 progress
  const [speed, setSpeed] = useState(54);
  const [fuel, setFuel] = useState(72);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setT(0.42);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = ((now - start) / 18000) % 1;
      setT(p);
      setSpeed(48 + Math.round(Math.sin(p * Math.PI * 2) * 12));
      setFuel(70 - Math.round(p * 4));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Sample point along path using a hidden SVG path
  const [pt, setPt] = useState({ x: 40, y: 220 });
  useEffect(() => {
    const svg = document.getElementById("ltd-route") as unknown as SVGPathElement | null;
    if (!svg) return;
    const len = svg.getTotalLength?.() ?? ROUTE_LEN;
    const p = svg.getPointAtLength(len * t);
    setPt({ x: p.x, y: p.y });
  }, [t]);

  return (
    <section className="relative py-32 px-6">
      <div ref={r} className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
            Live Tracking · Demo
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
            See your fleet, <span className="text-muted-foreground">in motion.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A glimpse of the Secure Experts dashboard — second-by-second telemetry,
            geofence breaches, and fuel insights, all in one view.
          </p>
        </div>

        <div className="relative rounded-[32px] border border-border bg-white/75 backdrop-blur-2xl p-3 sm:p-4 shadow-[0_30px_80px_-30px_rgba(10,132,255,0.35)] overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-20 size-72 rounded-full bg-primary/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-20 size-72 rounded-full bg-sky-300/20 blur-3xl"
          />

          {/* Top bar */}
          <div className="relative flex items-center justify-between rounded-2xl bg-white/80 border border-border px-4 py-2.5 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-foreground">VLTD-4G · KA-09-1284</span>
              <span className="hidden sm:inline">· Bengaluru → Mysore Express</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5"><Satellite className="size-3 text-primary" /> 12 sats</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3 text-primary" /> Geofence OK</span>
              <span className="tabular-nums">{(t * 142).toFixed(1)} km</span>
            </div>
          </div>

          <div className="relative mt-3 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-3">
            {/* Map */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-black">
              <video
                src={trackingVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 size-full object-cover"
              />
              <div
                className="absolute top-3 left-3 rounded-xl bg-white/90 backdrop-blur-xl border border-border px-3 py-2 text-[11px] shadow-soft"
                aria-hidden
              >
                <p className="font-semibold text-foreground">VLTDAIS140</p>
                <p className="text-muted-foreground">Ignition ON · Trip #2841</p>
              </div>
            </div>

            {/* Side panel */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              <Metric icon={<Gauge className="size-4" />} label="Speed" value={`${speed}`} unit="km/h" />
              <Metric icon={<Fuel className="size-4" />} label="Fuel" value={`${fuel}`} unit="%" tone="emerald" />
              <Metric icon={<Activity className="size-4" />} label="Engine" value="Running" unit="" />
              <Metric icon={<MapPin className="size-4" />} label="Geofence" value="Inside" unit="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  icon,
  label,
  value,
  unit,
  tone = "primary",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
  tone?: "primary" | "emerald";
}) {
  const toneCls = tone === "emerald" ? "text-emerald-600 bg-emerald-50" : "text-primary bg-tint-blue";
  return (
    <div className="rounded-2xl border border-border bg-white/85 backdrop-blur-xl p-4 shadow-soft">
      <div className="flex items-center gap-2 text-[11px] text-muted-foreground uppercase tracking-wider">
        <span className={`grid size-6 place-items-center rounded-lg ${toneCls}`}>{icon}</span>
        {label}
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-2xl font-semibold tracking-tight tabular-nums text-foreground">{value}</span>
        {unit && <span className="text-xs text-muted-foreground">{unit}</span>}
      </div>
    </div>
  );
}