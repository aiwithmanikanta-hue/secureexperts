import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

export function LaunchVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.94);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = 1 - Math.min(1, Math.max(0, (r.top - vh * 0.1) / vh));
      setScale(0.92 + Math.min(0.08, p * 0.08));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
              Launch Film
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
              Meet VLTDAIS140.
            </h2>
          </div>
        </RevealOnScroll>

        <div
          ref={ref}
          className="relative mx-auto aspect-[16/9] w-full rounded-[2rem] overflow-hidden bg-[#0a0a12] shadow-lift transition-transform duration-300"
          style={{ transform: `scale(${scale})` }}
        >
          {/* radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,132,255,0.35),transparent_60%)]" />
          {/* subtle grid */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />

          {/* signal pulses */}
          <div className="absolute inset-0 grid place-items-center">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="absolute rounded-full border border-primary/40"
                style={{
                  width: 120, height: 120,
                  animation: `signal-wave 3.4s ${i * 0.8}s ease-out infinite`,
                }}
              />
            ))}
            {/* device silhouette */}
            <div className="relative size-32 rounded-3xl bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10 shadow-2xl grid place-items-center" style={{ animation: "float-y 6s ease-in-out infinite" }}>
              <div className="size-3 rounded-full bg-primary shadow-[0_0_18px_4px_rgba(10,132,255,0.7)] animate-pulse" />
              <span className="absolute bottom-2 text-[9px] font-mono text-white/40 tracking-widest">VLTDAIS140</span>
            </div>
          </div>

          {/* sweeping line */}
          <svg className="absolute inset-0 h-full w-full opacity-50">
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(10,132,255,0.6)" strokeWidth="1" strokeDasharray="6 10" style={{ animation: "line-dash 4s linear infinite" }} />
          </svg>

          {/* floating data chips */}
          <div className="absolute top-8 left-8 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-[11px] font-mono text-white/80 backdrop-blur" style={{ animation: "float-card-a 5s ease-in-out infinite" }}>
            LAT 28.6139° · LONG 77.2090°
          </div>
          <div className="absolute bottom-10 right-10 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-[11px] font-mono text-white/80 backdrop-blur" style={{ animation: "float-card-b 6s ease-in-out infinite" }}>
            ENCRYPTED · AES-256
          </div>
          <div className="absolute bottom-8 left-10 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-[11px] font-mono text-white/80 backdrop-blur" style={{ animation: "float-card-a 5.6s ease-in-out infinite" }}>
            12 SATS · SIGNAL STRONG
          </div>

          {/* play badge */}
          <button className="absolute inset-0 m-auto size-20 grid place-items-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white hover:bg-white/20 transition-colors" aria-label="Play">
            <Play className="size-8" fill="currentColor" />
          </button>
        </div>
      </div>
    </section>
  );
}