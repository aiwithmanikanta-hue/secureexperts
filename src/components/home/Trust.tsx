import { ShieldCheck, Users, Lock, Headphones } from "lucide-react";
import { useReveal } from "./useReveal";
import { GlassCard } from "./GlassCard";
import { RevealOnScroll } from "./RevealOnScroll";

const reviews = [
  {
    q: "The precision of the VLTDAIS140 is unmatched. In our sector, a ten-meter margin is unacceptable.",
    a: "Marcus Thorne",
    r: "Director of Logistics, Aerotech",
  },
  {
    q: "Aesthetics meet extreme functionality. The first security device we have deployed without compromise.",
    a: "Elena Vance",
    r: "Chief Security Officer, Novus Corp",
  },
  {
    q: "Battery longevity changed our entire maintenance cycle. Operational overhead is down 40%.",
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
  const r = useReveal();
  return (
    <section className="relative py-32 px-6 surface-2">
      <div ref={r} className="reveal max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex px-3 py-1 rounded-full bg-background border border-border text-[12px] text-muted-foreground mb-5">
            Customer Trust
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
            Specified by professionals.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {reviews.map((rv, i) => (
            <RevealOnScroll key={rv.a} delay={i * 110}>
              <GlassCard tiltMax={4} className="!p-8">
                <blockquote className="text-base text-foreground leading-relaxed mb-8">
                  &ldquo;{rv.q}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="size-10 rounded-full bg-gradient-to-br from-muted to-secondary border border-border" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{rv.a}</div>
                    <div className="text-xs text-muted-foreground">{rv.r}</div>
                  </div>
                </figcaption>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {badges.map((b, i) => (
            <RevealOnScroll key={b.t} delay={i * 70}>
              <div className="bg-background rounded-2xl border border-border p-5 flex items-center gap-3 transition-all duration-300 hover:scale-[1.03] hover:shadow-soft hover:border-primary/30">
                <b.Icon className="size-4 text-primary shrink-0" strokeWidth={2} />
                <span className="text-sm font-medium">{b.t}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}