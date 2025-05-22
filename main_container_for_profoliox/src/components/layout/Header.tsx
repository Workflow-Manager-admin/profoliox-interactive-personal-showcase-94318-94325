'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/theme/ThemeProvider';

// PUBLIC_INTERFACE
/**
 * Header component for the ProfolioX portfolio application.
 * Includes logo, navigation menu, and theme toggle functionality.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

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
            {/* Dark mode toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              <div className="relative">
                {/* Sun icon - always rendered but conditionally visible */}
                <svg 
                  className={`h-5 w-5 transition-opacity duration-300 absolute ${isDarkMode ? 'opacity-0' : 'opacity-100'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden={isDarkMode ? true : false}
                >
                  <path 
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" 
                  />
                </svg>
                
                {/* Moon icon - always rendered but conditionally visible */}
                <svg 
                  className={`h-5 w-5 transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden={isDarkMode ? "false" : "true"}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Container for menu icons with absolute positioning to stack them */}
                <div className="relative">
                  {/* Hamburger icon - always rendered, conditionally visible */}
                  <svg
                    className={`h-6 w-6 transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden={isMenuOpen ? "true" : "false"}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  
                  {/* Close icon - always rendered, conditionally visible */}
                  <svg
                    className={`h-6 w-6 absolute top-0 left-0 transition-opacity duration-200 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden={isMenuOpen ? "false" : "true"}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-900 pb-3 px-2`}>
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
