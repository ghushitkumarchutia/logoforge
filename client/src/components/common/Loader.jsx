import clsx from "clsx";

const sizeClasses = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-2",
  lg: "w-8 h-8 border-3",
};

export const Loader = ({ size = "md", color = "green-500", className }) => {
  return (
    <div
      className={clsx(
        "animate-spin rounded-full border-transparent",
        sizeClasses[size],
        `border-t-${color}`,
        className,
      )}
      style={{
        borderTopColor: color.startsWith("#") ? color : undefined,
      }}
    />
  );
};
