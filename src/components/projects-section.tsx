'use client';

import { useState, useEffect } from 'react';
import './ProjectsSection.scss';
import ProjectCard, { Project } from './projectCard';

export function ProjectsSection() {

 const projects: Project[] = [
  {
    id: '1',
    title: 'Hora',
    shortDescription:
      'A modern workspace and project collaboration platform for managing tasks, services, and team workflows.',
    fullDescription:
      'Hora is a workspace-oriented platform designed to manage projects, services, and user workflows efficiently. It includes structured dashboards, service-based modules, admin controls, and real-time collaboration features. Built with scalability and performance in mind, Hora focuses on clean UI, modular architecture, and seamless user experience.',
    image: '/hora_dashboard.png',
    images: [
      '/hora-Dora.png',
      '/Hora_sprint.png',
      '/Hora_landing_page.png',
      '/hora_dashboard.png',
    ],
    tags: ['Workspace', 'SaaS', 'Dashboard', 'Full Stack'],
    demoUrl: 'https://dev-hora.netlify.app/',
    githubUrl: 'https://github.com/amitosh2002/Backend_SD',
    date: 'January 2025',
    features: [
      'Workspace-based project management',
      'Role-based access control',
      'Service and module handling',
      'Admin dashboard',
      'DORA Analytics',
      'Scalable backend architecture',
      'Clean and modern UI'
    ],
    technologies: [
      'React',
      'Redux Tool kit',
      'JavaScript',
      'Node.js',
      'MongoDB',
      'NodeMailer',
      'Cron js',
      'Resend SMTP',
      'Socket.io',
      'Docker'
    ]
  },

  {
    id: '2',
    title: '<re/code>',
    shortDescription:
      'An online coding platform for practicing, learning, and testing programming skills with admin control.',
    fullDescription:
      '<re/code> is a full-stack online coding platform built for learners and developers to practice coding problems, take tests, and improve problem-solving skills. The platform supports code execution via REST APIs, includes an admin panel for managing problems and users, and provides a smooth coding experience using a modern MERN architecture.',
    image: '/recode.png',
    images: [
      '/recode.png',
      '/recode_quiz.png',
    ],
    tags: ['Coding Platform', 'Education', 'MERN', 'SaaS'],
    demoUrl: 'https://recode-code-editor.onrender.com/',
    githubUrl: 'https://github.com/amitosh2002/recode-code-editor',
    date: 'November 2024',
    features: [
      'Online code editor',
      'REST API-based code execution',
      'Practice problems and tests',
      'Admin panel for content management',
      'User authentication and tracking',
      'Performance-focused UI'
    ],
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'REST API',
      'JWT',
      'Monaco Editor'
    ]
  },

  {
    id: '3',
    title: 'Namaste India',
    shortDescription:
      'A frontend travel guide showcasing the best places to travel across India with routes and ideal travel times.',
    fullDescription:
      'Namaste India is a frontend-focused travel guide platform that highlights popular and hidden travel destinations across India. It provides information about the best time to visit, suggested travel routes, and visually rich destination previews. The project is designed for exploration, inspiration, and ease of navigation.',
    image: '/namasteindia.png',
    images: [
      '/namasteindia.png',
      '/namasteIndia_2.png',
      
     
    ],
    tags: ['Travel', 'Frontend', 'India', 'UI/UX'],
    demoUrl: 'https://namasteeindia.netlify.app/',
    githubUrl: 'https://github.com/amitosh2002/NamasteIndia',

    date: 'August 2024',
    features: [
      'All-India travel destination listing',
      'Best time to visit suggestions',
      'Route and travel guidance',
      'Responsive design',
      'Visually rich destination pages'
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion'
    ]
  }
];


  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    // <section id="projects" className="projects-section">
    //   <div className="projects-container">
        
    //     {/* Header */}
    //     <div className="projects-header">
    //       <p className="projects-subtitle">Showcase</p>
    //       <h2 className="projects-title">Featured Works</h2>
    //       <p className="projects-desc">
    //         Each project represents a significant challenge solved using modern development practices.
    //       </p>
    //     </div>

    //     {/* No Projects */}
    //     {projects.length === 0 ? (
    //       <div className="projects-empty">
    //         <Code2 className="empty-icon" />
    //         <p>No projects yet. Check back soon!</p>
    //       </div>
    //     ) : (
    //       /* Projects Grid */
    //       <div className="projects-grid">
    //         {projects.map((project, index) => (
    //           <div
    //             key={project.id}
    //             className={`project-card ${mounted ? 'visible' : ''}`}
    //             style={{ transitionDelay: `${index * 120}ms` }}
    //           >
    //             {/* Optional Image */}
    //             {project.imageUrl && project.imageUrl !== '#' && (
    //               <div className="card-image-container">
    //                 <img
    //                   src={project.imageUrl}
    //                   alt={project.title}
    //                   className="card-image"
    //                 />
    //               </div>
    //             )}

    //             <div className="card-content">
    //               {/* Title Row */}
    //               <div className="card-header">
    //                 <div className="title-left">
    //                   <Code2 className="card-icon" />
    //                   <h3 className="card-title">{project.title}</h3>
    //                 </div>

    //                 {project.featured && (
    //                   <span className="star-badge">STAR</span>
    //                 )}
    //               </div>

    //               {/* Description */}
    //               <p className="card-desc">{project.description}</p>

    //               {/* Tech Tags */}
    //               <div className="tech-list">
    //                 {project.technologies.slice(0, 4).map((tech, tIndex) => (
    //                   <span key={tIndex} className="tech-item">{tech}</span>
    //                 ))}
    //                 {project.technologies.length > 4 && (
    //                   <span className="tech-more">
    //                     +{project.technologies.length - 4} more
    //                   </span>
    //                 )}
    //               </div>

    //               {/* Footer Links */}
    //               <div className="card-footer">
    //                 {project.githubUrl && project.githubUrl !== '#' ? (
    //                   <a
    //                     className="card-link"
    //                     href={project.githubUrl}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     <Github className="link-icon" /> View Code
    //                   </a>
    //                 ) : (
    //                   <span className="link-disabled">
    //                     <Github className="link-icon" /> Code Unavailable
    //                   </span>
    //                 )}

    //                 {project.liveUrl && project.liveUrl !== '#' ? (
    //                   <a
    //                     className="card-link"
    //                     href={project.liveUrl}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     <ExternalLink className="link-icon" /> Live Demo
    //                   </a>
    //                 ) : (
    //                   <span className="link-disabled">
    //                     <ExternalLink className="link-icon" /> Live Unavailable
    //                   </span>
    //                 )}
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </section>
     <section className="project-grid">
      <div className="project-grid__container">
        <div className="project-grid__header">
          <h2 className="project-grid__title">Featured Projects</h2>
          <p className="project-grid__subtitle">
            Explore my latest work and creative solutions
          </p>
        </div>

        <div className="project-grid__items">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
