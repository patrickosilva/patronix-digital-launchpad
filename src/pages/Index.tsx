import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PlansSection from "@/components/PlansSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <BenefitsSection />
    <PlansSection />
    <AboutSection />
    <CTASection />
    <FooterSection />
  </div>
);

export default Index;
