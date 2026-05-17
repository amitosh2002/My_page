'use client';

import { Project } from '@/types';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getProjects } from '@/lib/data-storage';

export function ProjectsSection() {
  const [projects] = useState<Project[]>(() => {
    if (typeof window === 'undefined') return [];
    return getProjects();
  });

  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="py-20 md:py-28 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Showcase
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
            Featured Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Each project represents a significant challenge solved using modern development practices.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-16">
            <Code2 className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No projects yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="
                  group 
                  bg-white dark:bg-gray-800 
                  rounded-3xl 
                  shadow-xl dark:shadow-2xl 
                  hover:shadow-blue-500/40 dark:hover:shadow-blue-500/60
                  transition-all duration-500 
                  overflow-hidden 
                  border border-gray-100 dark:border-gray-700 
                  hover:border-blue-500 dark:hover:border-blue-400
                  hover:-translate-y-2 hover:scale-[1.01]
                  relative
                "
                style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'translateY(0)' : 'translateY(40px)',
                    transitionDelay: `${index * 100}ms`,
                    transition: 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                {/* Background gradient on hover for modern look */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="p-8 space-y-6 h-full flex flex-col relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Code2 className="h-7 w-7 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white truncate">
                        {project.title}
                      </h3>
                    </div>
                    {project.featured && (
                      <span className="px-3 py-1 text-sm font-extrabold bg-yellow-400 text-gray-900 rounded-full flex-shrink-0 shadow-lg animate-pulse-slow">
                        STAR
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 flex-grow text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags Section */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-bold uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Links Section */}
                  <div className="flex gap-6 pt-5 border-t border-gray-200 dark:border-gray-700">
                    {/* GitHub Link */}
                    {project.githubUrl && project.githubUrl !== '#' ? (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold group-hover:scale-105 group-hover:translate-x-0.5"
                      >
                        <Github className="h-5 w-5" />
                        <span className="text-base">View Code</span>
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-gray-400 dark:text-gray-600 cursor-not-allowed">
                        <Github className="h-5 w-5" />
                        <span className="text-base">Code Unavailable</span>
                      </span>
                    )}
                    
                    {/* Live Demo Link */}
                    {project.liveUrl && project.liveUrl !== '#' ? (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 font-semibold group-hover:scale-105 group-hover:translate-x-0.5"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="text-base">Live Demo</span>
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-gray-400 dark:text-gray-600 cursor-not-allowed">
                        <ExternalLink className="h-5 w-5" />
                        <span className="text-base">Live Unavailable</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
