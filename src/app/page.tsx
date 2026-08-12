"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ImpactStrip } from "@/components/metrics/ImpactStrip";
import { AboutSection } from "@/components/about/AboutSection";
import { RealWorldSystems } from "@/components/systems/RealWorldSystems";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { BentoCapabilities } from "@/components/bento/BentoCapabilities";
import { SkillsArsenal } from "@/components/skills/SkillsArsenal";
import { ArchitectureDiagram } from "@/components/architecture/ArchitectureDiagram";
import { EngineeringPhilosophy } from "@/components/philosophy/EngineeringPhilosophy";
import { EducationSection } from "@/components/education/EducationSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <ImpactStrip />
      <AboutSection />
      <RealWorldSystems />
      <ProjectsSection />
      <ExperienceSection />
      <BentoCapabilities />
      <SkillsArsenal />
      <ArchitectureDiagram />
      <EngineeringPhilosophy />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
