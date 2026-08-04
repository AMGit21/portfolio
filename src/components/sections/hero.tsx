"use client";

import { ArrowRight, ChevronDown, Download, Mail } from "lucide-react";
import { useEffect, useState, type ComponentType } from "react";
import {
  SiFastapi,
  SiLangchain,
  SiNextdotjs,
  SiPython,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { profile } from "@/data/profile";
import { assetPath } from "@/lib/utils";

const heroSocials = [
  { href: profile.links.github, label: "GitHub", icon: GithubIcon },
  { href: profile.links.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

const floatingTechs: {
  name: string;
  className: string;
  Icon: ComponentType<{ className?: string }>;
  motion: "a" | "b" | "c";
}[] = [
  {
    name: "Python",
    className: "-left-4 top-8 lg:-left-10",
    Icon: SiPython,
    motion: "a",
  },
  {
    name: "FastAPI",
    className: "-right-2 top-20 lg:-right-8",
    Icon: SiFastapi,
    motion: "b",
  },
  {
    name: "LangChain",
    className: "-left-6 bottom-24 lg:-left-14",
    Icon: SiLangchain,
    motion: "c",
  },
  {
    name: "Next.js",
    className: "-right-4 bottom-10 lg:-right-10",
    Icon: SiNextdotjs,
    motion: "a",
  },
];

function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % profile.roles.length),
      2600,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="text-gradient whitespace-nowrap font-semibold">
      {profile.roles[index]}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="success">
            <span className="animate-pulse-dot size-1.5 rounded-full bg-success" />
            {profile.availability}
          </Badge>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.tagline.replace(".", "")}
            <span className="text-gradient text-gradient-animated">.</span>
            <span className="mt-4 block text-xl font-medium text-muted sm:text-2xl lg:text-[1.65rem]">
              {profile.name} - <RoleRotator />
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {profile.intro}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="#projects" className="group">
                Explore my work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a
                href={assetPath(profile.cvFile)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="size-4" />
                Download CV
              </a>
            </Button>
            <div className="flex items-center gap-2">
              {heroSocials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="glass flex size-11 items-center justify-center rounded-full text-muted transition-all hover:-translate-y-1 hover:text-accent"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2.5rem] opacity-50 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, var(--glow-1), var(--glow-2))",
            }}
          />
          <div className="gradient-ring relative overflow-hidden rounded-[2rem] p-1.5">
            {/* Plain <img>: next/image skips basePath on static GitHub Pages export */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath(profile.portrait)}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={800}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full rounded-[1.7rem] object-cover"
            />
          </div>
          {floatingTechs.map(({ name, className, Icon, motion }) => (
            <span
              key={name}
              aria-hidden
              className={`glass float-icon-${motion} absolute flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs text-foreground shadow-lg ${className}`}
              style={{ animationDuration: "5s" }}
            >
              <Icon className="size-3.5 text-accent" />
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6">
        <dl className="card grid grid-cols-2 divide-line max-md:gap-y-6 md:grid-cols-4 md:divide-x">
          {profile.stats.map(({ value, suffix, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 px-4 py-5 text-center"
            >
              <dd className="font-display text-3xl font-bold md:text-4xl">
                <Counter
                  value={value}
                  suffix={suffix}
                  className="text-gradient"
                />
              </dd>
              <dt className="text-xs text-faint md:text-sm">{label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-faint transition-colors hover:text-accent lg:block"
      >
        <span className="float-icon-b block" style={{ animationDuration: "1.8s" }}>
          <ChevronDown className="size-6" />
        </span>
      </a>
    </section>
  );
}
