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
    period: "2024 — Present",
    current: true,
    summary:
      "Architecting AI-driven and identity-platform modules for EU-funded R&D, from LLM-powered services to permissioned blockchain credential issuance.",
    achievements: [
      "Architected core modules for an EU-funded R&D identity platform covering on-device face authentication, an Android holder app (Kotlin), and permissioned blockchain credential issuance",
      "Implemented Dockerized backend services (Go) for enrollment, eligibility checks, and zero-knowledge network authentication while keeping raw biometrics on-device",
      "Developed production FastAPI services with authentication, secure third-party integrations, and LLM-powered features",
      "Designed a catalog-first data platform (FastAPI, NestJS, Next.js, PostgreSQL JSONB) with adapters for SQL Server and other SQL sources, files, and external REST APIs",
      "Built an autonomous prompt-evaluation pipeline: ~50 templates filled from a dataset, dynamic OpenAI calls, outputs scored against ground truth (precision, recall, accuracy), and comparison charts to select the best prompt style",
      "Implemented CI/CD pipelines and containerized deployments with automated testing",
      "Authored technical documentation for architecture, security, demos, and operational runbooks",
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
    period: "2021 — 2024",
    current: false,
    summary:
      "Delivered 9 full-stack bootcamps concurrently with development roles, training 300+ learners across universities and institutions.",
    achievements: [
      "Delivered 9 MERN bootcamps: 6 with ESIEE-IT/France via the AFD-funded ESA Coding Lab, and 3 with Tatweer Baladna (U.S. Embassy-funded, hybrid cohorts)",
      "Trained 300+ learners on full-stack development, Python, REST APIs, Git, debugging, code review, and Agile practices",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Python", "Git", "REST APIs"],
  },
  {
    id: "evolve",
    role: "Full-Stack Developer / Web Development Lead",
    company: "E-VOLVE Marketing Solutions",
    location: "Beirut, Lebanon",
    period: "2020 — 2022",
    current: false,
    summary:
      "Led a team of developers delivering client web projects end-to-end, concurrent with instruction from 2021.",
    achievements: [
      "Led 10+ developers delivering client WordPress sites end-to-end with SEO-oriented architecture",
      "Owned the full lifecycle from requirements gathering through deployment",
    ],
    tech: ["PHP", "JavaScript", "WordPress", "MySQL", "HTML", "CSS"],
  },
];
