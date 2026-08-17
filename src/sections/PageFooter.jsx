export default function PageFooter() {
  return (
    <footer>
      <span>Michaylia Stephenson © 2026</span>
      <span className="handwritten">Michaylia Stephenson</span>
      <button onClick={() => document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" })}>Back to top ↑</button>
    </footer>
  );
}
