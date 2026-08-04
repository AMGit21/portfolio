"use client";

import { LazyWhenVisible } from "@/components/lazy-when-visible";
import { About } from "@/components/sections/about";

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
 * Later sections still lazy-load near the viewport.
 */
export function HomeSections() {
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
