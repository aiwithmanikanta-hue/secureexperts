import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MagneticButton } from "./MagneticButton";
import { Logo } from "./Logo";
import { openWhatsApp } from "@/components/chatbot/whatsapp";

const menu = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Features", href: "/#features" },
  { label: "Specifications", href: "/#specs" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border"
          : "bg-background/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <Link
          to="/"
          aria-label="Secure Experts — Home"
          className="logo-reveal logo-hover flex items-center shrink-0"
        >
          <Logo priority className="h-10 md:h-14 w-auto" />
        </Link>
        <div className="hidden md:flex justify-center gap-8 text-[13px] text-muted-foreground">
          {menu.map((m) => (
            <a
              key={m.label}
              href={m.href}
              className="link-underline hover:text-foreground transition-colors"
            >
              {m.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() =>
              openWhatsApp(
                "Hi Secure Experts, I'd like to know more about your GPS tracking solutions.",
              )
            }
            aria-label="Chat on WhatsApp"
            className="grid size-9 place-items-center rounded-full text-white shadow-[0_8px_20px_-8px_rgba(37,211,102,0.55)] ring-1 ring-white/40 transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg viewBox="0 0 32 32" className="size-4" fill="currentColor" aria-hidden>
              <path d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.47 1.73 6.41L3.2 28.8l6.55-1.71A12.78 12.78 0 0 0 16 28.8C23.07 28.8 28.8 23.07 28.8 16S23.07 3.2 16.001 3.2Zm5.94 16.41c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.32-.83 1.06-1.02 1.28-.19.22-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.73-1.76-1-2.4-.27-.64-.54-.55-.73-.56l-.62-.01c-.21 0-.55.08-.83.4-.29.32-1.1 1.07-1.1 2.62 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.39 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.92-.78 2.19-1.54.27-.76.27-1.42.19-1.54-.08-.13-.29-.21-.61-.37Z" />
            </svg>
          </button>
          <MagneticButton href="/#cta" variant="primary" className="!px-4 !py-2 !text-[13px]">
            Get Quote
          </MagneticButton>
        </div>
      </div>
    </nav>
  );
}