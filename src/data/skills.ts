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
      "LLM-powered features, agentic workflows, fine-tuning, and rigorous prompt evaluation in production.",
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
    blurb:
      "Secure, well-tested APIs and event-driven services designed for scale and maintainability.",
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
    blurb:
      "Modern, responsive interfaces with real-time capabilities and thoughtful UX.",
    icon: "layout",
    accent: "cyan",
    skills: ["React.js", "Next.js", "TypeScript", "WebSockets", "Tailwind CSS"],
  },
  {
    id: "data",
    title: "Data & Computer Vision",
    blurb:
      "Streaming pipelines and vision models — from labeling and training to real-time inference.",
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
    blurb:
      "Relational and document stores, caching layers, and schema design that holds up under change.",
    icon: "database",
    accent: "amber",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Redis"],
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    blurb:
      "Containerized deployments, automated testing, and CI/CD pipelines that ship with confidence.",
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
    blurb: "Polyglot by necessity, pragmatic by choice.",
    icon: "code",
    accent: "sky",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "PHP", "Go", "Kotlin"],
  },
  {
    id: "other",
    title: "Architecture & Practices",
    blurb:
      "Distributed systems thinking, security awareness, and disciplined delivery.",
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
