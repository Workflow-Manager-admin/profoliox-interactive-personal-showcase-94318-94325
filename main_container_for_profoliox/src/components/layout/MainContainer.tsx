'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import ScrollProgress from './ScrollProgress';

// PUBLIC_INTERFACE
/**
 * MainContainer component that serves as the primary wrapper for the ProfolioX portfolio application.
 * This component provides the layout structure with header, sidebar, content area, and footer.
 * 
 * Features:
 * - Responsive layout with collapsible sidebar
 * - Scroll progress indicator
 * - Smooth animations for content transitions
 * - Accessibility features
 * - Support for both light and dark themes
 * 
 * @param children - React components to render within the container
 * @param showScrollProgress - Option to show/hide the scroll progress indicator
 */
export default function MainContainer({ 
  children,
  showScrollProgress = true,
}: { 
  children: React.ReactNode;
  showScrollProgress?: boolean;
}) {
  // Track if sidebar is open on mobile
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  // Track current scroll position for animations
  const [scrollY, setScrollY] = useState(0);
  // Element reference for scroll container
  const mainContentRef = useRef<HTMLElement>(null);
  
  // Track whether the user has scrolled down
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // Handle scroll events to update UI based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (mainContentRef.current) {
        const currentScrollY = mainContentRef.current.scrollTop;
        setScrollY(currentScrollY);
        setHasScrolled(currentScrollY > 50);
      }
    };
    
    const contentElement = mainContentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Toggle mobile sidebar
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(prev => !prev);
  };

  // Close sidebar when clicking outside on mobile
  const handleContentClick = () => {
    if (isMobileSidebarOpen) {
      setIsMobileSidebarOpen(false);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header component for navigation and branding */}
      <Header 
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
        hasScrolled={hasScrolled}
      />
      
      {/* Main content wrapper with sidebar and content area */}
      <div className="flex flex-grow">
        {/* Sidebar for navigation links - Visible on desktop, toggleable on mobile */}
        <Sidebar 
          isMobileSidebarOpen={isMobileSidebarOpen}
          closeMobileSidebar={() => setIsMobileSidebarOpen(false)}
        />
        
        {/* Semi-transparent overlay when mobile sidebar is open */}
        {isMobileSidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-30"
            onClick={toggleMobileSidebar}
            aria-hidden="true"
          />
        )}
        
        {/* Main content area with animations */}
        <motion.main 
          ref={mainContentRef}
          className="flex-1 p-4 md:p-8 overflow-auto relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleContentClick}
        >
          {showScrollProgress && <ScrollProgress scrollContainerRef={mainContentRef} />}
          
          <AnimatePresence mode="wait">
            <motion.div 
              className="max-w-7xl mx-auto"
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
          
          {/* Back to top button - appears after scrolling */}
          <AnimatePresence>
            {hasScrolled && (
              <motion.button
                className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 z-20"
                onClick={() => mainContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                aria-label="Back to top"
                title="Back to top"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.main>
      </div>
      
      {/* Footer with contact info and copyright */}
      <Footer />
    </div>
  );
}
