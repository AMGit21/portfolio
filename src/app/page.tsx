import { Backdrop } from "@/components/backdrop";
import { BackToTop } from "@/components/back-to-top";
import { CardGlow } from "@/components/card-glow";
import { CursorOrb } from "@/components/cursor-orb";
import { FloatingIcons } from "@/components/floating-icons";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

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
      <FloatingIcons />
      <CardGlow />
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
      <CursorOrb />
    </>
  );
}
