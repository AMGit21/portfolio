export const site = {
  url: "https://amgit21.github.io/portfolio",
  title: "Ali Mantache — AI Engineer & Full-Stack Developer",
  description:
    "AI engineer and full-stack developer with 5+ years delivering software and 2+ years shipping production AI systems. LLM-powered workflows, secure REST APIs, and scalable web platforms.",
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
