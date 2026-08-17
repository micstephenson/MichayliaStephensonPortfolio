
import DetailLayout from "../DetailLayout";

const apps = [
  ["Fines", "27", "1,589", "20", "React · C# · .NET", "Major Phase 2 work"],
  ["Utility Belt", "13", "28,692", "60", "Razor · C#", "Designed and built Utility"],
  ["CVLink New", "4", "112", "32", "React · C# · .NET", "Majority bug fixes"],
  ["HGV Toolbox", "4", "684", "24", "React · C# · .NET", "Created new pages and functionality"],
  ["SSO", "2", "156", "1", "React · C# · .NET", "Majority .NET upgrades"],
  ["Client Portal", "1", "8", "7", "—", ".NET upgrades"],
  ["Home/CVConnect", "1", "0", "1", "—", ".NET upgrades"],
  ["Document Service", "1", "0", "1", "C#", ".NET upgrades"],
];

export default function Placement({ onBack }) {
  return (
    <DetailLayout
      accent="pink"
      eyebrow="Zenith · 2025 — 2026"
      title={<>Placement<br />@ Zenith</>}
      summary="Software Engineering Industrial Placement Student, contributing to client-facing Commercial webpages and cross-functional technology projects."
      introTitle={<>One year in<br /><em>Leeds.</em></>}
      introText={<>
        <div>🌸 Relocated from <strong style={{ fontFamily: "monospace" }}>Essex</strong>, to <strong style={{ fontFamily: "monospace" }}>Portsmouth</strong>, to <strong style={{ fontFamily: "monospace" }}>Leeds</strong> to be a Placement student At Zenith.</div>
        <div>🌸 I contributed full-stack, database-integrated features across 5+ client-facing Commercial webpages, working with C#, React and SQL.</div>
        <div>🌸 My placement combined development, debugging, planning, cross-functional collaboration and learning how software changes when it is used by a real business.</div>
      </>}
      externalLabel="Visit Zenith"
      externalHref="https://www.zenith.co.uk/"
      onBack={onBack}
    >
      <section className="placement-stats">
        <div className="stat"><strong>53</strong><span>work items</span></div>
        <div className="stat"><strong>31,241</strong><span>net lines changed</span></div>
        <div className="stat"><strong>146</strong><span>commits</span></div>
        <div className="stat"><strong>69</strong><span>placement tickets</span></div>
      </section>

      <section className="detail-section">
        <div className="detail-section-heading">
          <span className="section-kicker">Application contribution</span>
          <h2>What I<br /><em>worked on.</em></h2>
        </div>
        <div className="app-table">
          {apps.map(([name, items, net, commits, langs, note]) => (
            <div className="app-row" key={name}>
              <strong>{name}</strong>
              <span>{items} items</span>
              <span>{net} net</span>
              <span>{commits} commits</span>
              <span>{langs}</span>
              <small>{note}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="detail-section ticket-section">
        <div className="detail-section-heading">
          <span className="section-kicker">Placement ticket data</span>
          <h2>The<br /><em>breakdown.</em></h2>
        </div>
        <div className="ticket-bars">
          {[
            ["User Stories", 39],
            ["Defects", 13],
            ["Bugs", 9],
            ["Tasks", 6],
            ["Spikes", 2],
          ].map(([label, value]) => (
            <div className="ticket-bar" key={label}>
              <div><span>{label}</span><strong>{value}</strong></div>
              <i style={{ "--bar": `${(value / 39) * 100}%` }} />
            </div>
          ))}
        </div>
      </section>

      <section className="detail-grid">
        <div className="detail-panel">
          <span>What I learned</span>
          <p>🌸 Full-stack development</p>
          <p>🌸 Database-integrated features</p>
          <p>🌸 Debugging + code quality</p>
          <p>🌸 Planning and self-directed work</p>
          <p>🌸 Cross-functional collaboration</p>
        </div>
        <div className="detail-panel">
          <span>Tech</span>
          <p>🌸 C#</p>
          <p>🌸 React</p>
          <p>🌸 SQL</p>
          <p>🌸 Razor</p>
          <p>🌸 .NET</p>
        </div>
      </section>
    </DetailLayout>
  );
}
