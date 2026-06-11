import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagneticButton } from "./MagneticButton";
import { Logo } from "./Logo";

const menu = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/#contact" },
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
        <MagneticButton href="/#cta" variant="primary" className="!px-4 !py-2 !text-[13px] shrink-0">
          Get Quote
        </MagneticButton>
      </div>
    </nav>
  );
}