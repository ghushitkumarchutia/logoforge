import { Link } from "react-router-dom";
import { GlassCard } from "../ui/GlassCard.jsx";
import { GradientButton } from "../ui/GradientButton.jsx";
import { Button } from "../common/Button.jsx";
import { Badge } from "../common/Badge.jsx";
import { Check } from "lucide-react";
import clsx from "clsx";

export const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  buttonText,
  buttonVariant = "primary",
}) => {
  return (
    <GlassCard
      className={clsx(
        "relative p-8 h-full flex flex-col",
        highlighted
          ? "ring-2 ring-green-500 bg-white dark:bg-gray-800"
          : "bg-white dark:bg-gray-800/50",
      )}
    >
      {highlighted && (
        <Badge
          variant='success'
          className='absolute -top-3 left-1/2 -translate-x-1/2'
        >
          Most Popular
        </Badge>
      )}

      <div className='text-center mb-6'>
        <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
          {name}
        </h3>
        <div className='flex items-baseline justify-center gap-1'>
          <span className='text-4xl font-bold text-gray-900 dark:text-white'>
            {price}
          </span>
          <span className='text-gray-500 dark:text-gray-400'>{period}</span>
        </div>
        <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>
          {description}
        </p>
      </div>

      <ul className='flex-1 space-y-3 mb-8'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-start gap-3'>
            <Check size={18} className='text-green-500 flex-shrink-0 mt-0.5' />
            <span className='text-gray-600 dark:text-gray-300'>{feature}</span>
          </li>
        ))}
      </ul>

      {highlighted ? (
        <GradientButton href='/register' className='w-full'>
          {buttonText}
        </GradientButton>
      ) : (
        <Link to='/register'>
          <Button variant={buttonVariant} fullWidth>
            {buttonText}
          </Button>
        </Link>
      )}
    </GlassCard>
  );
};
