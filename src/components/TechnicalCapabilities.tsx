import { Brain, TrendingUp, Target, BarChart, Network, Activity, Filter, Zap, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function TechnicalCapabilities() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const capabilities = [
    {
      icon: Brain,
      title: t.technicalCapabilities.cap1Title,
      description: t.technicalCapabilities.cap1Desc,
    },
    {
      icon: TrendingUp,
      title: t.technicalCapabilities.cap2Title,
      description: t.technicalCapabilities.cap2Desc,
    },
    {
      icon: Target,
      title: t.technicalCapabilities.cap3Title,
      description: t.technicalCapabilities.cap3Desc,
    },
    {
      icon: BarChart,
      title: t.technicalCapabilities.cap4Title,
      description: t.technicalCapabilities.cap4Desc,
    },
    {
      icon: Network,
      title: t.technicalCapabilities.cap5Title,
      description: t.technicalCapabilities.cap5Desc,
    },
    {
      icon: Activity,
      title: t.technicalCapabilities.cap6Title,
      description: t.technicalCapabilities.cap6Desc,
    },
    {
      icon: Filter,
      title: t.technicalCapabilities.cap7Title,
      description: t.technicalCapabilities.cap7Desc,
    },
    {
      icon: Zap,
      title: t.technicalCapabilities.cap8Title,
      description: t.technicalCapabilities.cap8Desc,
    },
    {
      icon: Shield,
      title: t.technicalCapabilities.cap9Title,
      description: t.technicalCapabilities.cap9Desc,
    },
  ];

  return (
    <section className="relative w-full bg-background py-32 md:py-40 lg:py-48 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-foreground">
            {t.technicalCapabilities.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "relative flex flex-col gap-4 rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-6 py-8 transition-all duration-700 hover:border-cyan-400/50 hover:bg-muted hover:-translate-y-2 hover:scale-[1.02]",
                    "before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/10 grayscale-[30%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1/2 after:bg-gradient-to-t after:from-background/70 after:to-transparent after:rounded-b-xl after:pointer-events-none after:content-['']"
                  )}
                  style={{
                    maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                  }}
                >
                  <div className="relative z-10 flex-shrink-0">
                    <Icon className="h-10 w-10 text-cyan-400" strokeWidth={1.5} />
                  </div>
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      {capability.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
