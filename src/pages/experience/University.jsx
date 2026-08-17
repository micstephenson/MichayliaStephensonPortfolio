
import DetailLayout from "../DetailLayout";

export default function University({ onBack }) {
  return (
    <DetailLayout
      accent="blue"
      eyebrow="University of Portsmouth · 2023 — 2027"
      title={<>University<br />Of Portsmouth</>}
      summary="BSc Software Engineering (Hons) with an optional placement, building a broad foundation across software development, databases and usability."
      introTitle={<>Learning<br /><em>the craft.</em></>}
      introText="My degree has taken me from database design and SQL to web programming, software engineering practice and ethical hacking. It has also given me opportunities to work in teams, communicate technical decisions and independently deepen my skills."
      externalLabel="Visit University of Portsmouth"
      externalHref="https://www.port.ac.uk/"
      onBack={onBack}
    >
      <section className="detail-grid">
        <div className="detail-panel">
          <span>Modules</span>
          <p>✦ Database Principles</p>
          <p>✦ Software Engineering Theory and Practice</p>
          <p>✦ Ethical Hacking</p>
          <p>✦ Usability Engineering</p>
          <p>✦ Data Structures and Algorithms</p>
          <p>✦ Web Programming</p>
        </div>
        <div className="detail-panel">
          <span>Beyond modules</span>
          <p>✦ Course Representative</p>
          <p>✦ Team software projects</p>
          <p>✦ SQL + database work</p>
          <p>✦ Front-end development</p>
          <p>✦ Security research practice</p>
        </div>
      </section>
    </DetailLayout>
  );
}
