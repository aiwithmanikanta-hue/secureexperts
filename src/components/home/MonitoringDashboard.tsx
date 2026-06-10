import { Battery, Activity, Bell, MapPin, Gauge, Crosshair, Clock } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";
import { GlassCard } from "./GlassCard";
import { useCountUp } from "./useCountUp";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, value } = useCountUp(to, 1400);
  return <span ref={ref} className="tabular-nums">{Math.round(value)}{suffix}</span>;
}

function Ring({ value }: { value: number }) {
  const r = 32;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 80 80" className="size-20">
      <circle cx="40" cy="40" r={r} stroke="rgba(17,17,17,0.08)" strokeWidth="6" fill="none" />
      <circle cx="40" cy="40" r={r} stroke="#0a84ff" strokeWidth="6" fill="none"
        strokeDasharray={c} strokeDashoffset={c - (c * value) / 100}
        strokeLinecap="round" transform="rotate(-90 40 40)"
        style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1)" }} />
    </svg>
  );
}

const SPARK = [22, 28, 24, 36, 30, 42, 38, 50, 46, 58, 52, 64];
const BARS = [40, 55, 35, 70, 60, 80, 65, 50, 75, 58];

export function MonitoringDashboard() {
  return (
    <section className="relative py-32 px-6 surface-2">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex px-3 py-1 rounded-full bg-background border border-border text-[12px] text-muted-foreground mb-5">
              Intelligent Monitoring
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
              A smarter way to monitor everything.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful insights presented through a beautiful monitoring interface.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px]">
          {/* Vehicle status — large */}
          <RevealOnScroll className="md:col-span-2 md:row-span-2" delay={0}>
            <GlassCard tiltMax={3} className="!p-6 h-full">
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">Vehicle Status</div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">ACTIVE</span>
              </div>
              <div className="mt-6 text-5xl font-semibold tracking-tight">VLTDAIS140-A1</div>
              <p className="text-sm text-muted-foreground mt-2">In motion · NH-48 · Sector 22</p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                <div><div className="text-muted-foreground text-xs">Distance</div><div className="font-semibold mt-1"><Counter to={482} /> km</div></div>
                <div><div className="text-muted-foreground text-xs">Trips</div><div className="font-semibold mt-1"><Counter to={36} /></div></div>
                <div><div className="text-muted-foreground text-xs">Idle</div><div className="font-semibold mt-1"><Counter to={12} suffix="m" /></div></div>
              </div>
            </GlassCard>
          </RevealOnScroll>

          {/* Battery */}
          <RevealOnScroll delay={80}>
            <GlassCard tiltMax={3} className="!p-5 h-full">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2"><Battery className="size-3.5 text-primary" /> Battery</div>
              <div className="flex items-center gap-4">
                <Ring value={96} />
                <div>
                  <div className="text-2xl font-semibold">96%</div>
                  <div className="text-xs text-muted-foreground">Healthy</div>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>

          {/* GPS accuracy */}
          <RevealOnScroll delay={140}>
            <GlassCard tiltMax={3} className="!p-5 h-full">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2"><Crosshair className="size-3.5 text-primary" /> GPS Accuracy</div>
              <div className="text-2xl font-semibold">±<Counter to={2} /> m</div>
              <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "94%" }} />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">12 satellites locked</div>
            </GlassCard>
          </RevealOnScroll>

          {/* Trip history sparkline */}
          <RevealOnScroll className="md:col-span-2" delay={200}>
            <GlassCard tiltMax={3} className="!p-5 h-full">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground"><Activity className="size-3.5 text-primary" /> Trip history · 12 weeks</div>
                <span className="text-xs text-emerald-600">+18%</span>
              </div>
              <svg viewBox="0 0 220 70" className="w-full h-[70%]">
                <defs>
                  <linearGradient id="sparkfill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(10,132,255,0.25)" />
                    <stop offset="100%" stopColor="rgba(10,132,255,0)" />
                  </linearGradient>
                </defs>
                {(() => {
                  const pts = SPARK.map((v, i) => [10 + i * 18, 70 - v]);
                  const d = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ");
                  return (
                    <>
                      <path d={`${d} L 210 70 L 10 70 Z`} fill="url(#sparkfill)" />
                      <path d={d} fill="none" stroke="#0a84ff" strokeWidth="2" strokeLinecap="round" />
                    </>
                  );
                })()}
              </svg>
            </GlassCard>
          </RevealOnScroll>

          {/* Speed monitoring */}
          <RevealOnScroll className="md:col-span-2" delay={260}>
            <GlassCard tiltMax={3} className="!p-5 h-full">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground"><Gauge className="size-3.5 text-primary" /> Speed monitoring</div>
                <span className="text-xs font-mono text-muted-foreground">avg 52 km/h</span>
              </div>
              <div className="flex items-end gap-1.5 h-[70%]">
                {BARS.map((v, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-primary/80" style={{ height: `${v}%`, animation: `reveal-up 0.6s ${i * 60}ms both` }} />
                ))}
              </div>
            </GlassCard>
          </RevealOnScroll>

          {/* Alert center */}
          <RevealOnScroll className="md:col-span-2" delay={320}>
            <GlassCard tiltMax={3} className="!p-5 h-full">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3"><Bell className="size-3.5 text-primary" /> Alert center</div>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50/70 border border-emerald-100"><span className="size-1.5 rounded-full bg-emerald-500" /> Geofence entered — Warehouse 04</li>
                <li className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50/70 border border-blue-100"><span className="size-1.5 rounded-full bg-primary" /> Trip started · 09:14</li>
                <li className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50/70 border border-amber-100"><span className="size-1.5 rounded-full bg-amber-500" /> Harsh braking detected</li>
              </ul>
            </GlassCard>
          </RevealOnScroll>

          {/* Location timeline */}
          <RevealOnScroll className="md:col-span-2" delay={380}>
            <GlassCard tiltMax={3} className="!p-5 h-full">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3"><Clock className="size-3.5 text-primary" /> Location timeline</div>
              <ol className="relative pl-4 space-y-2.5 text-xs before:absolute before:left-1 before:top-1 before:bottom-1 before:w-px before:bg-border">
                {[
                  ["09:14", "Depot · Sector 22"],
                  ["10:02", "NH-48 · 62 km/h"],
                  ["11:18", "Warehouse 04 · arrived"],
                  ["12:30", "En route · Hub B"],
                ].map(([t, p]) => (
                  <li key={t} className="relative">
                    <span className="absolute -left-3.5 top-1.5 size-1.5 rounded-full bg-primary" />
                    <span className="font-mono text-muted-foreground mr-2">{t}</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}