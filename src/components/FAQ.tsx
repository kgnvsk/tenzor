import { FAQ1 } from "@/components/ui/faq-monochrome";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function FAQ() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const faqs = [
    {
      question: t.faq.q1,
      answer: t.faq.a1,
    },
    {
      question: t.faq.q2,
      answer: t.faq.a2,
    },
    {
      question: t.faq.q3,
      answer: t.faq.a3,
    },
    {
      question: t.faq.q4,
      answer: t.faq.a4,
    },
    {
      question: t.faq.q5,
      answer: t.faq.a5,
    },
  ];

  return (
    <FAQ1
      title={t.faq.title}
      subtitle={t.faq.subtitle}
      faqs={faqs}
    />
  );
}
