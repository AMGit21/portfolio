/**
 * Fixed, lightweight page backdrop: subtle grid, two slow aurora
 * gradient blobs, and a faint noise texture. Pure CSS animations -
 * disabled automatically for prefers-reduced-motion.
 */
export function Backdrop() {
  return (
    <div
      aria-hidden
      className="noise pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black_35%,transparent_100%)]" />
      <div
        className="animate-aurora-1 absolute -top-40 left-[8%] h-[34rem] w-[34rem] rounded-full blur-[120px]"
        style={{ background: "var(--glow-1)" }}
      />
      <div
        className="animate-aurora-2 absolute top-[30%] right-[4%] h-[30rem] w-[30rem] rounded-full blur-[130px]"
        style={{ background: "var(--glow-2)" }}
      />
      <div
        className="animate-aurora-1 absolute bottom-[-12rem] left-[35%] h-[28rem] w-[28rem] rounded-full blur-[140px] opacity-70"
        style={{ background: "var(--glow-1)" }}
      />
    </div>
  );
}
