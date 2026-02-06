import { PricingCard } from "./PricingCard.jsx";
import { ScrollReveal } from "../ui/ScrollReveal.jsx";
import { PageContainer } from "../layout/PageContainer.jsx";
import { pricingPlans } from "../../data/pricingPlans.js";

export const Pricing = () => {
  return (
    <section id='pricing' className='py-20 bg-gray-50 dark:bg-gray-800'>
      <PageContainer>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Simple, Transparent Pricing
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Start free and upgrade when you need more power
            </p>
          </div>
        </ScrollReveal>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {pricingPlans.map((plan) => (
            <ScrollReveal key={plan.id} delay={plan.highlighted ? 0.2 : 0}>
              <PricingCard {...plan} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className='text-center text-sm text-gray-500 dark:text-gray-400 mt-8'>
            * This is a demo project. No actual payments are processed.
          </p>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
};
