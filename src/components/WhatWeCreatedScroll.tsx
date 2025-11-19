import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import tradingChart from "@/assets/trading-chart.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function WhatWeCreatedScroll() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="relative flex flex-col overflow-hidden bg-background">
      {/* Gradient continuation from hero section */}
      <div className="absolute top-0 left-0 right-0 h-screen flex items-start justify-center pointer-events-none">
        <div className="absolute w-[1000px] h-[800px] -top-96 rounded-full bg-gradient-radial from-orange-900/18 via-orange-950/10 via-orange-950/5 to-transparent blur-[120px]" />
        <div className="absolute w-[800px] h-[600px] -top-72 rounded-full bg-gradient-radial from-orange-800/12 via-orange-900/6 to-transparent blur-[100px]" />
      </div>
      
      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="space-y-6 mb-20">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                {t.whatWeCreatedScroll.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t.whatWeCreatedScroll.description}
              </p>
            </div>
          }
        >
          <img 
            src={tradingChart} 
            alt={t.whatWeCreatedScroll.imageAlt}
            className="w-full h-full object-cover rounded-2xl"
          />
        </ContainerScroll>
      </div>
    </div>
  );
}
