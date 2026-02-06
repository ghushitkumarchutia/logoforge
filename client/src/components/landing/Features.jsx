import { FeatureCard } from "./FeatureCard.jsx";
import { ScrollReveal } from "../ui/ScrollReveal.jsx";
import { PageContainer } from "../layout/PageContainer.jsx";
import { featuresContent } from "../../data/landingContent.js";

export const Features = () => {
  return (
    <section id='features' className='py-20 bg-gray-50 dark:bg-gray-800'>
      <PageContainer>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              {featuresContent.title}
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              {featuresContent.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {featuresContent.features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
};
