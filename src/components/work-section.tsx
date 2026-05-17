'use client';

import { WorkExperience } from '@/types';
import { Building2, Calendar } from 'lucide-react';
import { useState } from 'react';
import { getWorkExperiences } from '@/lib/data-storage';

export function WorkSection() {
  const [experiences] = useState<WorkExperience[]>(() => {
    if (typeof window === 'undefined') return [];
    const sorted = getWorkExperiences().sort((a, b) => {
      if (a.current && !b.current) return -1;
      if (!a.current && b.current) return 1;
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
    return sorted;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="work" className="py-20 md:py-28 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and expertise in software development.
          </p>
        </div>

        {experiences.length === 0 ? (
          <div className="text-center py-16">
            <Building2 className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No work experience added yet.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div
                key={experience.id}
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
              >
                {/* Background gradient on hover for modern look */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="p-8 space-y-6 h-full flex flex-col relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Building2 className="h-7 w-7 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                          {experience.position}
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mt-1">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    {experience.current && (
                      <span className="px-3 py-1 text-sm font-extrabold bg-yellow-400 text-gray-900 rounded-full flex-shrink-0 shadow-lg animate-pulse-slow">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 flex-grow text-base leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technology Tags Section */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-bold uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                    {experience.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                        +{experience.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Date Section */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {formatDate(experience.startDate)} -{' '}
                      {experience.current ? (
                        <span className="text-green-600 dark:text-green-400">Present</span>
                      ) : (
                        experience.endDate && formatDate(experience.endDate)
                      )}
                    </span>
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

