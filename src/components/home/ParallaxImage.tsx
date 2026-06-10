import { useEffect, useRef, type ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  scaleFrom?: number;
  scaleTo?: number;
  wrapperClassName?: string;
};

export function ParallaxImage({
  scaleFrom = 1.0,
  scaleTo = 1.06,
  className = "",
  wrapperClassName = "",
  ...imgProps
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = wrap.getBoundingClientRect();
        const vh = window.innerHeight;
        // progress: 0 when section enters from bottom, 1 when it leaves top
        const p = Math.min(1, Math.max(0, 1 - (r.top + r.height * 0.3) / vh));
        const scale = scaleFrom + (scaleTo - scaleFrom) * p;
        img.style.transform = `scale(${scale.toFixed(4)})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scaleFrom, scaleTo]);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden group ${wrapperClassName}`}>
      <img
        ref={imgRef}
        {...imgProps}
        className={`will-change-transform transition-transform duration-700 ease-out ${className}`}
      />
      {/* one-time light sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-15deg] transition-transform duration-[1200ms] ease-out group-hover:translate-x-[300%]"
      />
    </div>
  );
}