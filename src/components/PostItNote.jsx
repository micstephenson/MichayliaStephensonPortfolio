import { useEffect } from "react";

export default function PostItNote({
  message,
  color = "var(--yellow)",
  visible = false,
  duration = 1800,
  onClose,
  className = ""
}) {
  useEffect(() => {
    if (!visible || !duration) return undefined;

    const timeoutId = window.setTimeout(() => {
      onClose?.();
    }, duration);

    return () => window.clearTimeout(timeoutId);
  }, [visible, duration, onClose]);

  return (
    <div
      className={`post-it-note ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--post-it-color": color }}
      role="status"
      aria-live="polite"
      aria-hidden={!visible}
    >
      <span className="post-it-tape" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}