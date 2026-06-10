import { useEffect, useRef } from "react";

/**
 * Magnetic cursor attraction. Translates element toward cursor when nearby.
 * strength — max translation in px (default 8). radius — activation radius in px.
 */
export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>(
  strength = 8,
  radius = 120,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;

    const apply = () => {
      raf = 0;
      el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
    };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) {
        if (tx !== 0 || ty !== 0) {
          tx = 0;
          ty = 0;
          if (!raf) raf = requestAnimationFrame(apply);
        }
        return;
      }
      const falloff = 1 - dist / radius;
      tx = (dx / radius) * strength * falloff * 2;
      ty = (dy / radius) * strength * falloff * 2;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength, radius]);

  return ref;
}