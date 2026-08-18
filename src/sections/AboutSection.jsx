import StaticButterflies from "../components/StaticButterflies";

export default function AboutSection() {
  return (
    <section id="about" className="about section-grid">
      <StaticButterflies count={5} />
      <div className="about-copy">
        <span className="eyebrow handwritten">Hey I'm</span>
        <h1>Michaylia<br /><span>Stephenson</span></h1>
        <p className="about-kicker">
          A Final Year Software Engineering Student turning curious ideas into
          thoughtful digital experiences.
        </p>
        <button className="scroll-button" onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}>
          <span>Scroll</span>
          <img src="/images/mouse.svg" alt="scroll" />
        </button>
      </div>
      <div className="about-photo">
        <div className="photo-note handwritten">more about<br />me ↓</div>
        <div className="photo-frame">
          <img src="/images/me.jpg" alt="Michaylia Stephenson" />
        </div>
        <span className="photo-caption">creative mind / aspiring software engineer</span>
      </div>
      <div className="about-doodle doodle-one">✦</div>
      <div className="about-doodle doodle-two">✿</div>
    </section>
  );
}
