import HeroSection from "@/components/hero/HeroSection";
import CompaniesSection from "@/components/sections/CompaniesSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import RecentProjectsSection from "@/components/sections/RecentProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatIDoSection from "@/components/sections/WhatIDoSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MeshGradient from "@/components/ui/MeshGradient";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <MeshGradient />
      <div id="home">
        <HeroSection />
      </div>
      <CompaniesSection />
      <WelcomeSection />
      <RecentProjectsSection />
      <AboutSection />
      <WhatIDoSection />
      <ProjectsSection />
      <ExperienceSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
