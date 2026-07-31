"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const themes = [
  { id: "light", label: "Light theme", icon: Sun },
  { id: "system", label: "System theme", icon: Monitor },
  { id: "dark", label: "Dark theme", icon: Moon },
] as const;

const emptySubscribe = () => () => {};

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={cn(
        "glass flex items-center gap-0.5 rounded-full p-1 shadow-sm",
        className,
      )}
    >
      {themes.map(({ id, label, icon: Icon }) => {
        const active = mounted && theme === id;
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(id)}
            className={cn(
              "flex size-7 items-center justify-center rounded-full transition-colors",
              active
                ? "bg-accent-soft text-accent shadow-sm"
                : "text-faint hover:bg-surface hover:text-foreground",
            )}
          >
            <Icon className="size-4" />
          </button>
        );
      })}
    </div>
  );
}
