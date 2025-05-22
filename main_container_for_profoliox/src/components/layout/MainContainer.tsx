import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

// PUBLIC_INTERFACE
/**
 * MainContainer component that serves as the primary wrapper for the ProfolioX portfolio application.
 * This component provides the layout structure with header, sidebar, content area, and footer.
 */
export default function MainContainer({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header component for navigation and branding */}
      <Header />
      
      <div className="flex flex-grow">
        {/* Sidebar for navigation links */}
        <Sidebar />
        
        {/* Main content area */}
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      
      {/* Footer with contact info and copyright */}
      <Footer />
    </div>
  );
}
