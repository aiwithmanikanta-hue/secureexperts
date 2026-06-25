import { useReveal } from "@/components/home/useReveal";
import imgLogistics from "@/assets/services/industry-logistics.jpg";
import imgSchool from "@/assets/services/industry-school.jpg";
import imgFuel from "@/assets/services/industry-fuel-tanker.jpg";
import imgConstruction from "@/assets/services/industry-construction.jpg";
import imgMining from "@/assets/services/industry-mining.jpg";
import imgCorporate from "@/assets/services/industry-corporate.jpg";
import imgGovernment from "@/assets/services/industry-government.jpg";
import imgDelivery from "@/assets/services/industry-delivery.jpg";
import imgPassenger from "@/assets/services/industry-passenger.jpg";
import imgAgriculture from "@/assets/services/industry-agriculture.jpg";

const industries = [
  { title: "Logistics & Transportation", desc: "Long-haul fleet visibility, route compliance and ETA accuracy.", img: imgLogistics },
  { title: "School Transportation", desc: "Parent visibility, route safety and live bus tracking.", img: imgSchool },
  { title: "Fuel Tankers", desc: "Tamper-proof fuel monitoring and theft alerts.", img: imgFuel },
  { title: "Construction", desc: "Track heavy equipment, hours and on-site movement.", img: imgConstruction },
  { title: "Mining", desc: "Geofenced operations in remote, rugged terrain.", img: imgMining },
  { title: "Corporate Fleets", desc: "Driver accountability and centralized cost control.", img: imgCorporate },
  { title: "Government Vehicles", desc: "AIS-140 compliant fleet supervision.", img: imgGovernment },
  { title: "Delivery Services", desc: "Last-mile route optimization and proof-of-delivery.", img: imgDelivery },
  { title: "Passenger Transport", desc: "Tourist coaches, taxis and shared mobility.", img: imgPassenger },
  { title: "Agriculture", desc: "Tractor and farm-equipment monitoring across plots.", img: imgAgriculture },
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