"use client";

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
  {
    Icon: Brain,
    style: { top: "10%", left: "2%" },
    delay: "0s",
    duration: "14s",
    motion: "a",
  },
  {
    Icon: Code2,
    style: { top: "18%", right: "2%" },
    delay: "1.2s",
    duration: "16s",
    motion: "b",
  },
  {
    Icon: Cloud,
    style: { top: "38%", left: "1.5%" },
    delay: "0.5s",
    duration: "18s",
    motion: "c",
  },
  {
    Icon: Database,
    style: { top: "52%", right: "1.5%" },
    delay: "2s",
    duration: "15s",
    motion: "a",
  },
  {
    Icon: Cpu,
    style: { top: "72%", left: "3%" },
    delay: "0.9s",
    duration: "17s",
    motion: "b",
  },
  {
    Icon: Terminal,
    style: { top: "78%", right: "3%" },
    delay: "1.6s",
    duration: "13s",
    motion: "c",
  },
  {
    Icon: GitBranch,
    style: { top: "44%", right: "4%" },
    delay: "2.4s",
    duration: "19s",
    motion: "a",
  },
  {
    Icon: Sparkles,
    style: { top: "28%", left: "4%" },
    delay: "1s",
    duration: "12s",
    motion: "b",
  },
] as const;

/** Edge-only floating tech marks — never sit under the main text column. */
export function FloatingIcons() {
  return (
    <div
      aria-hidden
      className="float-icons-layer pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {icons.map(({ Icon, style, delay, duration, motion }, index) => (
        <span
          key={index}
          className={`float-icon float-icon-${motion} absolute flex size-10 items-center justify-center rounded-2xl backdrop-blur-md sm:size-11`}
          style={{
            ...style,
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon className="size-3.5 text-accent/60 sm:size-4" strokeWidth={1.5} />
        </span>
      ))}
    </div>
  );
}
