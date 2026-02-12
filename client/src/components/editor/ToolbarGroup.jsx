import clsx from "clsx";

export const ToolbarGroup = ({ children, label, className }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-1 px-2 border-r border-neutral-200 dark:border-neutral-800 last:border-r-0",
        className,
      )}
    >
      {label && (
        <span className='text-xs font-medium text-neutral-500 dark:text-neutral-400 mr-1 hidden lg:inline'>
          {label}
        </span>
      )}
      {children}
    </div>
  );
};
