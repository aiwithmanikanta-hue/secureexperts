import { useReveal } from "@/components/home/useReveal";

// Eager-import all WebP variants so Vite hashes and bundles them.
const variants = import.meta.glob("@/assets/services/industry-*-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function build(slug: string) {
  const widths = [480, 800, 1200, 1600];
  const entries = widths
    .map((w) => {
      const key = Object.keys(variants).find((k) =>
        k.endsWith(`/industry-${slug}-${w}.webp`),
      );
      return key ? { w, url: variants[key] } : null;
    })
    .filter((x): x is { w: number; url: string } => !!x);
  return {
    src: entries.find((e) => e.w === 800)!.url,
    srcSet: entries.map((e) => `${e.url} ${e.w}w`).join(", "),
  };
}

const industries = [
  { title: "Logistics & Transportation", desc: "Long-haul fleet visibility, route compliance and ETA accuracy.", img: build("logistics") },
  { title: "School Transportation", desc: "Parent visibility, route safety and live bus tracking.", img: build("school") },
  { title: "Fuel Tankers", desc: "Tamper-proof fuel monitoring and theft alerts.", img: build("fuel-tanker") },
  { title: "Construction", desc: "Track heavy equipment, hours and on-site movement.", img: build("construction") },
  { title: "Mining", desc: "Geofenced operations in remote, rugged terrain.", img: build("mining") },
  { title: "Corporate Fleets", desc: "Driver accountability and centralized cost control.", img: build("corporate") },
  { title: "Government Vehicles", desc: "AIS-140 compliant fleet supervision.", img: build("government") },
  { title: "Delivery Services", desc: "Last-mile route optimization and proof-of-delivery.", img: build("delivery") },
  { title: "Passenger Transport", desc: "Tourist coaches, taxis and shared mobility.", img: build("passenger") },
  { title: "Agriculture", desc: "Tractor and farm-equipment monitoring across plots.", img: build("agriculture") },
];

export function IndustriesGrid() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6 surface-2">
      <div ref={r} className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-background border border-border text-[12px] text-muted-foreground mb-5">
            Industries
          </div>
          <h2 className="text-fluid-h2 font-semibold text-balance">
            Industries we serve.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {industries.map((it) => (
            <article
              key={it.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.img.src}
                  srcSet={it.img.srcSet}
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
                  alt={it.title}
                  width={1600}
                  height={1216}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-background">
                  <h3 className="text-lg font-semibold leading-tight">{it.title}</h3>
                  <p className="mt-1 text-[13px] text-background/85 leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}