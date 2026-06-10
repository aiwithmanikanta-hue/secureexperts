import heroImg from "@/assets/bltdas140-hero.jpg";
import { ArrowRight, Radio, ShieldCheck, Headphones } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-28 px-6 overflow-hidden">
      {/* Background washes */}
      <div className="absolute inset-0 -z-10 dot-grid opacity-50" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-tint-blue/40 via-background to-background pointer-events-none" />
      <div className="absolute left-1/2 top-72 -z-10 size-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px] pointer-events-none" />

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
          Introducing the BLTDAS140
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
          <a
            href="#product"
            className="group px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:scale-[1.02] transition-transform inline-flex items-center gap-2 shadow-soft"
          >
            Explore Product
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
          >
            Contact Sales
          </a>
        </div>

        {/* Floating product showcase */}
        <div
          className="relative mx-auto max-w-3xl"
          style={{ animation: "reveal-up 1s 0.2s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <div className="absolute -inset-12 rounded-[40px] bg-primary/10 blur-3xl pointer-events-none" />
          <div
            className="relative glass-card rounded-[32px] p-8 sm:p-12 overflow-hidden"
            style={{ animation: "float-y 7s ease-in-out infinite" }}
          >
            {/* Light reflection sweep */}
            <div
              className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
              style={{ animation: "shimmer 7s ease-in-out 1s infinite" }}
            />
            <img
              src={heroImg}
              alt="BLTDAS140 GPS tracking device by Secure Experts"
              width={1024}
              height={1024}
              className="relative w-full max-w-md mx-auto aspect-square object-cover rounded-2xl"
            />
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