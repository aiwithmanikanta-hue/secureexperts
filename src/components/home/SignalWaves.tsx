/**
 * Concentric GPS signal rings. Sits behind the hero device.
 * Pure CSS, very low opacity, slow loop.
 */
export function SignalWaves() {
  return (
    <div className="pointer-events-none absolute inset-0 grid place-items-center -z-10" aria-hidden>
      <div className="relative size-[420px]">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute inset-0 m-auto rounded-full border border-primary/30"
            style={{
              animation: `signal-wave 5s ease-out ${i * 1.6}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}