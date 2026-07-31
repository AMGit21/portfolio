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
 * Futuristic cursor: instant core, lagged HUD ring, soft trail dots.
 */
export function CursorOrb() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 240, damping: 20, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 240, damping: 20, mass: 0.55 });
  const midX = useSpring(x, { stiffness: 420, damping: 26, mass: 0.35 });
  const midY = useSpring(y, { stiffness: 420, damping: 26, mass: 0.35 });
  const trailX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.7 });
  const trailY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.7 });

  const coreLeft = useMotionTemplate`${x}px`;
  const coreTop = useMotionTemplate`${y}px`;
  const ringLeft = useMotionTemplate`${ringX}px`;
  const ringTop = useMotionTemplate`${ringY}px`;
  const midLeft = useMotionTemplate`${midX}px`;
  const midTop = useMotionTemplate`${midY}px`;
  const trailLeft = useMotionTemplate`${trailX}px`;
  const trailTop = useMotionTemplate`${trailY}px`;

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

  const ringSize = hovering ? 52 : 36;
  const midSize = hovering ? 22 : 16;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.15s ease" }}
    >
      {/* Soft comet trail */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: trailLeft,
          top: trailTop,
          width: hovering ? 64 : 48,
          height: hovering ? 64 : 48,
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 35%, transparent) 0%, color-mix(in oklab, var(--accent-2) 16%, transparent) 40%, transparent 72%)",
          filter: "blur(8px)",
          opacity: hovering ? 0.85 : 0.45,
        }}
      />

      {/* Outer HUD ring (rotates slowly) */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: ringLeft, top: ringTop, width: ringSize, height: ringSize }}
      >
        <motion.div
          className="size-full rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: hovering ? 4 : 8, ease: "linear", repeat: Infinity }}
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, var(--accent) 70deg, transparent 120deg, var(--accent-2) 220deg, transparent 280deg)",
            padding: 1.5,
            borderRadius: "9999px",
            boxShadow: hovering
              ? "0 0 28px -4px var(--glow-1), 0 0 40px -10px var(--glow-2)"
              : "0 0 18px -6px var(--glow-1)",
          }}
        >
          <div
            className="size-full rounded-full"
            style={{
              background:
                "color-mix(in oklab, var(--background) 70%, transparent)",
              border:
                "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
            }}
          />
        </motion.div>

        {/* Corner brackets */}
        <span className="absolute top-0 left-0 size-2 border-t border-l border-accent/80" />
        <span className="absolute top-0 right-0 size-2 border-t border-r border-accent/80" />
        <span className="absolute bottom-0 left-0 size-2 border-b border-l border-accent-2/80" />
        <span className="absolute right-0 bottom-0 size-2 border-r border-b border-accent-2/80" />
      </motion.div>

      {/* Mid dashed ring */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/45"
        style={{
          left: midLeft,
          top: midTop,
          width: midSize,
          height: midSize,
          boxShadow: "0 0 12px -4px var(--glow-1)",
        }}
        animate={{ rotate: hovering ? -360 : 0 }}
        transition={{
          duration: 3.5,
          ease: "linear",
          repeat: hovering ? Infinity : 0,
        }}
      />

      {/* Core diamond / dot */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: coreLeft, top: coreTop }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: hovering ? 5 : 7,
            height: hovering ? 5 : 7,
            borderRadius: hovering ? 2 : 999,
          }}
          transition={{ type: "spring", stiffness: 420, damping: 26 }}
          style={{
            background:
              "linear-gradient(135deg, var(--accent), var(--accent-2))",
            boxShadow:
              "0 0 0 2px color-mix(in oklab, var(--background) 75%, transparent), 0 0 16px var(--glow-1), 0 0 28px var(--glow-2)",
          }}
        />
      </motion.div>
    </div>
  );
}
