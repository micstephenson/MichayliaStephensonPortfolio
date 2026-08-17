import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import StaticButterflies from "../components/StaticButterflies";

const projects = [
  {
    slug: "concert-tracker",
    number: "01",
    type: "Independent project",
    title: <>Concert<br />Tracker</>,
    text: "Track concerts, rate events and keep a personal history in a Blazor Hybrid app.",
    className: "project-main",
  },
  {
    slug: "racecontrol",
    number: "02",
    type: "Second year web programming coursework · 65%",
    title: <>Race<br />Control</>,
    text: "A race timing app designed to keep tracking competitors even when connectivity disappears.",
    className: "project-small",
  },
  {
    slug: "live-venue-vibes",
    number: "03",
    type: "Upcoming Final year concept",
    title: <>Live Venue<br />Vibes</>,
    text: "A real-time map experience showing venue activity, ratings and the vibe before you arrive.",
    className: "light-card",
  },
];

export default function ProjectsSection({ onNavigate }) {
  const projectSection = useRef(null);
  const track = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");
      const getDistance = () => {
        if (!track.current || !projectSection.current) return 0;
        const styles = window.getComputedStyle(track.current);
        const rightPadding = parseFloat(styles.paddingRight) || 0;
        return Math.max(0, track.current.scrollWidth - projectSection.current.clientWidth + rightPadding);
      };

      gsap.to(track.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: projectSection.current,
          start: "top top",
          end: () => `+=${Math.max(getDistance(), window.innerHeight * 0.9)}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });

      cards.forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 55 }, {
          opacity: 1, y: 0, duration: .7, ease: "back.out(1.2)",
          scrollTrigger: { trigger: el, containerAnimation: undefined, start: "top 90%", once: true }
        });
        gsap.to(el, {
          y: i % 2 ? -16 : 16,
          duration: 2.3 + i * .25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: .6 + i * .12,
        });
      });
    }, projectSection);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={projectSection} className="projects pink-section project-flavor">
      <StaticButterflies count={5} />
      <div className="projects-heading">
        <span className="section-kicker">02 / selected projects</span>
        <h2>Things I've<br /><span>made.</span></h2>
      </div>
      <div ref={track} className="project-track">
        {projects.map((p) => (
          <button key={p.slug} className={`project-card ${p.className}`} onClick={() => onNavigate(`/projects/${p.slug}`)}>
            <div className="project-number">{p.number}</div>
            <div>
              <p className="project-type">{p.type}</p>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
            <span className="project-link">Explore ↗</span>
          </button>
        ))}
      </div>
    </section>
  );
}
