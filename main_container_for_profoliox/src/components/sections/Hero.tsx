import React from 'react';
import Image from 'next/image';

// PUBLIC_INTERFACE
/**
 * Hero component for the ProfolioX portfolio application.
 * Displays a featured banner with introduction and call-to-action buttons.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-16 md:py-24 rounded-2xl">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L100 100M100 0L0 100" stroke="white" strokeWidth="0.5" />
          <path d="M0 50H100M50 0V100" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hello, I'm <span className="text-yellow-300">Jane Doe</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
            Full Stack Developer & UX Designer
          </h2>
          <p className="text-base md:text-lg mb-8 text-gray-100">
            I create elegant solutions to complex problems. With expertise in both front-end and back-end technologies, I build seamless, user-focused applications that deliver exceptional experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white text-indigo-700 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-transparent border-2 border-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
            {/* This would be replaced with an actual profile image */}
            <div className="w-full h-full rounded-full bg-white/20 flex items-center justify-center">
              <svg 
                className="w-40 h-40 text-white/70" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-indigo-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
