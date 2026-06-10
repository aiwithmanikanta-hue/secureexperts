import heroImg from "@/assets/vltdais140-hero.jpg";
import { ArrowRight, Radio, ShieldCheck, Headphones, Satellite, Signal, BatteryFull } from "lucide-react";
import { useEffect, useRef } from "react";
import { MagneticButton } from "./MagneticButton";
import { SignalWaves } from "./SignalWaves";

export function Hero() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const deviceRef = useRef<HTMLDivElement | null>(null);
  const cardARef = useRef<HTMLDivElement | null>(null);
  const cardBRef = useRef<HTMLDivElement | null>(null);
  const cardCRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let mx = 0;
    let my = 0;

    const onMove = (e: MouseEvent) => {
      const r = stage.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const apply = () => {
      raf = 0;
      const d = deviceRef.current;
      if (d) {
        d.style.transform = `perspective(1400px) rotateX(${(-my * 5).toFixed(2)}deg) rotateY(${(mx * 6).toFixed(2)}deg) translate3d(${(mx * 8).toFixed(2)}px, ${(my * 8).toFixed(2)}px, 0)`;
      }
      const a = cardARef.current;
      if (a) a.style.transform = `translate3d(${(mx * -18).toFixed(2)}px, ${(my * -14).toFixed(2)}px, 0)`;
      const b = cardBRef.current;
      if (b) b.style.transform = `translate3d(${(mx * 20).toFixed(2)}px, ${(my * -10).toFixed(2)}px, 0)`;
      const c = cardCRef.current;
      if (c) c.style.transform = `translate3d(${(mx * 16).toFixed(2)}px, ${(my * 18).toFixed(2)}px, 0)`;
    };

    stage.addEventListener("mousemove", onMove);
    return () => {
      stage.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="relative pt-36 pb-28 px-6 overflow-hidden">
      {/* Background washes */}
      <div className="absolute inset-0 -z-10 dot-grid opacity-50" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-tint-blue/40 via-background to-background pointer-events-none" />
      <div className="absolute left-1/2 top-72 -z-10 size-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none ambient-blob" />
      <div className="absolute right-[10%] top-40 -z-10 size-[420px] rounded-full bg-sky-300/20 blur-[120px] pointer-events-none ambient-blob" style={{ animationDelay: "-6s" }} />

      {/* Drifting particles */}
      {[
        { l: "12%", t: "30%", s: 6, d: 0 },
        { l: "82%", t: "22%", s: 4, d: 1.4 },
        { l: "20%", t: "70%", s: 5, d: 2.6 },
        { l: "76%", t: "62%", s: 7, d: 0.8 },
        { l: "48%", t: "16%", s: 3, d: 3.2 },
      ].map((p, i) => (
        <span
          key={i}
          className="absolute -z-10 rounded-full bg-primary/40 pointer-events-none"
          style={{
            left: p.l,
            top: p.t,
            width: p.s,
            height: p.s,
            animation: `drift ${10 + p.d}s ease-in-out ${p.d}s infinite, soft-pulse 4s ease-in-out infinite`,
          }}
        />
      ))}

      <div className="relative max-w-5xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-8"
          style={{ animation: "reveal-up 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <span className="size-1.5 rounded-full bg-primary" />
          Introducing the VLTDAIS140
        </div>

        <h1
          className="text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] font-semibold leading-[1.02] text-foreground mb-7 text-balance"
          style={{ animation: "reveal-up 0.9s 0.05s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          Advanced GPS Security<br className="hidden sm:block" />{" "}
          <span className="text-muted-foreground">for the Modern World.</span>
        </h1>

        <p
          className="max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed mb-10 text-pretty"
          style={{ animation: "reveal-up 0.9s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          Secure Experts delivers intelligent tracking solutions designed for precision,
          reliability, and complete peace of mind.
        </p>

        <div
          className="flex flex-wrap justify-center gap-3 mb-20"
          style={{ animation: "reveal-up 0.9s 0.15s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <MagneticButton href="#product" variant="primary" glow>
            Explore Product
            <ArrowRight className="size-4" />
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Contact Sales
          </MagneticButton>
        </div>

        {/* Floating product showcase with cursor parallax + info cards */}
        <div
          ref={stageRef}
          className="relative mx-auto max-w-3xl [perspective:1400px]"
          style={{ animation: "reveal-up 1s 0.2s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <div className="absolute -inset-12 rounded-[40px] bg-primary/10 blur-3xl pointer-events-none ambient-blob" />

          {/* GPS signal waves */}
          <SignalWaves />

          {/* Connection lines SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none -z-0 hidden md:block"
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#0a84ff" stopOpacity="0" />
                <stop offset="50%" stopColor="#0a84ff" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0a84ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M120,140 C 260,180 320,260 400,300" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 6" style={{ animation: "line-dash 12s linear infinite" }} />
            <path d="M680,120 C 540,200 470,260 400,300" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 6" style={{ animation: "line-dash 14s linear infinite reverse" }} />
            <path d="M660,500 C 540,440 470,360 400,300" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 6" style={{ animation: "line-dash 16s linear infinite" }} />
          </svg>

          <div
            ref={deviceRef}
            className="relative glass-card rounded-[32px] p-8 sm:p-12 overflow-hidden will-change-transform transition-transform duration-[400ms] ease-out"
            style={{ animation: "float-y 8s ease-in-out infinite" }}
          >
            {/* Primary light reflection sweep */}
            <div
              className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
              style={{ animation: "shimmer 9s ease-in-out 1s infinite" }}
            />
            {/* Secondary subtle sweep */}
            <div
              className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none"
              style={{ animation: "shimmer 14s ease-in-out 4s infinite" }}
            />
            <img
              src={heroImg}
              alt="VLTDAIS140 GPS tracking device by Secure Experts"
              width={1024}
              height={1024}
              className="relative w-full max-w-md mx-auto aspect-square object-cover rounded-2xl"
            />
          </div>

          {/* Floating info cards */}
          <div
            ref={cardARef}
            className="hidden md:flex absolute -left-6 top-16 items-center gap-3 glass-card rounded-2xl px-4 py-3 text-left will-change-transform transition-transform duration-[600ms] ease-out"
            style={{ animation: "float-card-a 7s ease-in-out infinite" }}
          >
            <div className="size-8 rounded-lg bg-tint-blue grid place-items-center">
              <Satellite className="size-4 text-primary" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Satellites</div>
              <div className="text-sm font-semibold">24 locked</div>
            </div>
          </div>

          <div
            ref={cardBRef}
            className="hidden md:flex absolute -right-6 top-8 items-center gap-3 glass-card rounded-2xl px-4 py-3 text-left will-change-transform transition-transform duration-[600ms] ease-out"
            style={{ animation: "float-card-b 8s ease-in-out infinite" }}
          >
            <div className="size-8 rounded-lg bg-tint-blue grid place-items-center">
              <Signal className="size-4 text-primary" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Signal</div>
              <div className="text-sm font-semibold">LTE-M · –68 dBm</div>
            </div>
          </div>

          <div
            ref={cardCRef}
            className="hidden md:flex absolute -right-2 bottom-24 items-center gap-3 glass-card rounded-2xl px-4 py-3 text-left will-change-transform transition-transform duration-[600ms] ease-out"
            style={{ animation: "float-card-a 9s ease-in-out 1.5s infinite" }}
          >
            <div className="size-8 rounded-lg bg-tint-blue grid place-items-center">
              <BatteryFull className="size-4 text-primary" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Battery</div>
              <div className="text-sm font-semibold">96% · 174d left</div>
            </div>
          </div>

          {/* Trust pills */}
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { Icon: Radio, t: "Real-Time Tracking" },
              { Icon: ShieldCheck, t: "Secure Technology" },
              { Icon: Headphones, t: "Professional Support" },
            ].map((b) => (
              <li
                key={b.t}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-[13px] text-foreground"
              >
                <b.Icon className="size-3.5 text-primary" strokeWidth={2} />
                {b.t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}