"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FloatingIcons = dynamic(
  () =>
    import("@/components/floating-icons").then((m) => ({
      default: m.FloatingIcons,
    })),
  { ssr: false },
);

const CursorOrb = dynamic(
  () =>
    import("@/components/cursor-orb").then((m) => ({ default: m.CursorOrb })),
  { ssr: false },
);

const CardGlow = dynamic(
  () => import("@/components/card-glow").then((m) => ({ default: m.CardGlow })),
  { ssr: false },
);

/**
 * Mount decorative client effects after first paint / idle so hard refresh
 * isn't blocked by cursor, floating icons, and card glow listeners.
 * Cursor (Framer) loads last — only after the page is already usable.
 */
export function DeferredEffects() {
  const [ready, setReady] = useState(false);
  const [cursorReady, setCursorReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let cursorTimeout: ReturnType<typeof setTimeout> | undefined;

    const enable = () => {
      if (cancelled) return;
      setReady(true);
      cursorTimeout = setTimeout(() => {
        if (!cancelled) setCursorReady(true);
      }, 800);
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(enable, { timeout: 900 });
    } else {
      timeoutId = setTimeout(enable, 150);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
      if (cursorTimeout !== undefined) clearTimeout(cursorTimeout);
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      <FloatingIcons />
      <CardGlow />
      {cursorReady ? <CursorOrb /> : null}
    </>
  );
}
