import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const MotionSpan = motion.span;
const MotionDiv = motion.div;

export const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className='border-b border-gray-200 dark:border-gray-700'>
      <button
        onClick={onClick}
        className='w-full flex items-center justify-between py-5 text-left'
      >
        <span className='text-lg font-medium text-gray-900 dark:text-white'>
          {question}
        </span>
        <MotionSpan
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className='text-gray-500 dark:text-gray-400'
        >
          <ChevronDown size={20} />
        </MotionSpan>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <MotionDiv
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='overflow-hidden'
          >
            <p className='pb-5 text-gray-600 dark:text-gray-300 leading-relaxed'>
              {answer}
            </p>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};
