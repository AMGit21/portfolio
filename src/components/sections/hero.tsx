"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
import { Magnetic } from "@/components/ui/magnetic";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { profile } from "@/data/profile";
import { assetPath } from "@/lib/utils";

const heroSocials = [
  { href: profile.links.github, label: "GitHub", icon: GithubIcon },
  { href: profile.links.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

/** Only the four hero chips — avoid pulling the full tech-icon map into the hero chunk. */
const floatingTechs: {
  name: string;
  className: string;
  Icon: ComponentType<{ className?: string }>;
}[] = [
  { name: "Python", className: "-left-4 top-8 lg:-left-10", Icon: SiPython },
  { name: "FastAPI", className: "-right-2 top-20 lg:-right-8", Icon: SiFastapi },
  {
    name: "LangChain",
    className: "-left-6 bottom-24 lg:-left-14",
    Icon: SiLangchain,
  },
  {
    name: "Next.js",
    className: "-right-4 bottom-10 lg:-right-10",
    Icon: SiNextdotjs,
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function RoleRotator() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % profile.roles.length),
      2600,
    );
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <span className="relative inline-flex h-[1.4em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease }}
          className="text-gradient whitespace-nowrap font-semibold"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease },
  });

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-start overflow-hidden pt-24 pb-12 sm:pb-16 [@media(min-height:840px)]:min-h-svh [@media(min-height:840px)]:justify-center"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <motion.div {...enter(0.05)}>
            <Badge variant="success">
              <span className="animate-pulse-dot size-1.5 rounded-full bg-success" />
              {profile.availability}
            </Badge>
          </motion.div>

          <motion.h1
            {...enter(0.15)}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.tagline.replace(".", "")}
            <span className="text-gradient text-gradient-animated">.</span>
            <span className="mt-4 block text-xl font-medium text-muted sm:text-2xl lg:text-[1.65rem]">
              {profile.name} - <RoleRotator />
            </span>
          </motion.h1>

          <motion.p
            {...enter(0.25)}
            className="max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            {...enter(0.35)}
            className="mt-2 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button asChild size="lg">
                <a href="#projects" className="group">
                  Explore my work
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
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
            </Magnetic>
            <div className="flex items-center gap-2">
              {heroSocials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass flex size-11 items-center justify-center rounded-full text-muted transition-[color,transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-accent/35 hover:text-accent hover:shadow-md hover:shadow-accent/10"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <div
            aria-hidden
            className="absolute -inset-8 rounded-[2.5rem] opacity-60 blur-3xl"
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
          {floatingTechs.map(({ name, className, Icon }, i) => (
            <motion.span
              key={name}
              aria-hidden
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7,
              }}
              className={`glass absolute flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs text-foreground shadow-lg ${className}`}
            >
              <Icon className="size-3.5 text-accent" />
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        {...enter(0.55)}
        className="mx-auto mt-10 w-full max-w-6xl px-4 sm:mt-14 sm:px-6 [@media(min-height:840px)]:mt-16"
      >
        <dl className="card grid grid-cols-2 divide-line max-md:gap-y-6 md:grid-cols-4 md:divide-x">
          {profile.stats.map(({ value, suffix, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 px-4 py-5 text-center"
            >
              <dd className="font-display text-3xl font-bold md:text-4xl">
                <Counter value={value} suffix={suffix} className="text-gradient" />
              </dd>
              <dt className="text-xs text-faint md:text-sm">{label}</dt>
            </div>
          ))}
        </dl>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-faint transition-colors hover:text-accent [@media(min-height:840px)]:lg:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown className="size-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}
