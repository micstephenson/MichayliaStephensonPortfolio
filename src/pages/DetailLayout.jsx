
import StaticButterflies from "../components/StaticButterflies";

export default function DetailLayout({
  accent = "pink",
  eyebrow,
  title,
  summary,
  introTitle,
  introText,
  children,
  externalLabel,
  externalHref,
  backLabel = "← Back to portfolio",
  onBack,
}) {
  return (
    <main className={`detail-page detail-${accent}`}>
      <StaticButterflies count={9} />
      <section className="detail-hero">
        <span className="section-kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{summary}</p>
      </section>
      <section className="detail-body">
        <div>
          <span className="section-kicker">A little more</span>
          <h2>{introTitle}</h2>
        </div>
        <p>{introText}</p>
      </section>
      {children}
      <div className="detail-actions">
        {externalHref && (
          <a className="detail-button primary" href={externalHref} target="_blank" rel="noreferrer">
            {externalLabel} ↗
          </a>
        )}
        <button className="detail-button" onClick={onBack}>{backLabel}</button>
      </div>
    </main>
  );
}
