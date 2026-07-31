"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Futuristic dual-ring cursor:
 * - Core follows the pointer almost instantly
 * - Outer ring trails a bit for separation / depth
 */
export function CursorOrb() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Core = raw pointer (no lag)
  // Outer ring lags for clear separation
  const ringX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.5 });
  // Aura lags a bit more
  const auraX = useSpring(x, { stiffness: 140, damping: 20, mass: 0.6 });
  const auraY = useSpring(y, { stiffness: 140, damping: 20, mass: 0.6 });

  const coreLeft = useMotionTemplate`${x}px`;
  const coreTop = useMotionTemplate`${y}px`;
  const ringLeft = useMotionTemplate`${ringX}px`;
  const ringTop = useMotionTemplate`${ringY}px`;
  const auraLeft = useMotionTemplate`${auraX}px`;
  const auraTop = useMotionTemplate`${auraY}px`;

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
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.15s ease" }}
    >
      {/* Trailing aura */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: auraLeft,
          top: auraTop,
          width: hovering ? 56 : 42,
          height: hovering ? 56 : 42,
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 40%, transparent) 0%, color-mix(in oklab, var(--accent-2) 18%, transparent) 42%, transparent 70%)",
          filter: "blur(6px)",
          opacity: hovering ? 0.9 : 0.55,
        }}
      />

      {/* Outer futuristic ring */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: ringLeft,
          top: ringTop,
          width: hovering ? 48 : 34,
          height: hovering ? 48 : 34,
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--accent) 35%, transparent), color-mix(in oklab, var(--accent-2) 28%, transparent))",
          padding: 1.5,
          boxShadow:
            "0 0 0 1px color-mix(in oklab, var(--accent) 25%, transparent), 0 0 22px -4px var(--glow-1)",
        }}
      >
        <div
          className="size-full rounded-full"
          style={{
            background: "color-mix(in oklab, var(--background) 55%, transparent)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid color-mix(in oklab, var(--accent) 35%, transparent)",
          }}
        />
      </motion.div>

      {/* Crosshair ticks on the ring (futuristic detail) */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          left: ringLeft,
          top: ringTop,
          width: hovering ? 48 : 34,
          height: hovering ? 48 : 34,
        }}
      >
        <span className="absolute top-0 left-1/2 h-1.5 w-px -translate-x-1/2 bg-accent/80" />
        <span className="absolute bottom-0 left-1/2 h-1.5 w-px -translate-x-1/2 bg-accent/80" />
        <span className="absolute top-1/2 left-0 h-px w-1.5 -translate-y-1/2 bg-accent/80" />
        <span className="absolute top-1/2 right-0 h-px w-1.5 -translate-y-1/2 bg-accent/80" />
      </motion.div>

      {/* Instant core */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: coreLeft,
          top: coreTop,
          width: hovering ? 6 : 8,
          height: hovering ? 6 : 8,
          background:
            "linear-gradient(135deg, var(--accent), var(--accent-2))",
          boxShadow:
            "0 0 0 2px color-mix(in oklab, var(--background) 70%, transparent), 0 0 14px var(--glow-1)",
        }}
      />
    </div>
  );
}
