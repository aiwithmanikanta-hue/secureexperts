import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { useTilt } from "@/components/home/useTilt";
import { WhatsAppButton } from "./WhatsAppButton";
import type { Product } from "./catalog";

const badgeStyles: Record<Product["badgeTone"], string> = {
  primary: "bg-primary text-primary-foreground",
  emerald: "bg-emerald-500 text-white",
  slate: "bg-slate-800 text-white",
};

export function ProductCard({ product, featured }: { product: Product; featured?: boolean }) {
  const ref = useTilt<HTMLDivElement>(3);

  return (
    <div
      ref={ref}
      className={`group tilt-card relative flex flex-col rounded-3xl border border-border bg-white/80 backdrop-blur-xl overflow-hidden transition-[box-shadow,border-color,transform] duration-500 hover:shadow-lift hover:border-primary/30 hover:-translate-y-1 ${
        featured ? "ring-1 ring-primary/15" : ""
      }`}
    >
      {/* Badge */}
      <span
        className={`absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide shadow-soft ${badgeStyles[product.badgeTone]}`}
      >
        {product.badge}
      </span>

      {/* Image */}
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-[4/3] overflow-hidden bg-gradient-to-br from-white via-[var(--tint-sky)] to-[var(--tint-blue)]"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 size-full object-contain p-8 transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        {/* light sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent skew-x-[-15deg] transition-transform duration-[1300ms] ease-out group-hover:translate-x-[300%]"
        />
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7">
        <p className="text-[11px] uppercase tracking-[0.18em] text-primary/80 font-semibold">
          {product.tagline}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {product.summary}
        </p>

        <ul className="mt-5 space-y-2.5">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/80">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Check className="size-3" strokeWidth={3} />
              </span>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-3 pt-1">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="group/btn inline-flex h-11 items-center gap-1.5 rounded-full bg-foreground px-5 text-sm font-medium text-background shadow-soft transition-all duration-300 hover:scale-[1.03] hover:shadow-lift"
          >
            View Details
            <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </Link>
          <WhatsAppButton productName={product.name} variant="outline" size="md">
            WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}