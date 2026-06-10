import { type HTMLAttributes, type ReactNode } from "react";
import { useTilt } from "./useTilt";

type Props = HTMLAttributes<HTMLDivElement> & {
  tilt?: boolean;
  tiltMax?: number;
  sweep?: boolean;
  children: ReactNode;
};

export function GlassCard({
  tilt = true,
  tiltMax = 5,
  sweep = true,
  className = "",
  children,
  ...rest
}: Props) {
  const ref = useTilt<HTMLDivElement>(tilt ? tiltMax : 0);

  return (
    <div
      ref={ref}
      className={`group relative tilt-card rounded-3xl border border-border bg-background/70 backdrop-blur-xl p-8 overflow-hidden transition-[box-shadow,border-color,transform] duration-500 hover:shadow-lift hover:border-primary/25 ${className}`}
      {...rest}
    >
      {/* inner highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
      />
      {/* hover light sweep */}
      {sweep && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-15deg] transition-transform duration-[1100ms] ease-out group-hover:translate-x-[300%]"
        />
      )}
      {/* border glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: "0 0 0 1px rgba(10,132,255,0.18), 0 20px 50px -20px rgba(10,132,255,0.25)" }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}