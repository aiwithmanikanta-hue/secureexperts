import { Typewriter } from "@/components/home/Typewriter";
import { MagneticButton } from "@/components/home/MagneticButton";
import { WhatsAppButton } from "./WhatsAppButton";

export function ProductsHero() {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      {/* soft animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-20 left-1/4 size-[40vw] rounded-full bg-primary/10 blur-[120px]"
          style={{ animation: "aurora-drift 22s ease-in-out infinite" }}
        />
        <div
          className="absolute top-10 right-1/4 size-[35vw] rounded-full bg-sky-300/20 blur-[120px]"
          style={{ animation: "aurora-drift 28s ease-in-out -8s infinite reverse" }}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-xl">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          Secure Experts Product Range
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
          <Typewriter
            phrases={[
              "Choose the Right Tracking Device for Your Needs",
              "Built for Vehicle Security & Real-Time Tracking",
              "Smarter Monitoring. Trusted Protection.",
            ]}
            typeMs={45}
            holdMs={2600}
          />
        </h1>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
          Explore Secure Experts' product range built for vehicle security,
          real-time tracking, and smarter monitoring.
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-foreground/70">
          Secure Experts delivers intelligent tracking and monitoring solutions
          for modern vehicles. Reliable technology designed to protect, track,
          and simplify operations.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <WhatsAppButton productName="Secure Experts Product Range" size="lg">
            Talk on WhatsApp
          </WhatsAppButton>
          <MagneticButton href="/#contact" variant="secondary" className="!h-12 !px-6 !text-[15px]">
            Request Demo
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}