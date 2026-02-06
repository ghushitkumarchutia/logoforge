import clsx from "clsx";

const maxWidthClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full",
};

export const PageContainer = ({
  children,
  className,
  maxWidth = "2xl",
  padding = true,
}) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full",
        maxWidthClasses[maxWidth],
        padding && "px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
};
