import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { AppEcosystemSection } from "@/components/sections/AppEcosystemSection";
import { CityPulseSection } from "@/components/sections/CityPulseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  useEffect(() => {
    document.title = "Polling Star | Smart Election Management";
  }, []);

  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ProblemSolutionSection />
      <AppEcosystemSection />
      <CityPulseSection />
      <ServicesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
