import { Metadata } from "next";
import MainContainer from "@/components/layout/MainContainer";

export const metadata: Metadata = {
  title: "ProfolioX | Work Experience",
  description: "My professional journey and work experience.",
};

export default function ExperiencePage() {
  return (
    <MainContainer>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Work Experience</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-16 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-first:before:rounded-t-md group-last:before:rounded-b-md group-last:after:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              <div className="absolute left-0 sm:-left-3 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Software Engineer</h3>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-0 sm:ml-auto">2021 - Present</span>
            </div>
            <h4 className="text-md font-semibold text-indigo-600 dark:text-indigo-400">Tech Innovators Inc.</h4>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Led the development of several key projects, including an e-commerce platform and customer analytics dashboard.
              Managed a team of 4 developers and implemented CI/CD pipelines that reduced deployment time by 50%.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">Node.js</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">GraphQL</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">AWS</span>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-16 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-first:before:rounded-t-md group-last:before:rounded-b-md group-last:after:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              <div className="absolute left-0 sm:-left-3 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frontend Developer</h3>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-0 sm:ml-auto">2018 - 2021</span>
            </div>
            <h4 className="text-md font-semibold text-indigo-600 dark:text-indigo-400">Web Solutions Co.</h4>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Developed responsive web applications and implemented UI/UX improvements that increased user engagement by 35%.
              Collaborated with designers and back-end developers to deliver high-quality applications on time.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">JavaScript</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">Vue.js</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">SASS</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">Webpack</span>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-16 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-first:before:rounded-t-md group-last:before:rounded-b-md group-last:after:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              <div className="absolute left-0 sm:-left-3 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Junior Web Developer</h3>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-0 sm:ml-auto">2016 - 2018</span>
            </div>
            <h4 className="text-md font-semibold text-indigo-600 dark:text-indigo-400">Digital Creations LLC</h4>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Built and maintained websites for various clients across different industries.
              Gained expertise in responsive design and cross-browser compatibility.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">HTML</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">CSS</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">jQuery</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">WordPress</span>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
