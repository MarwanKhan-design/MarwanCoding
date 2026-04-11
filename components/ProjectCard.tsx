type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition duration-300">
      
      <h3 className="text-xl font-semibold">
        {project.title}
      </h3>

      <p className="text-gray-400 mt-3 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs border border-white/10 px-2 py-1 rounded bg-black/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        className="inline-block mt-5 text-sm text-white group-hover:underline"
      >
        View Project →
      </a>
    </div>
  );
}