import { useCallback, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2, MapPin } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  }, []);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
              Before & After
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
              The difference is clear.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">Drag to compare.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div
            ref={ref}
            className="relative aspect-[16/9] w-full rounded-[2rem] overflow-hidden border border-border shadow-lift select-none touch-none"
            onPointerDown={(e) => { drag.current = true; (e.target as Element).setPointerCapture?.(e.pointerId); update(e.clientX); }}
            onPointerMove={(e) => { if (drag.current) update(e.clientX); }}
            onPointerUp={() => { drag.current = false; }}
            onPointerCancel={() => { drag.current = false; }}
          >
            {/* AFTER (base, full) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#eaf4ff] to-[#f5f8ff]">
              <div className="absolute inset-0" style={{
                backgroundImage: "linear-gradient(rgba(10,132,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,132,255,0.06) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }} />
              <svg viewBox="0 0 800 450" className="absolute inset-0 h-full w-full">
                <path d="M40 380 C 200 320, 380 360, 540 220 S 760 80, 760 80" fill="none" stroke="#0a84ff" strokeWidth="3" strokeLinecap="round" />
                <circle cx="540" cy="220" r="10" fill="#0a84ff">
                  <animate attributeName="r" values="8;14;8" dur="1.6s" repeatCount="indefinite" />
                </circle>
              </svg>
              <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur border border-border text-xs">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live · Real-time
              </div>
              <div className="absolute bottom-6 left-6 space-y-2">
                {[
                  { i: CheckCircle2, t: "Real-time tracking" },
                  { i: CheckCircle2, t: "Instant alerts" },
                  { i: CheckCircle2, t: "Complete visibility" },
                  { i: CheckCircle2, t: "Better control" },
                ].map((x) => (
                  <div key={x.t} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur border border-border text-xs">
                    <x.i className="size-3.5 text-primary" /> {x.t}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full bg-foreground text-background text-xs font-semibold">
                With VLTDAIS140
              </div>
            </div>

            {/* BEFORE (clipped from the left) */}
            <div
              className="absolute inset-0 bg-[#1a1a1f]"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }} />
              <svg viewBox="0 0 800 450" className="absolute inset-0 h-full w-full">
                <path d="M40 380 C 200 320, 380 360, 540 220" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="6 8" />
                {[[200, 200], [360, 130], [580, 300], [680, 180]].map(([x, y], i) => (
                  <text key={i} x={x} y={y} fill="rgba(255,255,255,0.35)" fontSize="40" fontWeight="700">?</text>
                ))}
                <g transform="translate(540 220)">
                  <circle r="8" fill="rgba(255,255,255,0.4)" />
                </g>
              </svg>
              <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 text-xs text-white/80">
                <MapPin className="size-3" /> Last seen 2h ago
              </div>
              <div className="absolute bottom-6 left-6 space-y-2">
                {["Limited visibility", "Delayed updates", "Higher risk", "Manual monitoring"].map((t) => (
                  <div key={t} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 text-xs text-white/70">
                    <AlertTriangle className="size-3.5 text-amber-400" /> {t}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/10">
                Without VLTDAIS140
              </div>
            </div>

            {/* Divider */}
            <div
              className="absolute top-0 bottom-0 w-px bg-white/70 shadow-[0_0_24px_rgba(255,255,255,0.4)] pointer-events-none"
              style={{ left: `${pos}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-12 rounded-full bg-white text-foreground shadow-lift grid place-items-center cursor-ew-resize"
              style={{ left: `${pos}%` }}
              aria-label="Drag to compare"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6 L4 12 L8 18 M16 6 L20 12 L16 18" /></svg>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}