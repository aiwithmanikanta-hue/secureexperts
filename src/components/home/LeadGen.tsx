import { useState } from "react";
import { z } from "zod";
import { Check, Phone, MessageSquare, Calendar, Headphones } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const WA = "917337433351";
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20).regex(/^[+\d\s()-]+$/, "Digits only"),
  email: z.string().trim().email("Enter a valid email").max(160),
  requirement: z.string().trim().min(5, "Tell us a bit more").max(800),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

const CTAS = [
  { Icon: MessageSquare, label: "Request Demo", msg: "Hi Secure Experts, I'd like to request a demo of the VLTDAIS140." },
  { Icon: Phone, label: "Get Quote", msg: "Hi Secure Experts, please share a quote for the VLTDAIS140." },
  { Icon: Calendar, label: "Schedule Consultation", msg: "Hi Secure Experts, I'd like to schedule a consultation." },
  { Icon: Headphones, label: "Talk to Expert", msg: "Hi Secure Experts, I'd like to talk to an expert about VLTDAIS140." },
];

export function LeadGen() {
  const [data, setData] = useState<FormData>({ name: "", company: "", phone: "", email: "", requirement: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      for (const i of r.error.issues) errs[i.path[0] as keyof FormData] = i.message;
      setErrors(errs);
      return;
    }
    const msg = `New enquiry from website\n\nName: ${r.data.name}\nCompany: ${r.data.company || "-"}\nPhone: ${r.data.phone}\nEmail: ${r.data.email}\n\nRequirement:\n${r.data.requirement}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
    setData({ name: "", company: "", phone: "", email: "", requirement: "" });
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 surface-2">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex px-3 py-1 rounded-full bg-background border border-border text-[12px] text-muted-foreground mb-5">
              Get in touch
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
              Let's secure what matters most.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">Reach our team — most enquiries get a response within 10 minutes.</p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5 items-start">
          <RevealOnScroll>
            <form
              onSubmit={onSubmit}
              className="relative rounded-3xl border border-border bg-background/80 backdrop-blur-xl p-8 shadow-soft"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Name" value={data.name} onChange={(v) => update("name", v)} error={errors.name} />
                <Field label="Company" value={data.company ?? ""} onChange={(v) => update("company", v)} error={errors.company} optional />
                <Field label="Phone" value={data.phone} onChange={(v) => update("phone", v)} error={errors.phone} type="tel" />
                <Field label="Email" value={data.email} onChange={(v) => update("email", v)} error={errors.email} type="email" />
              </div>
              <div className="mt-4">
                <label className="block text-xs text-muted-foreground mb-1.5">Requirement</label>
                <textarea
                  value={data.requirement}
                  onChange={(e) => update("requirement", e.target.value)}
                  rows={4}
                  maxLength={800}
                  className="w-full px-4 py-3 rounded-2xl bg-card border border-border focus:border-primary/40 focus:bg-background outline-none text-sm transition-colors resize-none"
                  placeholder="Tell us about your fleet size, vehicles, or use case…"
                />
                {errors.requirement && <p className="mt-1.5 text-xs text-destructive">{errors.requirement}</p>}
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 h-12 rounded-full bg-foreground text-background text-sm font-medium hover:scale-[1.01] hover:shadow-lift transition-all"
              >
                Send via WhatsApp
              </button>

              {sent && (
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-emerald-600" style={{ animation: "reveal-up 0.5s both" }}>
                  <Check className="size-4" /> Opened WhatsApp — we'll reply shortly.
                </div>
              )}
            </form>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <div className="grid sm:grid-cols-2 gap-3">
              {CTAS.map((c) => (
                <a
                  key={c.label}
                  href={waLink(c.msg)}
                  target="_blank" rel="noreferrer"
                  className="group rounded-2xl border border-border bg-background/70 backdrop-blur-xl p-5 transition-all hover:-translate-y-1 hover:shadow-soft hover:border-primary/30"
                >
                  <div className="size-10 rounded-xl bg-tint-blue grid place-items-center mb-3 transition-transform group-hover:scale-110">
                    <c.Icon className="size-5 text-primary" />
                  </div>
                  <div className="text-sm font-semibold">{c.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">via WhatsApp · instant</div>
                </a>
              ))}
              <div className="sm:col-span-2 rounded-2xl border border-border bg-gradient-to-br from-primary/[0.06] to-transparent p-5">
                <div className="text-xs text-muted-foreground">Direct line</div>
                <a href={`tel:+${WA}`} className="mt-1 block text-2xl font-semibold link-underline">+91 73374 33351</a>
                <div className="mt-1 text-xs text-muted-foreground">Mon–Sat · 9 AM – 8 PM IST</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Sticky WhatsApp button */}
      <a
        href={waLink("Hi Secure Experts, I'd like to know more about VLTDAIS140.")}
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 size-14 rounded-full bg-emerald-500 text-white grid place-items-center shadow-lift hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="size-7" fill="currentColor"><path d="M19.05 4.91A10 10 0 0 0 4.21 17.4L3 21l3.7-1.2A10 10 0 1 0 19.05 4.9Zm-7.04 15.43h-.01a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-2.2.71.74-2.15-.2-.32a8.32 8.32 0 1 1 6.21 3.1Zm4.78-6.24c-.26-.13-1.55-.77-1.79-.86-.24-.09-.42-.13-.6.13-.17.26-.69.86-.84 1.03-.16.18-.31.2-.57.07-.26-.13-1.1-.4-2.1-1.3a7.84 7.84 0 0 1-1.45-1.8c-.15-.27 0-.41.12-.54.12-.12.27-.31.4-.46.13-.16.17-.27.26-.45.09-.18.05-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46l-.5-.01a.97.97 0 0 0-.71.33c-.24.27-.93.91-.93 2.22 0 1.31.95 2.58 1.08 2.76.13.18 1.87 2.85 4.53 3.99.63.27 1.12.43 1.5.55.63.2 1.2.17 1.66.1.5-.07 1.55-.63 1.77-1.24.22-.61.22-1.14.15-1.24-.06-.1-.24-.16-.5-.29Z" /></svg>
      </a>
    </section>
  );
}

function Field({
  label, value, onChange, error, type = "text", optional,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs text-muted-foreground mb-1.5">
        {label}{optional && <span className="ml-1 text-muted-foreground/60">(optional)</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 px-4 rounded-2xl bg-card border border-border focus:border-primary/40 focus:bg-background outline-none text-sm transition-colors"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}