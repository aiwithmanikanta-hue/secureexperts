import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { openWhatsApp } from "@/components/chatbot/whatsapp";

export function SiteFooter() {
  return (
    <footer className="py-20 px-6 surface-2 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2">
            <a href="#home" aria-label="Secure Experts — Home" className="inline-flex items-center mb-3 logo-hover">
              <Logo className="h-16 w-auto" />
            </a>
            <p className="text-sm font-medium tracking-wide text-primary mb-4">
              Securing Every Mile
            </p>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Precision security technology for fleet management, corporate assets, and
              high-value personal protection.
            </p>
            <div className="flex gap-2 mt-6">
              {[Linkedin, Twitter, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 rounded-full bg-background border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon className="size-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-5 text-foreground">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#product" className="hover:text-foreground transition-colors">VLTDAIS140</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#specs" className="hover:text-foreground transition-colors">Specifications</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-5 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-5 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>support@secureexperts.com</li>
              <li>+1 (800) 555-0140</li>
              <li>London · Singapore · Dubai</li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      "Hi Secure Experts, I'd like to know more about your GPS tracking solutions.",
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-white text-xs font-medium shadow-[0_8px_20px_-8px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-105"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <svg viewBox="0 0 32 32" className="size-3.5" fill="currentColor" aria-hidden>
                    <path d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.47 1.73 6.41L3.2 28.8l6.55-1.71A12.78 12.78 0 0 0 16 28.8C23.07 28.8 28.8 23.07 28.8 16S23.07 3.2 16.001 3.2Zm5.94 16.41c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.32-.83 1.06-1.02 1.28-.19.22-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.73-1.76-1-2.4-.27-.64-.54-.55-.73-.56l-.62-.01c-.21 0-.55.08-.83.4-.29.32-1.1 1.07-1.1 2.62 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.39 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.92-.78 2.19-1.54.27-.76.27-1.42.19-1.54-.08-.13-.29-.21-.61-.37Z" />
                  </svg>
                  Chat on WhatsApp
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-xs text-muted-foreground gap-3">
          <p>© {new Date().getFullYear()} Secure Experts Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}