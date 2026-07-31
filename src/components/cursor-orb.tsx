"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Desktop-only custom cursor: near-instant core + snappy glass ring.
 * Skipped on touch / reduced motion.
 */
export function CursorOrb() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Core tracks the pointer almost 1:1
  const coreX = useSpring(x, { stiffness: 2000, damping: 48, mass: 0.15 });
  const coreY = useSpring(y, { stiffness: 2000, damping: 48, mass: 0.15 });
  // Ring stays slightly behind, but still responsive
  const ringX = useSpring(x, { stiffness: 700, damping: 38, mass: 0.25 });
  const ringY = useSpring(y, { stiffness: 700, damping: 38, mass: 0.25 });

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
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/50 bg-accent/15 shadow-[0_0_20px_-4px_var(--glow-1)] backdrop-blur-[2px]"
        style={{ left: ringX, top: ringY }}
        animate={{
          width: hovering ? 40 : 26,
          height: hovering ? 40 : 26,
          opacity: hovering ? 1 : 0.75,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      />

      <motion.div
        className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference"
        style={{ left: coreX, top: coreY }}
        animate={{ scale: hovering ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </div>
  );
}
