import { StepCard } from "./StepCard.jsx";
import { ScrollReveal } from "../ui/ScrollReveal.jsx";
import { PageContainer } from "../layout/PageContainer.jsx";
import { howItWorksContent } from "../../data/landingContent.js";

const iconMap = ["FileText", "Edit", "Download"];

export const HowItWorks = () => {
  return (
    <section id='how-it-works' className='py-20 bg-white dark:bg-gray-900'>
      <PageContainer>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              {howItWorksContent.title}
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Create your professional logo in three simple steps
            </p>
          </div>
        </ScrollReveal>

        <div className='relative'>
          <div className='hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-purple-500 -translate-y-1/2 mx-20' />

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10'>
            {howItWorksContent.steps.map((step, index) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={iconMap[index]}
              />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
