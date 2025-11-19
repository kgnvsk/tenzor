import { ModernPricingPage, PricingCardProps } from "@/components/ui/animated-glassy-pricing";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export function Pricing() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const pricingPlans: PricingCardProps[] = [
    {
      planName: t.pricing.monthly,
      description: t.pricing.monthlyDesc,
      price: t.pricing.monthlyPrice,
      features: [t.pricing.feature1, t.pricing.feature2, t.pricing.feature3Monthly],
      buttonText: t.pricing.buttonText,
      buttonVariant: "secondary",
    },
    {
      planName: t.pricing.quarterly,
      description: t.pricing.quarterlyDesc,
      price: t.pricing.quarterlyPrice,
      features: [t.pricing.feature1, t.pricing.feature2, t.pricing.feature3Quarterly, t.pricing.feature4Quarterly],
      buttonText: t.pricing.buttonText,
      isPopular: true,
      buttonVariant: "primary",
    },
    {
      planName: t.pricing.yearly,
      description: t.pricing.yearlyDesc,
      price: t.pricing.yearlyPrice,
      features: [t.pricing.feature1, t.pricing.feature2, t.pricing.feature3Yearly, t.pricing.feature4Yearly],
      buttonText: t.pricing.buttonText,
      buttonVariant: "secondary",
    },
  ];

  return (
    <section className="relative w-full">
      <ModernPricingPage
        title={<>{t.pricing.title}</>}
        subtitle={t.pricing.subtitle}
        plans={pricingPlans}
        showAnimatedBackground={true}
      />
    </section>
  );
}
