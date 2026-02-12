import clsx from "clsx";

const paddingClasses = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-8",
};

export const Card = ({
  children,
  className,
  hoverable = false,
  padding = "md",
  onClick,
}) => {
  return (
    <div
      className={clsx(
        "bg-white dark:bg-[#1a1a1a] rounded-2xl border border-neutral-200 dark:border-neutral-800",
        paddingClasses[padding],
        hoverable &&
          "cursor-pointer transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700",
        onClick && "cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
