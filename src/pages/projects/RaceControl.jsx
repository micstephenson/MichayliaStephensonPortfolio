
import DetailLayout from "../DetailLayout";

export default function RaceControl({ onBack }) {
  return (
    <DetailLayout
      accent="yellow"
      eyebrow="Second Year Web Programming · 65%"
      title={<>Race<br />Control</>}
      summary={
        <>
          🌸 A Node.js race-timing application.
          <br />
          🌸 Designed to keep tracking hundreds of competitors.
          <br />
          🌸 Built to continue even when connectivity disappears.
        </>
      }
      introTitle={<>Built for<br /><em>real life.</em></>}
      introText={
        <>
          🌸 Race timing should not stop because the network does.
          <br />
          🌸 The app keeps information locally.
          <br />
          🌸 It tracks competitors in real time.
          <br />
          🌸 It exports results.
          <br />
          🌸 It synchronises once connectivity returns.
        </>
      }
      externalLabel="View project"
      externalHref="https://github.com/micstephenson/Web-Programming-Coursework-Race-Time"
      onBack={onBack}
    >
      <section className="detail-grid">
        <div className="detail-panel">
          <span>Core features</span>
          <p>🌸 Real-time competitor tracking</p>
          <p>🌸 Offline local storage</p>
          <p>🌸 CSV result exports</p>
          <p>🌸 Automatic synchronisation</p>
          <p>🌸 Airplane-mode resilience</p>
        </div>
        <div className="detail-panel">
          <span>Technology</span>
          <p>🌸 Node.js</p>
          <p>🌸 JavaScript</p>
          <p>🌸 HTML + CSS</p>
          <p>🌸 Local storage</p>
          <p>🌸 CSV</p>
        </div>
      </section>
    </DetailLayout>
  );
}
