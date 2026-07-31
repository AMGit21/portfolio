"use client";

import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { profile } from "@/data/profile";

type ContactIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

interface ContactCard {
  id: string;
  label: string;
  value: string;
  icon: ContactIcon;
  copyText?: string;
  href?: string;
}

const cards: ContactCard[] = [
  {
    id: "email",
    label: "Email",
    value: profile.email,
    icon: Mail,
    copyText: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    id: "phone",
    label: "Phone",
    value: profile.phone,
    icon: Phone,
    copyText: profile.phone,
    href: profile.phoneHref,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "in/ali-mantache",
    icon: LinkedinIcon,
    href: profile.links.linkedin,
  },
  {
    id: "github",
    label: "GitHub",
    value: "@AMGit21",
    icon: GithubIcon,
    href: profile.links.github,
  },
];

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable (e.g. insecure context); ignore.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : `Copy ${label}`}
      title={copied ? "Copied!" : `Copy ${label}`}
      className="glass flex size-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
    >
      {copied ? (
        <Check className="size-4 text-success" />
      ) : (
        <Copy className="size-4" />
      )}
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="If you have an AI product, a platform to grow, or a team that needs help shipping, feel free to reach out."
        />

        <Reveal>
          <div className="card noise relative overflow-hidden p-8 text-center md:p-14">
            <div
              aria-hidden
              className="absolute inset-x-0 -top-32 mx-auto h-64 w-2/3 rounded-full blur-3xl"
              style={{
                background:
                  "linear-gradient(120deg, var(--glow-1), var(--glow-2))",
              }}
            />
            <div className="relative flex flex-col items-center gap-6">
              <Badge variant="success">
                <span className="animate-pulse-dot size-1.5 rounded-full bg-success" />
                {profile.availability}
              </Badge>
              <h3 className="font-display max-w-xl text-2xl font-bold tracking-tight md:text-4xl">
                From idea to production.{" "}
                <span className="text-gradient">Let&apos;s talk.</span>
              </h3>
              <p className="max-w-lg text-sm text-muted md:text-base">
                Based in {profile.location}, working remotely worldwide.
                Usually replies within a day.
              </p>
              <Magnetic>
                <Button asChild size="lg">
                  <a href={`mailto:${profile.email}`} className="group">
                    Say hello
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </Magnetic>
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ id, label, value, icon: Icon, copyText, href }) => (
            <StaggerItem key={id} className="h-full">
              <div className="card card-hover flex h-full items-center gap-3 p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-4.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-faint">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block truncate text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="truncate text-sm font-medium">{value}</p>
                  )}
                </div>
                {copyText && <CopyButton text={copyText} label={label} />}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8">
          <p className="flex items-center justify-center gap-2 text-sm text-faint">
            <MapPin className="size-4" />
            {profile.location} · UTC+3
          </p>
        </Reveal>
      </div>
    </section>
  );
}
