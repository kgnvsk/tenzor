import { MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function ContactSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const communityButtons = [
    {
      icon: MessageCircle,
      label: t.contact.discord,
      link: "https://discord.com/invite/DWS7HPSW",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700",
    },
    {
      icon: Send,
      label: t.contact.telegram,
      link: "https://t.me/tenzor_public",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
      hoverColor: "hover:from-orange-500 hover:to-orange-600",
    },
  ];

  return (
    <section id="contact" className="relative w-full bg-background py-32 md:py-40 lg:py-48 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            {t.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            {communityButtons.map((button, index) => {
              const Icon = button.icon;
              return (
                <a
                  key={index}
                  href={button.link}
                  target="_blank"
                  rel="noopener"
                  className={`group relative flex items-center justify-center gap-3 w-full sm:w-48 h-48 rounded-full ${button.bgColor} ${button.hoverColor} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <span className="text-white text-lg font-medium">
                      {button.label}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
