import { createElement, type ComponentType } from "react";
import {
  SiAndroid,
  SiApachekafka,
  SiApachespark,
  SiCss,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGmail,
  SiGo,
  SiGooglegemini,
  SiGooglesheets,
  SiHtml5,
  SiHuggingface,
  SiJavascript,
  SiJsonwebtokens,
  SiKotlin,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiOpencv,
  SiPhp,
  SiPostgresql,
  SiPydantic,
  SiPytest,
  SiPython,
  SiReact,
  SiRedis,
  SiRoboflow,
  SiShadcnui,
  SiSocketdotio,
  SiSpotify,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
  SiYolo,
} from "react-icons/si";
import {
  Blocks,
  Bot,
  Boxes,
  Braces,
  ChartColumn,
  Database,
  Eye,
  FileText,
  GitBranch,
  Layers,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

type IconComponent = ComponentType<{
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;

/**
 * Maps normalized technology names to brand icons (Simple Icons)
 * with Lucide fallbacks for techs whose logos aren't available.
 */
const iconMap: Record<string, IconComponent> = {
  // Languages
  python: SiPython,
  typescript: SiTypescript,
  javascript: SiJavascript,
  sql: Database,
  php: SiPhp,
  go: SiGo,
  kotlin: SiKotlin,
  html: SiHtml5,
  css: SiCss,

  // Backend
  fastapi: SiFastapi,
  nestjs: SiNestjs,
  "node.js": SiNodedotjs,
  "express.js": SiExpress,
  "rest apis": Braces,
  jwt: SiJsonwebtokens,
  "jwt auth": SiJsonwebtokens,
  microservices: Boxes,
  "event-driven architecture": Zap,

  // Frontend
  react: SiReact,
  "react.js": SiReact,
  "next.js": SiNextdotjs,
  websockets: SiSocketdotio,
  "tailwind css": SiTailwindcss,
  "shadcn/ui": SiShadcnui,

  // AI
  "openai api": Sparkles,
  "openai apis": Sparkles,
  langchain: SiLangchain,
  "hugging face": SiHuggingface,
  lora: Layers,
  "lora fine-tuning": Layers,
  ollama: SiOllama,
  groq: Zap,
  "groq (llama 3.3)": Zap,
  n8n: SiN8N,
  "prompt evaluation": Bot,
  "gemini ai": SiGooglegemini,

  // Data & CV
  "etl / elt": Workflow,
  etl: Workflow,
  "data pipelines": Workflow,
  "data integration": Boxes,
  "apache kafka": SiApachekafka,
  "apache spark": SiApachespark,
  "spark structured streaming": SiApachespark,
  "delta lake": Database,
  "power bi": ChartColumn,
  yolov8: SiYolo,
  opencv: SiOpencv,
  roboflow: SiRoboflow,
  autodistill: Eye,

  // Databases
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  mysql: SiMysql,
  "sql server": Database,
  redis: SiRedis,

  // DevOps
  docker: SiDocker,
  "docker compose": SiDocker,
  "github actions": SiGithubactions,
  "ci/cd": Workflow,
  git: SiGit,
  pytest: SiPytest,
  pydantic: SiPydantic,

  // Other
  "hyperledger besu": Blocks,
  "zero-knowledge auth": ShieldCheck,
  "agile / scrum": GitBranch,
  "technical documentation": FileText,
  "team leadership": Users,
  mentoring: Users,
  android: SiAndroid,
  wordpress: SiWordpress,
  "gmail api": SiGmail,
  "google sheets": SiGooglesheets,
  "spotify api": SiSpotify,
};

export function getTechIcon(name: string): IconComponent | null {
  return iconMap[name.toLowerCase().trim()] ?? null;
}

export function TechChip({ name }: { name: string }) {
  const Icon = getTechIcon(name);
  return (
    <span className="chip">
      {Icon
        ? createElement(Icon, {
            className: "size-3.5 shrink-0",
            "aria-hidden": true,
          })
        : null}
      {name}
    </span>
  );
}
