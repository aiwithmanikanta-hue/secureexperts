import {
  ArrowRight,
  Target,
  Eye,
  MapPin,
  Fuel,
  ShieldCheck,
  LayoutDashboard,
  Smartphone,
  Package,
  Check,
  Truck,
  Bus,
  Droplets,
  HardHat,
  PackageCheck,
  Building2,
  Cog,
  Landmark,
  Boxes,
} from "lucide-react";
import { Nav } from "@/components/home/Nav";
import { SiteFooter } from "@/components/home/SiteFooter";
import { AmbientBackground } from "@/components/home/AmbientBackground";
import { GlassCard } from "@/components/home/GlassCard";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { MagneticButton } from "@/components/home/MagneticButton";
import { useReveal } from "@/components/home/useReveal";
import { useTilt } from "@/components/home/useTilt";
import { WhatsAppButton } from "@/components/products/WhatsAppButton";
import { v5Basic, fuelSensor } from "@/assets";
import industryLogistics from "@/assets/industries/logistics.jpg";
import industrySchool from "@/assets/industries/school.jpg";
import industryFuelTanker from "@/assets/industries/fuel-tanker.jpg";
import industryConstruction from "@/assets/industries/construction.jpg";
import industryDelivery from "@/assets/industries/delivery.jpg";
import industryCorporate from "@/assets/industries/corporate.jpg";
import industryIndustrial from "@/assets/industries/industrial.jpg";
import industryGovernment from "@/assets/industries/government.jpg";
import industryAssets from "@/assets/industries/assets.jpg";

function AboutHero() {
  const r = useReveal<HTMLDivElement>();
  const tilt = useTilt<HTMLDivElement>(6);
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 left-1/4 size-[42vw] rounded-full bg-primary/10 blur-[120px]"
          style={{ animation: "aurora-drift 22s ease-in-out infinite" }}
        />
        <div
          className="absolute top-10 right-1/4 size-[36vw] rounded-full bg-sky-300/20 blur-[120px]"
          style={{ animation: "aurora-drift 28s ease-in-out -8s infinite reverse" }}
        />
      </div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div ref={r} className="reveal lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-xl">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            About Secure Experts
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
            Empowering Smarter Vehicle{" "}
            <span className="text-muted-foreground">Security & Fleet Intelligence</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
            Secure Experts provides advanced GPS tracking, fuel monitoring, and fleet
            management solutions designed to help businesses and vehicle owners stay
            connected, protected, and in control.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <WhatsAppButton productName="Secure Experts — About Page" size="lg">
              Talk on WhatsApp
            </WhatsAppButton>
            <MagneticButton href="/#contact" variant="secondary" className="!h-12 !px-6 !text-[15px]">
              Contact Our Team
            </MagneticButton>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div
            ref={tilt}
            className="relative tilt-card rounded-[36px] border border-border bg-white/70 backdrop-blur-xl p-10 overflow-hidden shadow-lift"
          >
            <div className="absolute inset-0 -z-10 dot-grid opacity-60" />
            <div className="absolute -top-16 -right-16 size-64 rounded-full bg-primary/15 blur-3xl" />
            <img
              src={v5Basic}
              alt="Secure Experts V5 GPS tracking device"
              className="w-full h-auto product-float"
              loading="eager"
            />
            <img
              src={fuelSensor}
              alt="Fuel monitoring sensor"
              className="absolute -bottom-6 -left-6 w-32 h-auto opacity-90"
              style={{ animation: "float-y 7s ease-in-out -2s infinite" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="rounded-[32px] surface-2 border border-border p-10 md:p-16 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-medium mb-3">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Who We Are
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Secure Experts is a technology-driven company specializing in GPS
                tracking, vehicle security, fuel monitoring, and fleet management
                solutions.
              </p>
              <p>
                We help businesses, fleet operators, transport companies, schools,
                logistics providers, and vehicle owners gain complete visibility over
                their vehicles and assets through intelligent monitoring solutions.
              </p>
              <p>
                Our mission is to simplify tracking, improve operational efficiency, and
                provide reliable technology that businesses can depend on every day.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function MissionVision() {
  const items = [
    {
      Icon: Target,
      label: "Our Mission",
      body:
        "To deliver reliable, innovative, and affordable tracking solutions that help organizations improve efficiency, reduce losses, strengthen security, and maintain complete visibility over their operations.",
    },
    {
      Icon: Eye,
      label: "Our Vision",
      body:
        "To become one of the most trusted vehicle tracking and fleet technology providers by delivering intelligent solutions that empower businesses through technology and innovation.",
    },
  ];
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {items.map(({ Icon, label, body }, i) => (
          <RevealOnScroll key={label} delay={i * 80}>
            <GlassCard className="h-full">
              <div className="size-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-6">
                <Icon className="size-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-3">{label}</h3>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </GlassCard>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

function Solutions() {
  const items = [
    { Icon: MapPin, title: "GPS Tracking Solutions", body: "Monitor vehicles in real time with accurate location tracking, route history, alerts, and reporting." },
    { Icon: Fuel, title: "Fuel Monitoring Systems", body: "Track fuel consumption, detect fuel theft, and improve operational efficiency." },
    { Icon: ShieldCheck, title: "AIS-140 Tracking Devices", body: "Government-compliant tracking solutions designed for commercial and passenger vehicles." },
    { Icon: LayoutDashboard, title: "Fleet Management Solutions", body: "Manage multiple vehicles from a single dashboard with live monitoring and analytics." },
    { Icon: Smartphone, title: "Mobile & Web Tracking", body: "Access tracking information anytime using secure web and mobile platforms." },
    { Icon: Package, title: "Asset Tracking Solutions", body: "Track valuable equipment, machinery, and movable assets with precision." },
  ];
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="text-center mb-14">
          <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-medium mb-3">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Our Solutions</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A complete suite of intelligent tracking and monitoring technology built for
            modern fleets, businesses, and vehicle owners.
          </p>
        </RevealOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ Icon, title, body }, i) => (
            <RevealOnScroll key={title} delay={i * 60}>
              <GlassCard className="h-full">
                <div className="size-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-5">
                  <Icon className="size-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    "Real-Time Tracking",
    "Fuel Monitoring",
    "Instant Alerts",
    "User-Friendly Dashboard",
    "Mobile App Access",
    "Professional Installation",
    "Reliable Customer Support",
    "Scalable Solutions",
    "Secure Cloud Platform",
    "Affordable Pricing",
  ];
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-medium mb-3">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Why Businesses Choose Secure Experts
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {items.map((label, i) => (
            <RevealOnScroll key={label} delay={i * 40}>
              <div className="group flex items-center gap-3 rounded-2xl border border-border bg-white/70 backdrop-blur-xl px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift hover:border-primary/25 h-full">
                <span className="size-8 shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Check className="size-4" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-medium text-foreground leading-tight">
                  {label}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesBento() {
  const items = [
    { Icon: Truck, label: "Logistics & Transportation", image: industryLogistics, span: "lg:col-span-2 lg:row-span-2" },
    { Icon: Bus, label: "School Transportation", image: industrySchool, span: "lg:col-span-2" },
    { Icon: Droplets, label: "Fuel Tankers", image: industryFuelTanker, span: "lg:col-span-2" },
    { Icon: HardHat, label: "Construction Companies", image: industryConstruction, span: "lg:col-span-2" },
    { Icon: PackageCheck, label: "Delivery Services", image: industryDelivery, span: "lg:col-span-2" },
    { Icon: Building2, label: "Corporate Fleets", image: industryCorporate, span: "lg:col-span-2" },
    { Icon: Cog, label: "Industrial Vehicles", image: industryIndustrial, span: "lg:col-span-2" },
    { Icon: Landmark, label: "Government Organizations", image: industryGovernment, span: "lg:col-span-2" },
    { Icon: Boxes, label: "Asset Management Companies", image: industryAssets, span: "lg:col-span-2" },
  ];
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="text-center mb-14">
          <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-medium mb-3">
            Industries
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Industries We Serve
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-2 lg:grid-cols-6 auto-rows-[200px] gap-4">
          {items.map(({ Icon, label, image, span }, i) => (
            <RevealOnScroll
              key={label}
              delay={i * 50}
              className={`col-span-2 ${span}`}
            >
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:border-primary/25">
                <img
                  src={image}
                  alt={`${label} — Indian vehicles served by Secure Experts`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10"
                />
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div className="size-11 rounded-2xl bg-white/85 text-primary grid place-items-center backdrop-blur-md shadow-sm">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div className="text-lg font-semibold tracking-tight text-white drop-shadow-sm">
                    {label}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commitment() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <div className="relative surface-4 rounded-[36px] border border-border px-8 py-16 md:p-20 text-center overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-24 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/12 blur-3xl"
            />
            <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-medium mb-4">
                Our Commitment
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                Dependable technology, every mile.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                At Secure Experts, we are committed to providing dependable technology
                solutions that improve security, efficiency, and operational visibility.
                We continuously innovate to deliver smarter tracking and monitoring
                solutions that help businesses make better decisions and achieve greater
                control over their vehicles and assets.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function AboutCTA() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-28 px-6">
      <div ref={r} className="reveal max-w-5xl mx-auto">
        <div className="relative surface-2 rounded-[40px] border border-border px-8 py-20 sm:p-24 text-center overflow-hidden">
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] bg-primary/15 rounded-full blur-3xl pointer-events-none"
            style={{ animation: "aurora-drift 18s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-40 right-0 size-[500px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none"
            style={{ animation: "aurora-drift 24s ease-in-out -8s infinite" }}
          />
          <div className="relative">
            <div className="inline-flex px-3 py-1 rounded-full bg-background border border-border text-[12px] text-muted-foreground mb-6">
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] mb-5 text-balance">
              Let's Build Smarter{" "}
              <span className="text-muted-foreground">Mobility Together.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you manage a single vehicle or a large fleet, Secure Experts
              provides the technology, expertise, and support needed to keep your
              operations connected, monitored, and secure.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <WhatsAppButton productName="Secure Experts — About CTA" size="lg">
                Talk on WhatsApp
              </WhatsAppButton>
              <MagneticButton href="/#contact" variant="primary" glow>
                Contact Our Team
                <ArrowRight className="size-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Nav />
      <main>
        <AboutHero />
        <WhoWeAre />
        <MissionVision />
        <Solutions />
        <WhyChooseUs />
        <IndustriesBento />
        <Commitment />
        <AboutCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
