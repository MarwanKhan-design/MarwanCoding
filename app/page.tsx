import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
  </main>
  );
}
