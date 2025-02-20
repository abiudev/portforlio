

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container  mb-2 mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={() => scrollToSection("hero")} className="text-2xl font-bold lg:ml-37 text-red-900">
      Abiud <span className="hidden sm:inline">Masinde.</span> 
        </button>
        <div className="hidden md:flex space-x-4">
          <button onClick={() => scrollToSection("about")} className="text-red-800 font-semibold hover:text-teal-600 transition-colors">
            About
          </button>
          <button
            onClick={() => scrollToSection("technologies")}
            className="text-red-800 font-semibold hover:text-red-950 transition-colors"
          >
            Technologies
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-red-800 font-semibold hover:text-teal-600 transition-colors"
          >
            Projects
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="/Abiud-Masinde Resume.pdf"
            download
            className="bg-red-900   font-semiboldpx-4 py-2 px-2 rounded-lg sm:ml-4 hover:bg-teal-700 transition-colors"
          >
             Resume
          </a>
          <button
            className="md:hidden text-white hover:text-teal-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu className="text-red-900" size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-teal-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("technologies")}
                className="text-white hover:text-teal-600 transition-colors"
              >
                Technologies
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white hover:text-teal-600 transition-colors"
              >
                Projects
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

