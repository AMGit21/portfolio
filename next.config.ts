import type { NextConfig } from "next";

/**
 * Static export so the site keeps deploying to GitHub Pages.
 * NEXT_PUBLIC_BASE_PATH is set to "/portfolio" by the deploy workflow
 * (project pages live under https://amgit21.github.io/portfolio).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: process.cwd(),
  basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
