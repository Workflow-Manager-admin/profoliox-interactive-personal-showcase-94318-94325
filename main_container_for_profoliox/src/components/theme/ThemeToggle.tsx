'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

/**
 * Client-side only theme toggle component to prevent hydration issues
 */
export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show theme toggle after mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return (
      <button
        aria-label="Toggle dark mode"
        className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-5 h-5">
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
      </div>
    </button>
  );
}
