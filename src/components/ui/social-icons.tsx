import type { ComponentProps } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

/** Brand icons (removed from lucide-react v1+) via Simple Icons / Font Awesome. */
export function GithubIcon(props: ComponentProps<"svg">) {
  return <FaGithub aria-hidden {...props} />;
}

export function LinkedinIcon(props: ComponentProps<"svg">) {
  return <FaLinkedinIn aria-hidden {...props} />;
}
