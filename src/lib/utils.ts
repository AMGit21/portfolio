import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefixes public asset URLs with the configured base path
 * (e.g. "/portfolio" on GitHub Pages). Use for plain <img>, <a href>
 * to files in /public, and similar — static export does not always
 * inject basePath into next/image the way local next/link does.
 */
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
