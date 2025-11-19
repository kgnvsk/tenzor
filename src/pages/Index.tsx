import { AnomalousMatterHero } from "@/components/ui/anomalous-matter-hero";
import { WhatWeCreatedScroll } from "@/components/WhatWeCreatedScroll";
import { WhatWeCreated } from "@/components/WhatWeCreated";
import { WhatAladinCanDo } from "@/components/WhatAladinCanDo";
import { RealPerformance } from "@/components/RealPerformance";
import { TechnicalDetails } from "@/components/TechnicalDetails";
import { TechnicalCapabilities } from "@/components/TechnicalCapabilities";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

const Index = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="min-h-screen bg-background">
      <LanguageSelector />
      <AnomalousMatterHero
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        description={
          <>
            {t.hero.description}
            <br />
            <span className="italic opacity-80">{t.hero.subtext}</span>
          </>
        }
      />
      <WhatWeCreatedScroll />
      <WhatWeCreated />
      <WhatAladinCanDo />
      <RealPerformance />
      <TechnicalCapabilities />
      <TechnicalDetails />
      <HowItWorks />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Index;
