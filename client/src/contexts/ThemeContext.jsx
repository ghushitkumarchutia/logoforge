import { createContext, useState, useEffect } from "react";
import { getItem, setItem, STORAGE_KEYS } from "../utils/storageHelpers";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    const stored = getItem(STORAGE_KEYS.THEME);
    if (stored) return stored;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setTheme = (newTheme) => {
    if (newTheme === "light" || newTheme === "dark") {
      setThemeState(newTheme);
    }
  };

  const value = {
    theme,
    isDark: theme === "dark",
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
