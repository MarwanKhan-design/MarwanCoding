import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  github: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col h-full border border-white/10 rounded-xl p-5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
      
      {/* Image Container with Aspect Ratio control */}
      <div className="relative w-full aspect-video mb-5 overflow-hidden rounded-lg bg-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mt-2 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Tags - smaller and more subtle */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-[10px] font-medium tracking-wide uppercase border border-white/5 px-2 py-0.5 rounded bg-white/5 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links - Side by Side instead of stacked */}
        <div className="flex gap-4 mt-auto pt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            Live Demo <span>→</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            GitHub <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}