import type { ButtonHTMLAttributes, ReactNode } from "react";
import { openProductWhatsApp } from "./catalog";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  productName: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
};

const sizes = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function WhatsAppButton({
  productName,
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...rest
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium overflow-hidden transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] active:scale-95";
  const styles =
    variant === "solid"
      ? "text-white shadow-[0_10px_28px_-12px_rgba(37,211,102,0.55)] hover:shadow-[0_14px_38px_-12px_rgba(37,211,102,0.75)]"
      : variant === "outline"
        ? "bg-white text-emerald-600 border border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50"
        : "text-emerald-600 hover:bg-emerald-50";
  const solidStyle =
    variant === "solid" ? { backgroundColor: "#25D366" } : undefined;

  return (
    <button
      type="button"
      onClick={() => openProductWhatsApp(productName)}
      className={`${base} ${styles} ${sizes[size]} ${className}`}
      style={solidStyle}
      aria-label={`Chat on WhatsApp about ${productName}`}
      {...rest}
    >
      <svg viewBox="0 0 32 32" className="size-4" fill="currentColor" aria-hidden>
        <path d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.47 1.73 6.41L3.2 28.8l6.55-1.71A12.78 12.78 0 0 0 16 28.8C23.07 28.8 28.8 23.07 28.8 16S23.07 3.2 16.001 3.2Zm5.94 16.41c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.32-.83 1.06-1.02 1.28-.19.22-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.73-1.76-1-2.4-.27-.64-.54-.55-.73-.56l-.62-.01c-.21 0-.55.08-.83.4-.29.32-1.1 1.07-1.1 2.62 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.39 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.92-.78 2.19-1.54.27-.76.27-1.42.19-1.54-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="relative">{children ?? "Talk on WhatsApp"}</span>
    </button>
  );
}