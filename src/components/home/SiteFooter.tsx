import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <span className="font-extrabold tracking-tighter text-2xl uppercase italic mb-6 block">
              Secure<span className="text-accent">.</span>Experts
            </span>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Precision security technology for fleet management, corporate assets, and
              high-value personal protection.
            </p>
            <div className="flex gap-4 mt-8">
              {[Linkedin, Twitter, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 border border-border rounded-full grid place-items-center hover:border-accent hover:text-accent transition-colors"
                >
                  <Icon className="size-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase text-[10px] mb-6 tracking-[0.25em] text-accent">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#product" className="hover:text-foreground transition-colors">BLTDAS140</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#specs" className="hover:text-foreground transition-colors">Specifications</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-[10px] mb-6 tracking-[0.25em] text-accent">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-[10px] mb-6 tracking-[0.25em] text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-mono-tech">
              <li>support@secureexperts.com</li>
              <li>+1 (800) 555-0140</li>
              <li>London · Singapore · Dubai</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-[10px] font-mono-tech uppercase tracking-widest text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} Secure Experts Ltd. All Rights Reserved.</p>
          <p>Built for Precision · BLTDAS140 · v4.0.2</p>
        </div>
      </div>
    </footer>
  );
}