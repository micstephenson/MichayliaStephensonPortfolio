import StaticButterflies from "../components/StaticButterflies";

export default function ContactSection() {
  return (
    <section id="contact" className="contact pink-section">
      <StaticButterflies count={7} />
      <div className="contact-inner">
        <span className="section-kicker">04 / contact me</span>
        <h2>Let's make<br /><em>something.</em></h2>
        <p>I would love to work with you!</p>
        <div className="contact-actions">
          <a 
            className="email-button" 
            href="mailto:michayliastephenson@gmail.com?subject=Let's%20work%20together"
          >
            EMAIL ME <span>↗</span>
          </a>
          <a className="email-button cv-button" href="/Michaylia-Stephenson-CV-2026.pdf" download>
            DOWNLOAD MY CV <span>↓</span>
          </a>
        </div>
        <div className="contact-links">
          <a href="https://github.com/micstephenson" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="mailto:michayliastephenson@gmail.com?subject=Let's%20work%20together">Email ↗</a>
        </div>
      </div>
    </section>
  );
}
