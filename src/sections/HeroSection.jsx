import StaticButterflies from "../components/StaticButterflies";

export default function HeroSection() {
  return (
    <section id="hero" className="hero section-grid">
      <StaticButterflies count={5} />
      <div className="hero-copy">
        <span className="eyebrow handwritten">Hey I'm</span>
        <h1>Michaylia<br /><span>Stephenson</span></h1>
        <p className="hero-kicker">
          A Final Year Software Engineering Student turning curious ideas into
          thoughtful digital experiences.
        </p>
        <button className="scroll-button" onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}>
          <span>Scroll</span>
          <img src="/images/mouse.svg" alt="scroll" />
        </button>
      </div>
      <div className="hero-photo">
        <div className="photo-note handwritten">more about<br />me ↓</div>
        <div className="photo-frame">
          <img src="/images/me.jpg" alt="Michaylia Stephenson" />
        </div>
        <span className="photo-caption">creative mind / aspiring software engineer</span>
      </div>
      <div className="hero-doodle doodle-one">✦</div>
      <div className="hero-doodle doodle-two">✿</div>
    </section>
  );
}
