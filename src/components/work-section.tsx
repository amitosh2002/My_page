'use client';

import { WorkExperience } from '@/types';
import {
  BarChart3,
  Globe,
  Code2,
  Clock,
  Rocket,
  Briefcase,
  Building2,
  Calendar,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { getWorkExperiences } from '@/lib/data-storage';
import './WorkSection.css';

// Default milestones used as a fallback if no items are saved in storage
const fallbackExperiences: WorkExperience[] = [
  {
    id: '1',
    company: 'Hora Workspace',
    position: 'Full Stack Developer',
    description:
      'Architected scalable backend microservices, modular workspace management platforms, and real-time collaborative boards with Next.js and Node.js.',
    startDate: '2024-01-01',
    current: true,
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    company: 'Namaste India Portal',
    position: 'Frontend Developer & UI Specialist',
    description:
      'Engineered dynamic interactive web experiences, optimized rendering pipelines, and developed responsive, mobile-first design systems.',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    current: false,
    technologies: ['React', 'JavaScript', 'SCSS', 'Redux Toolkit', 'REST API'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    company: 'Recode Platform',
    position: 'Software Engineering Intern',
    description:
      'Developed online code execution modules, interactive quiz assessments, and student progress dashboards within an Agile development workflow.',
    startDate: '2022-06-01',
    endDate: '2022-12-31',
    current: false,
    technologies: ['Node.js', 'Express', 'React', 'MongoDB', 'Jira'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    company: 'Independent Developer',
    position: 'Open Source & Web Development',
    description:
      'Created open-source UI libraries, modern theme designs, and cross-platform Flutter applications for web and mobile platforms.',
    startDate: '2021-08-01',
    endDate: '2022-05-31',
    current: false,
    technologies: ['Flutter', 'Dart', 'JavaScript', 'CSS3', 'Git'],
    createdAt: new Date().toISOString(),
  },
];

export function WorkSection() {
  const [experiences, setExperiences] = useState<WorkExperience[]>(fallbackExperiences);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = getWorkExperiences();
    if (stored && stored.length > 0) {
      const sorted = [...stored].sort((a, b) => {
        if (a.current && !b.current) return -1;
        if (!a.current && b.current) return 1;
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      });
      setExperiences(sorted);
    }
  }, []);

  // Format compact year range for the left column (e.g. "2024 - till" or "2022-2023")
  const formatYearRange = (startDate: string, endDate?: string, current?: boolean) => {
    const startYear = new Date(startDate).getFullYear();
    if (isNaN(startYear)) return startDate;
    if (current) return `${startYear}-till`;
    if (!endDate) return `${startYear}`;
    const endYear = new Date(endDate).getFullYear();
    return isNaN(endYear) ? `${startYear}` : `${startYear}-${endYear}`;
  };

  // Detailed month + year for secondary display
  const formatDetailedDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  // Sequence of icons matching the reference image (Chart, Globe, Code, Clock)
  const getTimelineIcon = (index: number) => {
    const icons = [BarChart3, Globe, Code2, Clock, Rocket, Briefcase];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="timeline-badge-icon" />;
  };

  return (
    <section id="work" className="timeline-section">
      <div className="timeline-container">
        {/* Header with Background Watermark and Blue Underline Bar */}
        <div className="timeline-header">
          <div className="timeline-watermark" aria-hidden="true">
            TIMELINE
          </div>
          <div className="timeline-title-wrapper">
            <h2 className="timeline-title">
              Company
              <span className="timeline-title-highlight">
                Timeline
                <span className="timeline-title-bar" />
              </span>
            </h2>
          </div>
          <p className="timeline-subtitle">
            A chronological journey of professional milestones, leadership roles, and impactful engineering contributions.
          </p>
        </div>

        {/* Timeline list or empty state */}
        {experiences.length === 0 ? (
          <div className="timeline-empty">
            <Building2 className="timeline-empty-icon" />
            <p>No timeline experiences added yet.</p>
          </div>
        ) : (
          <div className="timeline-list">
            {experiences.map((experience, index) => {
              const yearRange = formatYearRange(
                experience.startDate,
                experience.endDate,
                experience.current
              );

              return (
                <div key={experience.id || index} className="timeline-item">
                  {/* Left Column: Date Range */}
                  <div className="timeline-date-col">
                    <span className="timeline-date-text">{yearRange}</span>
                  </div>

                  {/* Center Column: Spine Line and Circular Badge */}
                  <div className="timeline-spine-col">
                    <div className="timeline-line" />
                    <div className="timeline-badge">
                      {getTimelineIcon(index)}
                    </div>
                  </div>

                  {/* Right Column: Card with Pointer Notch */}
                  <div className="timeline-card-col">
                    <div className="timeline-card">
                      {/* Mobile Date indicator (visible on small screens) */}
                      <div className="timeline-mobile-date">
                        {yearRange} • {formatDetailedDate(experience.startDate)} –{' '}
                        {experience.current ? 'Present' : experience.endDate && formatDetailedDate(experience.endDate)}
                      </div>

                      {/* Header with Title and Current Badge */}
                      <div className="timeline-card-header">
                        <h3 className="timeline-card-title">{experience.position}</h3>
                        {experience.current && (
                          <span className="timeline-current-badge">
                            <span className="timeline-current-dot" />
                            Current
                          </span>
                        )}
                      </div>

                      {/* Company Name */}
                      <div className="timeline-card-company">
                        <Building2 className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </div>

                      {/* Description */}
                      <p className="timeline-card-desc">{experience.description}</p>

                      {/* Technology Chips */}
                      {experience.technologies && experience.technologies.length > 0 && (
                        <div className="timeline-tech-list">
                          {experience.technologies.map((tech, i) => (
                            <span key={i} className="timeline-tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
