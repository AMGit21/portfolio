export const site = {
  url: "https://amgit21.github.io/portfolio",
  title: "Ali Mantache - AI Engineer & Full-Stack Developer",
  description:
    "AI engineer and full-stack developer based in Beirut. 5+ years in software, 2+ years shipping production AI, REST APIs, and full-stack web platforms.",
  /**
   * Absolute Open Graph image URL (WhatsApp/LinkedIn need a public absolute URL).
   * Bump ?v= when the artwork changes so caches refresh.
   */
  ogImage: "https://amgit21.github.io/portfolio/og.jpg?v=20260805",
  keywords: [
    "Ali Mantache",
    "AI Engineer",
    "Full-Stack Developer",
    "LLM",
    "LangChain",
    "FastAPI",
    "Next.js",
    "React",
    "Python",
    "TypeScript",
    "Beirut",
    "Lebanon",
  ],
  nav: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
