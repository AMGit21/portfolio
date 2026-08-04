"use client";

import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TechChip } from "@/components/ui/tech-icon";
import { experience, type Experience as ExperienceEntry } from "@/data/experience";
import { cn } from "@/lib/utils";

const VISIBLE_ACHIEVEMENTS = 3;

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = entry.achievements.length > VISIBLE_ACHIEVEMENTS;
  const visible = expanded
    ? entry.achievements
    : entry.achievements.slice(0, VISIBLE_ACHIEVEMENTS);

  return (
    <article className="card card-hover p-6 md:p-8">
      <header className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="font-display text-xl font-semibold md:text-2xl">
            {entry.role}
          </h3>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="font-medium text-accent">{entry.company}</span>
            <span className="inline-flex items-center gap-1 text-faint">
              <MapPin className="size-3.5" />
              {entry.location}
            </span>
          </p>
        </div>
        <span
          className={cn(
            "chip shrink-0 self-start",
            entry.current && "border-success/30 !text-success",
          )}
        >
          <Calendar className="size-3.5" />
          {entry.period}
        </span>
      </header>

      <p className="prose-body mt-4 text-sm leading-relaxed text-muted md:text-base">
        {entry.summary}
      </p>

      <ul className="mt-5 flex flex-col gap-3" role="list">
        {visible.map((achievement) => (
          <li key={achievement} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
            <span className="text-sm leading-relaxed text-muted">
              {achievement}
            </span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          {expanded
            ? "Show less"
            : `Show ${entry.achievements.length - VISIBLE_ACHIEVEMENTS} more`}
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-300",
              expanded && "rotate-180",
            )}
          />
        </button>
      )}

      <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5" role="list">
        {entry.tech.map((tech) => (
          <li key={tech}>
            <TechChip name={tech} />
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Work history"
          description="R&D AI work, client delivery, and 300+ learners trained along the way."
        />

        <div className="relative flex flex-col gap-10">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] hidden w-px bg-gradient-to-b from-accent via-accent-2 to-transparent md:block"
          />
          {experience.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.08} className="relative md:pl-12">
              <span
                aria-hidden
                className="absolute top-8 left-0 hidden size-[15px] rounded-full border-2 border-accent bg-background md:block"
              >
                {entry.current && (
                  <span className="animate-pulse-dot absolute inset-[2px] rounded-full bg-accent" />
                )}
              </span>
              <ExperienceCard entry={entry} />
            </Reveal>
          ))}

          <Reveal className="relative md:pl-12">
            <span
              aria-hidden
              className="absolute top-6 left-0 hidden size-[15px] rounded-full border-2 border-line-strong bg-background md:block"
            />
            <p className="flex items-center gap-3 text-sm text-faint">
              <Briefcase className="size-4" />
              Started building for the web professionally in 2020, and teaching
              since 2017.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
