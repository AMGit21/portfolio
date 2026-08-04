import { ArrowUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { profile } from "@/data/profile";
import { site } from "@/data/site";

const socials = [
  { href: profile.links.github, label: "GitHub", icon: GithubIcon },
  { href: profile.links.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-line/80 bg-surface/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold">
            <span className="text-gradient">{profile.firstName}</span>
            <span className="text-faint">.dev</span>
          </p>
          <p className="mt-1 text-sm text-faint">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js,
            Tailwind CSS &amp; Framer Motion.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {site.nav.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="link-quiet text-sm font-medium"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass flex size-9 items-center justify-center rounded-full text-muted transition-[color,transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent hover:shadow-md hover:shadow-accent/10"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="mx-auto flex max-w-6xl justify-center px-4 py-5 sm:px-6">
          <Button asChild variant="ghost" size="sm">
            <a href="#hero" className="gap-2 text-muted hover:text-foreground">
              <ArrowUp className="size-4" />
              Back to top
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
