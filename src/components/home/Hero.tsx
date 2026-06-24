import { heroDevice as heroImg } from "@/assets";
import { ArrowRight, Radio, ShieldCheck, Headphones, Satellite, Fuel, Lock, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { MagneticButton } from "./MagneticButton";
import { SignalWaves } from "./SignalWaves";
import { Typewriter } from "./Typewriter";

export function Hero() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const deviceRef = useRef<HTMLDivElement | null>(null);

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
    };

    stage.addEventListener("mousemove", onMove);
    return () => {
      stage.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden">
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
          Advanced VLTD GPS Security for a Connected World
        </h1>

        <div
          className="mb-6 text-lg sm:text-xl md:text-2xl font-medium text-foreground/90 min-h-[1.6em]"
          style={{ animation: "reveal-up 0.9s 0.08s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <Typewriter
            phrases={[
              "Advanced GPS Tracking.",
              "Intelligent Fleet Monitoring.",
              "Fuel Monitoring Solutions.",
              "Real-Time Vehicle Security.",
            ]}
          />
        </div>

        <p
          className="max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed mb-10 text-pretty"
          style={{ animation: "reveal-up 0.9s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          Secure Experts delivers intelligent tracking solutions designed for precision,
          reliability, and complete peace of mind.
        </p>

        <div
          className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 mb-16 sm:mb-20 w-full max-w-sm sm:max-w-none mx-auto"
          style={{ animation: "reveal-up 0.9s 0.15s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <MagneticButton href="#product" variant="primary" glow className="w-full sm:w-auto !min-h-[48px]">
            Explore Product
            <ArrowRight className="size-4" />
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary" className="w-full sm:w-auto !min-h-[48px]">
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
              width={1488}
              height={1024}
              className="relative w-full max-w-2xl mx-auto h-auto object-contain rounded-2xl"
            />
          </div>

          {/* Live status widget */}
          <div
            aria-hidden
            className="hidden md:flex absolute top-4 right-4 items-center gap-2 rounded-full bg-white/85 backdrop-blur-xl border border-white/70 px-3.5 py-2 text-[11px] font-medium text-foreground shadow-[0_10px_30px_-12px_rgba(10,132,255,0.35)]"
            style={{ animation: "reveal-up 0.9s 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <span className="relative flex size-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 animate-ping" />
              <span className="relative size-2 rounded-full bg-emerald-500" />
            </span>
            Live · 24 satellites · 0.8 m accuracy
          </div>

          {/* Floating glass feature chips */}
          {[
            { Icon: Satellite, label: "Real-Time GPS", pos: "top-8 -left-2 md:-left-10", delay: 0.45, anim: "float-card-a 7s ease-in-out infinite" },
            { Icon: Lock, label: "AES-256 Secure", pos: "top-1/3 -right-2 md:-right-12", delay: 0.6, anim: "float-card-b 8s ease-in-out infinite" },
            { Icon: Fuel, label: "Fuel Monitoring", pos: "bottom-12 -left-2 md:-left-14", delay: 0.75, anim: "float-card-b 9s ease-in-out 1s infinite" },
            { Icon: MapPin, label: "AIS 140 Ready", pos: "bottom-6 -right-2 md:-right-8", delay: 0.9, anim: "float-card-a 7.5s ease-in-out 0.5s infinite" },
          ].map(({ Icon, label, pos, delay, anim }) => (
            <div
              key={label}
              aria-hidden
              className={`hidden md:flex absolute ${pos} z-10 items-center gap-2 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/70 px-3.5 py-2.5 text-[12px] font-medium text-foreground shadow-[0_18px_40px_-18px_rgba(10,132,255,0.45)]`}
              style={{ animation: `reveal-up 0.9s ${delay}s cubic-bezier(0.16,1,0.3,1) both, ${anim}` }}
            >
              <span className="grid size-7 place-items-center rounded-lg bg-tint-blue text-primary">
                <Icon className="size-3.5" strokeWidth={2.2} />
              </span>
              {label}
            </div>
          ))}

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