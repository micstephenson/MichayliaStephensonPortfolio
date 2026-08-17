
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollButterfly({ active = true }) {
  const ref = useRef(null);
  const progress = useRef(null);

  useLayoutEffect(() => {
    if (!active) return;
    const ctx = gsap.context(() => {
      const update = (self) => {
        const rail = ref.current?.parentElement;
        const travel = rail ? rail.clientHeight - ref.current.clientHeight : 0;
        gsap.set(ref.current, { y: self.progress * travel });
        gsap.set(progress.current, { scaleY: self.progress, transformOrigin: "top" });
      };
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        onUpdate: update,
      });
      gsap.to(ref.current, {
        scaleX: 0.78,
        scaleY: 1.08,
        duration: 0.16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
    return () => ctx.revert();
  }, [active]);

  return (
    <div className="scroll-rail" aria-hidden="true">
      <div ref={progress} className="scroll-rail-fill" />
      <div ref={ref} className="scroll-thumb-butterfly">
        <img src="/images/Butterfly3.svg" alt="" />
      </div>
    </div>
  );
}
