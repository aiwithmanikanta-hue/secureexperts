import type { ButtonHTMLAttributes, ReactNode } from "react";
import { openProductWhatsApp } from "./catalog";
import { whatsappIcon } from "@/assets";

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
      <img src={whatsappIcon} alt="" aria-hidden className="size-5 shrink-0" />
      <span className="relative">{children ?? "Talk on WhatsApp"}</span>
    </button>
  );
}