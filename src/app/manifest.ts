import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: profile.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#151b2b",
    theme_color: "#151b2b",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
