"use client";

import { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Protection contre l'hydratation - initialiser seulement côté client
  useEffect(() => {
    // Récupération du thème depuis localStorage avec protection
    const savedTheme = 
      typeof window !== "undefined" 
        ? localStorage.getItem("theme") || 
          (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : "light";
    
    setTheme(savedTheme);
    
    // Application du thème au document uniquement côté client
    if (typeof window !== "undefined") {
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    
    setMounted(true);
  }, []);

  // Fonction pour basculer le thème - corrigée pour s'assurer que les changements sont appliqués
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Mettre à jour l'état
    setTheme(newTheme);
    
    // Mettre à jour le localStorage et les classes CSS
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  // Valeur du contexte
  const contextValue = {
    theme,
    setTheme,
    toggleTheme,
  };

  // Protection contre l'hydratation
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}