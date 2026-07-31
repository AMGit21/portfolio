"use client";

import { useEffect } from "react";

/**
 * Drives a glassy spotlight on .card-hover via --spot-x / --spot-y.
 */
export function GlassSpotlight() {
  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const card = target?.closest(".card-hover") as HTMLElement | null;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
