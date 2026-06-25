import { Phone, Mail } from "lucide-react";
import { MagneticButton } from "@/components/home/MagneticButton";
import { openWhatsApp } from "@/components/chatbot/whatsapp";
import { useReveal } from "@/components/home/useReveal";

export function ServicesCTA() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section id="services-cta" className="relative py-28 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-tint-blue/40 to-background pointer-events-none" />
      <div className="absolute left-1/2 top-20 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none ambient-blob" />

      <div ref={r} className="reveal max-w-3xl mx-auto text-center">
        <h2 className="text-fluid-hero font-semibold text-balance mb-5">
          Ready to monitor your fleet <span className="text-muted-foreground">smarter?</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
          Talk with our experts and discover the right tracking solution for your business.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 w-full max-w-sm sm:max-w-none mx-auto">
          <button
            type="button"
            onClick={() =>
              openWhatsApp("Hi Secure Experts, I'd like to talk about your tracking services.")
            }
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white shadow-soft hover:shadow-lift transition-all w-full sm:w-auto min-h-[48px]"
            style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
          >
            <svg viewBox="0 0 32 32" className="size-4" fill="currentColor" aria-hidden>
              <path d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.47 1.73 6.41L3.2 28.8l6.55-1.71A12.78 12.78 0 0 0 16 28.8C23.07 28.8 28.8 23.07 28.8 16S23.07 3.2 16.001 3.2Z" />
            </svg>
            Talk on WhatsApp
          </button>
          <MagneticButton href="tel:+917337433351" variant="primary" glow className="w-full sm:w-auto !min-h-[48px]">
            <Phone className="size-4" /> Request Demo
          </MagneticButton>
          <MagneticButton href="mailto:info@secureexperts.in" variant="secondary" className="w-full sm:w-auto !min-h-[48px]">
            <Mail className="size-4" /> Contact Sales
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}