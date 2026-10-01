import { About } from "@/components/About";
import { AIFocus } from "@/components/AIFocus";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { TechMarquee } from "@/components/TechMarquee";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-base text-foreground">
      {/* film grain */}
      <div
        className="noise pointer-events-none fixed inset-0 z-[60] opacity-[0.025]"
        aria-hidden
      />

      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <AIFocus />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
