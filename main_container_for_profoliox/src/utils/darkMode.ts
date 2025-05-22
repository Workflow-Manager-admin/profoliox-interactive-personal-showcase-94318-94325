// Helper functions for managing dark mode

/**
 * Initialize dark mode detection and setup
 * This function should be called in a useEffect on the client side
 */
export function initDarkMode(): void {
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
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });
}

/**
 * Toggle dark mode on/off
 */
export function toggleDarkMode(): void {
  // Check if currently in dark mode
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  if (isDarkMode) {
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
  return document.documentElement.classList.contains('dark');
}
