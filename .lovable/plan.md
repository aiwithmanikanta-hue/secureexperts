## Goal
Extend the existing homepage with 11 new sections + a floating AI chat widget, keeping the current minimal/luxury/glass light theme, typography, spacing, and motion system. No changes to existing sections.

## New files (all in `src/components/home/`)
1. `LiveTrackingDemo.tsx` — Section 1
2. `MonitoringDashboard.tsx` — Section 2
3. `Comparison.tsx` — Section 3 (VLTDAIS140 vs generic)
4. `Industries.tsx` — Section 4 (bento grid, 8 cards)
5. `AIAssistant.tsx` — Section 5 (floating, fixed bottom-right)
6. `LaunchVideo.tsx` — Section 6 (synthetic CSS/SVG reel)
7. `Metrics.tsx` — Section 7 (count-up stats, reuses `useCountUp`)
8. `Pricing.tsx` — Section 8 (3 tiers, Business highlighted)
9. `TrustedBy.tsx` — Section 9 (infinite marquee of category chips/logos)
10. `BeforeAfter.tsx` — Section 10 (drag slider)
11. `LeadGen.tsx` — Section 11 (contact form + sticky WhatsApp button)

Each section reuses existing primitives: `GlassCard`, `RevealOnScroll`, `MagneticButton`, `SignalWaves`, `useTilt`, `useCountUp`. Same section rhythm as `Features`/`WhyUs` (max-w container, generous py-32, gradient eyebrow, h2 display font, muted subtitle, glass surfaces with subtle border + shadow).

## Section design notes

**1. Live Tracking Demo** — SVG "map" with subtle topographic grid + faint road paths, animated polyline route, pulsing circle vehicle marker that travels the path on a loop, dashed geofence polygon that softly highlights when crossed, side HUD with live speed / signal bars / status pill — all driven by `requestAnimationFrame`, no map library.

**2. Monitoring Dashboard** — Floating glass panel mock-up with 7 widgets in an asymmetric grid: status, battery (animated ring), trip history (sparkline SVG), speed (animated bar chart), alert center (stacked toasts), GPS accuracy (radial gauge), location timeline (vertical milestone list). Widgets reveal/stagger on scroll.

**3. Comparison Table** — Two columns. VLTDAIS140 column elevated: gradient border, shadow, check-circle icons in primary. Generic column muted with dash icons. 7 rows reveal sequentially; hover lights up the row.

**4. Industries** — Bento grid (varied tile sizes on lg, single column mobile). Each tile: lucide icon, title, one-line description, gradient overlay on hover, icon micro-animation, subtle "industry visual" (e.g. truck/school/bus glyph) revealed on hover.

**5. AI Assistant (floating)** — Fixed bottom-right. Collapsed: 56px glass orb with breathing glow + occasional notification dot. Expanded: 380×520 glass panel with header ("Secure Experts AI"), scripted intro message, 6 quick-reply chips (Product Q, Pricing, Installation, Comparison, Book Demo, Get Quote). Each chip plays a canned typed-out response. Input box is decorative (also routes to canned responses by keyword). Mounted once in `Home.tsx`.

**6. Launch Video** — Large 16:9 cinematic container, dark gradient backdrop inside the light theme (premium contrast moment). Synthetic reel: looping animation of device silhouette with concentric signal pulses, sweeping map line, floating data chips, scroll-triggered scale-up (transform tied to scroll progress).

**7. Metrics** — 5 stat cards in a row (wraps on mobile). Count-up triggers on view via existing `useCountUp`. Subtle hover lift.

**8. Pricing** — 3 glass cards: Starter / Business (highlighted, "Recommended" ribbon, slight scale) / Enterprise. Each shows tier name, audience, "Contact for pricing", feature checklist, CTA button → opens WhatsApp at `+917337433351` with prefilled message.

**9. Trusted By** — Two infinite marquees (opposite directions) of category chips (Schools, Logistics, Fleet, Corporates, Government...). Pure CSS keyframe scroll, paused on hover, fade masks on edges. No real logos invented.

**10. Before & After** — Draggable vertical divider over a single composition. Left half "Without": grayscale, scattered question marks, "Last seen 2h ago". Right half "With": colored, live route, real-time pill. Pointer/touch drag updates `clip-path: inset(0 X% 0 0)`.

**11. Lead Gen** — Zod-validated form (Name, Company, Phone, Email, Requirement textarea). Submit builds a WhatsApp message and opens `https://wa.me/917337433351?text=...`. Four CTA buttons (Request Demo / Get Quote / Schedule Consultation / Talk to Expert) — each prefills a different WhatsApp message. Success toast + reset on submit. Sticky floating WhatsApp button bottom-left (mirrors AI assistant on the right).

## Wiring
`src/components/home/Home.tsx` — insert in this order after `Trust` and before `FinalCTA`:
`LiveTrackingDemo → MonitoringDashboard → Comparison → Industries → LaunchVideo → Metrics → Pricing → TrustedBy → BeforeAfter → LeadGen`, then keep `FinalCTA` + `SiteFooter`. Mount `<AIAssistant />` once at the root of `Home` (outside `<main>`).

## Contact wiring
WhatsApp number `+917337433351` used by Pricing CTAs, LeadGen form submit, all four LeadGen buttons, and the sticky WhatsApp button. No email/mailto unless you give one later.

## Out of scope
- No backend, no Lovable Cloud, no real chat AI, no real video file, no real client logos, no pricing amounts (placeholders show "Contact for pricing").
- No changes to existing Hero/ProductShowcase/Features/WhyUs/Specs/Trust/FinalCTA.
- No new heavy dependencies — pure React + Tailwind + existing utilities + lucide icons.

## Acceptance
- All 11 sections render in order beneath the current homepage, mobile-responsive, 60fps animations.
- AI assistant floats bottom-right on all viewports without overlapping the sticky WhatsApp button (assistant right, WhatsApp left).
- Every WhatsApp CTA opens `wa.me/917337433351` with a contextual prefilled message.
- Lead form validates and shows success state; invalid inputs show inline errors.