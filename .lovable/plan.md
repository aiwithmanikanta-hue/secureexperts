# Services Page — Build Plan

A new `/services` route, designed in the existing Secure Experts visual language (white / off-white / light blue / brand blue / dark navy, SF-style typography, glassmorphism, magnetic buttons, reveal-on-scroll). It will reuse current building blocks (`Nav`, `SiteFooter`, `MagneticButton`, `RevealOnScroll`, `useReveal`, `useMagnetic`, `LiveTrackingDemo`, `FloatingActions`) so the page feels native to the site, not bolted on.

## Scope

Create `src/pages/Services.tsx` plus section components under `src/components/services/`. Add route in `src/App.tsx` and a "Services" link in `Nav.tsx` menu. No backend, no schema changes, no logo/branding/content changes elsewhere.

## Page structure

1. **Nav (existing)** — add "Services" item. Live Login / Admin Login buttons are not in the current nav; I'll skip adding them unless you want them (they aren't wired to any auth). Confirm if needed.
2. **Hero** — eyebrow "OUR SERVICES", H1 "Smart Tracking Solutions for Every Business", subtitle, two CTAs (WhatsApp + Request Demo). Right side: layered glass cards showing GPS device, fuel sensor mini-widget, mobile dashboard mock, fleet tile — floating with soft parallax. Background: blue gradient blobs + particle dots.
3. **Service Categories** — 6 glass cards (GPS Tracking, Fuel Monitoring, Fleet Management, AIS-140, Vehicle Cameras, Asset Tracking) with lucide icons (Satellite, Fuel, LayoutDashboard, ShieldCheck, Camera, Package), hover lift + light sweep.
4. **Service Overview (Who we serve)** — two-column: left checklist of 9 industries with animated check ticks; right premium image (Indian highway/truck) with floating dashboard overlay cards.
5. **Technology Stack** — 6 spec cards (GPS, Fuel Sensor, Cloud, Android & Web, Live Alerts, AI Analytics).
6. **Live Tracking Demo** — reuse existing `LiveTrackingDemo` component (already in home), retitled with route caption "Vijayawada → Rajahmundry → Visakhapatnam".
7. **Platform Features (Bento Grid)** — 12 features in an asymmetric bento layout with icons + hover.
8. **Fuel Analytics** — 2 cards with inline SVG line charts (green fill events, red theft) with stroke-dash draw-in animation on reveal.
9. **Industries We Serve** — 10 image cards with gradient overlay, hover zoom + lift. Uses Unsplash photos of Indian logistics/trucks/buses (royalty-free via picsum-style URLs or unsplash source) — confirm if you'd rather supply images.
10. **Why Choose Secure Experts** — 10 icon tick cards in a clean 2/5 grid.
11. **Final CTA** — headline + 3 buttons (WhatsApp via `openWhatsApp`, Request Demo scrolls to home `#contact`, Contact Sales `mailto:`).
12. **SiteFooter (existing)**.

## Files

- Add: `src/pages/Services.tsx`
- Add: `src/components/services/ServicesHero.tsx`, `ServiceCategories.tsx`, `IndustriesChecklist.tsx`, `TechStack.tsx`, `PlatformBento.tsx`, `FuelAnalytics.tsx`, `IndustriesGrid.tsx`, `WhyChoose.tsx`, `ServicesCTA.tsx`
- Edit: `src/App.tsx` (route `/services`), `src/components/home/Nav.tsx` (menu item), `src/components/home/SiteFooter.tsx` (Services link in Quick Links)

## Design & motion

- Tokens only — no hardcoded hex. Use existing `bg-card`, `border-border`, `text-foreground`, `text-primary`, `bg-tint-blue`, `shadow-soft`, `shadow-lift` classes already in `styles.css`.
- Animations: `useReveal` fade-up, `useMagnetic` for CTAs, light-sweep on cards, SVG stroke-dash for analytics, breathing glow on hero badge.
- Mobile-first: single-column stacks, swipeable horizontal scroll for category + industries cards on `sm:`, touch targets ≥44px, no horizontal overflow.
- SEO: `<title>Services — GPS Tracking, Fuel Monitoring, Fleet Management | Secure Experts</title>`, meta description, single H1, alt text, JSON-LD `Service` schema.

## Out of scope (flag for confirmation)

- Live Login / Admin Login buttons — no auth exists in the app. I will not add non-functional buttons unless you want placeholders.
- Industry photos — will use Unsplash hotlinks for now; swap to uploaded assets when you provide them.
