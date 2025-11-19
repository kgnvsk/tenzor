import { Database, GitBranch, Target, Zap } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function HowItWorks() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const data = [
    {
      title: "01",
      content: (
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
            <Database className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {t.howItWorks.step1Title}
            </h3>
            <p className="text-muted-foreground text-base md:text-lg">
              {t.howItWorks.step1Desc}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "02",
      content: (
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
            <GitBranch className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {t.howItWorks.step2Title}
            </h3>
            <p className="text-muted-foreground text-base md:text-lg">
              {t.howItWorks.step2Desc}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "03",
      content: (
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
            <Target className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {t.howItWorks.step3Title}
            </h3>
            <p className="text-muted-foreground text-base md:text-lg">
              {t.howItWorks.step3Desc}
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} sectionTitle={t.howItWorks.title} />
    </div>
  );
}
