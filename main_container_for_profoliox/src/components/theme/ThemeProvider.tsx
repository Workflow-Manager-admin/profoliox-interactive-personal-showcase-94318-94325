'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Create context for theme management
type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

// Create initial context value with defaults
const defaultContextValue: ThemeContextType = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

// PUBLIC_INTERFACE
/**
 * ThemeProvider component that provides theme context to child components
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Use null initial state and update when mounted to avoid hydration mismatches
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Initialize dark mode on client side only
  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);
    
    // Check for user preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Check if user has dark mode preference in browser
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial dark mode based on saved preference or browser preference
    const shouldUseDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(shouldUseDarkMode);
    
    // Apply class to document element
    if (shouldUseDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Listen for changes in system preference
    try {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem('theme')) {
          if (e.matches) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
          } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
          }
        }
      };
      
      // Use the modern approach first (addEventListener)
      if (typeof darkModeMediaQuery.addEventListener === 'function') {
        darkModeMediaQuery.addEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        darkModeMediaQuery.addListener(handleChange);
      }
      
      // Cleanup listener on unmount
      return () => {
        if (typeof darkModeMediaQuery.removeEventListener === 'function') {
          darkModeMediaQuery.removeEventListener('change', handleChange);
        } else {
          darkModeMediaQuery.removeListener(handleChange);
        }
      };
    } catch (e) {
      console.error('Error setting up dark mode listener:', e);
    }
  }, []);

  // Handle toggle dark mode and update state
  const handleToggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      
      if (newValue) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      
      return newValue;
    });
  };

  // Only provide actual theme value after component is mounted
  // This prevents hydration mismatches by ensuring we only use client-side state
  const value = isMounted 
    ? { isDarkMode, toggleDarkMode: handleToggleDarkMode }
    : defaultContextValue;

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// PUBLIC_INTERFACE
/**
 * Hook to use theme context in components
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  return context;
}
