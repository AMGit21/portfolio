"use client";

import { useEffect } from "react";
import { LazyWhenVisible } from "@/components/lazy-when-visible";
import { About } from "@/components/sections/about";
import { ensureSection, ensureSectionsThrough } from "@/lib/section-load";
import { site } from "@/data/site";

const loadSkills = () =>
  import("@/components/sections/skills").then((m) => ({ default: m.Skills }));
const loadExperience = () =>
  import("@/components/sections/experience").then((m) => ({
    default: m.Experience,
  }));
const loadProjects = () =>
  import("@/components/sections/projects").then((m) => ({
    default: m.Projects,
  }));
const loadEducation = () =>
  import("@/components/sections/education").then((m) => ({
    default: m.Education,
  }));
const loadContact = () =>
  import("@/components/sections/contact").then((m) => ({
    default: m.Contact,
  }));

/**
 * About stays eager (sits right under the hero).
 * Later sections still lazy-load near the viewport, then idle-preload
 * so nav highlighting and hash jumps have real section heights.
 */
export function HomeSections() {
  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const preload = () => {
      if (cancelled) return;
      void Promise.all(
        ["skills", "experience", "projects", "education", "contact"].map((id) =>
          ensureSection(id),
        ),
      );
    };

    const onHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!site.nav.some((item) => item.id === id)) return;
      void ensureSectionsThrough(
        id,
        site.nav.map((item) => item.id),
      ).then(async () => {
        await new Promise<void>((resolve) => {
          requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        });
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };

    onHash();
    window.addEventListener("hashchange", onHash);

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(preload, { timeout: 1800 });
    } else {
      timeoutId = setTimeout(preload, 400);
    }

    return () => {
      cancelled = true;
      window.removeEventListener("hashchange", onHash);
      if (idleId !== undefined) window.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <About />
      <LazyWhenVisible id="skills" loader={loadSkills} minHeight="24rem" />
      <LazyWhenVisible
        id="experience"
        loader={loadExperience}
        minHeight="28rem"
      />
      <LazyWhenVisible id="projects" loader={loadProjects} minHeight="32rem" />
      <LazyWhenVisible
        id="education"
        loader={loadEducation}
        minHeight="20rem"
      />
      <LazyWhenVisible id="contact" loader={loadContact} minHeight="22rem" />
    </>
  );
}
