import { useState } from "react";
import gsap from "gsap";
import StaticButterflies from "../components/StaticButterflies";

export default function SkillsSection() {
  const skills = ["React", "JavaScript", "C#", "ASP.NET", "Python", "HTML", "CSS", "Git", "GSAP", "Figma", ".NET", "Dart", "Java", "DevOps"];
  const [flyouts, setFlyouts] = useState([]);

  const spawnButterfly = (event) => {
    const sectionEl = event.currentTarget.closest(".skills");
    if (!sectionEl) return;

    const chipRect = event.currentTarget.getBoundingClientRect();
    const sectionRect = sectionEl.getBoundingClientRect();
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const travelX = (Math.random() > 0.5 ? 1 : -1) * (sectionRect.width * 0.5 + Math.random() * 160);
    const travelY = -(160 + Math.random() * 180);
    const rotation = (travelX > 0 ? 1 : -1) * (95 + Math.random() * 60);

    setFlyouts((prev) => [
      ...prev,
      {
        id,
        x: chipRect.left - sectionRect.left + chipRect.width / 2,
        y: chipRect.top - sectionRect.top + chipRect.height / 2,
        travelX,
        travelY,
        rotation,
        duration: 1400 + Math.random() * 420,
      },
    ]);
  };

  const clearFlyout = (id) => {
    setFlyouts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section id="skills" className="skills section-grid">
      <StaticButterflies count={6} />
      <div className="skills-title">
        <span className="section-kicker">03 / toolbox</span>
        <h2>I Code<br /><span>+ create in</span></h2>
        <p className="skills-hint">*tap a skill (🦋)*</p>
      </div>
      <div className="skills-cloud">
        {skills.map((skill, i) => (
          <button
            type="button"
            className={`skill-chip chip-${i % 4}`}
            key={skill}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.08, duration: 0.2, ease: "power2.out" })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: "power2.out" })}
            onClick={spawnButterfly}
          >
            <span>{skill}</span>
            <span className="skill-sparkles" aria-hidden="true">
              <i className="spark spark-a">✦</i>
              <i className="spark spark-b">✶</i>
              <i className="spark spark-c">✧</i>
            </span>
          </button>
        ))}
      </div>
      <div className="skills-flyouts" aria-hidden="true">
        {flyouts.map((flyout) => (
          <span
            key={flyout.id}
            className="skill-flyout-butterfly"
            style={{
              left: `${flyout.x}px`,
              top: `${flyout.y}px`,
              "--fly-x": `${flyout.travelX}px`,
              "--fly-y": `${flyout.travelY}px`,
              "--fly-rot": `${flyout.rotation}deg`,
              animationDuration: `${flyout.duration}ms`,
            }}
            onAnimationEnd={() => clearFlyout(flyout.id)}
          >
            <img src="/images/Butterfly3.svg" alt="" />
          </span>
        ))}
      </div>
    </section>
  );
}
