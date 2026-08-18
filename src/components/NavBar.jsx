
import { useState } from "react";

const items = [
  ["About", "#about"],
  ["Experience", "#about"],
  ["Projects", "#projects"],
  ["Contact me", "#contact"],
];

export default function NavBar({ onHome, scrollTo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (id) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="nav">
      <button
        className="brand"
        onClick={() => {
          onHome();
          setIsMenuOpen(false);
        }}
        aria-label="Back to top"
      >
        <span className="brand-butterfly">
          <img src="/images/Butterfly3.svg" alt="" />
        </span>
        <span>Michaylia Stephenson</span>
      </button>
      <nav className={isMenuOpen ? "is-open" : ""}>
        <button
          type="button"
          className="nav-menu-toggle"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="2.6" />
            <circle cx="12" cy="6.2" r="2.3" />
            <circle cx="17" cy="8.4" r="2.3" />
            <circle cx="17" cy="15.6" r="2.3" />
            <circle cx="12" cy="17.8" r="2.3" />
            <circle cx="7" cy="15.6" r="2.3" />
            <circle cx="7" cy="8.4" r="2.3" />
          </svg>
        </button>
        <div className="nav-links" role="menu">
          {items.map(([label, id]) => (
            <button key={label} onClick={() => handleNavigate(id)}>{label}</button>
          ))}
          <a
            className="github-pill"
            href="https://github.com/micstephenson"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            GitHub ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
