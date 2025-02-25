"use client"
import React from "react"
import { motion } from "motion/react"
import ExperienceCard from "@/components/ExperienceCard"
import { experiencesEN, experiencesES } from "@/utils/experiences"

interface ExperienceProps {
  t: Record<string, string>;
  lang: string;
}

function Experience({ t, lang }: ExperienceProps): React.JSX.Element {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const experiences = lang === "es" ? experiencesES : experiencesEN

  return (
    <section
      className="dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-800 transition-colors duration-300"
      aria-labelledby="experience-title"
    >
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h2
          id="experience-title" 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center text-text-primary dark:text-dark-text-primary">
          {t.title}
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <article key={exp.id}>
              <ExperienceCard
                exp={exp}
              />
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience