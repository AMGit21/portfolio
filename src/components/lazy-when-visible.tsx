"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import {
  markSectionMounted,
  registerSectionLoader,
  unregisterSectionLoader,
} from "@/lib/section-load";

interface LazyWhenVisibleProps {
  /** Section anchor id (for nav / hash links before the chunk mounts). */
  id: string;
  /** Dynamic import that resolves to a default-exported section component. */
  loader: () => Promise<{ default: ComponentType }>;
  /** Approximate height before the section mounts (avoids layout jump). */
  minHeight?: string;
  /** Start loading slightly before the section enters the viewport. */
  rootMargin?: string;
  fallback?: ReactNode;
}

/**
 * Loads a section chunk only when it nears the viewport (or is targeted by hash / nav).
 * Framer Motion stays inside each section — it just isn't downloaded early.
 */
export function LazyWhenVisible({
  id,
  loader,
  minHeight = "28rem",
  rootMargin = "280px 0px",
  fallback,
}: LazyWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || loadedRef.current) return;

    let cancelled = false;
    let observer: IntersectionObserver | undefined;

    const load = () => {
      if (loadedRef.current || cancelled) return;
      loadedRef.current = true;
      observer?.disconnect();

      loader().then((mod) => {
        if (cancelled) return;
        setComponent(() => mod.default);
      });
    };

    registerSectionLoader(id, load);

    const loadIfHash = () => {
      if (window.location.hash === `#${id}`) load();
    };

    loadIfHash();
    window.addEventListener("hashchange", loadIfHash);

    if (typeof IntersectionObserver === "undefined") {
      load();
      return () => {
        cancelled = true;
        unregisterSectionLoader(id);
        window.removeEventListener("hashchange", loadIfHash);
      };
    }

    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) load();
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => {
      cancelled = true;
      observer?.disconnect();
      unregisterSectionLoader(id);
      window.removeEventListener("hashchange", loadIfHash);
    };
  }, [id, loader, rootMargin]);

  useEffect(() => {
    if (!Component) return;
    const frame = requestAnimationFrame(() => markSectionMounted(id));
    return () => cancelAnimationFrame(frame);
  }, [Component, id]);

  return (
    <div ref={ref}>
      {Component ? (
        <Component />
      ) : (
        (fallback ?? (
          <div
            id={id}
            aria-hidden
            className="scroll-mt-24 w-full"
            style={{ minHeight }}
          />
        ))
      )}
    </div>
  );
}
