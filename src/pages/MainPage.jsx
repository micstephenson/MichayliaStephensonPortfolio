import AboutSection from "../sections/AboutSection";
import ExperienceSection from "../sections/ExperienceSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";
import ContactSection from "../sections/ContactSection";
import PageFooter from "../sections/PageFooter";
import "../components/Reveal";

export default function MainPage({ onNavigate }) {
  return (
    <main id="top">
      <AboutSection />
      <ExperienceSection onNavigate={onNavigate} />
      <ProjectsSection onNavigate={onNavigate} />
      <SkillsSection />
      <ContactSection />
      <PageFooter />
    </main>
  );
}
