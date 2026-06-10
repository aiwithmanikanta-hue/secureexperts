import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const KEY = "se_intro_shown";

export function IntroOverlay() {
  const [shown, setShown] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem(KEY, "1");
      return;
    }
    setShown(true);
    const t1 = window.setTimeout(() => setFade(true), 1100);
    const t2 = window.setTimeout(() => {
      setShown(false);
      sessionStorage.setItem(KEY, "1");
    }, 1700);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (!shown) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        fade ? "opacity-0 scale-[1.04] pointer-events-none" : "opacity-100"
      }`}
      aria-hidden
    >
      <div
        className="flex flex-col items-center gap-3"
        style={{ animation: "reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <Logo
          priority
          className="h-24 md:h-32 w-auto logo-glow"
        />
      </div>
    </div>
  );
}