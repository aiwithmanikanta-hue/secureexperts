import { type HTMLAttributes, type ReactNode } from "react";
import { useReveal } from "./useReveal";

type Props = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  as?: "div" | "li" | "section" | "article";
  children: ReactNode;
};

export function RevealOnScroll({
  delay = 0,
  className = "",
  children,
  style,
  ...rest
}: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}