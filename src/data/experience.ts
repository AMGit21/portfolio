export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  achievements: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    id: "intelligencia",
    role: "Research & Development AI Engineer",
    company: "Intelligencia.fr",
    location: "Remote",
    period: "2024 - Present",
    current: true,
    summary:
      "Building AI and identity-platform modules for EU-funded R&D, including LLM services and permissioned blockchain credential issuance.",
    achievements: [
      "Built core modules for an EU-funded identity platform: on-device face auth, an Android holder app (Kotlin), and permissioned blockchain credential issuance",
      "Implemented Dockerized Go services for enrollment, eligibility checks, and zero-knowledge network auth, keeping raw biometrics on-device",
      "Shipped FastAPI services with authentication, third-party integrations, and LLM features",
      "Designed a catalog-first data platform (FastAPI, NestJS, Next.js, PostgreSQL JSONB) with adapters for SQL Server, files, and external REST APIs",
      "Built a prompt-evaluation pipeline: ~50 templates filled from a dataset, scored against ground truth (precision, recall, accuracy), with charts to compare prompt styles",
      "Set up CI/CD and containerized deployments with automated tests",
      "Wrote architecture, security, demo, and runbook documentation",
    ],
    tech: [
      "Python",
      "FastAPI",
      "NestJS",
      "Next.js",
      "React",
      "Node.js",
      "Go",
      "Kotlin",
      "Android",
      "PostgreSQL",
      "SQL Server",
      "Redis",
      "Docker Compose",
      "Hyperledger Besu",
      "OpenAI API",
    ],
  },
  {
    id: "esa",
    role: "Lead Instructor, MERN Stack Bootcamps",
    company: "ESA Coding Lab, ESA Business School",
    location: "Beirut, Lebanon",
    period: "2021 - 2024",
    current: false,
    summary:
      "Ran 9 full-stack bootcamps while working as a developer, alongside teaching across universities and other institutions.",
    achievements: [
      "Delivered 9 MERN bootcamps: 6 with ESIEE-IT/France via the AFD-funded ESA Coding Lab, and 3 with Tatweer Baladna (U.S. Embassy-funded, hybrid cohorts)",
      "Taught full-stack development, Python, REST APIs, Git, debugging, code review, and Agile practices to 300+ learners across bootcamps, universities, and other institutions",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Python", "Git", "REST APIs"],
  },
  {
    id: "evolve",
    role: "Full-Stack Developer / Web Development Lead",
    company: "E-VOLVE Marketing Solutions",
    location: "Beirut, Lebanon",
    period: "2020 - 2022",
    current: false,
    summary:
      "Led a team delivering client web projects end to end, while continuing to teach (teaching since 2017).",
    achievements: [
      "Led 10+ developers shipping client WordPress sites with SEO-aware structure",
      "Owned projects from requirements through deployment",
    ],
    tech: ["PHP", "JavaScript", "WordPress", "MySQL", "HTML", "CSS"],
  },
];
