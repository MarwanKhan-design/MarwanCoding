import Image from "next/image";
import Link from "next/link";
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

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/30">
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/[0.03] to-blue-500/[0.08] opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative overflow-hidden border-b border-white/10">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* Floating Label */}
        <div className="absolute left-5 top-5 z-20">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-md">
            Full Stack
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col p-7">
        {/* Accent Line */}
        <div className="mb-5 h-px w-12 bg-gradient-to-r from-blue-400 to-transparent" />

        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
          {project.title}
        </h3>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-200"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          {/* Links */}
          <div className="flex items-center gap-3">
            <Link
              href={project.link}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition duration-300 hover:bg-zinc-200"
            >
              Live
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href={project.github}
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              <FaGithub className="text-base" />
            </Link>
          </div>

          {/* Tiny Detail */}
          <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Case Study
          </div>
        </div>
      </div>
    </div>
  );
}
