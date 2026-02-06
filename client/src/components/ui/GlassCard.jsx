import clsx from "clsx";

const blurMap = {
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
};

export const GlassCard = ({
  children,
  className,
  blur = "md",
  opacity = 20,
  border = true,
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl",
        blurMap[blur],
        border && "border border-white/10 dark:border-white/5",
        className,
      )}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity / 100})`,
      }}
    >
      {children}
    </div>
  );
};
