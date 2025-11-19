import { DottedSurface } from "@/components/ui/dotted-surface";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function WhatWeCreated() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const features = [
    {
      title: t.whatWeCreated.feature1Title,
      description: t.whatWeCreated.feature1Desc,
    },
    {
      title: t.whatWeCreated.feature2Title,
      description: t.whatWeCreated.feature2Desc,
    },
    {
      title: t.whatWeCreated.feature3Title,
      description: t.whatWeCreated.feature3Desc,
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden py-20">
      <DottedSurface />
      
      {/* Dark green gradient background */}
      <div 
        className="absolute inset-0 opacity-30 z-[5]"
        style={{
          background: 'radial-gradient(ellipse at top center, rgba(0, 100, 80, 0.3) 0%, transparent 60%)',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-8">
          {t.whatWeCreated.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 p-6 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
