import clsx from "clsx";

export const Skeleton = ({
  variant = "rectangle",
  width,
  height,
  lines = 3,
  className,
}) => {
  const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-700";

  if (variant === "circle") {
    return (
      <div
        className={clsx(baseClasses, "rounded-full", className)}
        style={{ width: width || "40px", height: height || "40px" }}
      />
    );
  }

  if (variant === "text") {
    return (
      <div className={clsx("space-y-2", className)}>
        {[...Array(lines)].map((_, i) => (
          <div
            key={i}
            className={clsx(baseClasses, "rounded h-4")}
            style={{ width: i === lines - 1 ? "60%" : "100%" }}
          />
        ))}
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className={clsx("rounded-xl overflow-hidden", className)}>
        <div className={clsx(baseClasses, "h-40 w-full")} />
        <div className='p-4 space-y-3'>
          <div className={clsx(baseClasses, "h-4 rounded w-3/4")} />
          <div className={clsx(baseClasses, "h-3 rounded w-1/2")} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(baseClasses, "rounded", className)}
      style={{ width: width || "100%", height: height || "20px" }}
    />
  );
};
