import { technologies } from "../data/data"
import {
  Bot,
  Container,
  FlaskConical,
  GitBranch,
  KeyRound,
  Network,
  ShieldCheck,
  ShieldEllipsis,
  Timer,
} from "lucide-react"

const extraSkills = [
  { name: "Mongoose", icon: Network },
  { name: "REST APIs", icon: FlaskConical },
  { name: "AI/Agentic Integrations", icon: Bot },
  { name: "JWT Auth", icon: KeyRound },
  { name: "RBAC", icon: ShieldCheck },
  { name: "React Testing Library", icon: FlaskConical },
  { name: "SEO", icon: Network },
  { name: "Supertest", icon: FlaskConical },
  { name: "Docker", icon: Container },
  { name: "CI/CD", icon: GitBranch },
  { name: "Rate Limiting", icon: Timer },
  { name: "OWASP Basics", icon: ShieldEllipsis },
]

const Technologies = () => {
  const skills = [
    ...technologies.map((tech) => ({ ...tech, iconType: "react-icons" })),
    ...extraSkills
      .filter((extra) => !technologies.some((tech) => tech.name.toLowerCase() === extra.name.toLowerCase()))
      .map((extra) => ({ ...extra, color: "var(--accent)", iconType: "lucide" })),
  ]

  return (
    <section id="technologies" className="section-shell reveal">
      <div className="section-wrap">
        <div className="section-head">
          <span className="section-head__index">02</span>
          <h2 className="section-head__title">Tech Stack</h2>
          <div className="section-head__rule" />
        </div>

        <div className="skills-grid skills-grid--icons">
          {skills.map((skill) => (
            <div key={skill.name} className="skills-grid__cell skills-grid__cell--icon">
              <skill.icon
                className="skills-grid__icon"
                size={16}
                style={{ color: skill.color }}
                strokeWidth={skill.iconType === "lucide" ? 2 : undefined}
              />
              <span>▸ {skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
