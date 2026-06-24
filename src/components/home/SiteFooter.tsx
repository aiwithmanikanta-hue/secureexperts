import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Logo } from "./Logo";

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
              {([
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Mail, href: "mailto:info@secureexperts.in", label: "Email Secure Experts" },
              ]).map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
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
              <li><a href="mailto:info@secureexperts.in" className="hover:text-foreground transition-colors">info@secureexperts.in</a></li>
              <li><a href="tel:+917337433351" className="hover:text-foreground transition-colors">+91 733 743 3351</a></li>
              <li>Vijayawada</li>
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