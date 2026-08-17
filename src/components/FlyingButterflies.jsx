
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Butterfly from "./Butterfly";

export default function FlyingButterflies() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".roaming-butterfly").forEach((el, i) => {
        const tl = gsap.timeline({ repeat: -1, delay: i * 1.1 });
        const paths = [
          [
            { x: "8vw", y: "8vh", rotation: -12 },
            { x: "22vw", y: "-7vh", rotation: 18 },
            { x: "35vw", y: "12vh", rotation: -4 },
            { x: "18vw", y: "27vh", rotation: -18 },
            { x: "2vw", y: "10vh", rotation: 8 },
          ],
          [
            { x: "-12vw", y: "15vh", rotation: 10 },
            { x: "-28vw", y: "2vh", rotation: -20 },
            { x: "-16vw", y: "-20vh", rotation: 12 },
            { x: "6vw", y: "-8vh", rotation: 22 },
            { x: "-12vw", y: "15vh", rotation: 10 },
          ],
          [
            { x: "15vw", y: "-15vh", rotation: 16 },
            { x: "30vw", y: "3vh", rotation: -8 },
            { x: "12vw", y: "22vh", rotation: -18 },
            { x: "-5vw", y: "5vh", rotation: 8 },
            { x: "15vw", y: "-15vh", rotation: 16 },
          ],
        ][i % 3];

        paths.forEach((point) => {
          tl.to(el, {
            ...point,
            duration: 2.8 + i * .25,
            ease: "sine.inOut",
          });
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="roaming-layer" aria-hidden="true">
      <Butterfly className="roaming-butterfly roam-one" size="small" />
      <Butterfly className="roaming-butterfly roam-two" size="tiny" />
      <Butterfly className="roaming-butterfly roam-three" size="small" />
    </div>
  );
}
