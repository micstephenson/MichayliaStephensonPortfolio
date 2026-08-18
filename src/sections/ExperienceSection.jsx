import StaticButterflies from "../components/StaticButterflies";

export default function ExperienceSection({ onNavigate }) {
  return (
    <section id="experience" className="experience section-grid pink-section">
      <StaticButterflies count={6} />
      <div className="section-label">
        <span className="handwritten">01</span>
        <h2>What<br />Am I<br /><em>Up To?</em></h2>
      </div>
      <div className="experience-cards">
        <button className="info-card card-yellow" onClick={() => onNavigate("/experience/placement")}>
          <span className="card-tag">currently</span>
          <h3>Industrial<br />Placement</h3>
          <p>Building things, learning things and figuring out what kind of developer I want to become.</p>
          <span className="card-arrow">↗</span>
          <span className="learn-more">Learn more</span>
        </button>
        <button className="info-card card-white" onClick={() => onNavigate("/experience/university")}>
          <span className="card-tag">education</span>
          <h3>University<br />+ location</h3>
          <p>Software engineering student with a love for ambitious interfaces and creative technology.</p>
          <span className="card-arrow">↗</span>
          <span className="learn-more">Learn more</span>
        </button>
        <button className="info-card card-pink" onClick={() => onNavigate("/experience/work")}>
          <span className="card-tag">outside code</span>
          <h3>Part Time<br />Jobs</h3>
          <p>Customer-facing experience has taught me communication, resilience and how to keep things moving.</p>
          <span className="card-arrow">↗</span>
          <span className="learn-more">Learn more</span>
        </button>
      </div>
    </section>
  );
}
