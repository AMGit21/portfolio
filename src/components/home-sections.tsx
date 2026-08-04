"use client";

import { LazyWhenVisible } from "@/components/lazy-when-visible";

const loadAbout = () =>
  import("@/components/sections/about").then((m) => ({ default: m.About }));
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

/** Below-fold sections — each Framer Motion bundle loads near the viewport. */
export function HomeSections() {
  return (
    <>
      <LazyWhenVisible id="about" loader={loadAbout} minHeight="32rem" />
      <LazyWhenVisible id="skills" loader={loadSkills} minHeight="40rem" />
      <LazyWhenVisible
        id="experience"
        loader={loadExperience}
        minHeight="48rem"
      />
      <LazyWhenVisible id="projects" loader={loadProjects} minHeight="56rem" />
      <LazyWhenVisible
        id="education"
        loader={loadEducation}
        minHeight="32rem"
      />
      <LazyWhenVisible id="contact" loader={loadContact} minHeight="36rem" />
    </>
  );
}
