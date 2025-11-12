import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Varieties from "@/components/Varieties";
import HowItWorks from "@/components/HowItWorks";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Legal from "@/components/Legal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Concept />
      <Varieties />
      <HowItWorks />
      <Values />
      <Contact />
      <Legal />
      <Footer />
    </div>
  );
};

export default Index;
