export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  status: "Production" | "R&D" | "Shipped";
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
    subtitle: "B2B Support Intake",
    year: "2026",
    status: "Production",
    role: "Solo Engineer",
    description:
      "Classifies, routes, and enriches incoming B2B support requests with FastAPI, n8n, Gmail, and LLMs. Unstructured email becomes structured tickets the team can act on.",
    highlights: [
      "Dual ingestion: batch processing with retries, plus Gmail/webhook n8n flows that output structured JSON",
      "Schema validation and deterministic routing so requests land in the right queue",
      "Regression tests and Google Sheets fallback logging so failed runs are not silent",
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
      "$ POST /intake  <- gmail webhook",
      "-> classify: billing_dispute (0.97)",
      "-> enrich: account, priority, sentiment",
      "-> route: finance-queue  OK schema valid",
      "OK 42 regression tests passed",
    ],
  },
  {
    id: "nl-sql-chatbot",
    title: "AI Chatbot",
    subtitle: "Natural Language to Database CRUD",
    year: "2025",
    status: "Shipped",
    role: "Solo Engineer",
    description:
      "Lets users query and update a live database in plain language. Uses a locally fine-tuned model, JWT auth, query sanitization, and a Next.js analytics UI.",
    highlights: [
      "Fine-tuned TinyLlama with LoRA for local CPU inference (no GPU required)",
      "JWT auth and query sanitization on every generated statement",
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
      '> "show revenue by client since March"',
      "-> SELECT client, SUM(amount) ...",
      "-> sanitize OK  auth OK  execute OK",
      "<- 14 rows · rendered as chart",
      "model: TinyLlama-1.1B + LoRA (CPU)",
    ],
  },
  {
    id: "streaming-platform",
    title: "Real-Time Data Streaming Platform",
    subtitle: "Computer Vision Pipeline",
    year: "2024",
    status: "R&D",
    role: "Architect & Engineer",
    description:
      "Computer-vision pipeline for concurrent RTSP detection. Kafka and Spark Structured Streaming write to Delta Lake; event fusion raises confirmed alerts on a live dashboard.",
    highlights: [
      "Trained YOLOv8 on industrial objects with Roboflow labeling, plus Autodistill / Grounding DINO for ontology-based labels",
      "Per-source microservices (camera, scraping, dummy data; IoT-ready) with event fusion, e.g. smoke + high temperature = confirmed alert",
      "React dashboard with WebSocket alerts, sound notifications, telemetry, and detection heatmaps",
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
      "kafka > frames in: 4 rtsp streams",
      "spark > yolo v8 inference @ 24fps",
      "fusion > smoke + temp>80C",
      "ALERT confirmed -> ws push",
      "delta > sink: detections, alerts",
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
      "Multi-tenant SaaS platform with per-tenant database isolation and dynamic schema operations, packaged with Docker for repeatable deploys.",
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
      "Music discovery app that combines Google Gemini with the Spotify API so users can explore genres and artists through chat.",
    highlights: [
      "Google Gemini integration for contextual recommendations",
      "Responsive grid-based discovery UI",
      "Chat flow for genre and artist exploration",
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
