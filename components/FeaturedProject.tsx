import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
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
    <section id="projects" className="relative">
      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-xl transition duration-500 hover:border-blue-500/30">
        {/* Gradient Border Glow */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Image Side */}
          <div className="relative overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
            {/* Image Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Floating Accent */}
            <div className="absolute left-6 top-6 z-20">
              <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 backdrop-blur-md">
                Featured Project
              </span>
            </div>

            <div className="relative h-[320px] md:h-[450px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom Glass Info */}
            <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
              <p className="text-sm text-zinc-300">
                Full-stack architecture with scalable backend systems and
                optimized UI performance.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="relative flex flex-col justify-center p-8 md:p-12">
            {/* Tiny Accent Line */}
            <div className="mb-6 h-px w-16 bg-gradient-to-r from-blue-400 to-transparent" />

            <h3 className="max-w-xl text-4xl font-bold leading-tight tracking-[-0.03em] text-white">
              {project.title}
            </h3>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-zinc-200"
              >
                Live Demo
                <ArrowUpRight size={18} />
              </a>

              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                Source Code
                <FaGithub size={18} />
              </a>
            </div>

            {/* Bottom Detail */}
            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-6 text-sm text-zinc-500">
              <div>
                <span className="text-white">Stack:</span> MERN
              </div>
              <div>
                <span className="text-white">Focus:</span> Scalability
              </div>
              <div>
                <span className="text-white">Type:</span> Production Ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
