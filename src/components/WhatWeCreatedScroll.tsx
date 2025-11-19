import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import tradingChart from "@/assets/trading-chart.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function WhatWeCreatedScroll() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="relative flex flex-col overflow-hidden bg-background">
      {/* Gradient continuation from hero section - smooth blend, no visible border */}
      <div className="absolute top-0 left-0 right-0 h-[150vh] pointer-events-none overflow-hidden">
        {/* Smooth continuation from hero - starts much higher to avoid border */}
        <div className="absolute -top-[600px] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] rounded-full bg-gradient-radial from-orange-600/8 via-orange-800/4 via-orange-900/2 to-transparent blur-[160px]" />
        
        {/* Left side subtle accent */}
        <div className="absolute -top-[400px] -left-40 w-[700px] h-[900px] rounded-full bg-gradient-radial from-orange-500/6 via-orange-700/3 to-transparent blur-[140px]" />
        
        {/* Right side subtle accent */}
        <div className="absolute -top-[500px] -right-40 w-[600px] h-[800px] rounded-full bg-gradient-radial from-orange-600/7 via-orange-800/4 to-transparent blur-[130px]" />
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
