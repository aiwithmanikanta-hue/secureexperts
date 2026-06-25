import { useReveal } from "@/components/home/useReveal";
import { TrendingUp, AlertTriangle } from "lucide-react";

function Chart({ color, points, fillId }: { color: string; points: string; fillId: string }) {
  return (
    <svg viewBox="0 0 320 120" className="w-full h-32">
      <defs>
        <linearGradient id={fillId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${points} L 312 120 L 8 120 Z`} fill={`url(#${fillId})`} />
      <path
        d={points}
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="600"
        strokeDashoffset="600"
        style={{ animation: "draw-line 2.2s cubic-bezier(0.16,1,0.3,1) 0.2s forwards" }}
      />
    </svg>
  );
}

export function FuelAnalytics() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6">
      <style>{`@keyframes draw-line { to { stroke-dashoffset: 0; } }`}</style>
      <div ref={r} className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
            Fuel intelligence
          </div>
          <h2 className="text-fluid-h2 font-semibold text-balance">Smart fuel intelligence.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          <div className="rounded-3xl bg-card border border-border p-6 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <TrendingUp className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">Fuel Filling Events</h3>
                  <p className="text-[12px] text-muted-foreground">Last 7 days · litres</p>
                </div>
              </div>
              <span className="text-[12px] font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+18%</span>
            </div>
            <Chart
              color="#10b981"
              fillId="fill-green"
              points="M 8 90 L 50 70 L 95 75 L 140 40 L 185 55 L 230 25 L 275 35 L 312 18"
            />
          </div>
          <div className="rounded-3xl bg-card border border-border p-6 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-rose-50 text-rose-600">
                  <AlertTriangle className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">Fuel Theft Detection</h3>
                  <p className="text-[12px] text-muted-foreground">Anomalies detected</p>
                </div>
              </div>
              <span className="text-[12px] font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-full">3 alerts</span>
            </div>
            <Chart
              color="#ef4444"
              fillId="fill-red"
              points="M 8 60 L 50 65 L 95 50 L 140 90 L 185 40 L 230 95 L 275 50 L 312 30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}