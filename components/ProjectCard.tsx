import Image from "next/image";
import Link from "next/link";

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
    <div className="bg-[#1a1b1e] rounded-2xl p-4 flex flex-col h-full transition-all hover:bg-[#25262b]">
      {/* Image Container with Colored Frame */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow px-2">
        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item) => (
            <span 
              key={item} 
              className="text-[10px] uppercase tracking-wider bg-zinc-800 text-zinc-300 px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex gap-4">
          <Link 
            href={project.link} 
            className="text-white text-sm font-medium hover:underline"
            target="_blank"
          >
            Live Demo
          </Link>
          <Link 
            href={project.github} 
            className="text-gray-400 text-sm hover:text-white transition-colors"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}