import { useEffect, useState } from "react";
import { Bot, X } from "lucide-react";
import { Chatbot } from "./Chatbot";
import { openWhatsApp } from "./whatsapp";

const BUBBLE_MESSAGES = [
  "🤖 Click Me!",
  "🤖 Ask Me Anything!",
  "🤖 Need Product Details?",
  "🤖 Want Pricing?",
  "🤖 Download Brochure",
];

export function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [bubble, setBubble] = useState<string | null>(null);
  const [bubbleIdx, setBubbleIdx] = useState(0);
  const [ripple, setRipple] = useState(false);

  // Cycle attention bubble every 15s, auto-hide after 4s
  useEffect(() => {
    if (open) {
      setBubble(null);
      return;
    }
    let hideT: ReturnType<typeof setTimeout>;
    const showT = setInterval(() => {
      if (document.hidden) return;
      setBubble(BUBBLE_MESSAGES[bubbleIdx % BUBBLE_MESSAGES.length]);
      setBubbleIdx((i) => i + 1);
      hideT = setTimeout(() => setBubble(null), 4000);
    }, 15000);
    return () => {
      clearInterval(showT);
      clearTimeout(hideT);
    };
  }, [open, bubbleIdx]);

  function handleWhatsApp() {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
    openWhatsApp(
      "Hi Secure Experts, I'd like to know more about your GPS tracking solutions.",
    );
  }

  return (
    <>
      <Chatbot open={open} onOpenChange={setOpen} />

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-5">
        {/* AI Chatbot FAB */}
        <div className="group relative">
          {/* Attention speech bubble */}
          {bubble && !open && (
            <div
              aria-hidden
              className="bubble-pop pointer-events-none absolute right-[68px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-2xl rounded-br-sm border border-white/70 bg-white/95 px-3.5 py-2 text-xs font-medium text-foreground shadow-[0_12px_30px_-12px_rgba(10,132,255,0.45)] backdrop-blur-xl"
            >
              {bubble}
              <span className="absolute right-[-5px] top-1/2 size-2.5 -translate-y-1/2 rotate-45 border-b border-r border-white/70 bg-white/95" />
            </div>
          )}

          {/* Hover tooltip */}
          <span className="pointer-events-none absolute right-[68px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground/90 px-3 py-1.5 text-[11px] font-medium text-background opacity-0 shadow-soft transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
            Ask our AI Assistant
          </span>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close assistant" : "Open Secure Experts AI assistant"}
            className="float-soft relative grid size-14 place-items-center rounded-full bg-gradient-to-br from-white to-[var(--tint-blue)] text-primary shadow-[0_18px_40px_-12px_rgba(10,132,255,0.45)] ring-1 ring-primary/15 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_22px_48px_-12px_rgba(10,132,255,0.65)] active:scale-95"
          >
            <span className="pulse-ring absolute inset-0 rounded-full" />
            {open ? (
              <X className="size-6" strokeWidth={2.2} />
            ) : (
              <Bot className="bot-wave size-6" strokeWidth={2.2} />
            )}
            {!open && (
              <span className="absolute right-1 top-1 size-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            )}
          </button>
        </div>

        {/* WhatsApp FAB */}
        <div className="group relative">
          <span className="pointer-events-none absolute right-[68px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground/90 px-3 py-1.5 text-[11px] font-medium text-background opacity-0 shadow-soft transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
            Chat on WhatsApp
          </span>

          <button
            type="button"
            onClick={handleWhatsApp}
            aria-label="Chat on WhatsApp"
            className="float-soft breathe-green relative grid size-14 place-items-center overflow-visible rounded-full text-white ring-1 ring-white/40 backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ backgroundColor: "#25D366" }}
          >
            {ripple && (
              <span
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  animation: "ripple-out 0.6s ease-out forwards",
                }}
              />
            )}
            <svg
              viewBox="0 0 32 32"
              className="relative size-7"
              fill="currentColor"
              aria-hidden
            >
              <path d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.47 1.73 6.41L3.2 28.8l6.55-1.71A12.78 12.78 0 0 0 16 28.8C23.07 28.8 28.8 23.07 28.8 16S23.07 3.2 16.001 3.2Zm0 23.2c-1.93 0-3.83-.52-5.49-1.5l-.39-.23-3.89 1.02 1.04-3.79-.25-.4A10.4 10.4 0 1 1 26.4 16c0 5.74-4.66 10.4-10.4 10.4Zm5.94-7.79c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.32-.83 1.06-1.02 1.28-.19.22-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.73-1.76-1-2.4-.27-.64-.54-.55-.73-.56l-.62-.01c-.21 0-.55.08-.83.4-.29.32-1.1 1.07-1.1 2.62 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.39 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.92-.78 2.19-1.54.27-.76.27-1.42.19-1.54-.08-.13-.29-.21-.61-.37Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}