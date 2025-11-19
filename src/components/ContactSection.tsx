import { Send, MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function ContactSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const contacts = [
    {
      icon: Send,
      label: t.contact.telegram,
      value: "@mgr_vld",
      link: "https://t.me/mgr_vld",
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: "+38 097 748 78 52",
      link: "https://wa.me/380977487852",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "alladin.company@gmail.com",
      link: "mailto:alladin.company@gmail.com",
    },
  ];

  return (
    <section className="relative w-full bg-background py-32 md:py-40 lg:py-48 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-foreground">
            {t.contact.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-muted/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-orange-400/50 transition-all duration-300 hover:bg-muted/40"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-8 h-8 text-orange-400" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">
                        {contact.label}
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {contact.value}
                      </div>
                    </div>
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
