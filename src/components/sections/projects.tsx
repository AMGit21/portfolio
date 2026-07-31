import {
  Activity,
  Bot,
  Database,
  MessageSquare,
  Music,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GithubIcon } from "@/components/ui/social-icons";
import { TechChip } from "@/components/ui/tech-icon";
import { featuredProjects, moreProjects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const icons: Record<Project["icon"], LucideIcon> = {
  bot: Bot,
  message: MessageSquare,
  activity: Activity,
  music: Music,
  database: Database,
};

const statusStyles: Record<Project["status"], string> = {
  Production: "border-success/30 !text-success",
  "R&D": "border-accent-2/30 !text-accent-2",
  Shipped: "border-accent/30 !text-accent",
};

function TerminalPanel({ project }: { project: Project }) {
  return (
    <div className="gradient-ring overflow-hidden rounded-2xl font-mono text-[13px] leading-relaxed shadow-2xl shadow-black/10">
      <div className="rounded-2xl bg-surface-strong">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-rose-400/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 truncate text-xs text-faint">
            {project.id} - live
          </span>
        </div>
        <div className="flex flex-col gap-2 px-5 py-5">
          {project.terminal.map((line) => (
            <p
              key={line}
              className={cn(
                "truncate",
                line.startsWith("✓")
                  ? "text-success"
                  : line.startsWith("⚠")
                    ? "text-amber-500"
                    : line.startsWith("$") || line.startsWith(">")
                      ? "text-foreground"
                      : "text-muted",
              )}
            >
              {line}
            </p>
          ))}
          <p className="text-accent">
            ▌<span className="sr-only">cursor</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const Icon = icons[project.icon];
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article className="card card-hover grid items-center gap-8 p-6 md:p-10 lg:grid-cols-2 lg:gap-12">
        <div className={cn("flex flex-col gap-4", reversed && "lg:order-2")}>
          <div className="flex flex-wrap items-center gap-2">
            <span className={cn("chip", statusStyles[project.status])}>
              {project.status}
            </span>
            <span className="chip">{project.year}</span>
            <span className="chip">{project.role}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon className="size-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold md:text-2xl">
                {project.title}
              </h3>
              <p className="text-sm text-faint">{project.subtitle}</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted md:text-base">
            {project.description}
          </p>

          <ul className="flex flex-col gap-2.5" role="list">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5">
                <Sparkles className="mt-1 size-3.5 shrink-0 text-accent-2" />
                <span className="text-sm leading-relaxed text-muted">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-1.5" role="list">
            {project.tech.map((tech) => (
              <li key={tech}>
                <TechChip name={tech} />
              </li>
            ))}
          </ul>

          {project.github && (
            <div className="mt-1 flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-line-strong"
              >
                <GithubIcon className="size-4" />
                View on GitHub
              </a>
            </div>
          )}
        </div>

        <div className={cn(reversed && "lg:order-1")}>
          <TerminalPanel project={project} />
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="AI intake tooling, natural-language data access, and a real-time computer vision pipeline."
        />

        <div className="flex flex-col gap-8 md:gap-10">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        <Reveal className="mt-16 mb-6">
          <h3 className="font-display text-lg font-semibold text-faint">
            More builds
          </h3>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-2">
          {moreProjects.map((project) => {
            const Icon = icons[project.icon];
            return (
              <StaggerItem key={project.id} className="h-full">
                <article className="card card-hover flex h-full flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-2-soft text-accent-2">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h4 className="font-display text-base font-semibold">
                          {project.title}
                        </h4>
                        <p className="text-xs text-faint">{project.subtitle}</p>
                      </div>
                    </div>
                    <span className="chip shrink-0">{project.year}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-1.5" role="list">
                    {project.tech.map((tech) => (
                      <li key={tech}>
                        <TechChip name={tech} />
                      </li>
                    ))}
                  </ul>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
                    >
                      <GithubIcon className="size-4" />
                      View on GitHub
                    </a>
                  )}
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
