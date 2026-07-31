"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Desktop-only custom cursor: core + lagging glass ring (+ soft trail).
 * Snappy springs so it feels responsive. Skipped on touch / reduced motion.
 */
export function CursorOrb() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Fast core (almost locked to pointer)
  const coreX = useSpring(x, { stiffness: 1800, damping: 42, mass: 0.18 });
  const coreY = useSpring(y, { stiffness: 1800, damping: 42, mass: 0.18 });
  // Outer circle: slight lag, still quick
  const ringX = useSpring(x, { stiffness: 650, damping: 34, mass: 0.28 });
  const ringY = useSpring(y, { stiffness: 650, damping: 34, mass: 0.28 });
  // Soft glow trail: a bit more lag for depth
  const trailX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.35 });
  const trailY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.35 });

  useEffect(() => {
    if (reduceMotion) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    setEnabled(true);
    document.documentElement.classList.add("has-cursor-orb");

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role='button'], input, textarea, label, summary",
      );
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("has-cursor-orb");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Soft trailing glow */}
      <motion.div
        className="absolute size-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: trailX,
          top: trailY,
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 35%, transparent), transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      {/* Outer glass circle */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40 bg-accent/10 shadow-[0_0_24px_-6px_var(--glow-1)] backdrop-blur-[2px]"
        style={{ left: ringX, top: ringY }}
        animate={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          opacity: hovering ? 0.95 : 0.7,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      />

      {/* Inner core */}
      <motion.div
        className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference"
        style={{ left: coreX, top: coreY }}
        animate={{ scale: hovering ? 0.55 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </div>
  );
}
