'use client';

import { useState } from 'react';
import {
  BarChart3,
  Globe,
  Clock,
  GraduationCap,
  Building2,
  Briefcase,
  Users,
} from 'lucide-react';
import './WorkSection.css';

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  icon: typeof BarChart3;
  isCurrent?: boolean;
  concurrentNote?: string;
}

// 1. Core Company Work Experience
const companyExperiences: TimelineItem[] = [
  {
    id: 'shipiq',
    date: 'Aug 2026 – Present',
    title: 'Software Engineer',
    company: 'ShipIQ',
    description:
      'Leading frontend and full-stack development for shipping logistics intelligence, tracking automation, and high-performance analytics dashboards.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    icon: BarChart3,
    isCurrent: true,
  },
  {
    id: 'travels',
    date: 'May – Jul 2026',
    title: 'Software Developer',
    company: 'Travels and Payments',
    description:
      'Engineered secure payment processing workflows, booking system modules, and responsive checkout experiences with high reliability and throughput.',
    technologies: ['React', 'TypeScript', 'Payment Gateways', 'Tailwind CSS', 'REST API'],
    icon: Globe,
  },
  {
    id: 'mittarv',
    date: 'Feb – Apr 2025',
    title: 'Software Developer',
    company: 'Mittarv',
    description:
      'Developed responsive customer-facing product features, modular frontend state management, and reusable UI components across the platform.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Redux', 'SCSS'],
    icon: Clock,
  },
];

// 2. Mentorship & Fellowship (Other Experience)
const mentorshipExperiences: TimelineItem[] = [
  {
    id: 'utpatti',
    date: 'Mar – Oct',
    title: 'Technical Mentor',
    company: 'Utpatti Fellowship Program',
    description:
      'Served as Technical Mentor guiding fellows in modern web engineering, architecture design, and production code reviews, operating concurrently alongside engineering roles.',
    technologies: ['Mentorship', 'Code Reviews', 'System Design', 'React', 'Node.js', 'Git'],
    icon: GraduationCap,
    concurrentNote: 'Concurrent with Mittarv & Travels and Payments',
  },
];

export function WorkSection() {
  const [filter, setFilter] = useState<'all' | 'companies' | 'mentorship'>('all');

  const showCompanies = filter === 'all' || filter === 'companies';
  const showMentorship = filter === 'all' || filter === 'mentorship';

  return (
    <section id="work" className="timeline-section">
      <div className="timeline-container">
        {/* Top Category Filter Tabs */}
        <div className="timeline-filter-bar">
          <button
            type="button"
            className={`timeline-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <span>All Experience</span>
            <span className="timeline-filter-count">
              {companyExperiences.length + mentorshipExperiences.length}
            </span>
          </button>
          <button
            type="button"
            className={`timeline-filter-btn ${filter === 'companies' ? 'active' : ''}`}
            onClick={() => setFilter('companies')}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Company Roles</span>
            <span className="timeline-filter-count">{companyExperiences.length}</span>
          </button>
          <button
            type="button"
            className={`timeline-filter-btn ${filter === 'mentorship' ? 'active' : ''}`}
            onClick={() => setFilter('mentorship')}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Mentorship & Fellowship</span>
            <span className="timeline-filter-count">{mentorshipExperiences.length}</span>
          </button>
        </div>

        {/* ==================================================================
            1. Core Company Timeline Section
            ================================================================== */}
        {showCompanies && (
          <div className="timeline-block">
            <div className="timeline-header">
              <div className="timeline-watermark" aria-hidden="true">
                COMPANIES
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
                Core software engineering and development roles driving product scale and technical execution.
              </p>
            </div>

            <div className="timeline-list">
              {companyExperiences.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="timeline-row">
                    <div className="timeline-date-col">
                      <span className="timeline-date-text">{item.date}</span>
                    </div>

                    <div className="timeline-spine-col">
                      <div className="timeline-spine-line" />
                      <div className="timeline-circle">
                        <Icon className="timeline-circle-icon" />
                      </div>
                    </div>

                    <div className="timeline-card-col">
                      <div className="timeline-card">
                        <div className="timeline-mobile-date">{item.date}</div>

                        <div className="timeline-card-header">
                          <h3 className="timeline-card-title">{item.title}</h3>
                          {item.isCurrent && (
                            <span className="timeline-current-pill">
                              <span className="timeline-current-dot" />
                              Current
                            </span>
                          )}
                        </div>

                        <div className="timeline-card-company">
                          <Building2 className="w-4 h-4" />
                          <span>{item.company}</span>
                        </div>

                        <p className="timeline-card-desc">{item.description}</p>

                        {item.technologies && item.technologies.length > 0 && (
                          <div className="timeline-tech-list">
                            {item.technologies.map((tech, i) => (
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
          </div>
        )}

        {/* Separator between sections when viewing All */}
        {filter === 'all' && <div className="timeline-block-divider" />}

        {/* ==================================================================
            2. Separate Place for Other Experience (Mentorship & Fellowship)
            ================================================================== */}
        {showMentorship && (
          <div className="timeline-block">
            <div className="timeline-header">
              <div className="timeline-watermark" aria-hidden="true">
                MENTORSHIP
              </div>
              <div className="timeline-title-wrapper">
                <h2 className="timeline-title">
                  Fellowship &
                  <span className="timeline-title-highlight">
                    Mentorship
                    <span className="timeline-title-bar" />
                  </span>
                </h2>
              </div>
              <p className="timeline-subtitle">
                Technical coaching, architectural guidance, and community fellowship mentorship conducted concurrently with engineering roles.
              </p>
            </div>

            <div className="timeline-list">
              {mentorshipExperiences.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="timeline-row">
                    <div className="timeline-date-col">
                      <span className="timeline-date-text">{item.date}</span>
                    </div>

                    <div className="timeline-spine-col">
                      <div className="timeline-spine-line" />
                      <div className="timeline-circle">
                        <Icon className="timeline-circle-icon" />
                      </div>
                    </div>

                    <div className="timeline-card-col">
                      <div className="timeline-card">
                        <div className="timeline-mobile-date">{item.date}</div>

                        <div className="timeline-card-header">
                          <h3 className="timeline-card-title">{item.title}</h3>
                        </div>

                        <div className="timeline-card-company">
                          <GraduationCap className="w-4 h-4" />
                          <span>{item.company}</span>
                        </div>

                        {item.concurrentNote && (
                          <div className="timeline-concurrent-note">
                            <span>⚡ {item.concurrentNote}</span>
                          </div>
                        )}

                        <p className="timeline-card-desc">{item.description}</p>

                        {item.technologies && item.technologies.length > 0 && (
                          <div className="timeline-tech-list">
                            {item.technologies.map((tech, i) => (
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
          </div>
        )}
      </div>
    </section>
  );
}
