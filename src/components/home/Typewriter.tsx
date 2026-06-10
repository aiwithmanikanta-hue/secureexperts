import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
  className?: string;
};

export function Typewriter({
  phrases,
  typeMs = 55,
  deleteMs = 28,
  holdMs = 1800,
  className = "",
}: Props) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(phrases[0] ?? "");
      return;
    }
    const current = phrases[i % phrases.length] ?? "";
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((p) => (p + 1) % phrases.length);
      return;
    }
    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
        );
      },
      deleting ? deleteMs : typeMs,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, phrases, typeMs, deleteMs, holdMs]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span
        aria-hidden
        className="inline-block w-[2px] h-[0.9em] align-[-0.1em] ml-1 bg-primary"
        style={{ animation: "blink 1s steps(1) infinite" }}
      />
    </span>
  );
}