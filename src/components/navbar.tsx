"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/profile";
import { site } from "@/data/site";
import { assetPath, cn } from "@/lib/utils";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = site.nav
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between border border-transparent px-4 sm:px-6",
          "transition-[background-color,box-shadow,backdrop-filter,margin,height,max-width,border-radius] duration-300 ease-out",
          scrolled
            ? "nav-panel mx-3 mt-3 h-14 max-w-5xl rounded-2xl sm:mx-auto"
            : "bg-transparent shadow-none",
        )}
      >
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight"
          aria-label={`${profile.name} - back to top`}
        >
          <span className="text-gradient">{profile.firstName}</span>
          <span className={cn(scrolled ? "text-muted" : "text-faint")}>.dev</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {site.nav.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "true" : undefined}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors",
                activeSection === id
                  ? "bg-accent-soft text-foreground"
                  : scrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-muted hover:text-foreground",
              )}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:flex" />
          <a
            href={assetPath(profile.cvFile)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-1.5 text-sm font-semibold text-background shadow-sm hover:-translate-y-0.5 hover:shadow-md md:inline-flex"
          >
            <Download className="size-3.5" />
            CV
          </a>
          <button
            type="button"
            className="nav-panel flex size-9 items-center justify-center rounded-full text-foreground md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="nav-panel mx-4 mt-2 rounded-xl p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {site.nav.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                  activeSection === id
                    ? "bg-accent-soft text-accent"
                    : "text-foreground/85 hover:bg-accent-soft hover:text-foreground",
                )}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
            <ThemeToggle />
            <a
              href={assetPath(profile.cvFile)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
