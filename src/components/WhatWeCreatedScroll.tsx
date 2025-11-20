import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import tradingChart from "@/assets/trading-chart.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function WhatWeCreatedScroll() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="relative flex flex-col overflow-hidden bg-black">
      {/* Desktop version with scroll animation */}
      <div className="relative z-10 hidden lg:block">
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

      {/* Mobile/Tablet version - static image */}
      <div className="relative z-10 lg:hidden py-12 px-4">
        <div className="space-y-6 mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
            {t.whatWeCreatedScroll.title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.whatWeCreatedScroll.description}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-[#6C6C6C] p-2 bg-[#222222] rounded-[30px] shadow-2xl">
            <div className="overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 p-2">
              <img 
                src={tradingChart} 
                alt={t.whatWeCreatedScroll.imageAlt}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
