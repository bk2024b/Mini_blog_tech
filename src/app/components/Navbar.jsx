"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-slate-900/90 backdrop-blur-sm border-slate-800 shadow-sm" 
          : "bg-slate-900 border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative flex items-center">
                <Logo className="text-blue-600 group-hover:scale-105 transition-transform" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Mini-Blog Tech
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/about">À propos</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-slate-800 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t dark:border-slate-800">
          <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
            Accueil
          </MobileNavLink>
          <MobileNavLink href="/articles" onClick={() => setIsMenuOpen(false)}>
            Articles
          </MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
            À propos
          </MobileNavLink>
          <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-slate-800 hover:text-blue-400 transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-slate-800 hover:text-blue-400 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}