"use client";

import { createContext, useContext, useEffect } from "react";

export const ThemeContext = createContext({
  theme: "dark",
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  // Forcer le mode sombre dès le chargement
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Valeur du contexte (toujours dark)
  const contextValue = {
    theme: "dark",
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}