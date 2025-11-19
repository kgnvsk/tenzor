import { ModernPricingPage, PricingCardProps } from "@/components/ui/animated-glassy-pricing";

export function Pricing() {
  const pricingPlans: PricingCardProps[] = [
    {
      planName: "Monthly",
      description: "per month",
      price: "99",
      features: ["Full access to all features", "Priority support", "Cancel anytime"],
      buttonText: "Buy Now",
      buttonVariant: "secondary",
    },
    {
      planName: "Quarterly",
      description: "per 3 months",
      price: "249",
      features: ["Full access to all features", "Priority support", "Save 16%", "Best value"],
      buttonText: "Buy Now",
      isPopular: true,
      buttonVariant: "primary",
    },
    {
      planName: "Yearly",
      description: "save $189",
      price: "999",
      features: ["Full access to all features", "Priority support", "Save 17%", "Maximum savings"],
      buttonText: "Buy Now",
      buttonVariant: "secondary",
    },
  ];

  return (
    <section className="relative w-full">
      <ModernPricingPage
        title={<>Simple Pricing</>}
        subtitle="Pay with crypto."
        plans={pricingPlans}
        showAnimatedBackground={true}
      />
    </section>
  );
}
