
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { projects } from "../data/data";

const Projects = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="projects" className="py-20 bg-red-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center">
          My <span className="text-red-300">Projects</span>
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-red-100 rounded-lg overflow-hidden shadow-lg border border-red-400"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
              }}
            >
              <motion.div className="relative h-48 lg:h-96" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover object-center" />
                <div className="absolute bottom-0 w-full bg-white bg-opacity-70 font-bold text-black text-center py-2">
                  {project.title}
                </div>
              </motion.div>
              <div className="p-6">
                <p className="text-black mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-red-800 text-white text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
