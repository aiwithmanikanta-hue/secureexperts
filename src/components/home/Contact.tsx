import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2, Navigation } from "lucide-react";
import { useReveal } from "./useReveal";
import { openWhatsApp } from "@/components/chatbot/whatsapp";

const PRODUCTS = [
  "VLTDAIS140 GPS Tracking System",
  "Fuel Sensor",
  "VLTDAIS140 + Fuel Sensor",
  "Fleet Tracking Solution",
  "Custom Requirement",
];

const OFFICE_QUERY = encodeURIComponent("Hyderabad, Telangana, India");
const MAP_EMBED = `https://www.google.com/maps?q=${OFFICE_QUERY}&output=embed`;
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_QUERY}`;
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
              <MessageCircle className="size-5" />
              Send Enquiry on WhatsApp
            </button>

            <p className="mt-4 text-[12px] text-muted-foreground text-center">
              Your details open directly in WhatsApp — no spam, no waiting.
            </p>
          </form>

          {/* RIGHT — Info + Map */}
          <div className="space-y-6">
            <div className="relative rounded-[28px] border border-border bg-white/80 backdrop-blur-xl p-8 shadow-[0_20px_60px_-30px_rgba(17,17,17,0.18)]">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-primary mb-2">
                HEADQUARTERS
              </p>
              <h3 className="text-2xl font-semibold tracking-tight">Secure Experts</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Premium tracking & fleet intelligence
              </p>

              <div className="mt-7 space-y-5">
                <InfoRow icon={<MapPin className="size-4" />} label="Office">
                  Hyderabad, Telangana, India
                </InfoRow>
                <InfoRow icon={<Phone className="size-4" />} label="Phone">
                  <a href="tel:+917337433351" className="hover:text-primary transition-colors">
                    +91 73374 33351
                  </a>
                  <span className="text-muted-foreground/60"> · </span>
                  <a href="tel:+914000000000" className="hover:text-primary transition-colors">
                    040-XXXXXXXX
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
                  <MessageCircle className="size-4" />
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
                className="w-full h-[260px] rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={MAP_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 mb-1 mx-1 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
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