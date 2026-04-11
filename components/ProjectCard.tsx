type Project = {
    title: string;
    description: string;
    tech: string[];
    link: string;
  };
  
  export default function ProjectCard({ project }: { project: Project }) {
    return (
      <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
        <h3 className="text-xl font-semibold">{project.title}</h3>
  
        <p className="text-gray-400 mt-3">{project.description}</p>
  
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs border border-gray-700 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
  
        <a
          href={project.link}
          target="_blank"
          className="inline-block mt-5 text-sm text-white underline"
        >
          View Project →
        </a>
      </div>
    );
  }