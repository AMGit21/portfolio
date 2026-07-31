"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Performant futuristic cursor:
 * - GPU transforms (not left/top layout)
 * - One spring for the trailing ring
 * - CSS spin instead of JS infinite rotate
 */
export function CursorOrb() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 28, mass: 0.35 });
  const ringY = useSpring(y, { stiffness: 380, damping: 28, mass: 0.35 });

  useEffect(() => {
    if (reduceMotion) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    setEnabled(true);
    document.documentElement.classList.add("has-cursor-orb");

    let shown = false;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      if (!shown) {
        shown = true;
        setVisible(true);
      }

      const el = event.target as HTMLElement | null;
      const next = Boolean(
        el?.closest("a, button, [role='button'], input, textarea, label, summary"),
      );
      setHovering((prev) => (prev === next ? prev : next));
    };

    const onLeave = () => {
      shown = false;
      setVisible(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("has-cursor-orb");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 120ms linear" }}
    >
      <motion.div
        className="fixed top-0 left-0 will-change-transform"
        style={{ x: ringX, y: ringY }}
        transformTemplate={({ x: tx, y: ty }) =>
          `translate3d(calc(${tx} - 50%), calc(${ty} - 50%), 0)`
        }
      >
        <div
          className={`relative rounded-full ${hovering ? "cursor-spin-fast" : "cursor-spin"}`}
          style={{
            width: hovering ? 48 : 34,
            height: hovering ? 48 : 34,
            background:
              "conic-gradient(from 0deg, transparent 0deg, var(--accent) 80deg, transparent 130deg, var(--accent-2) 230deg, transparent 290deg)",
            padding: 1.5,
            boxShadow: hovering
              ? "0 0 24px -6px var(--glow-1)"
              : "0 0 14px -6px var(--glow-1)",
            transition:
              "width 160ms ease, height 160ms ease, box-shadow 160ms ease",
          }}
        >
          <div
            className="size-full rounded-full border border-accent/30"
            style={{
              background:
                "color-mix(in oklab, var(--background) 72%, transparent)",
            }}
          />
        </div>

        <span className="absolute top-0 left-0 size-1.5 border-t border-l border-accent/80" />
        <span className="absolute top-0 right-0 size-1.5 border-t border-r border-accent/80" />
        <span className="absolute bottom-0 left-0 size-1.5 border-b border-l border-accent-2/80" />
        <span className="absolute right-0 bottom-0 size-1.5 border-r border-b border-accent-2/80" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 will-change-transform"
        style={{ x, y }}
        transformTemplate={({ x: tx, y: ty }) =>
          `translate3d(calc(${tx} - 50%), calc(${ty} - 50%), 0)`
        }
      >
        <div
          className="rounded-full"
          style={{
            width: hovering ? 5 : 7,
            height: hovering ? 5 : 7,
            background:
              "linear-gradient(135deg, var(--accent), var(--accent-2))",
            boxShadow:
              "0 0 0 2px color-mix(in oklab, var(--background) 75%, transparent), 0 0 12px var(--glow-1)",
            transition: "width 140ms ease, height 140ms ease",
          }}
        />
      </motion.div>
    </div>
  );
}
