import gsap from "gsap";
import StaticButterflies from "../components/StaticButterflies";

export default function SkillsSection() {
  const skills = ["React", "JavaScript", "C#", "ASP.NET", "Python", "HTML", "CSS", "Git", "GSAP", "Figma", ".NET", "Dart", "Java", "DevOps"];

  return (
    <section id="skills" className="skills section-grid">
      <StaticButterflies count={6} />
      <div className="skills-title">
        <span className="section-kicker">03 / toolbox</span>
        <h2>Code<br /><span>+ create.</span></h2>
      </div>
      <div className="skills-cloud">
        {skills.map((skill, i) => (
          <span
            className={`skill-chip chip-${i % 4}`}
            key={skill}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.08, duration: 0.2, ease: "power2.out" })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: "power2.out" })}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
