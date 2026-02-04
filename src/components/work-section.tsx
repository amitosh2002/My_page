'use client';

import { WorkExperience } from '@/types';
import { Building2, Calendar } from 'lucide-react';
import { useState } from 'react';
import { getWorkExperiences } from '@/lib/data-storage';
import './WorkSection.css';

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
    <section id="work" className="work-section">
      {/* Decorative blob elements */}
      <div className="work-blob work-blob-orange"></div>
      <div className="work-blob work-blob-teal"></div>
      
      <div className="work-container">
        <div className="work-header">
          <p className="work-subtitle">Experience</p>
          <h2 className="work-title">Work Experience</h2>
          <p className="work-description">
            My professional journey and expertise in software development.
          </p>
        </div>

        {experiences.length === 0 ? (
          <div className="work-empty">
            <Building2 className="work-empty-icon" />
            <p>No work experience added yet.</p>
          </div>
        ) : (
          <div className="work-list">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="work-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="work-card-bg" />
                <div className="work-card-accent" />

                <div className="work-card-content">
                  <div className="work-card-header">
                    <div className="work-card-title-group">
                      <div className="work-card-icon-wrapper">
                        <Building2 className="work-card-icon" />
                      </div>
                      <div>
                        <h3 className="work-position">{experience.position}</h3>
                        <p className="work-company">{experience.company}</p>
                      </div>
                    </div>

                    {experience.current && (
                      <span className="work-current-tag">
                        <span className="work-current-dot"></span>
                        CURRENT
                      </span>
                    )}
                  </div>

                  <p className="work-text">{experience.description}</p>

                  <div className="work-tech-list">
                    {experience.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="work-tech">{tech}</span>
                    ))}

                    {experience.technologies.length > 4 && (
                      <span className="work-tech-more">
                        +{experience.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="work-date">
                    <Calendar className="work-calendar-icon" />
                    <span>
                      {formatDate(experience.startDate)} –{" "}
                      {experience.current ? (
                        <span className="work-present">Present</span>
                      ) : (
                        experience.endDate && formatDate(experience.endDate)
                      )}
                    </span>
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="work-card-corner"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}