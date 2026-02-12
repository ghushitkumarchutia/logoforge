import clsx from "clsx";

export const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  helperText,
  leftIcon,
  rightIcon,
  disabled = false,
  required = false,
  className,
  ...rest
}) => {
  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <label
          htmlFor={name}
          className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1'
        >
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}
      <div className='relative'>
        {leftIcon && (
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400'>
            {leftIcon}
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={clsx(
            "w-full rounded-[10px] border bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white",
            "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-neutral-200 dark:border-neutral-700",
            leftIcon ? "pl-10" : "pl-4",
            rightIcon ? "pr-10" : "pr-4",
            "py-2.5 text-sm",
          )}
          {...rest}
        />
        {rightIcon && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400'>
            {rightIcon}
          </div>
        )}
      </div>
      {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
      {helperText && !error && (
        <p className='mt-1 text-sm text-neutral-500 dark:text-neutral-400'>
          {helperText}
        </p>
      )}
    </div>
  );
};
