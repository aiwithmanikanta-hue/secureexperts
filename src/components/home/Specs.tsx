const specs = [
  ["Device Name", "BLTDAS140"],
  ["Type", "Asset & Vehicle GPS Tracker"],
  ["Tracking Capability", "GPS · GLONASS · Galileo · BeiDou"],
  ["Power Support", "3.7V Li-Po · Up to 180 days standby"],
  ["Dimensions", "48mm × 32mm × 14mm · 38g"],
  ["Connectivity", "LTE-M · NB-IoT · Quad-band GSM · BLE 5.2"],
  ["Sensors", "3-Axis Accelerometer · Temp · Ambient Light"],
  ["Ingress Protection", "IP68 — Dust & Water Resistant"],
  ["Usage", "Fleet · Corporate Assets · Personal Vehicles"],
];

export function Specs() {
  return (
    <section id="specs" className="relative py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/3">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
              Specification Sheet
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase italic tracking-tighter leading-[0.95] mb-6">
              Engineered<br />Integrity.
            </h2>
            <p className="text-muted-foreground mb-10 text-sm leading-relaxed">
              The technical foundation of the Secure Experts ecosystem. No marketing
              numbers — only verified, field-tested specifications.
            </p>
            <ul className="space-y-3 font-mono-tech text-[11px] uppercase tracking-widest text-accent/80">
              <li className="flex items-center gap-3"><span className="size-1.5 bg-accent rounded-full" /> IP68 Water Resistance</li>
              <li className="flex items-center gap-3"><span className="size-1.5 bg-accent rounded-full" /> AES-256 Encryption</li>
              <li className="flex items-center gap-3"><span className="size-1.5 bg-accent rounded-full" /> Multi-Network SIM</li>
              <li className="flex items-center gap-3"><span className="size-1.5 bg-accent rounded-full" /> -40°C to +85°C</li>
            </ul>
          </div>

          <div className="flex-1 w-full">
            <div className="border border-border p-1 bg-white/5 rounded-xl">
              <div className="border border-border rounded-lg overflow-hidden bg-background">
                <table className="w-full font-mono-tech text-xs text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-white/5">
                      <th className="p-5 uppercase text-muted-foreground font-medium tracking-widest text-[10px]">Parameter</th>
                      <th className="p-5 uppercase text-accent font-medium tracking-widest text-[10px]">BLTDAS140 Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {specs.map(([k, v]) => (
                      <tr key={k} className="hover:bg-card/40 transition-colors">
                        <td className="p-5 text-muted-foreground uppercase tracking-wider text-[11px]">{k}</td>
                        <td className="p-5 text-foreground text-[12px]">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}