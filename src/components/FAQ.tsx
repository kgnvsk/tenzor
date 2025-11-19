import { FAQ1 } from "@/components/ui/faq-monochrome";

export function FAQ() {
  const faqs = [
    {
      question: "Does Tenzor work on all markets?",
      answer: "No, it works exclusively on specific crypto assets that are tailored for this strategy (XRP, SOL, ADA).",
    },
    {
      question: "Is there a trial period?",
      answer: "We offer a 7-day money-back guarantee on all purchases.",
    },
    {
      question: "Do I need trading experience?",
      answer: "No, Tenzor is designed for both beginners and professionals.",
    },
    {
      question: "What platform does Tenzor use?",
      answer: "Tenzor integrates seamlessly with TradingView.",
    },
    {
      question: "Is support available?",
      answer: "24/7 support via Discord and email for all subscribers.",
    },
  ];

  return (
    <FAQ1
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about Tenzor trading system."
      faqs={faqs}
    />
  );
}
