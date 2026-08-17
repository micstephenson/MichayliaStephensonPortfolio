
import DetailLayout from "../DetailLayout";

export default function RaceControl({ onBack }) {
  return (
    <DetailLayout
      accent="yellow"
      eyebrow="Second Year Web Programming · 65%"
      title={<>Race<br />Control</>}
      summary="A Node.js race-timing application designed to keep tracking hundreds of competitors even when connectivity disappears."
      introTitle={<>Built for<br /><em>real life.</em></>}
      introText="RaceControl was built around a practical constraint: race timing should not stop because the network does. The application keeps information locally, tracks competitors in real time, exports results and synchronises once connectivity returns."
      externalLabel="GitHub profile"
      externalHref="https://github.com/micstephenson/Web-Programming-Coursework-Race-Time"
      onBack={onBack}
    >
      <section className="detail-grid">
        <div className="detail-panel">
          <span>Core features</span>
          <p>✦ Real-time competitor tracking</p>
          <p>✦ Offline local storage</p>
          <p>✦ CSV result exports</p>
          <p>✦ Automatic synchronisation</p>
          <p>✦ Airplane-mode resilience</p>
        </div>
        <div className="detail-panel">
          <span>Technology</span>
          <p>✦ Node.js</p>
          <p>✦ JavaScript</p>
          <p>✦ HTML + CSS</p>
          <p>✦ Local storage</p>
          <p>✦ CSV</p>
        </div>
      </section>
    </DetailLayout>
  );
}
