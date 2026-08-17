
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Butterfly({ className = "", size = "normal" }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const wing = gsap.to(el, {
      scaleX: 0.78,
      scaleY: 1.08,
      duration: 0.16,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    const float = gsap.to(el, {
      y: 7,
      rotation: 3,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    return () => { wing.kill(); float.kill(); };
  }, []);

  return (
    <span ref={ref} className={`butterfly ${size} ${className}`} aria-hidden="true">
      <img src="/images/Butterfly3.svg" alt="" />
    </span>
  );
}
