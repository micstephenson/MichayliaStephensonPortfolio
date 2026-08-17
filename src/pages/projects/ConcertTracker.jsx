
import DetailLayout from "../DetailLayout";

export default function ConcertTracker({ onBack }) {
  return (
    <DetailLayout
      accent="pink"
      eyebrow="Independent Project"
      title={<>Concert<br />Tracker</>}
      summary="A Blazor Hybrid (.NET MAUI) app for tracking concerts, rating events and keeping a personal concert history."
      introTitle={<>Why I<br /><em>built it.</em></>}
      introText="I wanted to explore the full product journey beyond a classroom brief. Concert Tracker combines a playful interface with local data, API integration and state management so concert information can be recorded and revisited without needing a complicated workflow."
      externalLabel="GitHub profile"
      externalHref="https://github.com/micstephenson/ConcertTracker"
      onBack={onBack}
    >
      <section className="detail-grid">
        <div className="detail-panel">
          <span>Core features</span>
          <p>✦ Track concerts</p>
          <p>✦ Rate events</p>
          <p>✦ Store data locally</p>
          <p>✦ City autocomplete API</p>
          <p>✦ Upcoming / Attended categorisation</p>
        </div>
        <div className="detail-panel">
          <span>Technology</span>
          <p>✦ Blazor Hybrid</p>
          <p>✦ .NET MAUI</p>
          <p>✦ C#</p>
          <p>✦ API integration</p>
          <p>✦ Database schema</p>
          <p>✦ State management</p>
        </div>
      </section>
    </DetailLayout>
  );
}
