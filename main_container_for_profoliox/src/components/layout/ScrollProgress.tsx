'use client';

import React, { useState, useEffect, RefObject } from 'react';
import { motion, useTransform, useSpring, MotionValue } from 'framer-motion';

// PUBLIC_INTERFACE
/**
 * ScrollProgress component displays a progress indicator that tracks the user's 
 * scroll position within a scrollable container.
 * 
 * @param scrollContainerRef - Reference to the scrollable container element
 * @param color - Optional color for the progress bar (defaults to indigo)
 */
export default function ScrollProgress({ 
  scrollContainerRef,
  color = 'indigo',
}: { 
  scrollContainerRef: RefObject<HTMLElement>;
  color?: 'indigo' | 'purple' | 'blue' | 'green'; 
}) {
  // State to track scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Get dynamic color class based on the color prop
  const getColorClass = () => {
    switch (color) {
      case 'purple': return 'bg-purple-600';
      case 'blue': return 'bg-blue-600';
      case 'green': return 'bg-green-600';
      case 'indigo':
      default: return 'bg-indigo-600';
    }
  };

  // Update scroll progress when container is scrolled
  useEffect(() => {
    const element = scrollContainerRef.current;
    if (!element) return;
    
    const handleScroll = () => {
      const contentHeight = element.scrollHeight - element.clientHeight;
      const currentProgress = element.scrollTop / contentHeight;
      setScrollProgress(isNaN(currentProgress) ? 0 : currentProgress);
    };
    
    // Initialize scroll position
    handleScroll();
    
    // Add scroll event listener
    element.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => element.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef]);
  
  // Create smooth spring animation for the progress bar
  const scaleX = useSpring(scrollProgress, { damping: 15, stiffness: 100 });
  
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-200 dark:bg-gray-800">
      <motion.div 
        className={`h-full ${getColorClass()}`}
        style={{ scaleX, transformOrigin: '0%' }}
        aria-hidden="true"
      />
    </div>
  );
}
