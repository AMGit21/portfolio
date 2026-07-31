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
    className: "top-[10%] left-[2%]",
    delay: "0s",
    duration: "11s",
    motion: "a" as const,
  },
  {
    Icon: Code2,
    className: "top-[18%] right-[2%]",
    delay: "1.2s",
    duration: "13s",
    motion: "b" as const,
  },
  {
    Icon: Cloud,
    className: "top-[38%] left-[1.5%]",
    delay: "0.4s",
    duration: "15s",
    motion: "c" as const,
  },
  {
    Icon: Database,
    className: "top-[52%] right-[1.5%]",
    delay: "1.8s",
    duration: "12s",
    motion: "a" as const,
  },
  {
    Icon: Cpu,
    className: "top-[72%] left-[3%]",
    delay: "0.8s",
    duration: "14s",
    motion: "b" as const,
  },
  {
    Icon: Terminal,
    className: "top-[78%] right-[3%]",
    delay: "1.5s",
    duration: "10s",
    motion: "c" as const,
  },
  {
    Icon: GitBranch,
    className: "top-[44%] right-[4%]",
    delay: "2.2s",
    duration: "16s",
    motion: "a" as const,
  },
  {
    Icon: Sparkles,
    className: "top-[28%] left-[4%]",
    delay: "0.9s",
    duration: "9s",
    motion: "b" as const,
  },
];

/** Edge-only floating tech marks — behind content, no pointer capture. */
export function FloatingIcons() {
  return (
    <div
      aria-hidden
      className="float-icons-layer pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {icons.map(({ Icon, className, delay, duration, motion }, index) => (
        <span
          key={index}
          className={`float-icon float-icon-${motion} absolute flex size-10 items-center justify-center rounded-2xl backdrop-blur-sm sm:size-11 ${className}`}
          style={{
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon className="size-3.5 text-accent/65 sm:size-4" strokeWidth={1.5} />
        </span>
      ))}
    </div>
  );
}
