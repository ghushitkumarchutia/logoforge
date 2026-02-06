import { GlassCard } from "../ui/GlassCard.jsx";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const MotionDiv = motion.div;

export const FeatureCard = ({ icon, title, description, index = 0 }) => {
  const IconComponent = Icons[icon] || Icons.Star;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className='h-full p-6 hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800/50'>
        <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-purple-500 flex items-center justify-center mb-4'>
          <IconComponent size={24} className='text-white' />
        </div>
        <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
          {title}
        </h3>
        <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
          {description}
        </p>
      </GlassCard>
    </MotionDiv>
  );
};
