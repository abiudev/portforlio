
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
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4 text-center tracking-tight"
          >
            Featured <span className="text-neon-gradient">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-neon-gradient rounded-full"></div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-2xl flex flex-col h-full"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.15 } },
              }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md border border-white/10">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md border border-white/10">
                        +{project.tech.length - 3} More
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors group/btn"
                    >
                      <span>Explore Project</span>
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
