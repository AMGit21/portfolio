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
  { Icon: Brain, style: { top: "12%", left: "5%" }, delay: "0s", duration: "16s" },
  { Icon: Code2, style: { top: "22%", right: "7%" }, delay: "1.2s", duration: "18s" },
  { Icon: Cloud, style: { top: "38%", left: "9%" }, delay: "0.5s", duration: "20s" },
  { Icon: Database, style: { top: "52%", right: "5%" }, delay: "2s", duration: "17s" },
  { Icon: Cpu, style: { top: "68%", left: "6%" }, delay: "0.8s", duration: "19s" },
  { Icon: Terminal, style: { top: "74%", right: "12%" }, delay: "1.6s", duration: "15s" },
  { Icon: GitBranch, style: { top: "44%", right: "18%" }, delay: "2.4s", duration: "21s" },
  { Icon: Sparkles, style: { top: "30%", left: "18%" }, delay: "1s", duration: "14s" },
] as const;

/** Floating tech icons in the page atmosphere (CSS-driven so they always show). */
export function FloatingIcons() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {icons.map(({ Icon, style, delay, duration }, index) => (
        <span
          key={index}
          className="float-icon absolute flex size-12 items-center justify-center rounded-2xl border border-line bg-surface/70 text-muted shadow-lg shadow-black/5 backdrop-blur-xl dark:bg-surface-strong/55 dark:shadow-black/30"
          style={{
            ...style,
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon className="size-5 text-accent/80" strokeWidth={1.5} />
        </span>
      ))}
    </div>
  );
}
