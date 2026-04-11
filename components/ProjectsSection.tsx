import { projects } from '@/data/projects'
import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
<section id="projects" className="py-20">
  <h2 className="text-3xl font-bold mb-10">Projects</h2>

  <div className="grid md:grid-cols-2 gap-6">
    {projects.map((project, i) => (
      <ProjectCard key={i} project={project} />
    ))}
  </div>
</section>
  )
}

export default ProjectsSection