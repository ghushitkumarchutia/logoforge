import clsx from "clsx";

export const ToolbarGroup = ({ children, label, className }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-1 px-2 border-r border-gray-200 dark:border-gray-700 last:border-r-0",
        className,
      )}
    >
      {label && (
        <span className='text-xs font-medium text-gray-500 dark:text-gray-400 mr-1 hidden lg:inline'>
          {label}
        </span>
      )}
      {children}
    </div>
  );
};
