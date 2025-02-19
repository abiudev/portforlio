import Navbar from "./components/Navbar"

import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"

export default function Home() {
  return (
    <main className="bg-white"> 
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
    </main>
  )
}

