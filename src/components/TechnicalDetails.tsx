import { Radio, Cpu, Settings, Workflow, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function TechnicalDetails() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const algorithmicFeatures = [
    {
      icon: Cpu,
      title: t.technicalDetails.alg1,
    },
    {
      icon: Settings,
      title: t.technicalDetails.alg2,
    },
    {
      icon: Workflow,
      title: t.technicalDetails.alg3,
    },
    {
      icon: Target,
      title: t.technicalDetails.alg4,
    },
  ];

  return (
    <section className="relative w-full bg-background py-32 md:py-40 lg:py-48 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 space-y-24">
        {/* Social Noise Analysis */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-12 flex items-center justify-center gap-3">
            <Radio className="h-8 w-8 text-cyan-400" />
            {t.technicalDetails.socialNoiseTitle}
          </h2>
          
          <div className="relative rounded-2xl border-2 border-border/50 bg-muted/30 backdrop-blur-sm p-8 md:p-12 text-center transition-all duration-300 hover:border-cyan-500/30">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.technicalDetails.socialNoiseDesc}
            </p>
          </div>
        </div>

        {/* Algorithmic Foundation */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            {t.technicalDetails.algorithmicTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {algorithmicFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "relative flex items-center gap-4 rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-6 py-6 transition-all duration-700 hover:border-cyan-400/50 hover:bg-muted hover:-translate-y-2 hover:scale-[1.02]",
                    "before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/10 grayscale-[30%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1/2 after:bg-gradient-to-t after:from-background/70 after:to-transparent after:rounded-b-xl after:pointer-events-none after:content-['']"
                  )}
                  style={{
                    maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                  }}
                >
                  <div className="relative z-10 flex-shrink-0">
                    <Icon className="h-8 w-8 text-cyan-400" strokeWidth={1.5} />
                  </div>
                  <p className="relative z-10 text-base md:text-lg text-foreground">
                    {feature.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
