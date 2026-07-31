"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Desktop-only custom cursor: a tight core + lagging glass ring
 * that grows over interactive targets. Skipped on touch / reduced motion.
 */
export function CursorOrb() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const coreX = useSpring(x, { stiffness: 520, damping: 36, mass: 0.35 });
  const coreY = useSpring(y, { stiffness: 520, damping: 36, mass: 0.35 });
  const ringX = useSpring(x, { stiffness: 140, damping: 22, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 140, damping: 22, mass: 0.55 });
  const trailX = useSpring(x, { stiffness: 70, damping: 18, mass: 0.7 });
  const trailY = useSpring(y, { stiffness: 70, damping: 18, mass: 0.7 });

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

      {/* Glass ring that lags and scales on interactive targets */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40 bg-accent/10 shadow-[0_0_24px_-6px_var(--glow-1)] backdrop-blur-[2px]"
        style={{ left: ringX, top: ringY }}
        animate={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          opacity: hovering ? 0.95 : 0.7,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />

      {/* Core dot */}
      <motion.div
        className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference"
        style={{ left: coreX, top: coreY }}
        animate={{ scale: hovering ? 0.55 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
}
