import { motion } from "framer-motion";
import { FloatingElement } from "../ui/FloatingElement.jsx";
import { Square, Circle, Type, Download } from "lucide-react";

const MotionDiv = motion.div;

export const HeroMockup = () => {
  return (
    <FloatingElement duration={6} distance={15}>
      <div className='relative w-full max-w-4xl mx-auto'>
        <div className='bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700'>
          <div className='flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700'>
            <div className='flex gap-2'>
              <div className='w-3 h-3 rounded-full bg-red-500' />
              <div className='w-3 h-3 rounded-full bg-yellow-500' />
              <div className='w-3 h-3 rounded-full bg-green-500' />
            </div>
            <div className='flex-1 text-center'>
              <span className='text-sm text-gray-400'>LogoForge Editor</span>
            </div>
          </div>

          <div className='flex'>
            <div className='w-16 bg-gray-800 border-r border-gray-700 py-4 flex flex-col items-center gap-4'>
              <MotionDiv
                className='p-2 rounded-lg bg-green-500/20 text-green-500'
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Square size={20} />
              </MotionDiv>
              <div className='p-2 text-gray-500 hover:text-gray-300'>
                <Circle size={20} />
              </div>
              <div className='p-2 text-gray-500 hover:text-gray-300'>
                <Type size={20} />
              </div>
              <div className='p-2 text-gray-500 hover:text-gray-300'>
                <Download size={20} />
              </div>
            </div>

            <div className='flex-1 bg-gray-100 dark:bg-gray-900 p-8 min-h-[300px] flex items-center justify-center'>
              <div className='relative'>
                <MotionDiv
                  className='w-24 h-24 rounded-xl bg-gradient-to-br from-green-500 to-purple-500'
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <MotionDiv
                  className='absolute -top-4 -right-4 w-8 h-8 rounded-full bg-purple-500'
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <MotionDiv
                  className='absolute -bottom-2 -left-2 w-6 h-6 rounded bg-green-400'
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>

            <div className='w-56 bg-gray-800 border-l border-gray-700 p-4'>
              <div className='text-xs text-gray-400 mb-4'>Properties</div>
              <div className='space-y-3'>
                <div className='flex items-center justify-between'>
                  <span className='text-xs text-gray-500'>Width</span>
                  <span className='text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded'>
                    96px
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-xs text-gray-500'>Height</span>
                  <span className='text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded'>
                    96px
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-xs text-gray-500'>Rotation</span>
                  <span className='text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded'>
                    0°
                  </span>
                </div>
                <div className='mt-4'>
                  <span className='text-xs text-gray-400'>Fill</span>
                  <div className='flex gap-2 mt-2'>
                    <div className='w-6 h-6 rounded bg-green-500 ring-2 ring-white/20' />
                    <div className='w-6 h-6 rounded bg-purple-500' />
                    <div className='w-6 h-6 rounded bg-blue-500' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FloatingElement>
  );
};
