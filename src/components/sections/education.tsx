import {
  Award,
  Brain,
  Code2,
  GraduationCap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { certifications, education, type Certification } from "@/data/education";

const certIcons: Record<Certification["icon"], LucideIcon> = {
  brain: Brain,
  code: Code2,
  shield: ShieldCheck,
};

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Background"
          title="Education & certifications"
          description="Computer science degrees, plus certifications I picked up while shipping real work."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal className="mb-6 flex items-center gap-2 text-faint">
              <GraduationCap className="size-5" />
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </Reveal>
            <Stagger className="flex flex-col gap-4">
              {education.map((item) => (
                <StaggerItem key={item.id}>
                  <article className="card card-hover flex items-start gap-4 p-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <GraduationCap className="size-5" />
                    </span>
                    <div>
                      <h4 className="font-display text-base font-semibold">
                        {item.degree} - {item.field}
                      </h4>
                      <p className="mt-1 text-sm text-accent">
                        {item.institution}
                      </p>
                      <p className="mt-0.5 font-mono text-xs text-faint">
                        {item.period}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <Reveal className="mb-6 flex items-center gap-2 text-faint">
              <Award className="size-5" />
              <h3 className="font-display text-lg font-semibold">
                Certifications
              </h3>
            </Reveal>
            <Stagger className="flex flex-col gap-4">
              {certifications.map((cert) => {
                const Icon = certIcons[cert.icon];
                return (
                  <StaggerItem key={cert.id}>
                    <article className="card card-hover flex items-center gap-4 p-5">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-2-soft text-accent-2">
                        <Icon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <h4 className="font-display text-base font-semibold">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted">
                          {cert.issuer}
                          <span className="mx-2 text-faint">·</span>
                          <span className="font-mono text-xs text-faint">
                            {cert.year}
                          </span>
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
