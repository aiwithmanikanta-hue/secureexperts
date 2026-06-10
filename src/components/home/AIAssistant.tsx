import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "user" | "ai"; text: string };

const INTRO: Msg = {
  role: "ai",
  text: "Hi, I'm Secure Experts AI. Ask me about the VLTDAIS140 — pricing, installation, comparison, or book a demo.",
};

const QUICK = [
  { label: "Product info", reply: "VLTDAIS140 is an Intelligent GPS Tracking System with ±2m accuracy, AES-256 security, 4G LTE connectivity, IP68 housing, and a 7-day backup battery. Built for fleets, personal vehicles, and asset tracking." },
  { label: "Pricing", reply: "We offer Starter, Business, and Enterprise plans. Pricing depends on devices and SLA. Tap 'Get a quote' below or reach us on WhatsApp at +91 73374 33351." },
  { label: "Installation", reply: "Most installations take under 15 minutes. Our certified partners handle it onsite across 50+ cities. Walk-throughs included for fleet ops teams." },
  { label: "Comparison", reply: "Vs generic GPS: ±2m vs 10–25m accuracy, 99.9% uptime vs frequent dropouts, AES-256 vs basic, 24/7 vs email-only support." },
  { label: "Book demo", reply: "I'll set you up. Share your name and city via the contact form below, or message us on WhatsApp — we typically respond in under 10 minutes." },
  { label: "Get a quote", reply: "Tell me the number of vehicles and your use case (fleet / personal / asset). I'll route it to our team for a same-day quote." },
];

function matchKeyword(text: string): string {
  const t = text.toLowerCase();
  if (/(price|cost|quote|pricing)/.test(t)) return QUICK[1].reply;
  if (/(install|setup|fit)/.test(t)) return QUICK[2].reply;
  if (/(compare|vs|difference|better)/.test(t)) return QUICK[3].reply;
  if (/(demo|book|trial)/.test(t)) return QUICK[4].reply;
  if (/(spec|feature|product|vltdais|gps|accuracy|battery)/.test(t)) return QUICK[0].reply;
  if (/(hello|hi|hey)/.test(t)) return "Hello! How can I help you with the VLTDAIS140 today?";
  return "Great question. For specifics, tap one of the quick options below or message us on WhatsApp at +91 73374 33351.";
}

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([INTRO]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, open]);

  const send = (text: string, canned?: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMsgs((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    const reply = canned ?? matchKeyword(trimmed);
    window.setTimeout(() => {
      setMsgs((m) => [...m, { role: "ai", text: reply }]);
      setTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Panel */}
      <div
        className={`origin-bottom-right transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        } absolute bottom-16 right-0 w-[min(94vw,380px)] h-[520px]`}
      >
        <div className="flex h-full flex-col rounded-3xl border border-border bg-background/85 backdrop-blur-2xl shadow-lift overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent">
            <div className="relative size-9 rounded-full bg-foreground text-background grid place-items-center">
              <Sparkles className="size-4" />
              <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold leading-tight">Secure Experts AI</div>
              <div className="text-[11px] text-muted-foreground">Online · usually replies instantly</div>
            </div>
            <button onClick={() => setOpen(false)} className="size-8 grid place-items-center rounded-full hover:bg-muted transition-colors" aria-label="Close">
              <X className="size-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] text-sm leading-relaxed px-3.5 py-2.5 rounded-2xl ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                  style={{ animation: "reveal-up 0.4s both" }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                  <span className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>

          {/* Quick chips */}
          <div className="px-3 pt-2 pb-2 flex flex-wrap gap-1.5 border-t border-border">
            {QUICK.map((q) => (
              <button
                key={q.label}
                onClick={() => send(q.label, q.reply)}
                className="text-[11px] px-2.5 py-1 rounded-full border border-border bg-background hover:bg-muted hover:border-primary/30 transition-colors"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            className="flex items-center gap-2 px-3 pb-3 pt-1"
            onSubmit={(e) => { e.preventDefault(); send(input); }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              className="flex-1 h-10 px-3.5 rounded-full bg-muted border border-transparent focus:border-primary/40 focus:bg-background outline-none text-sm transition-colors"
            />
            <button type="submit" className="size-10 grid place-items-center rounded-full bg-foreground text-background hover:scale-105 transition-transform" aria-label="Send">
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative size-14 rounded-full bg-foreground text-background grid place-items-center shadow-lift breathe-glow hover:scale-105 transition-transform"
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
        {!open && <span className="absolute top-1 right-1 size-2.5 rounded-full bg-emerald-500 ring-2 ring-background animate-pulse" />}
      </button>
    </div>
  );
}