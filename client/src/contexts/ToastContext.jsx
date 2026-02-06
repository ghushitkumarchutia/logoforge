import { Toaster } from "react-hot-toast";
import { useTheme } from "../hooks/useTheme";

export const ToastProvider = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <>
      {children}
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: isDark ? "#1f2937" : "#ffffff",
            color: isDark ? "#f9fafb" : "#111827",
            border: isDark ? "1px solid #374151" : "1px solid #e5e7eb",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: isDark ? "#1f2937" : "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: isDark ? "#1f2937" : "#ffffff",
            },
          },
        }}
      />
    </>
  );
};
