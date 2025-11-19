import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import tradingChart from "@/assets/trading-chart.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function WhatWeCreatedScroll() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="flex flex-col overflow-hidden bg-background">
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
  );
}
