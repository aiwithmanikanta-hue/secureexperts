import { ShieldCheck, Users, Lock, Headphones } from "lucide-react";

const reviews = [
  {
    q: "The precision of the BLTDAS140 is unmatched. In our sector, a ten-meter margin is unacceptable. Secure Experts delivers within centimeters.",
    a: "Marcus Thorne",
    r: "Director of Logistics, Aerotech",
  },
  {
    q: "Aesthetics meet extreme functionality. It is the first security device we have deployed without compromising on build or software integrity.",
    a: "Elena Vance",
    r: "Chief Security Officer, Novus Corp",
  },
  {
    q: "Battery longevity changed our entire maintenance cycle. We have reduced operational overhead by 40% since switching to Secure Experts.",
    a: "Jameson Reed",
    r: "Fleet Manager, Global Transit",
  },
];

const badges = [
  { Icon: ShieldCheck, t: "Reliable Products" },
  { Icon: Users, t: "Customer First" },
  { Icon: Lock, t: "Secure Solutions" },
  { Icon: Headphones, t: "Professional Support" },
];

export function Trust() {
  return (
    <section className="relative py-28 px-6 border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
            Trusted Worldwide
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase italic tracking-tighter leading-[0.95]">
            Specified by Professionals.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border mb-20">
          {reviews.map((r) => (
            <div key={r.a} className="bg-background p-10">
              <div className="text-accent font-mono-tech text-2xl mb-5">“</div>
              <p className="text-foreground/90 text-sm leading-relaxed mb-8">{r.q}</p>
              <div className="pt-5 border-t border-border">
                <div className="text-sm font-bold uppercase tracking-wider">{r.a}</div>
                <div className="text-[11px] text-muted-foreground font-mono-tech tracking-widest mt-1">{r.r}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {badges.map((b) => (
            <div key={b.t} className="bg-background p-8 flex items-center gap-4">
              <b.Icon className="size-5 text-accent shrink-0" strokeWidth={1.5} />
              <span className="text-xs font-bold uppercase tracking-widest">{b.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}