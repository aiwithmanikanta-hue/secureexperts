import { logo } from "@/assets";

type LogoProps = {
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
  priority?: boolean;
};

/**
 * Official Secure Experts logo.
 * Sized by parent via Tailwind height utilities (e.g. h-12 / md:h-14).
 */
export function Logo({ className = "", style, alt = "Secure Experts — Securing Every Mile", priority }: LogoProps) {
  return (
    <img
      src={logo}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      className={`select-none object-contain ${className}`}
      style={style}
    />
  );
}