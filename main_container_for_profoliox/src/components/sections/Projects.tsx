import React from 'react';
import Image from 'next/image';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with cart, payment processing, and inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/placeholder-project1.jpg',
    link: '/projects/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard for monitoring business metrics and performance indicators.',
    technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    image: '/placeholder-project2.jpg',
    link: '/projects/analytics-dashboard',
  },
  {
    id: 3,
    title: 'Health & Fitness App',
    description: 'Mobile application for tracking workouts, nutrition, and personal health goals with social features.',
    technologies: ['React Native', 'Firebase', 'GraphQL', 'Expo'],
    image: '/placeholder-project3.jpg',
    link: '/projects/health-fitness-app',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'Machine learning-powered tool that generates custom content based on user parameters.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'AWS'],
    image: '/placeholder-project4.jpg',
    link: '/projects/ai-content-generator',
  }
];

// PUBLIC_INTERFACE
/**
 * Projects component for the ProfolioX portfolio application.
 * Showcases the portfolio owner's projects with descriptions and links.
 */
export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here&apos;s a selection of my recent work. Each project presented unique challenges and opportunities for growth.
          </p>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700 relative">
                {/* This would be replaced with actual project images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-2">
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                  >
                    View Project Details
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors inline-flex items-center"
          >
            View All Projects
            <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
