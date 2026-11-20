'use client';

import {
  Rocket,
  CreditCard,
  Code2,
  GraduationCap,
  Flag,
  Clock,
  Sparkles,
  GitBranch,
} from 'lucide-react';
import './WorkSection.css';

export function WorkSection() {
  const mainStations = [
    {
      id: 'mittarv',
      date: 'Feb – Apr 2025',
      company: 'Mittarv',
      position: 'Software Developer',
      description:
        'Developed responsive customer-facing product features, modular frontend state management, and reusable UI components across the platform.',
      technologies: ['React', 'JavaScript', 'Node.js', 'Redux', 'SCSS'],
      icon: Code2,
      isCompleted: true,
      isActive: false,
    },
    {
      id: 'travels',
      date: 'May – Jul 2026',
      company: 'Travels and Payments',
      position: 'Software Developer',
      description:
        'Engineered secure payment processing workflows, booking system modules, and responsive checkout experiences with high reliability and throughput.',
      technologies: ['React', 'TypeScript', 'Payment Gateways', 'Tailwind CSS', 'REST API'],
      icon: CreditCard,
      isCompleted: true,
      isActive: false,
    },
    {
      id: 'shipiq',
      date: 'Aug 2026 – Present',
      company: 'ShipIQ',
      position: 'Software Engineer',
      description:
        'Leading frontend and full-stack architecture for shipping intelligence, logistics tracking automation, and high-performance analytics dashboards.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      icon: Rocket,
      isCompleted: true,
      isActive: true,
    },
  ];

  const parallelMilestone = {
    date: 'Mar – Oct',
    company: 'Utpatti Fellowship Program',
    position: 'Technical Mentor',
    description:
      'Served as Technical Mentor guiding fellows in modern web engineering, architecture design, and production code reviews, operating concurrently alongside roles at Mittarv and Travels & Payments.',
    technologies: ['Mentorship', 'Code Reviews', 'System Design', 'React', 'Node.js', 'Git'],
  };

  return (
    <section id="work" className="roadmap-section">
      <div className="roadmap-container">
        {/* Header */}
        <div className="roadmap-header">
          <h2 className="roadmap-title">
            Career
            <span className="roadmap-title-highlight">
              Timeline
              <span className="roadmap-title-bar" />
            </span>
          </h2>
          <p className="roadmap-subtitle">
            A chronological timeline of core engineering roles with concurrent technical mentorship.
          </p>
        </div>

        {/* White Card Container (Accord Reference) */}
        <div className="roadmap-card">
          {/* Card Top Title Bar */}
          <div className="roadmap-card-header">
            <h3 className="roadmap-card-title">Timeline for Amitosh</h3>
            <div className="roadmap-card-badge">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Stack & Mentorship</span>
            </div>
          </div>

          {/* Scrollable Track Wrapper */}
          <div className="roadmap-scroll-wrapper">
            <div className="roadmap-track-container">
              {/* Continuous Horizontal Rail Bar */}
              <div className="roadmap-rail-bg" />
              <div className="roadmap-rail-fill" />

              {/* The 3 Main Milestone Stations */}
              <div className="roadmap-stations-grid">
                {mainStations.map((station) => {
                  const Icon = station.icon;
                  return (
                    <div key={station.id} className="roadmap-station">
                      {/* Date on Top */}
                      <div
                        className={`roadmap-station-date ${
                          station.isActive ? 'roadmap-station-date-active' : ''
                        }`}
                      >
                        {station.date}
                      </div>

                      {/* Milestone Circle Badge */}
                      <div
                        className={`roadmap-station-badge ${
                          station.isActive ? 'roadmap-station-badge-pulse' : ''
                        }`}
                      >
                        {station.isActive && <span className="roadmap-pulse-ring" />}
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content Card below */}
                      <div className="roadmap-station-content">
                        <h4 className="roadmap-station-title">{station.position}</h4>
                        <div className="roadmap-station-company">{station.company}</div>
                        <p className="roadmap-station-desc">{station.description}</p>
                        <div className="roadmap-station-tags">
                          {station.technologies.slice(0, 3).map((tag, i) => (
                            <span key={i} className="roadmap-station-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Parallel Timeline Sub-Branch (Under Mittarv & Travels and Payments) */}
              <div className="roadmap-parallel-container">
                {/* Dotted drop connector stem from rail to parallel card */}
                <div className="roadmap-parallel-stem" />

                {/* Parallel Card */}
                <div className="roadmap-parallel-card">
                  {/* Flag row marker matching reference image */}
                  <div className="roadmap-parallel-flag-row">
                    <span className="roadmap-parallel-flag-badge">
                      <Flag className="w-3 h-3" />
                      {parallelMilestone.date}
                    </span>
                    <span className="roadmap-parallel-concurrent-note">
                      <GitBranch className="w-3.5 h-3.5 inline mr-1" />
                      Parallel Mentorship • Concurrent with Mittarv & Travels and Payments
                    </span>
                  </div>

                  <h4 className="roadmap-parallel-title">{parallelMilestone.position}</h4>
                  <div className="roadmap-parallel-company">
                    <GraduationCap className="w-4 h-4 inline mr-1.5" />
                    {parallelMilestone.company}
                  </div>
                  <p className="roadmap-parallel-desc">{parallelMilestone.description}</p>

                  <div className="roadmap-parallel-tags">
                    {parallelMilestone.technologies.map((tag, i) => (
                      <span key={i} className="roadmap-parallel-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="roadmap-mobile-scroll-hint">
            ← Scroll horizontally to explore timeline →
          </div>

          {/* Bottom Active Status Pill (Left: 5 Months style) */}
          <div className="roadmap-bottom-summary">
            <div className="roadmap-status-pill">
              <span className="roadmap-status-dot" />
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Current Status: Software Engineer @ ShipIQ (Aug 2026 – Present)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
