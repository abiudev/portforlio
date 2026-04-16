import { Github, Linkedin, Twitter } from "lucide-react"
import { trackEvent } from "../lib/analytics.js"

const stats = [
  { label: "Experience", value: "4+ Years" },
  { label: "Projects", value: "15+" },
  { label: "Location", value: "Nairobi, KE" },
]

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/abiudev", icon: Linkedin },
  { label: "X", href: "https://x.com/masindevs", icon: Twitter },
  { label: "GitHub", href: "https://github.com/abiudev", icon: Github },
]

const Hero = () => {
  return (
    <section id="about" className="hero section-shell">
      <div className="hero__layout">
        <div className="hero__content">
          <p className="hero__label hero-animate" style={{ animationDelay: "0s" }}>
            Portfolio / Fullstack Engineer
          </p>

          <h1 className="hero__title hero-animate" style={{ animationDelay: "0.2s" }}>
            <span>ABIUD</span>
            <span className="hero__title--ghost">MASINDE</span>
          </h1>

          <p className="hero__intro hero-animate" style={{ animationDelay: "0.4s" }}>
            Hey 👋 I am Abiud Masinde, FullStack Developer.
          </p>
          <p className="hero__about hero-animate" style={{ animationDelay: "0.5s" }}>
            I am a creative and results-driven fullstack developer with 4+ years of experience specializing in
            ReactJS, React Native, NextJS, Vanilla JavaScript, NodeJs, ExpressJs and Redux. I excel at building
            responsive, high-performance web applications, integrating RESTful APIs, and delivering scalable,
            SEO-friendly solutions and AI/Agentic Integrations. Proficient with PostgreSQL, Git, GitHub, and modern
            front-end tools, I thrive in agile team environments and enjoy leveraging emerging technologies to enhance
            user experiences and solve complex challenges. JavaScript, React, Next, Node, Express, Svelte, Javascript,
            Tailwind CSS.
          </p>

        </div>

        <div className="hero__actions hero-animate" style={{ animationDelay: "0.7s" }}>
          <a
            href="mailto:abiudev@gmail.com"
            className="btn-primary"
            onClick={() => trackEvent("hire_me_clicked", { location: "hero" })}
          >
            Hire Me
          </a>
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              onClick={() => trackEvent("social_link_clicked", { platform: label, location: "hero" })}
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="hero__stats hero-animate" style={{ animationDelay: "0.9s" }}>
        {stats.map((item) => (
          <div key={item.label} className="hero__stat">
            <span>{item.value}</span>
            <small>{item.label}</small>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
