import { useState } from "react";
import StaticButterflies from "../components/StaticButterflies";
import PostItNote from "../components/PostItNote";

const EMAIL_ADDRESS = "michayliastephenson@gmail.com";

function copyWithFallback(value) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);
  return copied;
}

export default function ContactSection() {
  const [showClipboardNote, setShowClipboardNote] = useState(false);
  const emailHref = "mailto:michayliastephenson@gmail.com?subject=Let's%20work%20together";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      return true;
    } catch {
      return copyWithFallback(EMAIL_ADDRESS);
    }
  };

  const handleEmailCopy = () => {
    copyEmailToClipboard().then((copied) => {
      if (!copied) return;
      setShowClipboardNote(false);
      window.requestAnimationFrame(() => setShowClipboardNote(true));
    });
  };

  return (
    <section id="contact" className="contact pink-section">
      <StaticButterflies count={2} />
      <div className="contact-inner">
        <span className="section-kicker">04 / contact me</span>
        <h2>Let's make<br /><em>something.</em></h2>
        <p>I would love to work with you!</p>
        <div className="contact-actions">
          <a
            className="email-button"
            href={emailHref}
            onClick={handleEmailCopy}
          >
            EMAIL ME <span>↗</span>
          </a>
          <a className="email-button cv-button" href="/Michaylia-Stephenson-CV-2026.pdf" download>
            DOWNLOAD MY CV <span>↓</span>
          </a>
        </div>
        <div className="contact-links">
          <a href="https://github.com/micstephenson" target="_blank" rel="noreferrer">
            <span className="contact-link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.2 11.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.54-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.82 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.23v3.3c0 .32.21.69.82.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0Z" />
              </svg>
            </span>
            <span>GitHub ↗</span>
          </a>
          <a href="https://www.linkedin.com/in/michaylia-stephenson-a36920232/" target="_blank" rel="noreferrer">
            <span className="contact-link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.84-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.42v1.56h.05c.48-.9 1.64-1.84 3.37-1.84 3.6 0 4.26 2.37 4.26 5.46v6.27ZM5.34 7.43A2.07 2.07 0 1 1 5.34 3.3a2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.2.79 24 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0Z" />
              </svg>
            </span>
            <span>LinkedIn ↗</span>
          </a>
          <a href={emailHref} className="contact-link-button" onClick={handleEmailCopy}>
            <span className="contact-link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.06-8 5-8-5V6l8 5 8-5v2.06Z" />
              </svg>
            </span>
            <span>Email ↗</span>
          </a>
        </div>
        <PostItNote
          message="added to clipboard"
          color="var(--yellow)"
          visible={showClipboardNote}
          onClose={() => setShowClipboardNote(false)}
        />
      </div>
    </section>
  );
}
