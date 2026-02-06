import { Link } from "react-router-dom";
import { GradientButton } from "../ui/GradientButton.jsx";
import { PageContainer } from "../layout/PageContainer.jsx";
import { ctaContent } from "../../data/landingContent.js";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MotionDiv = motion.div;

export const CTA = () => {
  return (
    <section className='relative py-24 overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-r from-green-500 to-purple-500' />

      <div
        className='absolute inset-0 opacity-30'
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
        }}
      />

      <PageContainer className='relative z-10'>
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
            {ctaContent.title}
          </h2>
          <p className='text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8'>
            {ctaContent.subtitle}
          </p>

          <GradientButton
            href='/register'
            size='lg'
            from='from-white'
            to='to-gray-100'
            className='text-green-600 hover:text-green-700'
          >
            {ctaContent.buttonText}
            <ArrowRight size={20} className='ml-2' />
          </GradientButton>
        </MotionDiv>
      </PageContainer>
    </section>
  );
};
