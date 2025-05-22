'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/theme/ThemeProvider';
import { formatDate } from '@/utils';

// PUBLIC_INTERFACE
/**
 * Header component for the ProfolioX portfolio application.
 * Includes logo, navigation menu, and theme toggle functionality.
 */
export default function Header() {
  // Use false as initial state for isMenuOpen to avoid hydration mismatches
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  // Set mounted state after hydration is complete
  useEffect(() => {
    setIsMounted(true);
    // Log current date using our utility function
    console.log('Header mounted date:', formatDate(new Date()));
  }, []);

  // Only toggle menu after mounting to prevent hydration issues
  const toggleMenu = () => {
    if (isMounted) {
      setIsMenuOpen(prev => !prev);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and branding */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-gray-900 dark:text-white">ProfolioX</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              About
            </Link>
            <Link href="/projects" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Projects
            </Link>
            <Link href="/skills" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Skills
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Contact
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center">
            {/* Dark mode toggle - Only render icons when component is mounted to prevent hydration issues */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              <div className="relative w-5 h-5">
                {/* Only render SVGs after client-side hydration */}
                {isMounted ? (
                  <>
                    {/* Sun icon */}
                    <svg 
                      className={`w-5 h-5 absolute inset-0 transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    
                    {/* Moon icon */}
                    <svg 
                      className={`w-5 h-5 absolute inset-0 transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </>
                ) : (
                  // Empty div during SSR to prevent hydration mismatch
                  <div className="w-5 h-5" />
                )}
              </div>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Only render icons when component is mounted */}
                {isMounted ? (
                  <div className="relative w-6 h-6">
                    {/* Hamburger icon - controlled by opacity */}
                    <svg
                      className={`w-6 h-6 absolute inset-0 transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    {/* Close icon - controlled by opacity */}
                    <svg
                      className={`w-6 h-6 absolute inset-0 transition-opacity duration-200 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                ) : (
                  // Placeholder during SSR to maintain layout
                  <div className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu - hidden by default */}
      <div 
        className={`md:hidden bg-white dark:bg-gray-900 pb-3 px-2 ${isMounted && isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            About
          </Link>
          <Link href="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            Projects
          </Link>
          <Link href="/skills" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            Skills
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
