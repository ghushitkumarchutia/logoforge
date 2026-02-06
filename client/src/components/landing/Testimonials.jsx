import { useState, useEffect, useCallback } from "react";
import { TestimonialCard } from "./TestimonialCard.jsx";
import { ParallaxSection } from "../ui/ParallaxSection.jsx";
import { PageContainer } from "../layout/PageContainer.jsx";
import { testimonials } from "../../data/testimonials.js";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MotionDiv = motion.div;

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <ParallaxSection
      bgColor='#f3f4f6'
      className='py-20 dark:bg-gray-800'
      speed={0.3}
    >
      <PageContainer>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            What Our Users Say
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Join thousands of satisfied users who love LogoForge
          </p>
        </div>

        <div className='relative max-w-4xl mx-auto'>
          <div className='overflow-hidden'>
            <AnimatePresence mode='wait'>
              <MotionDiv
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
              >
                <TestimonialCard {...testimonials[activeIndex]} />
              </MotionDiv>
            </AnimatePresence>
          </div>

          <div className='flex items-center justify-center gap-4 mt-8'>
            <button
              onClick={handlePrev}
              className='p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors'
              aria-label='Previous testimonial'
            >
              <ChevronLeft
                size={24}
                className='text-gray-600 dark:text-gray-300'
              />
            </button>

            <div className='flex gap-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-green-500"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className='p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors'
              aria-label='Next testimonial'
            >
              <ChevronRight
                size={24}
                className='text-gray-600 dark:text-gray-300'
              />
            </button>
          </div>
        </div>
      </PageContainer>
    </ParallaxSection>
  );
};
