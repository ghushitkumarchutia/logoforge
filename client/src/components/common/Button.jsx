import clsx from "clsx";
import { Loader } from "./Loader";

const variantClasses = {
  primary: "bg-green-500 hover:bg-green-600 text-white",
  secondary:
    "bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white",
  outline:
    "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
  ghost:
    "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
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
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
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
