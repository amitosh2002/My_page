'use client';

import { WorkExperience } from '@/types';
import {
  Rocket,
  CreditCard,
  GraduationCap,
  Code2,
  Building2,
  GitBranch,
  GitFork,
  CheckCircle2,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { getWorkExperiences, saveWorkExperiences } from '@/lib/data-storage';
import './WorkSection.css';

// Career timeline with ShipIQ, Travels & Payments, Mittarv, and Utpatti Sub-Branch
const defaultExperiences: WorkExperience[] = [
  {
    id: '1',
    company: 'ShipIQ',
    position: 'Software Engineer',
    description:
      'Leading frontend and full-stack architecture for shipping intelligence, logistics tracking automation, and high-performance analytics dashboards.',
    startDate: '2026-08-01',
    current: true,
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    company: 'Travels and Payments',
    position: 'Software Developer',
    description:
      'Engineered secure payment processing workflows, booking system modules, and responsive checkout experiences with high reliability and throughput.',
    startDate: '2026-05-01',
    endDate: '2026-07-31',
    current: false,
    concurrentWith: 'Utpatti Fellowship Program',
    technologies: ['React', 'TypeScript', 'Payment Gateways', 'Tailwind CSS', 'REST API'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    company: 'Utpatti Fellowship Program',
    position: 'Technical Mentor',
    description:
      'Served as Technical Mentor guiding fellows in modern web engineering, architecture design, and production code reviews, operating concurrently alongside roles at Mittarv and Travels & Payments.',
    startDate: '2025-03-01',
    endDate: '2025-10-31',
    current: false,
    isSubBranch: true,
    subBranchLabel: 'Sub-branch from Mittarv & Travels and Payments',
    concurrentWith: 'Mittarv & Travels and Payments',
    technologies: ['Mentorship', 'Code Reviews', 'System Design', 'React', 'Node.js', 'Git'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    company: 'Mittarv',
    position: 'Software Developer',
    description:
      'Developed responsive user-facing product features, modular frontend state management, and reusable UI components across the platform.',
    startDate: '2025-02-01',
    endDate: '2025-04-30',
    current: false,
    concurrentWith: 'Utpatti Fellowship Program',
    technologies: ['React', 'JavaScript', 'Node.js', 'Redux', 'SCSS'],
    createdAt: new Date().toISOString(),
  },
];

export function WorkSection() {
  const [experiences, setExperiences] = useState<WorkExperience[]>(defaultExperiences);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = getWorkExperiences();
    // If stored contains the updated experiences, use them; otherwise initialize with defaultExperiences
    if (stored && stored.length > 0 && stored.some((e) => e.company.toLowerCase().includes('shipiq'))) {
      setExperiences(stored);
    } else {
      saveWorkExperiences(defaultExperiences);
      setExperiences(defaultExperiences);
    }
  }, []);

  // Format custom date ranges matching user requirements
  const formatTimelineDate = (experience: WorkExperience) => {
    const company = experience.company.toLowerCase();
    if (company.includes('shipiq')) {
      return 'Aug 2026 - Present';
    }
    if (company.includes('travel')) {
      return 'May - Jul 2026';
    }
    if (company.includes('utpatti')) {
      return 'Mar - Oct';
    }
    if (company.includes('mittarv')) {
      return 'Feb - Apr 2025';
    }
    const startYear = new Date(experience.startDate).getFullYear();
    if (experience.current) return `${startYear} - Present`;
    if (!experience.endDate) return `${startYear}`;
    const endYear = new Date(experience.endDate).getFullYear();
    return isNaN(endYear) || startYear === endYear ? `${startYear}` : `${startYear}-${endYear}`;
  };

  // Icon mapping
  const getTimelineIcon = (experience: WorkExperience) => {
    const company = experience.company.toLowerCase();
    if (experience.isSubBranch || company.includes('utpatti')) {
      return <GraduationCap className="timeline-badge-icon" />;
    }
    if (company.includes('shipiq')) {
      return <Rocket className="timeline-badge-icon" />;
    }
    if (company.includes('travel')) {
      return <CreditCard className="timeline-badge-icon" />;
    }
    if (company.includes('mittarv')) {
      return <Code2 className="timeline-badge-icon" />;
    }
    return <Building2 className="timeline-badge-icon" />;
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
            A chronological timeline of professional experience, active roles, and concurrent technical mentorship.
          </p>
        </div>

        {/* Timeline list */}
        {experiences.length === 0 ? (
          <div className="timeline-empty">
            <Building2 className="timeline-empty-icon" />
            <p>No timeline experiences added yet.</p>
          </div>
        ) : (
          <div className="timeline-list">
            {experiences.map((experience, index) => {
              const dateRange = formatTimelineDate(experience);
              const isSubBranch = experience.isSubBranch;

              return (
                <div
                  key={experience.id || index}
                  className={`timeline-item ${isSubBranch ? 'timeline-item-subbranch' : ''}`}
                >
                  {/* Left Column: Date Range */}
                  <div className="timeline-date-col">
                    <div className="timeline-date-text">{dateRange}</div>
                    {isSubBranch && (
                      <span className="timeline-date-subbranch-pill">
                        <GitBranch className="w-3 h-3" /> Sub-Branch
                      </span>
                    )}
                  </div>

                  {/* Center Column: Spine Line and Circular Badge */}
                  <div className="timeline-spine-col">
                    <div className="timeline-line" />
                    
                    {/* Visual branch curve connecting sub-branch to the main spine */}
                    {isSubBranch && (
                      <svg
                        className="timeline-branch-curve-svg"
                        viewBox="0 0 32 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M 2 2 C 2 14, 18 16, 20 24"
                          stroke="#a855f7"
                          strokeWidth="2.5"
                          strokeDasharray="3 3"
                        />
                      </svg>
                    )}

                    <div
                      className={`timeline-badge ${
                        isSubBranch ? 'timeline-badge-subbranch' : ''
                      }`}
                    >
                      {getTimelineIcon(experience)}
                    </div>
                  </div>

                  {/* Right Column: Card with Pointer Notch */}
                  <div className="timeline-card-col">
                    <div
                      className={`timeline-card ${
                        isSubBranch ? 'timeline-card-subbranch' : ''
                      }`}
                    >
                      {/* Mobile Date indicator (visible on small screens) */}
                      <div className="timeline-mobile-date">
                        {dateRange}
                        {isSubBranch && ' • Sub-Branch (Mentorship)'}
                      </div>

                      {/* Sub-branch banner header */}
                      {isSubBranch && (
                        <div className="timeline-branch-banner">
                          <span className="timeline-branch-pill">
                            <GitBranch className="w-3.5 h-3.5" /> Sub-Branch
                          </span>
                          <span className="timeline-branch-note">
                            Concurrent with Mittarv (Feb–Apr) & Travels and Payments (May–Jul)
                          </span>
                        </div>
                      )}

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
                      <div
                        className={`timeline-card-company ${
                          isSubBranch ? 'timeline-card-company-purple' : ''
                        }`}
                      >
                        {isSubBranch ? (
                          <GraduationCap className="w-4 h-4" />
                        ) : (
                          <Building2 className="w-4 h-4" />
                        )}
                        <span>{experience.company}</span>
                      </div>

                      {/* Overlap / Concurrent Tag on linked roles */}
                      {!isSubBranch && experience.concurrentWith && (
                        <div>
                          <span className="timeline-overlap-tag">
                            <GitFork className="w-3.5 h-3.5" /> Concurrent: Technical Mentor @ Utpatti Fellowship
                          </span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="timeline-card-desc">{experience.description}</p>

                      {/* Technology Chips */}
                      {experience.technologies && experience.technologies.length > 0 && (
                        <div className="timeline-tech-list">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`timeline-tech-tag ${
                                isSubBranch ? 'timeline-tech-tag-purple' : ''
                              }`}
                            >
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
