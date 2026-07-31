export type Accent = "sky" | "violet" | "emerald" | "amber" | "rose" | "cyan";

export interface SkillCategory {
  id: string;
  title: string;
  blurb: string;
  icon:
    | "brain"
    | "server"
    | "layout"
    | "activity"
    | "database"
    | "workflow"
    | "code"
    | "shield";
  accent: Accent;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    title: "AI & LLM Engineering",
    blurb:
      "LLM features, agent workflows, fine-tuning, and prompt evaluation against real metrics.",
    icon: "brain",
    accent: "violet",
    skills: [
      "OpenAI APIs",
      "LangChain",
      "Hugging Face",
      "LoRA Fine-Tuning",
      "Ollama",
      "Groq",
      "n8n",
      "Prompt Evaluation",
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    blurb: "APIs and services with auth, tests, and clear ownership boundaries.",
    icon: "server",
    accent: "sky",
    skills: [
      "FastAPI",
      "NestJS",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Microservices",
      "Event-Driven Architecture",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    blurb: "React and Next.js UIs, including real-time views when the product needs them.",
    icon: "layout",
    accent: "cyan",
    skills: ["React.js", "Next.js", "TypeScript", "WebSockets", "Tailwind CSS"],
  },
  {
    id: "data",
    title: "Data & Computer Vision",
    blurb:
      "Streaming pipelines and vision models, from labeling through training to inference.",
    icon: "activity",
    accent: "emerald",
    skills: [
      "Apache Kafka",
      "Apache Spark",
      "Delta Lake",
      "YOLOv8",
      "OpenCV",
      "Roboflow",
      "Autodistill",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    blurb: "Postgres, document stores, Redis, and schemas that can change without breaking.",
    icon: "database",
    accent: "amber",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Redis"],
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    blurb: "Docker, GitHub Actions, tests, and CI/CD that make releases repeatable.",
    icon: "workflow",
    accent: "rose",
    skills: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "CI/CD",
      "Git",
      "pytest",
      "Pydantic",
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    blurb: "Python and TypeScript day to day, plus Go, Kotlin, SQL, and PHP when needed.",
    icon: "code",
    accent: "sky",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "PHP", "Go", "Kotlin"],
  },
  {
    id: "other",
    title: "Architecture & Practices",
    blurb: "Clear design docs, security-aware defaults, and delivery that other people can run.",
    icon: "shield",
    accent: "violet",
    skills: [
      "Hyperledger Besu",
      "Zero-Knowledge Auth",
      "Agile / Scrum",
      "Technical Documentation",
      "Team Leadership",
      "Mentoring",
    ],
  },
];
