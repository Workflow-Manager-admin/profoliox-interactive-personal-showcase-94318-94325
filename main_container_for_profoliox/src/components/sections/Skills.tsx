'use client';

import React from 'react';

// Skill data organized by category
const skillsData = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Django', level: 70 },
    { name: 'GraphQL', level: 75 },
    { name: 'REST API', level: 90 },
  ],
  database: [
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Firebase', level: 75 },
    { name: 'Redis', level: 65 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'CI/CD', level: 75 },
    { name: 'Figma', level: 85 },
    { name: 'Adobe XD', level: 80 },
  ]
};

// SkillBar component for displaying individual skill with progress bar
const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</span>
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

// PUBLIC_INTERFACE
/**
 * Skills component for the ProfolioX portfolio application.
 * Displays the portfolio owner's technical skills and proficiency levels.
 */
export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here&apos;s a comprehensive overview of my technical skills and expertise levels in various technologies.
          </p>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
              <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Frontend Development
            </h3>
            {skillsData.frontend.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          {/* Backend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
              <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              Backend Development
            </h3>
            {skillsData.backend.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          {/* Database Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
              <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
              Database & Storage
            </h3>
            {skillsData.database.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          {/* Tools & Other Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
              <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Tools & Platforms
            </h3>
            {skillsData.tools.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
