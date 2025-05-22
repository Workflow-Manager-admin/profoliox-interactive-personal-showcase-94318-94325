// Helper functions for managing dark mode

/**
 * Check if code is running in browser environment
 */
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Initialize dark mode detection and setup
 * This function should be called in a useEffect on the client side
 */
export function initDarkMode(): void {
  // Skip if not in browser environment (SSR)
  if (!isBrowser) return;
  
  // Check for user preference in localStorage
  const savedTheme = localStorage.getItem('theme');
  
  // Check if user has dark mode preference in browser
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial dark mode based on saved preference or browser preference
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Listen for changes in system preference
  try {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Use the modern approach first (addEventListener)
    if (typeof darkModeMediaQuery.addEventListener === 'function') {
      darkModeMediaQuery.addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
          if (e.matches) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      });
    } else {
      // Fallback for older browsers
      darkModeMediaQuery.addListener(e => {
        if (!localStorage.getItem('theme')) {
          if (e.matches) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      });
    }
  } catch (e) {
    console.error('Error setting up dark mode listener:', e);
  }
}

/**
 * Toggle dark mode on/off
 */
export function toggleDarkMode(): void {
  // Skip if not in browser environment (SSR)
  if (!isBrowser) return;
  
  // Check if currently in dark mode
  const darkModeActive = document.documentElement.classList.contains('dark');
  
  if (darkModeActive) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

/**
 * Check if dark mode is currently active
 */
export function isDarkMode(): boolean {
  // Return default false if not in browser environment (SSR)
  if (!isBrowser) return false;
  
  return document.documentElement.classList.contains('dark');
}
