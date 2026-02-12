import clsx from "clsx";
import { Loader } from "./Loader";

const variantClasses = {
  primary:
    "bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-900",
  secondary:
    "bg-neutral-200 hover:bg-neutral-300 text-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-white",
  outline:
    "border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800",
  ghost:
    "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  type = "button",
  onClick,
  className,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(
        "inline-flex items-center justify-center font-medium rounded-[10px] transition-colors cursor-pointer",
        "focus:outline-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
      {...rest}
    >
      {isLoading ? (
        <Loader size='sm' color='currentColor' />
      ) : (
        <>
          {leftIcon && <span className='mr-2'>{leftIcon}</span>}
          {children}
          {rightIcon && <span className='ml-2'>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
