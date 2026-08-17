import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingIntro({ onComplete }) {
  const root = useRef(null);
  const fly = useRef(null);
  const fill = useRef(null);
  const title = useRef(null);
  const name = useRef(null);
  const percentage = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const state = { p: 0 };
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete,
    });

    tl.to(state, {
      p: 100,
      duration: 2.8,
      ease: "power2.inOut",
      onUpdate: () => setProgress(Math.round(state.p)),
    }, 0)
      .to(fill.current, {
        scaleX: 1,
        duration: 2.8,
        ease: "power2.inOut",
      }, 0)
      .to(fly.current, {
        left: "calc(100% - 64px)",
        duration: 2.8,
        ease: "power2.inOut",
      }, 0)
      // Little flap at the end of the loading bar.
      .to(fly.current, {
        scale: 1.18,
        rotation: -9,
        duration: 0.14,
        repeat: 3,
        yoyo: true,
      }, "+=.04")
      // Lift the butterfly into the centre of the landing page.
      .to(fly.current, {
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        scale: 3.15,
        duration: 0.9,
      })
      .to([title.current, name.current, percentage.current], {
        opacity: 0,
        y: -22,
        duration: 0.48,
        stagger: 0.03,
      }, "-=.45")
      // Final flap before the portfolio is revealed.
      .to(fly.current, {
        scale: 3.3,
        rotation: -8,
        duration: 0.12,
        repeat: 2,
        yoyo: true,
      }, "-=.08")
      .to(root.current, {
        opacity: 0,
        duration: 0.7,
        pointerEvents: "none",
      }, "+=.08");

    return () => tl.kill();
  }, [onComplete]);

  return (
    <section ref={root} className="loader" aria-label="Loading portfolio">
      <div className="loader-inner">
        <h1 ref={title} className="loader-title">Loading<span>...</span></h1>
        <p ref={name} className="loader-name">Michaylia Stephenson</p>

        <div className="loader-track" aria-hidden="true">
          <div ref={fill} className="loader-fill" />
          <div ref={fly} className="loader-butterfly">
            <img src="/images/Butterfly3.svg" alt="" />
          </div>
        </div>

        <span ref={percentage}>{progress}%</span>
      </div>
    </section>
  );
}
