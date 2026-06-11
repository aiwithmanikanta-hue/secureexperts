import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2, Navigation } from "lucide-react";
import { useReveal } from "./useReveal";
import { openWhatsApp } from "@/components/chatbot/whatsapp";
import { Logo } from "./Logo";

const PRODUCTS = [
  "VLTDAIS140 GPS Tracking System",
  "Fuel Sensor",
  "VLTDAIS140 + Fuel Sensor",
  "Fleet Tracking Solution",
  "Custom Requirement",
];

const OFFICE_QUERY = encodeURIComponent("GJWW+GJ5 Payakapuram, Andhra Pradesh, India");
const MAP_EMBED = `https://www.google.com/maps?q=${OFFICE_QUERY}&output=embed&z=16`;
const MAP_DIRECTIONS = "https://maps.app.goo.gl/MoYx6jpsij9tdppz7";
const PHONE_PRIMARY = "+917337433351";

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  product: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  product: PRODUCTS[0],
  message: "",
};

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className="block text-[12px] font-medium text-muted-foreground mb-2 tracking-wide"
      >
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full h-12 px-4 rounded-2xl bg-white border border-border text-foreground placeholder:text-muted-foreground/70 text-sm shadow-sm transition-all duration-300 outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/10 hover:border-primary/30";

export function Contact() {
  const reveal = useReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.phone.trim() || form.phone.trim().length < 6) e.phone = "Enter a valid phone";
    if (!form.city.trim()) e.city = "Required";
    if (!form.product.trim()) e.product = "Required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const msg = [
      "🚨 New Website Enquiry",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `City: ${form.city}`,
      "",
      "Product:",
      form.product,
      "",
      "Requirement:",
      form.message,
      "",
      "Source:",
      "Secure Experts Website",
    ]
      .filter(Boolean)
      .join("\n");
    openWhatsApp(msg);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6"
      style={{ background: "#F4F7F8" }}
    >
      <div ref={reveal} className="reveal max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-white border border-border text-[12px] text-muted-foreground mb-5 shadow-sm">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Talk to Secure Experts
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Tell us about your tracking requirements and our team will assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 items-start">
          {/* LEFT — Form */}
          <form
            onSubmit={onSubmit}
            className="relative rounded-[28px] border border-border bg-white/80 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_60px_-30px_rgba(10,132,255,0.25)]"
          >
            <h3 className="text-2xl font-semibold tracking-tight mb-1">
              Get in Touch with Secure Experts
            </h3>
            <p className="text-sm text-muted-foreground mb-8">
              We typically reply within 2 hours during business hours.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="name" label="Full Name" required>
                <input
                  id="name"
                  className={inputCls}
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                />
                {errors.name && <p className="text-xs text-destructive mt-1.5">{errors.name}</p>}
              </Field>
              <Field id="phone" label="Phone Number" required>
                <input
                  id="phone"
                  type="tel"
                  className={inputCls}
                  placeholder="+91 XXXXXXXXXX"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
                {errors.phone && <p className="text-xs text-destructive mt-1.5">{errors.phone}</p>}
              </Field>
              <Field id="email" label="Email Address">
                <input
                  id="email"
                  type="email"
                  className={inputCls}
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </Field>
              <Field id="city" label="City / Location" required>
                <input
                  id="city"
                  className={inputCls}
                  placeholder="City, State"
                  value={form.city}
                  onChange={(e) => set("city", e.target.value)}
                />
                {errors.city && <p className="text-xs text-destructive mt-1.5">{errors.city}</p>}
              </Field>
            </div>

            <div className="mt-5">
              <Field id="product" label="Product Interested In" required>
                <select
                  id="product"
                  className={`${inputCls} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236e6e73%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-no-repeat bg-[right_1rem_center] pr-10`}
                  value={form.product}
                  onChange={(e) => set("product", e.target.value)}
                >
                  {PRODUCTS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field id="message" label="Message / Requirement" required>
                <textarea
                  id="message"
                  rows={5}
                  className={`${inputCls} h-auto py-3 resize-none`}
                  placeholder="Tell us about your vehicles, fleet size, fuel monitoring requirements, installation location, or any questions you have."
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                />
                {errors.message && (
                  <p className="text-xs text-destructive mt-1.5">{errors.message}</p>
                )}
              </Field>
            </div>

            <button
              type="submit"
              className="mt-7 group relative w-full inline-flex items-center justify-center gap-2 h-14 rounded-2xl text-white font-medium text-[15px] overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_18px_40px_-12px_rgba(37,211,102,0.55)] active:scale-[0.99]"
              style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <svg viewBox="0 0 32 32" className="relative size-5" fill="currentColor" aria-hidden>
                <path d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.47 1.73 6.41L3.2 28.8l6.55-1.71A12.78 12.78 0 0 0 16 28.8C23.07 28.8 28.8 23.07 28.8 16S23.07 3.2 16.001 3.2Zm0 23.2c-1.93 0-3.83-.52-5.49-1.5l-.39-.23-3.89 1.02 1.04-3.79-.25-.4A10.4 10.4 0 1 1 26.4 16c0 5.74-4.66 10.4-10.4 10.4Zm5.94-7.79c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.32-.83 1.06-1.02 1.28-.19.22-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.73-1.76-1-2.4-.27-.64-.54-.55-.73-.56l-.62-.01c-.21 0-.55.08-.83.4-.29.32-1.1 1.07-1.1 2.62 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.39 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.92-.78 2.19-1.54.27-.76.27-1.42.19-1.54-.08-.13-.29-.21-.61-.37Z" />
              </svg>
              Send Enquiry on WhatsApp
            </button>

            <p className="mt-4 text-[12px] text-muted-foreground text-center">
              Your details open directly in WhatsApp — no spam, no waiting.
            </p>
          </form>

          {/* RIGHT — Info + Map */}
          <div className="space-y-6">
            <div className="relative rounded-[28px] border border-border bg-white/80 backdrop-blur-xl p-8 shadow-[0_20px_60px_-30px_rgba(17,17,17,0.18)]">
              <div className="mb-5 flex items-center">
                <Logo className="h-14 w-auto logo-hover" />
              </div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-primary mb-2">
                HEADQUARTERS
              </p>
              <h3 className="text-2xl font-semibold tracking-tight">Secure Experts</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Premium tracking & fleet intelligence
              </p>

              <div className="mt-7 space-y-5">
                <InfoRow icon={<MapPin className="size-4" />} label="Office">
                  GJWW+GJ5 Payakapuram,<br />Andhra Pradesh, India
                </InfoRow>
                <InfoRow icon={<Phone className="size-4" />} label="Phone">
                  <a href="tel:+917337433351" className="hover:text-primary transition-colors">
                    +91 73374 33351
                  </a>
                </InfoRow>
                <InfoRow icon={<Mail className="size-4" />} label="Email">
                  <a href="mailto:info@secureexperts.in" className="hover:text-primary transition-colors">
                    info@secureexperts.in
                  </a>
                  <br />
                  <a href="mailto:support@secureexperts.in" className="hover:text-primary transition-colors">
                    support@secureexperts.in
                  </a>
                </InfoRow>
              </div>

              <div className="flex flex-wrap gap-2 mt-7">
                <Badge icon={<CheckCircle2 className="size-3.5 text-emerald-500" />}>
                  Responds within 2 Hours
                </Badge>
                <Badge icon={<Clock className="size-3.5 text-primary" />}>
                  Mon–Sat · 9AM–6PM
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-7">
                <button
                  type="button"
                  onClick={() => openWhatsApp("Hi Secure Experts, I'd like to know more about VLTDAIS140.")}
                  className="group inline-flex items-center justify-center gap-2 h-12 rounded-2xl text-white font-medium text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_30px_-10px_rgba(37,211,102,0.55)]"
                  style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
                >
                  <svg viewBox="0 0 32 32" className="size-4" fill="currentColor" aria-hidden>
                    <path d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.47 1.73 6.41L3.2 28.8l6.55-1.71A12.78 12.78 0 0 0 16 28.8C23.07 28.8 28.8 23.07 28.8 16S23.07 3.2 16.001 3.2Zm0 23.2c-1.93 0-3.83-.52-5.49-1.5l-.39-.23-3.89 1.02 1.04-3.79-.25-.4A10.4 10.4 0 1 1 26.4 16c0 5.74-4.66 10.4-10.4 10.4Zm5.94-7.79c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.32-.83 1.06-1.02 1.28-.19.22-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.73-1.76-1-2.4-.27-.64-.54-.55-.73-.56l-.62-.01c-.21 0-.55.08-.83.4-.29.32-1.1 1.07-1.1 2.62 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.39 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.92-.78 2.19-1.54.27-.76.27-1.42.19-1.54-.08-.13-.29-.21-.61-.37Z" />
                  </svg>
                  WhatsApp
                </button>
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="group inline-flex items-center justify-center gap-2 h-12 rounded-2xl bg-foreground text-background font-medium text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_30px_-10px_rgba(10,132,255,0.45)]"
                >
                  <Phone className="size-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative rounded-[28px] border border-border bg-white/80 backdrop-blur-xl p-3 shadow-[0_20px_60px_-30px_rgba(17,17,17,0.18)] overflow-hidden">
              <iframe
                title="Secure Experts office location"
                src={MAP_EMBED}
                className="w-full h-[320px] rounded-2xl border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={MAP_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 mb-1 mx-1 inline-flex items-center gap-2 h-11 px-5 rounded-2xl bg-primary text-primary-foreground text-sm font-medium shadow-[0_10px_24px_-10px_rgba(10,132,255,0.55)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_30px_-10px_rgba(10,132,255,0.7)]"
              >
                <Navigation className="size-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 size-9 shrink-0 rounded-xl bg-[#EAF4FF] text-primary grid place-items-center">
        {icon}
      </span>
      <div className="text-sm">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-0.5">
          {label}
        </p>
        <div className="text-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Badge({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border text-[12px] font-medium text-foreground shadow-sm">
      {icon}
      {children}
    </span>
  );
}