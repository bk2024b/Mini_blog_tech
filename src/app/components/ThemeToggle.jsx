"use client";

import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Une fois le composant monté, on peut afficher le bon thème
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    // Animation de clic
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    
    // Appliquer le changement de thème
    toggleTheme();
  };

  // Si pas encore monté, on affiche un placeholder pour éviter le saut
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-gray-200 transition-colors"
        aria-label="Chargement du thème"
        disabled
      >
        <div className="h-5 w-5"></div>
      </button>
    );
  }
  
  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-gray-200 
        hover:bg-gray-300 dark:hover:bg-slate-700 transition-all duration-300 
        ${isAnimating ? 'scale-90' : 'hover:scale-105'}`}
      aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
      title={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
    >
      {theme === "light" ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
}