import { useReveal } from "./useReveal";
import { RevealOnScroll } from "./RevealOnScroll";

const specs: Array<[string, string]> = [
  ["Device Name", "BLTDAS140"],
  ["Type", "Asset & Vehicle GPS Tracker"],
  ["Tracking", "GPS · GLONASS · Galileo · BeiDou"],
  ["Connectivity", "LTE-M · NB-IoT · Quad-band GSM · BLE 5.2"],
  ["Power", "3.7V Li-Po · Up to 180 days standby"],
  ["Dimensions", "48 × 32 × 14 mm · 38 g"],
  ["Sensors", "3-Axis Accelerometer · Temperature · Light"],
  ["Ingress Protection", "IP68 — Dust & water resistant"],
  ["Operating Range", "−40°C to +85°C"],
  ["Usage", "Fleet · Corporate assets · Personal vehicles"],
];

export function Specs() {
  const r = useReveal();
  return (
    <section id="specs" className="relative py-32 px-6">
      <div ref={r} className="reveal max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="inline-flex px-3 py-1 rounded-full bg-card border border-border text-[12px] text-muted-foreground mb-5">
              Specifications
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] mb-6 text-balance">
              Engineered integrity.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The technical foundation of the Secure Experts ecosystem. No marketing
              numbers — only verified, field-tested specifications.
            </p>
          </div>
          <div className="lg:col-span-8">
            <dl className="divide-y divide-border border-y border-border">
              {specs.map(([k, v], i) => (
                <RevealOnScroll key={k} delay={i * 50}>
                  <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 py-5">
                    <dt className="text-sm text-muted-foreground">{k}</dt>
                    <dd className="text-sm text-foreground">{v}</dd>
                  </div>
                </RevealOnScroll>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}