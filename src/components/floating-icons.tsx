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
  { Icon: Brain, style: { top: "12%", left: "4%" }, delay: "0s", duration: "18s" },
  { Icon: Code2, style: { top: "24%", right: "5%" }, delay: "1.4s", duration: "20s" },
  { Icon: Cloud, style: { top: "40%", left: "7%" }, delay: "0.6s", duration: "22s" },
  { Icon: Database, style: { top: "54%", right: "4%" }, delay: "2.1s", duration: "19s" },
  { Icon: Cpu, style: { top: "70%", left: "5%" }, delay: "1s", duration: "21s" },
  { Icon: Terminal, style: { top: "76%", right: "10%" }, delay: "1.8s", duration: "17s" },
  { Icon: GitBranch, style: { top: "46%", right: "16%" }, delay: "2.6s", duration: "23s" },
  { Icon: Sparkles, style: { top: "32%", left: "16%" }, delay: "1.1s", duration: "16s" },
] as const;

/** Soft floating tech marks in the page atmosphere. */
export function FloatingIcons() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden max-md:opacity-40"
    >
      {icons.map(({ Icon, style, delay, duration }, index) => (
        <span
          key={index}
          className="float-icon absolute flex size-11 items-center justify-center rounded-2xl text-muted backdrop-blur-xl sm:size-12"
          style={{
            ...style,
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon className="size-4 text-accent/70 sm:size-[1.125rem]" strokeWidth={1.5} />
        </span>
      ))}
    </div>
  );
}
