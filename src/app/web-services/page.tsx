import ServicesSection from "@/components/About/Services";
import { WebServicesSection } from "@/components/WebServices/HeroWeb";
import ProblemAndSolution from "@/components/WebServices/Problem";
import Testimoni from "@/components/WebServices/Testimoni";

export default function WebServices() {
  return (
    <main>
      <WebServicesSection />
      <ServicesSection />
      <Testimoni />
      <ProblemAndSolution />
    </main>
  );
}
