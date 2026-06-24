import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
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
          {menu.map((m) => {
            const active =
              m.href === "/"
                ? pathname === "/"
                : m.href === "/products"
                  ? pathname.startsWith("/products")
                  : false;
            return (
              <a
                key={m.label}
                href={m.href}
                className={`link-underline transition-colors ${active ? "text-foreground font-medium" : "hover:text-foreground"}`}
              >
                {m.label}
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-2 justify-self-end">
          <MagneticButton href="/#cta" variant="primary" className="hidden sm:inline-flex !px-4 !py-2 !text-[13px] shrink-0">
            Get Quote
          </MagneticButton>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden grid size-10 place-items-center rounded-full bg-white/70 border border-border backdrop-blur-xl text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div className="relative pt-24 px-8 flex flex-col gap-1">
          {menu.map((m, i) => (
            <a
              key={m.label}
              href={m.href}
              onClick={() => setOpen(false)}
              className="block py-4 text-3xl font-semibold tracking-tight text-foreground border-b border-border"
              style={{
                animation: open
                  ? `reveal-up 0.5s ${0.05 + i * 0.07}s cubic-bezier(0.16,1,0.3,1) both`
                  : undefined,
              }}
            >
              {m.label}
            </a>
          ))}
          <a
            href="/#cta"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground text-background font-medium text-sm shadow-soft"
          >
            Get Quote
          </a>
        </div>
      </div>
    </>
  );
}