/**
 * Utility functions for the ProfolioX application
 * 
 * This file serves as an entry point for importing utility functions
 * across the application.
 */

/**
 * Simple utility function to format a date
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Truncate text to a specific length and add ellipsis
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * Generate a random ID (useful for temporary keys)
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
