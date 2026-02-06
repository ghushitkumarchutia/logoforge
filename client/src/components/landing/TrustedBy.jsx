import { motion } from "framer-motion";
import { PageContainer } from "../layout/PageContainer.jsx";

const MotionDiv = motion.div;

const companies = [
  "TechCorp",
  "StartupXYZ",
  "Innovate Labs",
  "Digital Solutions",
  "Creative Studio",
  "Growth Agency",
];

export const TrustedBy = () => {
  return (
    <section className='py-12 bg-gray-50 dark:bg-gray-800/50'>
      <PageContainer>
        <div className='text-center mb-8'>
          <p className='text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium'>
            Trusted by leading companies
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-8 md:gap-12'>
          {companies.map((company, index) => (
            <MotionDiv
              key={company}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='text-xl md:text-2xl font-bold text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-default'
              style={{ filter: "grayscale(100%)" }}
            >
              {company}
            </MotionDiv>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};
