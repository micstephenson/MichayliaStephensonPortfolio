
import DetailLayout from "../DetailLayout";

export default function LiveVenueVibes({ onBack }) {
  return (
    <DetailLayout
      accent="blue"
      eyebrow="Final year concept"
      title={<>Live Venue<br />Vibes</>}
      summary="A real-time venue discovery concept where people can see the atmosphere of a place before they arrive."
      introTitle={<>The idea<br /><em>behind it.</em></>}
      introText="The concept combines a live map, location-aware venue activity, ratings, comments and trends over time. The goal is to turn the question “what is this place like right now?” into something people can answer before they commit to going."
      externalLabel="GitHub profile"
      externalHref="https://github.com/micstephenson"
      onBack={onBack}
    >
      <section className="detail-grid">
        <div className="detail-panel">
          <span>Experience</span>
          <p>✦ Live venue map</p>
          <p>✦ Current activity indicators</p>
          <p>✦ Ratings + comments</p>
          <p>✦ Trends over time</p>
          <p>✦ Location-aware discovery</p>
        </div>
        <div className="detail-panel">
          <span>Planned stack</span>
          <p>✦ React</p>
          <p>✦ C# + ASP.NET</p>
          <p>✦ Database-backed API</p>
          <p>✦ Live updates</p>
          <p>✦ Responsive web experience</p>
        </div>
      </section>
    </DetailLayout>
  );
}
