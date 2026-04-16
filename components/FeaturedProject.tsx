import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  github: string;
};

export default function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative border border-blue-500/30 rounded-2xl p-1 bg-gradient-to-br from-blue-500/10 to-purple-500/10 hover:border-blue-500/50 transition duration-500">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl -z-10 group-hover:bg-blue-500/10 transition duration-500" />

      <div className="flex flex-col md:flex-row gap-8 bg-black/40 backdrop-blur-md p-6 rounded-[calc(1rem-1px)] h-full">
        
        {/* Larger, Featured Image Container */}
        <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden rounded-xl border border-white/5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-700"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold bg-blue-400/10 px-2 py-0.5 rounded-full">
              Featured Project
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {project.title}
          </h3>

          <p className="text-gray-300 mt-4 leading-relaxed text-lg">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs border border-blue-500/20 px-3 py-1 rounded-full bg-blue-500/5 text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6 mt-8">
            <a
              href={project.link}
              target="_blank"
              className="text-sm font-medium text-white flex items-center gap-1 hover:text-blue-400 transition-colors"
            >
              Live Demo <span className="text-lg">→</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              className="text-sm font-medium text-gray-400 flex items-center gap-1 hover:text-white transition-colors"
            >
              Source Code <span className="text-lg">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}