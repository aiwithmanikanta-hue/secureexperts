import { useEffect, useState } from "react";

const menu = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Specifications", href: "#specs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "bg-background/70 border-b border-border" : "bg-background/30 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#home" className="font-extrabold tracking-tighter text-xl uppercase italic">
            Secure<span className="text-accent">.</span>Experts
          </a>
          <div className="hidden md:flex gap-7 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {menu.map((m) => (
              <a key={m.label} href={m.href} className="hover:text-accent transition-colors">
                {m.label}
              </a>
            ))}
          </div>
        </div>
        <a
          href="#cta"
          className="px-5 py-2 bg-foreground text-background text-[11px] font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        >
          Get Quote
        </a>
      </div>
    </nav>
  );
}