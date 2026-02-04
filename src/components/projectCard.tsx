'use client';

import React, { useState, useEffect, JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import './projectcard.scss';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  images?: string[];
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  date: string;
  features?: string[];
  technologies?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const images = project.images?.length ? project.images : [project.image];
  const [currentImage, setCurrentImage] = useState(0);

  const handleOpen = () => {
    setIsSidebarOpen(true);
    setCurrentImage(0);
  };

  const handleClose = () => {
    setIsSidebarOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleTakeLook = () => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    if (isSidebarOpen) {
      window.addEventListener('keydown', handler);
    }

    return () => window.removeEventListener('keydown', handler);
  }, [isSidebarOpen]);

  return (
    <>
      {/* PROJECT CARD */}
      <div className="project-card" onClick={handleOpen}>
        <div className="project-card__image">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="project-card__img"
          />
          <div className="project-card__overlay">
            <span className="project-card__view-text">View Details</span>
          </div>
        </div>

        <div className="project-card__content">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.shortDescription}</p>

          <div className="project-card__tags">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="project-card__tag">
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="project-card__tag project-card__tag--more">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      {isSidebarOpen && (
        <>
          <div className="project-sidebar-overlay" onClick={handleClose} />

          <div className="project-sidebar">
            {/* HEADER */}
            <div className="project-sidebar__header">
              <h2 className="project-sidebar__title">{project.title}</h2>
              <button
                className="project-sidebar__close"
                onClick={handleClose}
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="project-sidebar__content">
              {/* IMAGE CAROUSEL */}
              <div className="project-sidebar__image">
                <Image
                  src={images[currentImage]}
                  alt={`${project.title} image`}
                  width={800}
                  height={450}
                  className="project-sidebar__img"
                />

                {images.length > 1 && (
                  <>
                    <button
                      className="project-sidebar__nav project-sidebar__nav--left"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                    >
                      ‹
                    </button>

                    <button
                      className="project-sidebar__nav project-sidebar__nav--right"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                    >
                      ›
                    </button>

                    <div className="project-sidebar__dots">
                      {images.map((_, index) => (
                        <span
                          key={index}
                          className={`project-sidebar__dot ${
                            index === currentImage ? 'active' : ''
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImage(index);
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* INFO */}
              <div className="project-sidebar__info">
                <div className="project-sidebar__meta">
                  <div className="project-sidebar__meta-item">
                    <Calendar size={16} />
                    <span>{project.date}</span>
                  </div>
                </div>

                <div className="project-sidebar__section">
                  <h3 className="project-sidebar__section-title">About Project</h3>
                  <p className="project-sidebar__description">
                    {project.fullDescription}
                  </p>
                </div>

                {project.features?.length && (
                  <div className="project-sidebar__section">
                    <h3 className="project-sidebar__section-title">Key Features</h3>
                    <ul className="project-sidebar__list">
                      {project.features.map((feature, index) => (
                        <li key={index} className="project-sidebar__list-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.technologies?.length && (
                  <div className="project-sidebar__section">
                    <h3 className="project-sidebar__section-title">
                      Technologies Used
                    </h3>
                    <div className="project-sidebar__tech-grid">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="project-sidebar__tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="project-sidebar__section">
                  <h3 className="project-sidebar__section-title">Tags</h3>
                  <div className="project-sidebar__tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-sidebar__tag">
                        <Tag size={14} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="project-sidebar__footer">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-sidebar__btn project-sidebar__btn--secondary"
                >
                  <Github size={20} />
                  View Code
                </Link>
              )}

              {project.demoUrl && (
                <button
                  onClick={handleTakeLook}
                  className="project-sidebar__btn project-sidebar__btn--primary"
                >
                  <ExternalLink size={20} />
                  Take a Look
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProjectCard;
