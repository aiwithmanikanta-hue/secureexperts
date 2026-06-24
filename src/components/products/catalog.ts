import { vltd4g, vltd2g, v5Basic, fuelSensor } from "@/assets";
import { openWhatsApp } from "@/components/chatbot/whatsapp";

export type ProductSlug =
  | "vltd-4g-device"
  | "vltd-2g-device"
  | "v5-basic-gps-device"
  | "fuel-sensor";

export type ProductDetails = {
  deviceType: string;
  technology: string;
  workingCondition: string;
  connectivity: string;
  powerSupply: string;
  installation: string;
  accuracy?: string;
  accessibility?: string[];
};

export type Product = {
  slug: ProductSlug;
  name: string;
  tagline: string;
  badge: string;
  badgeTone: "primary" | "emerald" | "slate";
  summary: string;
  highlights: string[];
  image: string;
  overview: string[];
  features: { title: string; desc: string; icon: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  details: ProductDetails;
  applications: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "vltd-4g-device",
    name: "VLTD 4G Device",
    tagline: "Flagship 4G tracking & compliance",
    badge: "Recommended",
    badgeTone: "primary",
    summary:
      "Premium flagship VLTD designed for advanced vehicle tracking, compliance-ready monitoring, and uninterrupted live visibility on next-gen 4G networks.",
    image: vltd4g,
    highlights: [
      "GPS-based real-time tracking",
      "4G connectivity with 2G fallback",
      "SOS / panic alert support",
      "Compliance-ready vehicle monitoring",
    ],
    overview: [
      "The VLTD 4G Device is engineered for operators who demand reliable, high-resolution visibility into every vehicle in their fleet. Built on the latest 4G LTE radios, it delivers second-by-second telemetry with seamless 2G fallback in low-coverage areas.",
      "From compliance-grade audit trails to instant SOS escalation, every layer of the device is tuned for mission-critical operations. It pairs precisely with the Secure Experts platform to surface alerts, geofence events, and driver behavior in real time.",
      "Whether you operate commercial transport, school routes, or premium passenger fleets, the VLTD 4G gives you a single, dependable source of truth for every kilometre.",
    ],
    features: [
      { icon: "Satellite", title: "Real-time GPS", desc: "Sub-meter live positioning with high-frequency updates." },
      { icon: "Signal", title: "4G + 2G Fallback", desc: "Seamless handover between 4G LTE and legacy 2G coverage." },
      { icon: "ShieldAlert", title: "SOS / Panic", desc: "One-touch escalation to your control room and contacts." },
      { icon: "MapPin", title: "Geofencing", desc: "Unlimited zones with entry, exit, and dwell alerts." },
      { icon: "FileCheck2", title: "Compliance Ready", desc: "Audit-grade logs aligned with vehicle monitoring norms." },
      { icon: "BatteryCharging", title: "Resilient Power", desc: "Internal backup battery survives ignition tampering." },
    ],
    specs: [
      { label: "Network", value: "4G LTE (Cat-1) with 2G fallback" },
      { label: "GNSS", value: "GPS + GLONASS, ±2.5 m accuracy" },
      { label: "Input Voltage", value: "9–32 V DC" },
      { label: "Backup Battery", value: "Internal Li-ion, up to 8 hrs" },
      { label: "I/O", value: "Digital in/out, ignition, SOS button" },
      { label: "Operating Temp", value: "−20 °C to +70 °C" },
      { label: "Certifications", value: "Compliance-ready (AIS-140 aligned)" },
      { label: "Warranty", value: "1-year manufacturer warranty" },
    ],
    useCases: [
      "Commercial fleets",
      "School & passenger transport",
      "Logistics & last-mile",
      "Premium personal vehicles",
      "High-value cargo",
    ],
    faqs: [
      { q: "Does installation require my vehicle off-road?", a: "No. Certified installers complete the fitting in under 60 minutes on most vehicles, with zero permanent modifications." },
      { q: "Will it work in low-coverage areas?", a: "Yes. The device automatically falls back to 2G when 4G is unavailable, so tracking continues uninterrupted." },
      { q: "How do I reach support?", a: "Tap any WhatsApp button on this page — our team responds with installation, tracking, and account help directly on WhatsApp." },
      { q: "What warranty is included?", a: "Every VLTD 4G ships with a 1-year manufacturer warranty. Extended cover is available on request." },
      { q: "Can I use it across multiple vehicles?", a: "Each device is paired to one vehicle for accuracy, but your Secure Experts account manages an unlimited number of devices." },
    ],
    details: {
      deviceType: "Digital GPS Tracking Device",
      technology: "4G LTE + GPS + GSM Tracking Technology",
      workingCondition: "24/7 Continuous Tracking",
      connectivity: "4G Network with 2G Fallback Support",
      powerSupply: "Vehicle Battery Powered",
      installation: "Hidden Vehicle Installation",
      accuracy: "High Precision Location Tracking",
    },
    applications: ["Cars", "Trucks", "Buses", "Logistics Vehicles", "Fleet Vehicles"],
  },
  {
    slug: "vltd-2g-device",
    name: "VLTD 2G Device",
    tagline: "Cost-effective essential tracking",
    badge: "Value Choice",
    badgeTone: "emerald",
    summary:
      "A reliable, budget-friendly VLTD for essential real-time tracking, geofencing, and trip history — purpose-built for operators who want dependable visibility without the flagship price.",
    image: vltd2g,
    highlights: [
      "Real-time location tracking",
      "Stable 2G connectivity",
      "Simple, fast installation",
      "Geofencing & trip history logs",
    ],
    overview: [
      "The VLTD 2G Device delivers the core of fleet visibility — live location, geofencing, and trip logs — on a proven 2G platform that performs reliably across India's most challenging routes.",
      "It's the workhorse choice for businesses that need every vehicle accounted for, every day, without paying for features they won't use.",
      "Pair it with the Secure Experts dashboard to manage routes, monitor driver behavior, and pull historical reports in seconds.",
    ],
    features: [
      { icon: "Satellite", title: "Live GPS", desc: "Continuous real-time positioning updates." },
      { icon: "Signal", title: "2G Network", desc: "Wide coverage across rural and urban corridors." },
      { icon: "MapPin", title: "Geofencing", desc: "Set entry and exit alerts for any zone." },
      { icon: "History", title: "Trip History", desc: "Replay routes and view detailed trip logs." },
      { icon: "Wrench", title: "Easy Install", desc: "Fits most vehicles in under 45 minutes." },
      { icon: "ShieldCheck", title: "Tamper Alerts", desc: "Instant notifications on ignition or wire tampering." },
    ],
    specs: [
      { label: "Network", value: "GSM/GPRS 2G (quad-band)" },
      { label: "GNSS", value: "GPS, ±5 m accuracy" },
      { label: "Input Voltage", value: "9–32 V DC" },
      { label: "Backup Battery", value: "Internal Li-ion, up to 4 hrs" },
      { label: "I/O", value: "Digital input, ignition sense" },
      { label: "Operating Temp", value: "−20 °C to +65 °C" },
      { label: "Form Factor", value: "Compact, fleet-grade enclosure" },
      { label: "Warranty", value: "1-year manufacturer warranty" },
    ],
    useCases: [
      "Small & mid-size fleets",
      "Goods carriers",
      "Cabs & rental cars",
      "Two-wheeler delivery",
      "Cost-sensitive operations",
    ],
    faqs: [
      { q: "Will 2G coverage be enough for my routes?", a: "For most highway, rural, and intra-city routes in India, 2G coverage remains excellent. If you operate in 4G-mandated corridors, choose the VLTD 4G." },
      { q: "How long does installation take?", a: "Typically 30–45 minutes per vehicle with our certified installer network." },
      { q: "Can I view live location on my phone?", a: "Yes — the Secure Experts dashboard works on any browser and we provide a mobile-friendly view." },
      { q: "Is the warranty the same as the flagship?", a: "Yes, every VLTD 2G ships with a 1-year manufacturer warranty." },
      { q: "How do I get help?", a: "Tap any WhatsApp button on this page to reach our support team instantly." },
    ],
    details: {
      deviceType: "Digital GPS Tracking Device",
      technology: "2G GSM + GPS Technology",
      workingCondition: "Continuous Vehicle Monitoring",
      connectivity: "2G Network",
      powerSupply: "Vehicle Battery Powered",
      installation: "Professional Installation",
    },
    applications: ["Cars", "Commercial Vehicles", "Small Fleets"],
  },
  {
    slug: "v5-basic-gps-device",
    name: "V5 Basic GPS Device",
    tagline: "Compact everyday GPS tracker",
    badge: "Starter",
    badgeTone: "slate",
    summary:
      "A compact, easy-to-install GPS tracker for everyday vehicle security — perfect for cars, bikes, and personal vehicles that need dependable live tracking without fleet complexity.",
    image: v5Basic,
    highlights: [
      "Compact, discreet design",
      "Live GPS tracking",
      "Geofencing & history logs",
      "Ideal for cars, bikes & SUVs",
    ],
    overview: [
      "The V5 Basic GPS Device is built for everyday peace of mind. Small enough to mount discreetly, powerful enough to give you accurate live location on any vehicle you care about.",
      "Set a home zone, get alerts when your vehicle leaves it, and replay every trip from your phone. Installation takes minutes, and the device runs quietly in the background.",
      "It's the smartest first step into vehicle tracking for individual owners and very small businesses.",
    ],
    features: [
      { icon: "Satellite", title: "Live Tracking", desc: "Accurate real-time location, refreshed continuously." },
      { icon: "MapPin", title: "Geofencing", desc: "Define safe zones and get instant breach alerts." },
      { icon: "History", title: "Trip Logs", desc: "Replay every journey with timestamps and routes." },
      { icon: "Smartphone", title: "Mobile Friendly", desc: "Manage everything from your phone browser." },
      { icon: "Wrench", title: "Quick Install", desc: "Plug-and-fit in minutes on most vehicles." },
      { icon: "ShieldCheck", title: "Daily Security", desc: "Discreet placement keeps your vehicle protected." },
    ],
    specs: [
      { label: "Network", value: "GSM/GPRS 2G" },
      { label: "GNSS", value: "GPS, ±5 m accuracy" },
      { label: "Input Voltage", value: "9–32 V DC" },
      { label: "Form Factor", value: "Compact, palm-sized" },
      { label: "Mounting", value: "Discreet hidden install" },
      { label: "Operating Temp", value: "−10 °C to +60 °C" },
      { label: "Best For", value: "Personal vehicles, bikes, cars" },
      { label: "Warranty", value: "1-year manufacturer warranty" },
    ],
    useCases: [
      "Personal cars",
      "Two-wheelers",
      "SUVs & family vehicles",
      "First-time buyers",
      "Single-vehicle owners",
    ],
    faqs: [
      { q: "Is this device good for a single car?", a: "Yes — the V5 Basic is designed specifically for individual vehicle owners who want dependable live tracking." },
      { q: "Can I track it from my phone?", a: "Absolutely. Open the Secure Experts dashboard in any mobile browser to see live location and trip history." },
      { q: "Will installation damage my vehicle?", a: "No. Our installers use non-invasive wiring; everything is reversible." },
      { q: "Does it support SOS?", a: "SOS is available on the VLTD 4G. The V5 Basic focuses on live tracking, geofencing, and trip history." },
      { q: "How do I get a quote?", a: "Tap the WhatsApp button on this page — we'll share pricing and demo details directly." },
    ],
    details: {
      deviceType: "Compact Digital GPS Tracker",
      technology: "GPS + GSM Tracking",
      workingCondition: "Real-Time Vehicle Monitoring",
      connectivity: "GSM Network",
      powerSupply: "Vehicle Power Source",
      installation: "Easy Installation",
    },
    applications: ["Cars", "Bikes", "Personal Vehicles"],
  },
  {
    slug: "fuel-sensor",
    name: "Fuel Sensor",
    tagline: "Digital fuel monitoring & theft detection",
    badge: "Add-on",
    badgeTone: "emerald",
    summary:
      "A high-accuracy capacitive fuel sensor that pairs with your VLTD to deliver live fuel levels, theft alerts, and complete consumption analytics for every vehicle in your fleet.",
    image: fuelSensor,
    highlights: [
      "Live fuel level monitoring",
      "Instant fuel theft alerts",
      "Refill detection & logs",
      "Detailed consumption analytics",
    ],
    overview: [
      "The Secure Experts Fuel Sensor is a digital capacitive sensor mounted directly into the fuel tank, giving you a precise, real-time view of how much fuel each vehicle has at any moment.",
      "Integrated with the Secure Experts tracking platform, every drop, refill, and abnormal drain is logged and alerted — so theft and pilferage stop being invisible costs.",
      "From single trucks to large mixed fleets, the Fuel Sensor turns fuel into a measurable, reportable line item you can finally control.",
    ],
    features: [
      { icon: "Signal", title: "Live Fuel Level", desc: "Continuous tank-level monitoring streamed to your dashboard." },
      { icon: "ShieldAlert", title: "Theft Detection", desc: "Instant alerts on sudden drops or siphoning attempts." },
      { icon: "BatteryCharging", title: "Refill Detection", desc: "Auto-logs every fuel-up with timestamp and volume." },
      { icon: "FileCheck2", title: "Consumption Reports", desc: "Per-trip, per-vehicle, and per-driver fuel reports." },
      { icon: "History", title: "Fuel Analytics", desc: "Trends, anomalies, and efficiency insights over time." },
      { icon: "Wrench", title: "Tank-Mounted", desc: "Professional in-tank installation for accuracy." },
    ],
    specs: [
      { label: "Sensor Type", value: "Capacitive fuel level sensor" },
      { label: "Output", value: "Digital, GPS platform integrated" },
      { label: "Mounting", value: "Fuel tank mounted" },
      { label: "Power", value: "Vehicle electrical system" },
      { label: "Monitoring", value: "24/7 live fuel level" },
      { label: "Compatibility", value: "Pairs with Secure Experts VLTDs" },
      { label: "Best For", value: "Trucks, tankers, fleets, generators" },
      { label: "Warranty", value: "1-year manufacturer warranty" },
    ],
    useCases: [
      "Trucks",
      "Tankers",
      "Fleet vehicles",
      "Construction equipment",
      "Generators",
    ],
    faqs: [
      { q: "Do I need a tracking device to use the Fuel Sensor?", a: "Yes — the Fuel Sensor integrates with our VLTD devices and the Secure Experts platform to deliver live data and alerts." },
      { q: "How accurate are the readings?", a: "Capacitive sensing delivers high accuracy across the full tank range, calibrated per vehicle during installation." },
      { q: "Will it detect siphoning?", a: "Yes. Sudden, abnormal drops trigger instant fuel theft alerts on the dashboard and WhatsApp." },
      { q: "Can I track fuel across multiple vehicles?", a: "Absolutely — fleet-level dashboards summarise consumption, refills, and losses across every connected vehicle." },
      { q: "Does installation damage the tank?", a: "No. Certified installers fit the sensor using a sealed, reversible mount." },
    ],
    details: {
      deviceType: "Digital Fuel Monitoring Sensor",
      technology: "Capacitive Fuel Sensing Technology",
      workingCondition: "24/7 Fuel Level Monitoring",
      connectivity: "Integrated with GPS Tracking Platform",
      powerSupply: "Vehicle Electrical System",
      installation: "Fuel Tank Mounted",
    },
    applications: ["Trucks", "Tankers", "Fleet Vehicles", "Construction Equipment", "Generators"],
  },
];

export function getProduct(slug: ProductSlug): Product {
  const found = PRODUCTS.find((p) => p.slug === slug);
  if (!found) throw new Error(`Unknown product: ${slug}`);
  return found;
}

export function buildProductWhatsAppMessage(name: string) {
  return `Hello Secure Experts, I am interested in ${name}. Please share details, pricing, and demo information.`;
}

export function openProductWhatsApp(name: string) {
  openWhatsApp(buildProductWhatsAppMessage(name));
}

export function buildProductQuoteMessage(name: string) {
  return `Hello Secure Experts, I'd like to request a quote for ${name}. Please share pricing and details.`;
}

export function openProductQuoteWhatsApp(name: string) {
  openWhatsApp(buildProductQuoteMessage(name));
}