import { motion } from "framer-motion";
import { PageContainer } from "../layout/PageContainer.jsx";

const MotionDiv = motion.div;

const sampleLogos = [
  { id: 1, color: "from-blue-500 to-cyan-500", shape: "rounded-full" },
  { id: 2, color: "from-green-500 to-emerald-500", shape: "rounded-lg" },
  { id: 3, color: "from-purple-500 to-pink-500", shape: "rounded-2xl" },
  { id: 4, color: "from-orange-500 to-yellow-500", shape: "rounded-full" },
  { id: 5, color: "from-red-500 to-rose-500", shape: "rounded-lg" },
  { id: 6, color: "from-indigo-500 to-blue-500", shape: "rounded-2xl" },
  { id: 7, color: "from-teal-500 to-green-500", shape: "rounded-full" },
  { id: 8, color: "from-pink-500 to-purple-500", shape: "rounded-lg" },
];

export const LogoShowcase = () => {
  const doubledLogos = [...sampleLogos, ...sampleLogos];

  return (
    <section className='py-20 bg-white dark:bg-gray-900 overflow-hidden'>
      <PageContainer>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Logos Created with LogoForge
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            See what our users have created
          </p>
        </div>
      </PageContainer>

      <div className='relative'>
        <MotionDiv
          className='flex gap-6'
          animate={{ x: [0, -50 * sampleLogos.length * 4] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {doubledLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className={`flex-shrink-0 w-32 h-32 bg-gradient-to-br ${logo.color} ${logo.shape} flex items-center justify-center shadow-lg`}
            >
              <div className='w-12 h-12 bg-white/30 rounded' />
            </div>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};
