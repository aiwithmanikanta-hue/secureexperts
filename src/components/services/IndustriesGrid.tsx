import { useReveal } from "@/components/home/useReveal";

const industries = [
  { title: "Logistics & Transportation", desc: "Long-haul fleet visibility, route compliance and ETA accuracy.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80" },
  { title: "School Transportation", desc: "Parent visibility, route safety and live bus tracking.", img: "https://images.unsplash.com/photo-1597149961419-cf7e3b1f1e76?auto=format&fit=crop&w=1200&q=80" },
  { title: "Fuel Tankers", desc: "Tamper-proof fuel monitoring and theft alerts.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80" },
  { title: "Construction", desc: "Track heavy equipment, hours and on-site movement.", img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80" },
  { title: "Mining", desc: "Geofenced operations in remote, rugged terrain.", img: "https://images.unsplash.com/photo-1605098293553-d6efb15be0ea?auto=format&fit=crop&w=1200&q=80" },
  { title: "Corporate Fleets", desc: "Driver accountability and centralized cost control.", img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80" },
  { title: "Government Vehicles", desc: "AIS-140 compliant fleet supervision.", img: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1200&q=80" },
  { title: "Delivery Services", desc: "Last-mile route optimization and proof-of-delivery.", img: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&w=1200&q=80" },
  { title: "Passenger Transport", desc: "Tourist coaches, taxis and shared mobility.", img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80" },
  { title: "Agriculture", desc: "Tractor and farm-equipment monitoring across plots.", img: "https://images.unsplash.com/photo-1592982537447-7440770faae9?auto=format&fit=crop&w=1200&q=80" },
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
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
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