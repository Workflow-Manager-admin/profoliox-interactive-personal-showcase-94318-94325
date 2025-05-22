'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { initDarkMode, toggleDarkMode, isDarkMode } from '@/utils/darkMode';

// Create context for theme management
type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// PUBLIC_INTERFACE
/**
 * ThemeProvider component that provides theme context to child components
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // State to track dark mode status - initialize to false and update in useEffect
  // Using undefined as initial state to prevent hydration mismatches
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  // Initialize dark mode on client side
  useEffect(() => {
    // Initialize dark mode from system preferences or saved preferences
    initDarkMode();
    
    // Update state based on current dark mode status
    setDarkMode(isDarkMode());

    // Create observer to watch for class changes on document element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          setDarkMode(isDarkMode());
        }
      });
    });

    // Start observing document element for class changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  // Handle toggle dark mode and update state
  const handleToggleDarkMode = () => {
    toggleDarkMode();
    setDarkMode(isDarkMode());
  };

  return (
    <ThemeContext.Provider
      value={{ 
        isDarkMode: darkMode ?? false, // Use false as fallback when undefined
        toggleDarkMode: handleToggleDarkMode 
      }}
    >
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
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
