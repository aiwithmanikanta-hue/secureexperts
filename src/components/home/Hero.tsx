import heroImg from "@/assets/bltdas140-hero.jpg";
import { ArrowRight, ShieldCheck, Radio, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 px-6 overflow-hidden blueprint-grid">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)/8%,transparent_60%)] opacity-40 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <div className="z-10" style={{ animation: "reveal-up 0.9s cubic-bezier(0.16,1,0.3,1) both" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 rounded-full mb-8">
              <span className="size-1.5 bg-accent rounded-full animate-pulse" />
              <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-accent">
                Model BLTDAS140 // Active
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-[5.5rem] font-extrabold tracking-tighter leading-[0.95] mb-8 uppercase italic text-balance">
              Advanced GPS <br />
              Built for <span className="text-accent">Confidence.</span>
            </h1>
            <p className="max-w-lg text-muted-foreground mb-10 text-pretty text-base md:text-lg leading-relaxed">
              Meet the BLTDAS140 — a smart, reliable, and powerful tracking solution designed for
              modern protection, real-time visibility, and uncompromising precision.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#product"
                className="group px-7 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-tighter text-sm hover:scale-[1.03] transition-transform duration-300 inline-flex items-center gap-2"
              >
                Explore Product
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#cta"
                className="px-7 py-4 border border-border hover:bg-card hover:border-accent/40 transition-colors font-bold uppercase tracking-tighter text-sm"
              >
                Request Demo
              </a>
            </div>

            <ul className="flex flex-wrap gap-6 text-[11px] font-mono-tech uppercase tracking-widest text-muted-foreground">
              <li className="flex items-center gap-2"><ShieldCheck className="size-3.5 text-accent" /> Secure Technology</li>
              <li className="flex items-center gap-2"><Radio className="size-3.5 text-accent" /> Real-Time Tracking</li>
              <li className="flex items-center gap-2"><Cpu className="size-3.5 text-accent" /> Reliable Performance</li>
            </ul>
          </div>

          <div className="relative group" style={{ animation: "reveal-up 1.1s cubic-bezier(0.16,1,0.3,1) both" }}>
            <div
              className="absolute -inset-16 bg-accent/20 rounded-full pointer-events-none"
              style={{ animation: "pulse-glow 5s ease-in-out infinite" }}
            />
            <div
              className="relative select-none"
              style={{ animation: "float-y 6s ease-in-out infinite" }}
            >
              <div className="relative w-full aspect-square bg-card border border-border rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/10">
                <img
                  src={heroImg}
                  alt="BLTDAS140 GPS tracking device by Secure Experts"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 font-mono-tech text-[10px] text-accent/60 tracking-widest">COORD: 51.5074°N · 0.1278°W</div>
                  <div className="absolute bottom-4 right-4 font-mono-tech text-[10px] text-accent/60 tracking-widest">STATUS: SIGNAL_OPTIMAL</div>
                  <div className="absolute top-4 right-4 font-mono-tech text-[10px] text-muted-foreground tracking-widest">BLTDAS140</div>
                  <div className="absolute bottom-4 left-4 font-mono-tech text-[10px] text-muted-foreground tracking-widest">REV.04</div>
                  <div className="absolute top-1/2 left-0 w-full h-px bg-accent/10" />
                  <div className="absolute left-1/2 top-0 h-full w-px bg-accent/10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 border border-accent/20 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-48 border border-accent/10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}