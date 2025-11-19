import { Activity, Eye, Layers, Calculator, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function WhatAladinCanDo() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const capabilities = [
    {
      icon: Activity,
      title: t.whatAladinCanDo.capability1Title,
      subtitle: t.whatAladinCanDo.capability1Subtitle,
    },
    {
      icon: Eye,
      title: t.whatAladinCanDo.capability2Title,
      subtitle: t.whatAladinCanDo.capability2Subtitle,
    },
    {
      icon: Layers,
      title: t.whatAladinCanDo.capability3Title,
      subtitle: t.whatAladinCanDo.capability3Subtitle,
    },
    {
      icon: Calculator,
      title: t.whatAladinCanDo.capability4Title,
      subtitle: t.whatAladinCanDo.capability4Subtitle,
    },
    {
      icon: Zap,
      title: t.whatAladinCanDo.capability5Title,
      subtitle: t.whatAladinCanDo.capability5Subtitle,
    },
  ];

  return (
    <section className="relative w-full bg-background py-32 md:py-40 lg:py-48 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-16">
          {t.whatAladinCanDo.title}
        </h2>

        <div className="flex flex-wrap justify-center items-start gap-6 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className={cn(
                  "relative flex h-36 w-72 select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 hover:border-cyan-400/50 hover:bg-muted hover:-translate-y-4 hover:scale-105 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
                  "before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/10 grayscale-[30%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
                )}
                style={{
                  maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                }}
              >
                <div>
                  <span className="relative inline-block rounded-full bg-cyan-900/50 p-1">
                    <Icon className="size-4 text-cyan-300" />
                  </span>
                  <p className="text-lg font-medium text-cyan-400">{capability.subtitle}</p>
                </div>
                <p className="text-base text-foreground">{capability.title}</p>
                <p className="text-sm text-muted-foreground">{t.whatAladinCanDo.active}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
