"use client"
import React from "react"
import { motion } from "motion/react"
import { FaReact, FaCss3Alt, FaGithub, FaNodeJs } from "react-icons/fa"
import { SiNextdotjs, SiJavascript, SiTypescript, SiMui, SiExpress, SiMysql, SiMongodb, SiTailwindcss, SiFigma } from "react-icons/si"
import MagneticEffect from "@/components/MagneticEffect"
import { TbBrandFramerMotion } from "react-icons/tb"

interface StacksProps {
  t: Record<string, string>;
}

function Stacks({t}: StacksProps): React.JSX.Element {

  const technologies = [
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "Figma", icon: <SiFigma size={40} /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} /> },
    { name: "Material UI", icon: <SiMui size={40} /> },
    { name: "Motion", icon: <TbBrandFramerMotion size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Express", icon: <SiExpress size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "MySQL", icon: <SiMysql size={40} /> },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="px-4 md:px-8 lg:px-16 py-16 bg-bg-primary dark:bg-dark-bg-primary mt-24"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        aria-label={t.title}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center text-text-primary dark:text-dark-text-primary"
      >
        {t.title}
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-6 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        viewport={{ once: true }}
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            role="image"
            aria-label={`${tech.name}`}
            className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center transform transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-400 border-2 border-transparent"
          >
            <MagneticEffect className=" text-cyan-400 mb-4">
              {tech.icon}
            </MagneticEffect>
            <h3 className="text-lg font-medium text-center text-text-primary dark:text-dark-text-primary">
              {tech.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Stacks