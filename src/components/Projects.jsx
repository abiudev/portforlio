import { projects } from "../data/data"

const Projects = () => {
  return (
    <section id="projects" className="section-shell reveal">
      <div className="section-wrap">
        <div className="section-head">
          <span className="section-head__index">03</span>
          <h2 className="section-head__title">Projects</h2>
          <div className="section-head__rule" />
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article key={project.title} className="project-row">
              <span className="project-row__index">{String(index + 1).padStart(2, "0")}</span>
              <div className="project-row__thumb">
                <img src={project.image} alt={`${project.title} thumbnail`} />
              </div>

              <div className="project-row__main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-row__link">
                  Explore Project
                </a>
              </div>

              <div className="project-row__tags">
                {project.tech.map((item) => (
                  <span key={`${project.title}-${item}`} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
