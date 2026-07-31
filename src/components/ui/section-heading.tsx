import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 flex flex-col gap-4 md:mb-20",
        align === "center" ? "items-center text-center" : "items-start",
      )}
    >
      <span className="chip !text-accent border-accent/30 uppercase tracking-widest">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
