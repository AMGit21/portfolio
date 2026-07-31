"use client";

import { useEffect } from "react";

/** Soft blurred accent glow that follows the cursor on .card-hover. */
export function CardGlow() {
  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const card = target?.closest(".card-hover") as HTMLElement | null;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      card.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
