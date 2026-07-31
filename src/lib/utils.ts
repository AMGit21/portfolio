import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefixes public asset URLs with the configured base path
 * (e.g. "/portfolio" on GitHub Pages). next/image and next/link
 * handle this automatically, plain <a href> does not.
 */
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
