export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  status: "Production-grade" | "R&D" | "Shipped";
  role: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  icon: "bot" | "message" | "activity" | "music" | "database";
  terminal: string[];
}

export const projects: Project[] = [
  {
    id: "ai-triage",
    title: "AI Triage System",
    subtitle: "Agentic B2B Support Intake",
    year: "2026",
    status: "Production-grade",
    role: "Solo Engineer",
    description:
      "An AI support-intake system that classifies, routes, and enriches incoming B2B requests using FastAPI, n8n, Gmail, and LLMs — turning unstructured email into structured, actionable tickets.",
    highlights: [
      "Dual ingestion: concurrent batch processing with retries plus Gmail/webhook n8n flows, producing structured JSON outputs",
      "Schema validation and deterministic routing so every request lands in the right queue",
      "Regression tests and Google Sheets fallback logging for failed runs — no silent losses",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Groq (Llama 3.3)",
      "pytest",
      "n8n",
      "Gmail API",
      "Google Sheets",
    ],
    github: "https://github.com/AMGit21",
    featured: true,
    icon: "bot",
    terminal: [
      "$ POST /intake  ← gmail webhook",
      "→ classify: billing_dispute (0.97)",
      "→ enrich: account, priority, sentiment",
      "→ route: finance-queue  ✓ schema valid",
      "✓ 42 regression tests passed",
    ],
  },
  {
    id: "nl-sql-chatbot",
    title: "AI Chatbot",
    subtitle: "Natural Language → Dynamic Database CRUD",
    year: "2025",
    status: "Shipped",
    role: "Solo Engineer",
    description:
      "A natural-language-to-SQL system that lets users query and mutate a live database conversationally — with a locally fine-tuned model, hardened auth, and a full analytics UI.",
    highlights: [
      "Fine-tuned TinyLlama with LoRA for CPU-efficient local inference — no GPU required",
      "JWT authentication and query sanitization guarding every generated statement",
      "Next.js analytics UI with filter, search, sort, and CSV export",
    ],
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "Hugging Face",
      "LoRA",
      "LangChain",
      "Ollama",
    ],
    github: "https://github.com/AMGit21",
    featured: true,
    icon: "message",
    terminal: [
      "> \"show revenue by client since March\"",
      "→ SELECT client, SUM(amount) ...",
      "→ sanitize ✓  auth ✓  execute ✓",
      "← 14 rows · rendered as chart",
      "model: TinyLlama-1.1B + LoRA (CPU)",
    ],
  },
  {
    id: "streaming-platform",
    title: "Real-Time Data Streaming Platform",
    subtitle: "Intelligent Computer-Vision Pipeline",
    year: "2024",
    status: "R&D",
    role: "Architect & Engineer",
    description:
      "A computer-vision streaming pipeline for concurrent RTSP detection — Kafka and Spark Structured Streaming feeding Delta Lake, with event fusion raising confirmed alerts on a live dashboard.",
    highlights: [
      "Trained YOLOv8 on target industrial objects via manual Roboflow labeling plus dynamic ontology-based labeling with Autodistill / zero-shot models (Grounding DINO)",
      "Microservice-per-source inputs (camera, web scraping, dummy data; IoT-ready) with event fusion — e.g. smoke + high temperature → confirmed alert",
      "React dashboard with WebSocket push alerts, sound notifications, real-time telemetry, and detection heatmaps",
    ],
    tech: [
      "Apache Kafka",
      "Apache Spark",
      "Delta Lake",
      "FastAPI",
      "React.js",
      "WebSockets",
      "YOLOv8",
      "OpenCV",
      "Roboflow",
      "Autodistill",
    ],
    github: "https://github.com/AMGit21",
    featured: true,
    icon: "activity",
    terminal: [
      "kafka › frames in: 4 rtsp streams",
      "spark › yolo v8 inference @ 24fps",
      "fusion › smoke + temp>80°C",
      "⚠ ALERT confirmed → ws push",
      "delta › sink: detections, alerts",
    ],
  },
  {
    id: "multi-tenant-saas",
    title: "Dynamic SaaS Database System",
    subtitle: "Multi-Tenant Data Management",
    year: "2024",
    status: "Shipped",
    role: "Full-Stack Engineer",
    description:
      "Multi-tenant SaaS platform with secure per-tenant database isolation and dynamic schema operations, containerized for repeatable deployment.",
    highlights: [
      "Multi-tenant architecture with strict data isolation",
      "Dynamic schema operations with validation",
      "Containerized deployment with Docker",
    ],
    tech: ["FastAPI", "PostgreSQL", "Next.js", "Docker", "shadcn/ui"],
    github: "https://github.com/AMGit21/Multi-Tenant-Data-Management-System",
    featured: false,
    icon: "database",
    terminal: [],
  },
  {
    id: "music-discovery",
    title: "AI Music Discovery Platform",
    subtitle: "Gemini + Spotify Integration",
    year: "2024",
    status: "Shipped",
    role: "Full-Stack Engineer",
    description:
      "Full-stack music discovery platform combining Google Gemini with the Spotify API — genre and artist exploration through an intelligent contextual chat.",
    highlights: [
      "Google Gemini AI integration for contextual recommendations",
      "Responsive grid-based discovery UI",
      "Intelligent contextual chat system",
    ],
    tech: ["Node.js", "React.js", "Express.js", "MongoDB", "Spotify API", "Gemini AI"],
    github: "https://github.com/AMGit21/spotifyGenresArtists-GeminiChat-frontend",
    featured: false,
    icon: "music",
    terminal: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);
