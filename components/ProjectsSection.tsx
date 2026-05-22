import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-32">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <div className="mb-6 h-px w-20 bg-gradient-to-r from-blue-400 to-transparent" />

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
            Selected Work & Experiments
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A collection of full-stack applications focused on scalability,
            performance, clean UI systems, and real-world functionality.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;