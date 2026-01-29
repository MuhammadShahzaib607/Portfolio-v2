import GradiantBackground from "./components/GradiantBackground"
import Tabs from "./components/Tabs"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ExperienceSection from "./components/ExperienceSection"
import EducationSection from "./components/EducationSection"
import SkillsData from "./components/SkillsData"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function Home() {
  // NEW
  return (
    <div>
      <GradiantBackground />
      <Tabs />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsData />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
