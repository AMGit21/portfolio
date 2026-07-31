import {
  Activity,
  Brain,
  Code2,
  Database,
  LayoutTemplate,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { TechChip } from "@/components/ui/tech-icon";
import { skillCategories, type Accent, type SkillCategory } from "@/data/skills";

const icons: Record<SkillCategory["icon"], LucideIcon> = {
  brain: Brain,
  server: Server,
  layout: LayoutTemplate,
  activity: Activity,
  database: Database,
  workflow: Workflow,
  code: Code2,
  shield: ShieldCheck,
};

const accentStyles: Record<Accent, string> = {
  sky: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  rose: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  cyan: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use day to day"
          description="From the model call and API layer through the database and deploy pipeline."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = icons[category.icon];
            return (
              <StaggerItem key={category.id} className="h-full">
                <article className="card card-hover group flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${accentStyles[category.accent]}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-base font-semibold leading-snug">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {category.blurb}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-1.5" role="list">
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <TechChip name={skill} />
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
