import { HeroSection } from "@/components/HeroSection";
import { VisionSection } from "@/components/VisionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { CtaFooter } from "@/components/CtaFooter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <BenefitsSection />
      <HowItWorksSection />
      <AboutUsSection />
      <CtaFooter />
    </>
  );
}
