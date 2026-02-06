import { GlassCard } from "../ui/GlassCard.jsx";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const MotionDiv = motion.div;

export const StepCard = ({ number, title, description, icon }) => {
  const IconComponent = Icons[icon] || Icons.CheckCircle;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='relative'
    >
      <GlassCard className='p-6 h-full bg-white dark:bg-gray-800/50'>
        <div className='flex items-start gap-4'>
          <div className='flex-shrink-0'>
            <span className='text-5xl font-bold bg-gradient-to-br from-green-500 to-purple-500 bg-clip-text text-transparent'>
              {number}
            </span>
          </div>
          <div className='flex-1'>
            <div className='flex items-center gap-2 mb-2'>
              <IconComponent
                size={20}
                className='text-green-500 flex-shrink-0'
              />
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                {title}
              </h3>
            </div>
            <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
              {description}
            </p>
          </div>
        </div>
      </GlassCard>
    </MotionDiv>
  );
};
