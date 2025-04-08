// src/app/components/Logo.jsx
import React from "react";

export default function Logo({ className = "", size = "md" }) {
  // Tailles disponibles pour le logo
  const sizes = {
    sm: { viewBox: "0 0 32 32", className: "h-6 w-6" },
    md: { viewBox: "0 0 32 32", className: "h-8 w-8" },
    lg: { viewBox: "0 0 32 32", className: "h-12 w-12" }
  };

  const { viewBox, className: sizeClass } = sizes[size] || sizes.md;

  return (
    <svg 
      viewBox={viewBox}
      className={`${sizeClass} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      
      {/* Fond du logo */}
      <rect x="2" y="2" width="28" height="28" rx="8" 
        className="fill-white dark:fill-gray-800 stroke-gray-200 dark:stroke-gray-700"
        strokeWidth="1.5" />
      
      {/* Lettre J stylisée */}
      <path 
        d="M12 8h8v3h-5v6.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V16h3v1.5c0 3.03-2.47 5.5-5.5 5.5S12 20.53 12 17.5V8z" 
        fill="url(#logoGradient)" 
      />
      
      {/* Point d'accent */}
      <circle cx="22" cy="8" r="2" fill="url(#logoGradient)" />
    </svg>
  );
}