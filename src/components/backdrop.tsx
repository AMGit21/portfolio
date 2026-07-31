/**
 * Fixed, lightweight page backdrop: subtle grid, two slow aurora
 * gradient blobs, and a faint noise texture. Pure CSS animations -
 * disabled automatically for prefers-reduced-motion.
 */
export function Backdrop() {
  return (
    <div
      aria-hidden
      className="noise pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black_35%,transparent_100%)]" />
      <div
        className="animate-aurora-1 absolute -top-40 left-[8%] h-[36rem] w-[36rem] rounded-full opacity-90 blur-[110px]"
        style={{ background: "var(--glow-1)" }}
      />
      <div
        className="animate-aurora-2 absolute top-[28%] right-[2%] h-[32rem] w-[32rem] rounded-full opacity-85 blur-[120px]"
        style={{ background: "var(--glow-2)" }}
      />
      <div
        className="animate-aurora-1 absolute bottom-[-10rem] left-[32%] h-[30rem] w-[30rem] rounded-full opacity-75 blur-[130px]"
        style={{ background: "var(--glow-1)" }}
      />
    </div>
  );
}
