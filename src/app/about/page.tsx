import HeroSection from "@/components/About/AboutHero";
import ContactSection from "@/components/About/Contact";
import OurExpertise from "@/components/About/Expertise";
import GoalSection from "@/components/About/Goal";
import ProfileSection from "@/components/About/Profile";
import ServicesSection from "@/components/About/Services";
import OurTeam from "@/components/About/Team";
import { Workflow } from "@/components/About/Workflow";

export default function About() {
  return (
    <main>
      <HeroSection />
      <ProfileSection />
      <GoalSection />
      <ServicesSection />
      <Workflow />
      <OurTeam />
      <OurExpertise />
      <ContactSection />
    </main>
  );
}
