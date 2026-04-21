import ContactSection from "@/components/ContactSection";
import FeaturedProjectCard from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { featuredProject } from "@/data/projects";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Hero />
      <FeaturedProjectCard project={featuredProject} />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
  </main>
  );
}
