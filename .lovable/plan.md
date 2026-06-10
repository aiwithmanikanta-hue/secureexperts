## Goal
Add a premium, glassmorphic AI sales-assistant chatbot to the Secure Experts homepage that explains the VLTDAIS140, answers scripted FAQs, captures qualified leads into Lovable Cloud, and hands every lead off to WhatsApp `7337433351`.

## Architecture

**Frontend (new files under `src/components/chatbot/`):**
- `Chatbot.tsx` — root controller: floating launcher (bottom-right, breathing glow, soft-blue gradient), glass chat panel, open/close animation. Mounted globally in `__root.tsx` so it appears on every route.
- `ChatLauncher.tsx` — round bot button with floating + breathing-glow animation.
- `ChatPanel.tsx` — glass card (frosted white, soft-blue accents, Apple-style spring open), header with "Secure Experts AI" + status dot, scrollable message list, typing indicator, quick-action chip rail, composer.
- `Message.tsx` — user vs bot bubble styling, elegant fade/slide-in.
- `QuickActions.tsx` — the 6 quick-reply chips.
- `ProductCard.tsx` — VLTDAIS140 card (image, description, feature checklist, action buttons) rendered inline as a bot message.
- `BrochureCard.tsx` — flyer/gallery/spec card with Download PDF + WhatsApp buttons (placeholders until files arrive).
- `LeadForm.tsx` — inline conversational form (Name → Phone → City → Quantity/Requirement), one field at a time with validation (zod).
- `FaqEngine.ts` — keyword-matched scripted answers for the 8 FAQs + escalation fallback ("Would you like to speak with a specialist?" → WhatsApp / Callback buttons).
- `whatsapp.ts` — builds the prefilled WhatsApp URL for `7337433351` and opens it.
- `chatbotMachine.ts` — small state reducer for flows: idle → product / brochure / pricing / demo / faq / escalation.

**Backend:**
- Enable Lovable Cloud.
- Migration: `leads` table — `id uuid pk`, `name text`, `phone text`, `city text`, `requirement text`, `source text default 'chatbot'`, `created_at timestamptz default now()`. RLS enabled. Grants: `INSERT` to `anon` + `authenticated` (public form), `SELECT/ALL` to `service_role` only (no public read of PII). Policy: `INSERT WITH CHECK (true)`; no SELECT policy.
- `src/lib/leads.functions.ts` — `submitLead` server fn: zod-validate, insert via `supabaseAdmin` (loaded inside handler), return `{ ok: true }`. Client calls this, then opens WhatsApp.

## Conversation Flows

1. **Welcome** — auto-shows greeting + 6 quick actions.
2. **📦 View Product** → ProductCard with Flyer / Brochure / Contact Expert buttons.
3. **📄 View Flyer / Brochure** → BrochureCard with Download PDF + WhatsApp.
4. **💰 Pricing** → LeadForm(name, phone, city, quantity) → submit → "✅ Thank you" → auto-open WhatsApp with prefilled "🚨 New Website Lead…" message.
5. **🚀 Demo** → LeadForm(name, phone, city) → same confirm + WhatsApp.
6. **📱 WhatsApp** → directly opens WhatsApp chat with greeting message.
7. **❓ Ask a Question** → free-text → `FaqEngine` keyword match → scripted answer; on no-match → escalation buttons (WhatsApp Expert / Request Callback).

## Design

- Position: `fixed bottom-6 right-6 z-50`.
- Launcher: 56px circle, white/light-blue gradient, breathing `box-shadow` glow (reuses existing `breathe` keyframe), floats via `float-y`.
- Panel: 380×560 (mobile: full-width sheet), `glass-card` utility, rounded-3xl, soft shadow-lift, spring open (scale 0.95→1 + opacity).
- Bot bubble: white surface + soft border; user bubble: `bg-primary text-primary-foreground`.
- Typing indicator: 3 dots with stagger.
- Respects `prefers-reduced-motion`.

## Files Touched

- New: 10 chatbot files under `src/components/chatbot/`, `src/lib/leads.functions.ts`, 1 migration.
- Edit: `src/routes/__root.tsx` (mount `<Chatbot />` once).
- No changes to existing homepage sections.

## Out of Scope (this turn)

- Real brochure PDF/flyer image — placeholders wired with TODO; swap when files arrive.
- Admin dashboard UI to view leads (DB only for now).
- Email/CRM notifications.
- True AI replies (scripted-only per your choice).
