import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import tradingChart from "@/assets/trading-chart.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function WhatWeCreatedScroll() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="relative flex flex-col overflow-hidden bg-background">
      {/* Gradient continuation from hero section - multiple shapes */}
      <div className="absolute top-0 left-0 right-0 h-screen pointer-events-none overflow-hidden">
        {/* Top center continuation */}
        <div className="absolute -top-96 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-gradient-radial from-orange-900/18 via-orange-950/10 via-orange-950/5 to-transparent blur-[120px]" />
        
        {/* Left side accent */}
        <div className="absolute -top-40 -left-32 w-[600px] h-[800px] rounded-full bg-gradient-radial from-orange-800/12 via-orange-900/8 to-transparent blur-[100px]" />
        
        {/* Right side accent */}
        <div className="absolute -top-20 -right-32 w-[500px] h-[700px] rounded-full bg-gradient-radial from-orange-700/10 via-orange-900/6 to-transparent blur-[90px]" />
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
