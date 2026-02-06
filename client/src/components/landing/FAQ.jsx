import { useState, useCallback } from "react";
import { FAQItem } from "./FAQItem.jsx";
import { ScrollReveal } from "../ui/ScrollReveal.jsx";
import { PageContainer } from "../layout/PageContainer.jsx";
import { faqData } from "../../data/faqData.js";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className='py-20 bg-white dark:bg-gray-900'>
      <PageContainer maxWidth='lg'>
        <ScrollReveal>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Everything you need to know about LogoForge
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className='max-w-3xl mx-auto'>
            {faqData.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
};
