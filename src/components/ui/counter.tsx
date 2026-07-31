"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

/** Animated count-up that starts when scrolled into view. */
export function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;

    if (reduceMotion) {
      node.textContent = `${value}${suffix}`;
      return;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [inView, value, suffix, reduceMotion]);

  return (
    <span ref={ref} className={className} aria-label={`${value}${suffix}`}>
      0{suffix}
    </span>
  );
}
