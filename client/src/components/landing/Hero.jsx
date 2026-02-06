import { Link } from "react-router-dom";
import { AnimatedBackground } from "../ui/AnimatedBackground.jsx";
import { GradientText } from "../common/GradientText.jsx";
import { GradientButton } from "../ui/GradientButton.jsx";
import { TypewriterText } from "../ui/TypewriterText.jsx";
import { HeroMockup } from "./HeroMockup.jsx";
import { heroContent } from "../../data/landingContent.js";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const MotionDiv = motion.div;

export const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
      <AnimatedBackground variant='mesh' opacity={0.3} />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6'>
            Create Stunning{" "}
            <GradientText>{heroContent.typewriterWords[0]}</GradientText>
            <br />
            <span className='inline-block mt-2'>
              <TypewriterText
                words={heroContent.typewriterWords}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDelay={2000}
                className='text-green-500'
              />
            </span>
          </h1>

          <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8'>
            {heroContent.tagline}
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <GradientButton href='/register' size='lg'>
              {heroContent.ctaPrimary}
              <ArrowRight size={20} className='ml-2' />
            </GradientButton>

            <Link
              to='/templates'
              className='inline-flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors'
            >
              <Play size={20} />
              {heroContent.ctaSecondary}
            </Link>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='mt-16'
        >
          <HeroMockup />
        </MotionDiv>
      </div>
    </section>
  );
};
