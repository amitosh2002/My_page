'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
  Briefcase,
  Users,
  Calendar,
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
