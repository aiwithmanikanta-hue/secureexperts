import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="py-20 px-6 surface-2 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-5">
              <span className="size-7 rounded-full bg-foreground grid place-items-center">
                <span className="size-2 rounded-full bg-background" />
              </span>
              <span className="font-semibold tracking-tight">Secure Experts</span>
            </a>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Precision security technology for fleet management, corporate assets, and
              high-value personal protection.
            </p>
            <div className="flex gap-2 mt-6">
              {[Linkedin, Twitter, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 rounded-full bg-background border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <Icon className="size-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-5 text-foreground">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#product" className="hover:text-foreground transition-colors">BLTDAS140</a></li>
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