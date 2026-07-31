"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Sparkles,
  Terminal,
} from "lucide-react";

const icons = [
  { Icon: Brain, className: "top-[14%] left-[6%]", duration: 18, delay: 0 },
  { Icon: Code2, className: "top-[28%] right-[8%]", duration: 22, delay: 1.2 },
  { Icon: Database, className: "top-[58%] left-[4%]", duration: 20, delay: 0.6 },
  { Icon: Cpu, className: "top-[68%] right-[10%]", duration: 24, delay: 2 },
  { Icon: Terminal, className: "top-[42%] left-[12%]", duration: 19, delay: 1.5 },
  { Icon: Cloud, className: "top-[18%] right-[18%]", duration: 21, delay: 0.4 },
  { Icon: GitBranch, className: "bottom-[16%] left-[18%]", duration: 23, delay: 1.8 },
  { Icon: Sparkles, className: "bottom-[22%] right-[16%]", duration: 17, delay: 0.9 },
] as const;

/** Quiet floating tech marks in the page background. */
export function FloatingIcons() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden"
    >
      {icons.map(({ Icon, className, duration, delay }, index) => (
        <motion.span
          key={index}
          className={`absolute flex size-11 items-center justify-center rounded-2xl border border-line/70 bg-surface/50 text-faint shadow-sm backdrop-blur-md dark:bg-surface/30 ${className}`}
          initial={{ opacity: 0, y: 8 }}
          animate={
            reduceMotion
              ? { opacity: 0.28, y: 0 }
              : {
                  opacity: [0.18, 0.34, 0.18],
                  y: [0, -14, 0],
                  rotate: [-3, 3, -3],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0.4 }
              : {
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          <Icon className="size-4 opacity-80" strokeWidth={1.6} />
        </motion.span>
      ))}
    </div>
  );
}
