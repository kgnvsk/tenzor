import { useEffect, useState, useRef } from "react";
import NumberFlow from "@number-flow/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function RealPerformance() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { value: 80, suffix: "%", label: "Win Rate" },
    { value: 2.0, suffix: "+", label: "Profit Factor" },
    { value: 5, suffix: "K+", label: "Active Traders" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-background py-32 md:py-40 lg:py-48 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-20">
          {t.realPerformance.title}
        </h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center w-40 md:w-48"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400 mb-3 inline-flex items-baseline justify-center">
                <NumberFlow 
                  value={isVisible ? stat.value : 0}
                  spinTiming={{ duration: 1500, easing: "ease-out" }}
                />
                {stat.suffix && <span className="ml-1">{stat.suffix}</span>}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
