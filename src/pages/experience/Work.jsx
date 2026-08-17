
import DetailLayout from "../DetailLayout";

export default function Work({ onBack }) {
  return (
    <DetailLayout
      accent="yellow"
      eyebrow="Customer-facing work"
      title={<>Part Time<br />+ People</>}
      summary={
        <>
          🌸 Experience across Apple, Adidas, University of Portsmouth Clearing, Parmar Shoes and Oxfam.
          <br />
          🌸 Built alongside my university studies.
        </>
      }
      introTitle={<>Code is<br /><em>not all I do.</em></>}
      introText={
        <>
          🌸 Working with customers has strengthened the skills that sit underneath good engineering.
          <br />
          🌸 Listening, communicating clearly, staying organised, adapting quickly and remaining calm when things get busy.
        </>
      }
      externalLabel="Read more about it in my CV"
      externalHref="/Michaylia-Stephenson-CV-2026.pdf"
      onBack={onBack}
    >
      <section className="detail-grid">
        <div className="detail-panel">
          <span>The Apple Store</span>
          <p>🌸 20–30+ customers per shift</p>
          <p>🌸 50+ hours product training</p>
          <p>🌸 Product launches</p>
          <p>🌸 Personalised recommendations</p>
        </div>
        <div className="detail-panel">
          <span>Other experience</span>
          <p>🌸 Adidas Outlet</p>
          <p>🌸 University Clearing Assistant</p>
          <p>🌸 Parmar Shoes</p>
          <p>🌸 Oxfam</p>
        </div>
      </section>
    </DetailLayout>
  );
}
