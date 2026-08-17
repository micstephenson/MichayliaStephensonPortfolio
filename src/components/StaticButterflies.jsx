
import Butterfly from "./Butterfly";

export default function StaticButterflies({ count = 6, className = "" }) {
  return (
    <div className={`static-butterflies ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <Butterfly key={i} size={i % 3 === 0 ? "small" : "tiny"} className={`static-b${(i % 8) + 1}`} />
      ))}
    </div>
  );
}
