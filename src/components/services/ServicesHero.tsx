import { ArrowRight, Satellite, Fuel, Gauge, MapPin, ShieldCheck, Smartphone } from "lucide-react";
import { MagneticButton } from "@/components/home/MagneticButton";
import { openWhatsApp } from "@/components/chatbot/whatsapp";

export function ServicesHero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 dot-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-tint-blue/50 via-background to-background pointer-events-none" />
      <div className="absolute left-[10%] top-44 -z-10 size-[520px] rounded-full bg-primary/10 blur-[120px] pointer-events-none ambient-blob" />
      <div className="absolute right-[8%] top-32 -z-10 size-[420px] rounded-full bg-sky-300/20 blur-[120px] pointer-events-none ambient-blob" style={{ animationDelay: "-6s" }} />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-6"
            style={{ animation: "reveal-up 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <span className="size-1.5 rounded-full bg-primary" />
            Our Services
          </div>
          <h1
            className="text-fluid-hero font-semibold text-foreground text-balance mb-6"
            style={{ animation: "reveal-up 0.9s 0.05s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Smart tracking solutions for{" "}
            <span className="text-muted-foreground">every business.</span>
          </h1>
          <p
            className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9 text-pretty"
            style={{ animation: "reveal-up 0.9s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Secure Experts provides intelligent GPS tracking, fuel monitoring, fleet
            management and vehicle security solutions designed for businesses across India.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 w-full max-w-sm sm:max-w-none mx-auto lg:mx-0"
            style={{ animation: "reveal-up 0.9s 0.15s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <MagneticButton
              href="#services-cta"
              variant="primary"
              glow
              className="w-full sm:w-auto !min-h-[48px]"
            >
              Request a Demo <ArrowRight className="size-4" />
            </MagneticButton>
            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  "Hi Secure Experts, I'd like to know more about your tracking services."
                )
              }
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-card border border-border text-foreground hover:bg-muted transition-all w-full sm:w-auto min-h-[48px]"
            >
              Talk on WhatsApp
            </button>
          </div>
        </div>

        {/* Right: layered glass mock */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-10 rounded-[40px] bg-primary/10 blur-3xl pointer-events-none ambient-blob" />
          <div
            className="relative glass-card rounded-[28px] p-5 sm:p-6 shadow-lift overflow-hidden"
            style={{ animation: "float-y 8s ease-in-out infinite" }}
          >
            <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-foreground">Dashboard · Live</span>
              </div>
              <span>VLTD-4G</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { Icon: Satellite, label: "GPS", value: "12 sats" },
                { Icon: Fuel, label: "Fuel", value: "72%" },
                { Icon: Gauge, label: "Speed", value: "54 km/h" },
                { Icon: MapPin, label: "Geofence", value: "Inside" },
              ].map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white/80 backdrop-blur border border-border p-3.5"
                >
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                    <span className="grid size-6 place-items-center rounded-lg bg-tint-blue text-primary">
                      <Icon className="size-3.5" />
                    </span>
                    {label}
                  </div>
                  <div className="mt-1.5 text-base font-semibold tabular-nums">{value}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-gradient-to-br from-primary/10 via-tint-blue to-sky-100/40 border border-border p-4">
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Trip #2841 · Bengaluru → Mysore</span>
                <span className="tabular-nums">142 km</span>
              </div>
              <svg viewBox="0 0 320 70" className="mt-2 w-full h-14">
                <path d="M 8 50 C 60 10, 120 60, 180 30 S 280 50, 312 18" fill="none" stroke="#0a84ff" strokeWidth="2" strokeLinecap="round" />
                <circle cx="312" cy="18" r="4" fill="#0a84ff" />
              </svg>
            </div>
          </div>

          {/* Floating chips */}
          {[
            { Icon: ShieldCheck, label: "AIS 140", pos: "-top-4 -left-3", anim: "float-card-a 7s ease-in-out infinite" },
            { Icon: Smartphone, label: "Mobile App", pos: "-bottom-4 -right-2", anim: "float-card-b 8s ease-in-out 1s infinite" },
          ].map(({ Icon, label, pos, anim }) => (
            <div
              key={label}
              className={`hidden sm:flex absolute ${pos} items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/70 px-3.5 py-2 text-[12px] font-medium text-foreground shadow-[0_18px_40px_-18px_rgba(10,132,255,0.45)]`}
              style={{ animation: anim }}
            >
              <span className="grid size-7 place-items-center rounded-lg bg-tint-blue text-primary">
                <Icon className="size-3.5" />
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}