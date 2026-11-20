'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
  Briefcase,
  Users,
  Calendar,
  Sparkles,
} from 'lucide-react';

import shipiqLogo from '@/theme/shipiq.png';
import tpLogo from '@/theme/t&p.svg';
import mittarvLogo from '@/theme/mittarv.svg';
import utpattiLogo from '@/theme/utpatti.png';

import './WorkSection.css';

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  logo: StaticImageData | string;
  logoBg?: string;
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
    logo: shipiqLogo,
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
    logo: tpLogo,
    logoBg: '#0f172a', // Dark container for the white SVG logo
  },
  {
    id: 'mittarv',
    date: 'Feb – Apr 2025',
    title: 'Software Developer',
    company: 'Mittarv',
    description:
      'Developed responsive customer-facing product features, modular frontend state management, and reusable UI components across the platform.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Redux', 'SCSS'],
    logo: mittarvLogo,
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
    logo: utpattiLogo,
    concurrentNote: 'Concurrent with Mittarv & Travels and Payments',
  },
];

export function WorkSection() {
  const [filter, setFilter] = useState<'all' | 'companies' | 'mentorship'>('all');

  const showCompanies = filter === 'all' || filter === 'companies';
  const showMentorship = filter === 'all' || filter === 'mentorship';

  return (
    <section id="work" className="timeline-section">
      {/* Floating Interactive Background Coding SVGs */}
      <div className="timeline-bg-decorations" aria-hidden="true">
        {/* React Atom */}
        <svg
          className="timeline-bg-svg-symbol svg-react"
          viewBox="-11.5 -10.23174 23 20.46348"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>

        {/* HTML Tags </> */}
        <svg
          className="timeline-bg-svg-symbol svg-html"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>

        {/* Parentheses ( ) */}
        <div className="timeline-bg-svg-symbol svg-parentheses">( )</div>

        {/* Python Logo */}
        <svg
          className="timeline-bg-svg-symbol svg-python"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.914 0C8.58 0 8.78 1.44 8.78 1.44l.006 1.49h3.19v.45H4.49S2 3.09 2 6.54c0 3.45 2.14 3.32 2.14 3.32h1.28V8.32s-.07-2.14 2.1-2.14h3.63s2.03.03 2.03-1.99V2.06S13.43 0 11.91 0zm-1.8 1.05a.65.65 0 1 1 0 1.3.65.65 0 0 1 0-1.3zM12.086 24c3.334 0 3.134-1.44 3.134-1.44l-.006-1.49h-3.19v-.45h7.486S22 20.91 22 17.46c0-3.45-2.14-3.32-2.14-3.32h-1.28v1.54s.07 2.14-2.1 2.14h-3.63s-2.03-.03-2.03 1.99v2.13s-.25 2.06 1.27 2.06zm1.8-1.05a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3z" />
        </svg>

        {/* Node.js Logo */}
        <svg
          className="timeline-bg-svg-symbol svg-node"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 1.5l10 5.8v11.4l-10 5.8L2 18.7V7.3L12 1.5zm0 2.3L4 8.4v9.2l8 4.6 8-4.6V8.4l-8-4.6zm-1 5.2h2v4.5l3-2.5 1.2 1.4-4.2 3.5v.1h-2V9z" />
        </svg>

        {/* Braces { } */}
        <div className="timeline-bg-svg-symbol svg-braces">{'{ }'}</div>

        {/* Terminal Icon */}
        <svg
          className="timeline-bg-svg-symbol svg-terminal"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      </div>

      <div className="timeline-container">
        {/* ==================================================================
            Guiding Principle Section (Code x Design = Impact)
            ================================================================== */}
        <div className="principle-banner">
          <div className="principle-glow" />
          <div className="principle-content">
            <div className="principle-eyebrow">
              <Sparkles className="w-3.5 h-3.5" />
              <span>My Guiding Principle</span>
            </div>
            <h3 className="principle-headline">
              Code <span className="principle-accent">×</span> Design <span className="principle-accent">=</span> Impact
            </h3>
            <p className="principle-description">
              I leverage modern technologies and proven development strategies to build applications that are designed to perform and scale.
            </p>
          </div>
        </div>

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
              {companyExperiences.map((item) => (
                <div key={item.id} className="timeline-row">
                  {/* Center Spine Column with Enlarged Logo Box */}
                  <div className="timeline-spine-col">
                    <div className="timeline-spine-line" />
                    <div
                      className="timeline-logo-box"
                      style={item.logoBg ? { backgroundColor: item.logoBg } : undefined}
                    >
                      <Image
                        src={item.logo}
                        alt={item.company}
                        width={58}
                        height={32}
                        className="timeline-box-img"
                      />
                    </div>
                  </div>

                  {/* Right Column: Clean White Card with Meta below Role Name */}
                  <div className="timeline-card-col">
                    <div className="timeline-card">
                      <div className="timeline-card-header">
                        <h3 className="timeline-card-title">{item.title}</h3>
                        {item.isCurrent && (
                          <span className="timeline-current-pill">
                            <span className="timeline-current-dot" />
                            Current
                          </span>
                        )}
                      </div>

                      {/* Duration & Company Line Below Role Name */}
                      <div className="timeline-card-meta">
                        <span className="timeline-card-company-name">
                          {item.company}
                        </span>
                        <span className="timeline-meta-dot">•</span>
                        <span className="timeline-card-duration">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
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
              ))}
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
              {mentorshipExperiences.map((item) => (
                <div key={item.id} className="timeline-row">
                  {/* Center Spine Column with Enlarged Logo Box */}
                  <div className="timeline-spine-col">
                    <div className="timeline-spine-line" />
                    <div className="timeline-logo-box">
                      <Image
                        src={item.logo}
                        alt={item.company}
                        width={58}
                        height={32}
                        className="timeline-box-img"
                      />
                    </div>
                  </div>

                  {/* Right Column: Clean White Card with Meta below Role Name */}
                  <div className="timeline-card-col">
                    <div className="timeline-card">
                      <div className="timeline-card-header">
                        <h3 className="timeline-card-title">{item.title}</h3>
                      </div>

                      {/* Duration & Organization Line Below Role Name */}
                      <div className="timeline-card-meta">
                        <span className="timeline-card-company-name">
                          {item.company}
                        </span>
                        <span className="timeline-meta-dot">•</span>
                        <span className="timeline-card-duration">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
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
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
