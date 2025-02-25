"use client"
import React, { useState } from "react"
import ProjectCard from "@/components/ProjectCard"
import ProjectModal from "@/components/ProjectModal"
import { IProject, projectsEN, projectsES } from "@/utils/projects"

interface ProjectsProps {
  t: Record<string, string>;
  lang: string;
}

function Projects({ t, lang }: ProjectsProps): React.JSX.Element {

  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false)
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null)

  const handleProjectModalOpen = (project: IProject) => {
    setIsProjectModalOpen(true)
    setSelectedProject(project)
  }

  const handleProjectModalClose = () => {
    setIsProjectModalOpen(false)
    setSelectedProject(null)
  }

  const projects = lang === "es" ? projectsES : projectsEN

  return (
    <section
      className="bg-bg-primary dark:bg-dark-bg-primary py-20 px-4 sm:px-6 lg:px-8 mt-24"
      id={lang === "es" ? "proyectos" : "projects"}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-text-primary dark:text-dark-text-primary">
            {t.section.title}
          </h2>
          <p className="text-text-primary dark:text-dark-text-primary text-opacity-70 dark:text-opacity-60 max-w-2xl mx-auto">
            {t.section.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              handleProjectModalOpen={handleProjectModalOpen}
              t={t.modal_card}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        isProjectModalOpen={isProjectModalOpen}
        handleProjectModalClose={handleProjectModalClose}
        selectedProject={selectedProject}
        t={t.modal_card}
      />
    </section>
  )
}

export default Projects