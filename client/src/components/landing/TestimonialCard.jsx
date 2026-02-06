import { Star } from "lucide-react";
import { GlassCard } from "../ui/GlassCard.jsx";

export const TestimonialCard = ({
  quote,
  name,
  role,
  company,
  avatar,
  rating = 5,
}) => {
  return (
    <GlassCard className='p-6 h-full flex flex-col bg-white dark:bg-gray-800/50'>
      <div className='flex gap-1 mb-4'>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }
          />
        ))}
      </div>

      <blockquote className='flex-1 text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
        "{quote}"
      </blockquote>

      <div className='flex items-center gap-3'>
        <img
          src={avatar}
          alt={name}
          className='w-12 h-12 rounded-full object-cover'
        />
        <div>
          <div className='font-semibold text-gray-900 dark:text-white'>
            {name}
          </div>
          <div className='text-sm text-gray-500 dark:text-gray-400'>
            {role}, {company}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
