import { useEffect, useRef, useState } from "react";
import { Navigation, Signal, Gauge, MapPin, ShieldCheck } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";
import { GlassCard } from "./GlassCard";

// Smooth curve through control points
const ROUTE: [number, number][] = [
  [60, 360], [140, 320], [220, 340], [300, 280], [380, 230],
  [470, 220], [560, 260], [640, 230], [720, 180], [780, 130],
];

function pathD(pts: [number, number][]) {
  return pts
    .map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`))
    .join(" ");
}

function pointAt(pts: [number, number][], t: number): [number, number] {
  const total = pts.length - 1;
  const f = t * total;
  const i = Math.min(Math.floor(f), total - 1);
  const k = f - i;
  const a = pts[i];
  const b = pts[i + 1];
  return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
}

export function LiveTrackingDemo() {
  const [t, setT] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    const loop = (now: number) => {
      const elapsed = (now - start) / 1000;
      // 14s loop
      setT((elapsed % 14) / 14);
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const [x, y] = pointAt(ROUTE, t);
  const speed = Math.round(38 + Math.sin(t * Math.PI * 2) * 18 + Math.cos(t * 7) * 4);
  const signal = 3 + Math.round(Math.sin(t * Math.PI * 4) * 0.5 + 1.5);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
              Live Demo
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
              See tracking in action.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience how VLTDAIS140 delivers real-time visibility and intelligent monitoring.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid lg:grid-cols-[1fr_320px] gap-4">
            <GlassCard tilt={false} sweep={false} className="!p-0 overflow-hidden">
              <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-[#f5f8ff] to-[#eaf0fb]">
                <svg viewBox="0 0 840 420" className="absolute inset-0 h-full w-full">
                  <defs>
                    <pattern id="mapgrid" width="42" height="42" patternUnits="userSpaceOnUse">
                      <path d="M 42 0 L 0 0 0 42" fill="none" stroke="rgba(10,132,255,0.08)" strokeWidth="1" />
                    </pattern>
                    <radialGradient id="mapglow" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="rgba(10,132,255,0.10)" />
                      <stop offset="100%" stopColor="rgba(10,132,255,0)" />
                    </radialGradient>
                  </defs>
                  <rect width="840" height="420" fill="url(#mapgrid)" />
                  <rect width="840" height="420" fill="url(#mapglow)" />

                  {/* faint roads */}
                  <path d="M0 120 C 200 140, 420 80, 840 160" stroke="rgba(17,17,17,0.06)" strokeWidth="14" fill="none" />
                  <path d="M0 300 C 250 280, 500 360, 840 300" stroke="rgba(17,17,17,0.05)" strokeWidth="12" fill="none" />

                  {/* geofence */}
                  <rect x="430" y="150" width="280" height="160" rx="20"
                    fill="rgba(10,132,255,0.06)"
                    stroke="rgba(10,132,255,0.45)" strokeWidth="1.5" strokeDasharray="8 6">
                    <animate attributeName="stroke-opacity" values="0.45;0.85;0.45" dur="3.4s" repeatCount="indefinite" />
                  </rect>
                  <text x="446" y="172" fontSize="11" fill="rgba(10,132,255,0.7)" fontFamily="ui-monospace,monospace">
                    GEOFENCE · WAREHOUSE 04
                  </text>

                  {/* route */}
                  <path d={pathD(ROUTE)} fill="none" stroke="rgba(17,17,17,0.18)" strokeWidth="2" strokeDasharray="2 6" />
                  <path d={pathD(ROUTE)} fill="none" stroke="#0a84ff" strokeWidth="2.5"
                    strokeDasharray="900" strokeDashoffset={900 - 900 * t} strokeLinecap="round" />

                  {/* vehicle marker */}
                  <g transform={`translate(${x} ${y})`}>
                    <circle r="22" fill="rgba(10,132,255,0.15)">
                      <animate attributeName="r" values="18;28;18" dur="1.6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0;0.5" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                    <circle r="9" fill="#0a84ff" stroke="white" strokeWidth="3" />
                  </g>

                  {/* origin pin */}
                  <g transform={`translate(${ROUTE[0][0]} ${ROUTE[0][1]})`}>
                    <circle r="6" fill="white" stroke="#111" strokeWidth="2" />
                  </g>
                  {/* destination pin */}
                  <g transform={`translate(${ROUTE[ROUTE.length - 1][0]} ${ROUTE[ROUTE.length - 1][1]})`}>
                    <circle r="6" fill="#111" />
                  </g>
                </svg>

                {/* top-left overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur border border-border text-xs">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live · VLTDAIS140-A1
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur border border-border text-xs font-mono text-muted-foreground">
                  28.6139° N · 77.2090° E
                </div>
              </div>
            </GlassCard>

            {/* HUD */}
            <div className="flex flex-col gap-4">
              <GlassCard tilt={false} sweep={false} className="!p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Gauge className="size-4 text-primary" /> Speed
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">km/h</span>
                </div>
                <div className="text-4xl font-semibold tabular-nums">{speed}</div>
                <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-primary transition-[width] duration-200" style={{ width: `${Math.min(100, speed)}%` }} />
                </div>
              </GlassCard>

              <GlassCard tilt={false} sweep={false} className="!p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Signal className="size-4 text-primary" /> GPS signal
                  </div>
                  <span className="text-xs font-mono text-emerald-600">strong</span>
                </div>
                <div className="flex items-end gap-1 h-10">
                  {[1, 2, 3, 4, 5].map((b) => (
                    <div key={b}
                      className="flex-1 rounded-sm transition-colors duration-300"
                      style={{
                        height: `${b * 18}%`,
                        background: b <= signal ? "#0a84ff" : "rgba(17,17,17,0.08)",
                      }} />
                  ))}
                </div>
              </GlassCard>

              <GlassCard tilt={false} sweep={false} className="!p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Navigation className="size-4 text-primary" /> Status
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between"><span className="text-muted-foreground">Engine</span><span className="text-emerald-600">On</span></li>
                  <li className="flex items-center justify-between"><span className="text-muted-foreground">Geofence</span><span>Inside</span></li>
                  <li className="flex items-center justify-between"><span className="text-muted-foreground">Battery</span><span>96%</span></li>
                </ul>
              </GlassCard>

              <div className="flex items-center gap-2 text-xs text-muted-foreground px-1">
                <ShieldCheck className="size-3.5 text-primary" /> Encrypted telemetry · AES-256
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}