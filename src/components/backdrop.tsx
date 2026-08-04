/**
 * Fixed, lightweight page backdrop: subtle grid + two soft aurora blobs.
 * Blur radii kept moderate for paint cost on hard refresh.
 */
export function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black_35%,transparent_100%)]" />
      <div
        className="animate-aurora-1 absolute -top-32 left-[10%] h-[28rem] w-[28rem] rounded-full opacity-80 blur-[64px]"
        style={{ background: "var(--glow-1)" }}
      />
      <div
        className="animate-aurora-2 absolute top-[36%] right-[4%] h-[24rem] w-[24rem] rounded-full opacity-75 blur-[72px]"
        style={{ background: "var(--glow-2)" }}
      />
    </div>
  );
}
