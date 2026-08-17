
const items = [
  ["About", "#about"],
  ["Experience", "#about"],
  ["Projects", "#projects"],
  ["Contact me", "#contact"],
];

export default function NavBar({ onHome, scrollTo }) {
  return (
    <header className="nav">
      <button className="brand" onClick={onHome} aria-label="Back to top">
        <span className="brand-butterfly">
          <img src="/images/Butterfly3.svg" alt="" />
        </span>
        <span>Michaylia Stephenson</span>
      </button>
      <nav>
        {items.map(([label, id]) => (
          <button key={label} onClick={() => scrollTo(id)}>{label}</button>
        ))}
        <a className="github-pill" href="https://github.com/micstephenson" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}
