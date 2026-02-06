import clsx from "clsx";

export const GradientText = ({
  children,
  from = "from-green-500",
  via,
  to = "to-purple-500",
  animate = true,
  className,
}) => {
  return (
    <span
      className={clsx(
        "bg-gradient-to-r bg-clip-text text-transparent",
        from,
        via,
        to,
        animate && "animate-gradient bg-[length:200%_200%]",
        className,
      )}
    >
      {children}
    </span>
  );
};
