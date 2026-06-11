import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  X,
  Send,
  Sparkles,
  Phone,
  Download,
  FileText,
  Package,
  DollarSign,
  Rocket,
  HelpCircle,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { heroDevice as productImg, logo as logoUrl } from "@/assets";
import { submitLead } from "@/lib/leads.functions";
import { buildLeadMessage, openWhatsApp } from "./whatsapp";
import { answerFaq } from "./FaqEngine";

type Msg = {
  id: string;
  role: "bot" | "user";
  content: ReactNode;
};

type Flow =
  | { kind: "idle" }
  | { kind: "faq" }
  | { kind: "lead"; purpose: "pricing" | "demo"; step: 0 | 1 | 2 | 3; data: LeadData };

type LeadData = { name: string; phone: string; city: string; requirement: string };

const uid = () => Math.random().toString(36).slice(2);

export function Chatbot({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const setOpen = onOpenChange;
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [flow, setFlow] = useState<Flow>({ kind: "idle" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitLeadFn = useServerFn(submitLead);

  // greet on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      pushBot(<WelcomeMessage />);
      setTimeout(() => pushBot(<QuickActions onPick={handleQuickAction} />), 400);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  function pushBot(node: ReactNode) {
    setMessages((m) => [...m, { id: uid(), role: "bot", content: node }]);
  }
  function pushUser(text: string) {
    setMessages((m) => [...m, { id: uid(), role: "user", content: text }]);
  }
  async function botSay(node: ReactNode, delay = 600) {
    setTyping(true);
    await new Promise((r) => setTimeout(r, delay));
    setTyping(false);
    pushBot(node);
  }

  function handleQuickAction(key: QuickKey) {
    pushUser(QUICK_LABELS[key]);
    switch (key) {
      case "product":
        botSay(<ProductCard onAction={handleProductAction} />);
        break;
      case "brochure":
        botSay(<BrochureCard />);
        break;
      case "pricing":
        setFlow({ kind: "lead", purpose: "pricing", step: 0, data: emptyLead() });
        botSay(
          <p>
            To share the best pricing, may I have your <strong>full name</strong>?
          </p>,
        );
        break;
      case "demo":
        setFlow({ kind: "lead", purpose: "demo", step: 0, data: emptyLead() });
        botSay(
          <p>
            Happy to arrange a demo. What's your <strong>full name</strong>?
          </p>,
        );
        break;
      case "whatsapp":
        openWhatsApp("Hi Secure Experts, I'd like to know more about the VLTDAIS140.");
        botSay(<p>Opening WhatsApp for you…</p>, 200);
        break;
      case "faq":
        setFlow({ kind: "faq" });
        botSay(<p>Sure — what would you like to know? Type your question below.</p>);
        break;
    }
  }

  function handleProductAction(a: "flyer" | "brochure" | "expert") {
    if (a === "flyer") {
      pushUser("View Flyer");
      botSay(<BrochureCard />);
    } else if (a === "brochure") {
      pushUser("Download Brochure");
      botSay(<BrochureCard download />);
    } else {
      pushUser("Contact Expert");
      openWhatsApp("Hi Secure Experts, I'd like to speak to an expert about VLTDAIS140.");
      botSay(<p>Connecting you with our expert on WhatsApp…</p>, 200);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    pushUser(text);

    if (flow.kind === "lead") {
      const next = { ...flow.data };
      const purpose = flow.purpose;
      const isDemo = purpose === "demo";
      const steps: readonly ("name" | "phone" | "city" | "requirement")[] = isDemo
        ? (["name", "phone", "city"] as const)
        : (["name", "phone", "city", "requirement"] as const);
      const fieldKey = steps[flow.step] ?? "requirement";
      (next as Record<string, string>)[fieldKey] = text;

      if (flow.step < steps.length - 1) {
        const nextStep = (flow.step + 1) as 0 | 1 | 2 | 3;
        setFlow({ kind: "lead", purpose, step: nextStep, data: next });
        const prompts: Record<string, ReactNode> = {
          phone: <p>Thanks {next.name}! Your <strong>mobile number</strong>?</p>,
          city: <p>Which <strong>city</strong> are you in?</p>,
          requirement: <p>How many units / what's your <strong>requirement</strong>?</p>,
        };
        const nextKey = steps[nextStep] ?? "requirement";
        botSay(prompts[nextKey]);
      } else {
        setFlow({ kind: "idle" });
        setTyping(true);
        try {
          await submitLeadFn({
            data: {
              name: next.name,
              phone: next.phone,
              city: next.city,
              requirement: isDemo ? "Demo request" : next.requirement || "Pricing enquiry",
              source: isDemo ? "chatbot-demo" : "chatbot-pricing",
            },
          });
        } catch (err) {
          console.error(err);
        }
        setTyping(false);
        pushBot(
          <div className="space-y-2">
            <p className="flex items-center gap-2 font-medium text-foreground">
              <CheckCircle2 className="size-4 text-primary" />
              Thank you, {next.name}.
            </p>
            <p>Our team will contact you shortly. Opening WhatsApp with your details…</p>
          </div>,
        );
        openWhatsApp(
          buildLeadMessage({
            name: next.name,
            phone: next.phone,
            city: next.city,
            requirement: isDemo ? "Demo request" : next.requirement || "Pricing enquiry",
          }),
        );
        setTimeout(() => pushBot(<QuickActions onPick={handleQuickAction} />), 800);
      }
      return;
    }

    // free-form / FAQ
    const { answer, matched } = answerFaq(text);
    await botSay(<p>{answer}</p>);
    if (!matched) {
      botSay(<EscalationButtons />);
    }
  }

  return (
    <>
      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-4 z-50 flex w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/85 shadow-lift backdrop-blur-2xl sm:right-6"
          style={{
            height: "min(620px, calc(100vh - 8rem))",
            animation: "scale-in 0.3s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Header */}
          <div className="relative flex items-center gap-3 border-b border-border/60 bg-gradient-to-br from-white to-[var(--tint-sky)] px-4 py-3.5">
            <div className="relative grid size-10 place-items-center rounded-2xl bg-white ring-1 ring-primary/15 shadow-soft overflow-hidden">
              <img
                src={logoUrl}
                alt="Secure Experts"
                className="size-9 object-contain"
                draggable={false}
              />
              <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-white bg-emerald-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">Secure Experts AI</p>
              <p className="text-[11px] text-muted-foreground">Product Expert · Online</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m) => (
              <MessageBubble key={m.id} role={m.role}>
                {m.content}
              </MessageBubble>
            ))}
            {typing && <TypingIndicator />}
          </div>

          {/* Composer */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border/60 bg-white/70 px-3 py-2.5 backdrop-blur"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={flow.kind === "lead" ? "Type your answer…" : "Ask a question…"}
              className="flex-1 rounded-full border border-border bg-secondary/70 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              aria-label="Send"
              className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
              disabled={!input.trim()}
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

/* ---------------- subcomponents ---------------- */

function MessageBubble({ role, children }: { role: "bot" | "user"; children: ReactNode }) {
  const isUser = role === "user";
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
      style={{ animation: "fade-in 0.35s cubic-bezier(0.16,1,0.3,1)" }}
    >
      <div
        className={
          isUser
            ? "max-w-[85%] rounded-2xl rounded-br-md bg-primary px-3.5 py-2 text-sm leading-relaxed text-primary-foreground shadow-soft"
            : "max-w-[90%] rounded-2xl rounded-bl-md border border-border/70 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-foreground shadow-soft"
        }
      >
        {children}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-border/70 bg-white px-3.5 py-3 shadow-soft">
        {[0, 150, 300].map((d) => (
          <span
            key={d}
            className="size-1.5 rounded-full bg-muted-foreground/60"
            style={{ animation: `soft-pulse 1.2s ease-in-out ${d}ms infinite` }}
          />
        ))}
      </div>
    </div>
  );
}

function WelcomeMessage() {
  return (
    <div className="space-y-2">
      <p className="font-medium text-foreground">👋 Welcome to Secure Experts.</p>
      <p className="text-muted-foreground">I can help you with:</p>
      <ul className="ml-4 list-disc space-y-0.5 text-muted-foreground">
        <li>Product Information</li>
        <li>Product Brochure</li>
        <li>Pricing Details</li>
        <li>Installation Support</li>
        <li>Demo Request</li>
        <li>Talk to an Expert</li>
      </ul>
      <p className="pt-1 text-foreground">How can I assist you today?</p>
    </div>
  );
}

type QuickKey = "product" | "brochure" | "pricing" | "demo" | "whatsapp" | "faq";
const QUICK_LABELS: Record<QuickKey, string> = {
  product: "📦 View Product",
  brochure: "📄 Download Brochure",
  pricing: "💰 Pricing Details",
  demo: "🚀 Request Demo",
  whatsapp: "📱 Talk on WhatsApp",
  faq: "❓ Ask a Question",
};

function QuickActions({ onPick }: { onPick: (k: QuickKey) => void }) {
  const items: { key: QuickKey; Icon: typeof Package }[] = [
    { key: "product", Icon: Package },
    { key: "brochure", Icon: FileText },
    { key: "pricing", Icon: DollarSign },
    { key: "demo", Icon: Rocket },
    { key: "whatsapp", Icon: Phone },
    { key: "faq", Icon: HelpCircle },
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map(({ key, Icon }) => (
        <button
          key={key}
          onClick={() => onPick(key)}
          className="group flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 text-left text-[12.5px] font-medium text-foreground transition-all hover:border-primary/30 hover:bg-[var(--tint-sky)] hover:shadow-soft"
        >
          <Icon className="size-4 text-primary transition-transform group-hover:scale-110" />
          <span className="truncate">{QUICK_LABELS[key].replace(/^\S+\s/, "")}</span>
        </button>
      ))}
    </div>
  );
}

function ProductCard({
  onAction,
}: {
  onAction: (a: "flyer" | "brochure" | "expert") => void;
}) {
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-xl border border-border bg-gradient-to-br from-[var(--tint-sky)] to-white">
        <img src={productImg} alt="VLTDAIS140 intelligent GPS tracking system" className="mx-auto h-32 w-auto object-contain" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">VLTDAIS140</p>
        <p className="font-semibold text-foreground">Intelligent GPS Tracking System</p>
      </div>
      <p className="text-muted-foreground">
        Advanced GPS tracking for real-time visibility, intelligent monitoring and complete vehicle
        security.
      </p>
      <ul className="space-y-1">
        {[
          { I: MapPin, t: "Real-Time GPS Tracking" },
          { I: Zap, t: "Instant Alerts" },
          { I: ShieldCheck, t: "Route Monitoring" },
          { I: CheckCircle2, t: "Easy Installation" },
          { I: CheckCircle2, t: "Reliable Performance" },
        ].map(({ I, t }) => (
          <li key={t} className="flex items-center gap-2 text-foreground">
            <I className="size-3.5 text-primary" /> {t}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 pt-1">
        <ChipBtn onClick={() => onAction("flyer")} icon={<FileText className="size-3.5" />}>
          View Flyer
        </ChipBtn>
        <ChipBtn onClick={() => onAction("brochure")} icon={<Download className="size-3.5" />}>
          Brochure
        </ChipBtn>
        <ChipBtn onClick={() => onAction("expert")} icon={<Phone className="size-3.5" />} primary>
          Contact Expert
        </ChipBtn>
      </div>
    </div>
  );
}

function BrochureCard({ download = false }: { download?: boolean }) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="aspect-[3/4] overflow-hidden rounded-lg border border-border bg-gradient-to-br from-[var(--tint-blue)] to-white p-3">
          <img src={productImg} alt="VLTDAIS140 product brochure preview" className="h-full w-full object-contain" />
        </div>
        <div className="space-y-2">
          <div className="aspect-square overflow-hidden rounded-lg border border-border bg-gradient-to-br from-white to-[var(--tint-sky)] p-2">
            <img src={productImg} alt="VLTDAIS140 product gallery image" className="h-full w-full object-contain" />
          </div>
          <div className="rounded-lg border border-border bg-white p-2 text-[11px] leading-snug">
            <p className="font-semibold text-foreground">Specs</p>
            <p className="text-muted-foreground">48×32×14mm · 9–36V</p>
            <p className="text-muted-foreground">AES-256 · 4G/LTE</p>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground">
        {download
          ? "Tap below to download the full product brochure."
          : "Here's the product flyer with gallery and key specifications."}
      </p>
      <div className="flex flex-wrap gap-1.5">
        <ChipBtn
          onClick={() => alert("Brochure PDF will be available shortly.")}
          icon={<Download className="size-3.5" />}
          primary
        >
          Download PDF
        </ChipBtn>
        <ChipBtn
          onClick={() =>
            openWhatsApp("Hi Secure Experts, please send me the VLTDAIS140 brochure.")
          }
          icon={<Phone className="size-3.5" />}
        >
          WhatsApp Expert
        </ChipBtn>
      </div>
    </div>
  );
}

function EscalationButtons() {
  return (
    <div className="space-y-2">
      <p>Would you like to speak with a Secure Experts specialist?</p>
      <div className="flex flex-wrap gap-1.5">
        <ChipBtn
          onClick={() => openWhatsApp("Hi Secure Experts, I'd like to speak to a specialist.")}
          icon={<Phone className="size-3.5" />}
          primary
        >
          WhatsApp Expert
        </ChipBtn>
        <ChipBtn
          onClick={() =>
            openWhatsApp("Hi Secure Experts, please call me back regarding VLTDAIS140.")
          }
          icon={<Phone className="size-3.5" />}
        >
          Request Callback
        </ChipBtn>
      </div>
    </div>
  );
}

function ChipBtn({
  children,
  onClick,
  icon,
  primary,
}: {
  children: ReactNode;
  onClick: () => void;
  icon?: ReactNode;
  primary?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={
        primary
          ? "inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[12px] font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift active:scale-95"
          : "inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-[12px] font-medium text-foreground transition-all hover:border-primary/40 hover:bg-[var(--tint-sky)] active:scale-95"
      }
    >
      {icon}
      {children}
    </button>
  );
}

function emptyLead(): LeadData {
  return { name: "", phone: "", city: "", requirement: "" };
}