# Floating Action Buttons — WhatsApp + AI Chatbot

The site already has a Chatbot with a floating launcher (bottom-right) and a `openWhatsApp()` helper hitting `wa.me/917337433351`. We'll consolidate both buttons into a polished, animated stack that stays visible on every route.

## What gets built

1. **New `FloatingActions` component** (`src/components/chatbot/FloatingActions.tsx`) — owns both FABs and renders them in a fixed bottom-right stack.
2. **AI Chatbot FAB** (top of stack)
   - Robot icon (lucide `Bot`), white + soft-blue glassmorphism, primary glow.
   - Idle: gentle float + breathing pulse + soft notification ping dot.
   - Hover: scale 1.08, glow ring expands, icon does a tiny wave (rotate keyframes).
   - Tooltip on hover: "Ask our AI Assistant".
   - Click: opens the existing Chatbot panel (lift `open` state into `FloatingActions` and pass it to `Chatbot`).
   - Every 15s: pop-in speech bubble cycling through ["Click Me!", "Ask Me Anything!", "Need Product Details?", "Want Pricing?", "Download Brochure"], auto-hides after 4s. Pauses while chatbot is open or tab hidden.
3. **WhatsApp FAB** (below chatbot button, 20px gap)
   - Official WhatsApp SVG glyph in a green (#25D366) circular button, glass ring, soft shadow + green glow.
   - Idle: floating + breathing pulse.
   - Hover: scale 1.08, shadow/glow expansion, tooltip "Chat on WhatsApp".
   - Click: `openWhatsApp("Hi Secure Experts, I'd like to know more about your GPS tracking solutions.")` + ripple animation.
4. **Chatbot refactor** (`src/components/chatbot/Chatbot.tsx`)
   - Remove the internal launcher button (lines ~205-218).
   - Accept `open` / `onOpenChange` props; keep panel open/close animation but driven from outside.
   - Panel entry: scale-in + blur expansion (already mostly there; tune duration/easing).
5. **Mount in `__root.tsx`** — replace the existing `<Chatbot />` with `<FloatingActions />` which internally renders both FABs and the Chatbot panel.
6. **Animations in `src/styles.css`** — add `@keyframes` for `float-soft`, `breathe-glow-green`, `wave`, `bubble-pop`, `ripple`; expose as `@utility` classes so we can apply them via className without bespoke `<style>` blocks.

## Layout

```text
              ┌──────────────────────┐
              │  speech bubble (15s) │ ← pops in to the left of bot FAB
              └─────────┬────────────┘
                        │
                    ╭───┴───╮
                    │  🤖   │  ← AI chatbot FAB (top)
                    ╰───────╯
                      20px
                    ╭───────╮
                    │  ✆   │  ← WhatsApp FAB (bottom)
                    ╰───────╯
```

Both FABs sit at `fixed bottom-6 right-6 z-50` inside a vertical flex stack.

## Technical notes

- All colors come from existing tokens; the WhatsApp green is added as `--color-whatsapp: oklch(...)` in `src/styles.css` so we can use `bg-whatsapp` / `ring-whatsapp`.
- Speech-bubble timer uses `setInterval(15000)` + `setTimeout(4000)` to hide, cleared on unmount, paused when `open` is true.
- Tooltips are inline (no Radix dep) — small absolutely-positioned `<span>` revealed on `group-hover`.
- Accessibility: each FAB has `aria-label`, `title`, and visible focus ring; speech bubble is `aria-hidden` (decorative).
- No new dependencies; uses existing `lucide-react` (`Bot`, `X`) and inline SVG for the WhatsApp glyph.

## Files touched

- add: `src/components/chatbot/FloatingActions.tsx`
- edit: `src/components/chatbot/Chatbot.tsx` (controlled open state, remove inline launcher)
- edit: `src/routes/__root.tsx` (swap `Chatbot` → `FloatingActions`)
- edit: `src/styles.css` (keyframes + utilities + whatsapp color token)
