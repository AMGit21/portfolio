import dynamic from "next/dynamic";
import { Backdrop } from "@/components/backdrop";
import { BackToTop } from "@/components/back-to-top";
import { DeferredEffects } from "@/components/deferred-effects";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/sections/hero";

const About = dynamic(() =>
  import("@/components/sections/about").then((m) => ({ default: m.About })),
);
const Skills = dynamic(() =>
  import("@/components/sections/skills").then((m) => ({ default: m.Skills })),
);
const Experience = dynamic(() =>
  import("@/components/sections/experience").then((m) => ({
    default: m.Experience,
  })),
);
const Projects = dynamic(() =>
  import("@/components/sections/projects").then((m) => ({
    default: m.Projects,
  })),
);
const Education = dynamic(() =>
  import("@/components/sections/education").then((m) => ({
    default: m.Education,
  })),
);
const Contact = dynamic(() =>
  import("@/components/sections/contact").then((m) => ({
    default: m.Contact,
  })),
);

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Backdrop />
      <DeferredEffects />
      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
