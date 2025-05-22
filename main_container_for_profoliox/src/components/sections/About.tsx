import React from 'react';

// PUBLIC_INTERFACE
/**
 * About component for the ProfolioX portfolio application.
 * Provides information about the portfolio owner's background, skills, and interests.
 */
export default function About() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="rounded-lg overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800 p-1">
            <div className="aspect-w-4 aspect-h-5 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              {/* Replace with actual image */}
              <svg 
                className="w-32 h-32 text-gray-500 dark:text-gray-400" 
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
          </div>
          
          {/* Content column */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Jane Doe
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Developer based in San Francisco with over 5 years of experience building web and mobile applications. 
              I specialize in creating efficient, scalable, and user-friendly solutions that address real-world problems.
            </p>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
              My journey in tech began when I built my first website at 15. Since then, I've worked with startups and established companies alike, 
              helping them bring their ideas to life through clean code and thoughtful design.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">React.js / Next.js</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">Node.js / Express</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">UI/UX Design</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">MongoDB / PostgreSQL</span>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/experience" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors inline-block"
              >
                View My Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
