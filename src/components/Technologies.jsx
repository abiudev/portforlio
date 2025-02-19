"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { technologies } from "../data/data"

const Technologies = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section id="technologies" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center">
          Technologies I <span className="text-teal-600">Work With</span>
        </h2>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
              }}
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-6xl mb-2">
                <tech.icon style={{ color: tech.color }} />
              </motion.div>
              <span className="text-sm text-teal-600">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies

