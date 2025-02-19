"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

import { projects } from "../data/data";
const Projects = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center">
          My <span className="text-teal-600">Projects</span>
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-teal-600"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
              }}
            >
              <motion.div className="relative h-48" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-teal-600">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

