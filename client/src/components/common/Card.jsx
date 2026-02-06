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
        "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700",
        paddingClasses[padding],
        hoverable &&
          "cursor-pointer transition-shadow duration-200 hover:shadow-lg",
        onClick && "cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
