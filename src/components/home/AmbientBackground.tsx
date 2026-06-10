/**
 * Global ambient background. Two huge slow-drifting blurred blobs.
 * Mounted once in Home.tsx, fixed and behind everything.
 */
export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden" aria-hidden>
      <div
        className="absolute -top-[10%] -left-[10%] size-[60vw] rounded-full bg-primary/8 blur-[140px]"
        style={{ animation: "aurora-drift 28s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[40%] -right-[15%] size-[55vw] rounded-full bg-sky-300/15 blur-[160px]"
        style={{ animation: "aurora-drift 36s ease-in-out -12s infinite reverse" }}
      />
      <div
        className="absolute -bottom-[10%] left-[20%] size-[45vw] rounded-full bg-indigo-300/10 blur-[140px]"
        style={{ animation: "aurora-drift 32s ease-in-out -6s infinite" }}
      />
    </div>
  );
}