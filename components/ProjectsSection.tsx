import { projects } from '@/data/projects'
import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
<section className="bg-[#0f1013] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection