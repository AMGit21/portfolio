import { Backdrop } from "@/components/backdrop";
import { BackToTop } from "@/components/back-to-top";
import { DeferredEffects } from "@/components/deferred-effects";
import { Footer } from "@/components/footer";
import { HomeSections } from "@/components/home-sections";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/sections/hero";

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
          <HomeSections />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
