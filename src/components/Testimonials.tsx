import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import mageraPhoto from "@/assets/magera-photo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function Testimonials() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const testimonials = [
    {
      name: "Alex M.",
      role: "Day Trader",
      roleExtra: null,
      image: null,
      text: "Tenzor transformed my trading. Clear signals, consistent profits. No more emotional decisions.",
    },
    {
      name: "Sarah K.",
      role: "Swing Trader",
      roleExtra: null,
      image: null,
      text: "The math behind Tenzor is solid. I trust the signals and my results speak for themselves.",
    },
    {
      name: "Mike R.",
      role: "Crypto Trader",
      roleExtra: null,
      image: null,
      text: "Best investment I've made for my trading career. Simple, effective, profitable.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full bg-background py-32 md:py-40 lg:py-48 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-foreground">
            What Traders Say
          </h2>

          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonials Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-muted/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50">

                      {/* Content */}
                      <div className="space-y-6">
                        {/* Quote */}
                        <blockquote className="text-lg md:text-xl text-muted-foreground italic">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Author */}
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-lg text-orange-400 mt-1">
                            {testimonial.role}
                            {testimonial.roleExtra && (
                              <span className="text-muted-foreground ml-2">
                                {testimonial.roleExtra}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
