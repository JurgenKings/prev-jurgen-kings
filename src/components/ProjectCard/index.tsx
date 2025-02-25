"use client"
import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import TechIcon from "@/components/TechIcon"
import { IProject } from "@/utils/projects"

interface ProjectCardProps {
  project: IProject;
  index: number;
  handleProjectModalOpen: React.Dispatch<React.SetStateAction<void>>;
  t: Record<string, string>;
}

function ProjectCard({ project, index, handleProjectModalOpen, t }: ProjectCardProps): React.JSX.Element {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group overflow-hidden rounded-xl shadow-xl bg-bg-primary dark:bg-dark-bg-primary h-[300px] md:h-[400px]"
      whileHover={{ scale: 1.02 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleProjectModalOpen(project)}
    >
      <div className="w-full h-full">
        <Image
          src={project.image[0]}
          alt={project.title}
          className="object-fill w-full h-full cursor-pointer"
          width={600}
          height={600}
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/80 to-transparent opacity-90 transition-opacity group-hover:opacity-100 cursor-pointer backdrop-blur-[2px]"
          role="presentation"
          onClick={() => handleProjectModalOpen(project)}
        >
          <div className="absolute bottom-0 p-6 space-y-4">
            <h3
              aria-label={project.title}
              className="text-2xl font-bold text-white cursor-pointer"
              onClick={() => handleProjectModalOpen(project)}
            >
              {project.title}
            </h3>
            <p className="text-gray-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-200"
                >
                  <TechIcon tech={tech} />
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              {project.liveLink && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
                  aria-label={t.live_demo}
                  onClick={(e) => e.stopPropagation()}
                >
                  {t.live_demo} <FaExternalLinkAlt />
                </motion.a>
              )}
              {project.githubLink && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors"
                  aria-label="GitHub"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub <FaGithub />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard  