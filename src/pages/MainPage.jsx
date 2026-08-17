import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";
import ContactSection from "../sections/ContactSection";
import PageFooter from "../sections/PageFooter";
import "../components/Reveal";

export default function MainPage({ onNavigate }) {
  return (
    <main id="top">
      <HeroSection />
      <AboutSection onNavigate={onNavigate} />
      <ProjectsSection onNavigate={onNavigate} />
      <SkillsSection />
      <ContactSection />
      <PageFooter />
    </main>
  );
}
