
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingIntro from "./components/LoadingIntro";
import NavBar from "./components/NavBar";
import Transition from "./components/Transition";
import ScrollButterfly from "./components/ScrollButterfly";
import FlyingButterflies from "./components/FlyingButterflies";
import HomePage from "./pages/HomePage";
import ConcertTracker from "./pages/projects/ConcertTracker";
import RaceControl from "./pages/projects/RaceControl";
import LiveVenueVibes from "./pages/projects/LiveVenueVibes";
import Placement from "./pages/experience/Placement";
import University from "./pages/experience/University";
import Work from "./pages/experience/Work";

gsap.registerPlugin(ScrollTrigger);

function route() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/projects/concert-tracker") return { type: "project", slug: "concert-tracker" };
  if (path === "/projects/racecontrol") return { type: "project", slug: "racecontrol" };
  if (path === "/projects/live-venue-vibes") return { type: "project", slug: "live-venue-vibes" };
  if (path === "/experience/placement") return { type: "experience", slug: "placement" };
  if (path === "/experience/university") return { type: "experience", slug: "university" };
  if (path === "/experience/work") return { type: "experience", slug: "work" };
  return { type: "home" };
}

export default function App() {
  const [current, setCurrent] = useState(route());
  const [transitioning, setTransitioning] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const onPop = () => {
      setCurrent(route());
      setTransitioning(false);
      window.scrollTo(0, 0);
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (path) => {
    if (transitioning || path === window.location.pathname) return;
    setTransitioning(true);

    window.setTimeout(() => {
      window.history.pushState({}, "", path);
      setCurrent(route());
      window.scrollTo(0, 0);
      window.setTimeout(() => {
        setTransitioning(false);
        ScrollTrigger.refresh();
      }, 720);
    }, 620);
  };

  const scrollTo = (selector) => {
    if (current.type !== "home") {
      navigate("/");
      window.setTimeout(() => document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" }), 750);
      return;
    }
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  const page =
    current.type === "project"
      ? current.slug === "concert-tracker"
        ? <ConcertTracker onBack={() => navigate("/")} />
        : current.slug === "racecontrol"
          ? <RaceControl onBack={() => navigate("/")} />
          : <LiveVenueVibes onBack={() => navigate("/")} />
      : current.type === "experience"
        ? current.slug === "placement"
          ? <Placement onBack={() => navigate("/")} />
          : current.slug === "university"
            ? <University onBack={() => navigate("/")} />
            : <Work onBack={() => navigate("/")} />
        : <HomePage onNavigate={navigate} />;

  return (
    <>
      {!introDone && <LoadingIntro onComplete={() => setIntroDone(true)} />}
      <div className={`site-shell ${introDone ? "is-ready" : ""}`}>
        <NavBar onHome={() => navigate("/")} scrollTo={scrollTo} />
        {introDone && <ScrollButterfly active={true} />}
        {introDone && current.type === "home" && <FlyingButterflies />}
        {page}
        <Transition active={transitioning} />
      </div>
    </>
  );
}
