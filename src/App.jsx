import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import CustomCursor from "./components/CustomCursor"

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="site-shell">
      <CustomCursor />
      <div className="scanline" aria-hidden="true" />
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
    </main>
  )
}
