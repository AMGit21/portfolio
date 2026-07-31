import {
  Brain,
  Compass,
  GraduationCap,
  MapPin,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { profile } from "@/data/profile";

const principles = [
  {
    icon: Wrench,
    title: "How I engineer",
    body: "I prefer reliable over clever. APIs, data models, and pipelines should be tested and easy to operate, so the hard parts can move without drama.",
  },
  {
    icon: Brain,
    title: "How I use AI",
    body: "I treat LLMs as components. Prompts get versioned, checked against ground truth, and measured with precision, recall, and accuracy before they ship.",
  },
  {
    icon: Compass,
    title: "How I work",
    body: "I take work from requirements through runbooks: design, build, document, and hand over something the team can run without me.",
  },
  {
    icon: GraduationCap,
    title: "Teaching",
    body: "Nine bootcamps and 300+ learners taught me that if I can explain a system clearly, I understand it. Mentoring also keeps the basics sharp.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Builder, engineer, instructor"
          description="Five-plus years across the stack. The last two focused on shipping AI that holds up in production."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m {profile.name}, an AI engineer and full-stack developer
              based in {profile.location}. I build REST APIs, LLM features, and
              web platforms with Python/FastAPI, Node.js/NestJS, React/Next.js,
              PostgreSQL, Docker, and CI/CD.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              Right now I work in R&amp;D at Intelligencia.fr on an EU-funded
              identity platform: on-device face authentication, permissioned
              blockchain credential issuance, and zero-knowledge network auth.
              I also build LLM features and a prompt-evaluation pipeline that
              picks prompt styles using precision, recall, and accuracy.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              Before that I led a team of 10+ developers on client sites, and
              ran nine MERN bootcamps that trained 300+ learners across
              universities and institutions.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <span className="chip">
                <MapPin className="size-3.5 text-accent" />
                {profile.location}
              </span>
              <span className="chip">
                <Sparkles className="size-3.5 text-accent-2" />
                R&amp;D AI Engineer @ Intelligencia.fr
              </span>
              <span className="chip">
                <GraduationCap className="size-3.5 text-success" />
                MSc Computer Science &amp; Risk Management
              </span>
            </div>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {principles.map(({ icon: Icon, title, body }) => (
              <StaggerItem key={title}>
                <article className="card card-hover flex h-full flex-col gap-3 p-5">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
