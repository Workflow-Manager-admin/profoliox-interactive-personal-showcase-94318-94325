'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// PUBLIC_INTERFACE
/**
 * ContentSection component provides a consistent container for content sections
 * within the MainContainer. It includes animations, styling, and accessibility features.
 * 
 * @param children - React components to render within the section
 * @param title - Optional section title
 * @param subtitle - Optional section subtitle
 * @param className - Additional CSS classes to apply
 * @param id - HTML ID for the section (useful for navigation)
 * @param animationDirection - Direction for the entrance animation
 * @param withDivider - Whether to show a divider line below the section title
 */
export default function ContentSection({
  children,
  title,
  subtitle,
  className = '',
  id,
  animationDirection = 'up',
  withDivider = true,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  animationDirection?: 'up' | 'down' | 'left' | 'right';
  withDivider?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });
  const controls = useAnimation();
  
  // Configure animation direction
  const getAnimationProps = () => {
    switch (animationDirection) {
      case 'down': return { y: -30, opacity: 0 };
      case 'left': return { x: 50, opacity: 0 };
      case 'right': return { x: -50, opacity: 0 };
      case 'up':
      default: return { y: 30, opacity: 0 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={getAnimationProps()}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-12 md:py-20 ${className}`}
    >
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
          )}
          
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          
          {withDivider && title && (
            <div className="h-1 w-24 bg-indigo-600 mx-auto mt-4"></div>
          )}
        </div>
      )}
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}
