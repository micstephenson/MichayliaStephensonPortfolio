
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Butterfly from "./Butterfly";

export default function Transition({ active }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    if (!active) return;
    const ctx = gsap.context(() => {
      const butterflies = gsap.utils.toArray(".transition-butterfly");
      gsap.set(butterflies, { opacity: 0, scale: 0.2 });
      gsap.timeline()
        .to(butterflies, {
          opacity: 1,
          scale: 1,
          duration: 0.28,
          stagger: 0.055,
          ease: "back.out(2)",
        })
        .to(butterflies, {
          x: (i) => [-120, 90, -40, 140, -85, 60][i] || 0,
          y: (i) => [-170, -90, 120, 50, 180, -130][i] || 0,
          rotation: (i) => [-22, 18, 8, -15, 25, -10][i] || 0,
          duration: 0.55,
          stagger: 0.025,
          ease: "sine.inOut",
        })
        .to(butterflies, {
          opacity: 0,
          scale: 0.35,
          duration: 0.25,
          stagger: 0.025,
        });
    }, root);
    return () => ctx.revert();
  }, [active]);

  return (
    <div ref={root} className={`page-transition ${active ? "active" : ""}`} aria-hidden="true">
      <div className="transition-panel transition-left" />
      <div className="transition-panel transition-right" />
      <div className="transition-butterfly-cloud">
        {[0,1,2,3,4,5].map(i => (
          <Butterfly key={i} size={i % 2 ? "tiny" : "small"} className={`transition-butterfly tb-${i}`} />
        ))}
      </div>
    </div>
  );
}
