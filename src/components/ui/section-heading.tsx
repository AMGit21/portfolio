import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  /** Tighter spacing for short sections like Contact */
  compact?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  compact = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        compact ? "mb-8 md:mb-10" : "mb-14 md:mb-20",
        align === "center" ? "items-center text-center" : "items-start",
      )}
    >
      <span className="chip border-accent/25 !text-accent uppercase tracking-[0.18em]">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
