import { type AnchorHTMLAttributes, type ReactNode } from "react";
import { useMagnetic } from "./useMagnetic";

type Variant = "primary" | "secondary";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  glow?: boolean;
  children: ReactNode;
};

export function MagneticButton({
  variant = "primary",
  glow = false,
  className = "",
  children,
  ...rest
}: Props) {
  const ref = useMagnetic<HTMLAnchorElement>(8, 140);

  const base =
    "group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium overflow-hidden transition-[transform,box-shadow,background] duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] will-change-transform";

  const variants: Record<Variant, string> = {
    primary:
      "bg-foreground text-background shadow-soft hover:shadow-lift",
    secondary:
      "bg-card border border-border text-foreground hover:bg-muted",
  };

  return (
    <a
      ref={ref}
      className={`${base} ${variants[variant]} ${glow ? "breathe-glow" : ""} ${className}`}
      {...rest}
    >
      {/* Hover light sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      <span className="relative inline-flex items-center gap-2 transition-transform duration-[250ms] ease-out group-hover:translate-x-[2px]">
        {children}
      </span>
    </a>
  );
}