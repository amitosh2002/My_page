import { Project, WorkExperience } from '@/types';

const STORAGE_KEYS = {
  projects: 'portfolio_projects',
  workExperiences: 'portfolio_work_experiences',
  adminPassword: 'portfolio_admin_password_hash',
} as const;

export function getProjects(): Project[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEYS.projects);
  if (!data) {
    // Default projects
    const defaultProjects: Project[] = [
      {
        id: '1',
        title: 'Recode – Code Editor & Management Tool',
        description: 'Recode is a comprehensive online code editor and management platform designed for aspiring developers and students. It allows users to practice coding by solving curated programming questions, participate in quizzes to test their knowledge, and take online exams in a secure environment.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', ],
        githubUrl: 'https://github.com/amitosh2002/recode-code-editor',
        liveUrl: 'https://recode-code-editor.onrender.com',
        featured: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Task Management App',
        description: 'A Flutter-based task management application with real-time sync and cross-platform support.',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        githubUrl: '#',
        liveUrl: '#',
        featured: true,
        createdAt: new Date().toISOString(),
      },
    ];
    saveProjects(defaultProjects);
    return defaultProjects;
  }
  return JSON.parse(data);
}

export function saveProjects(projects: Project[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(projects));
}

export function addProject(project: Omit<Project, 'id' | 'createdAt'>): Project {
  const projects = getProjects();
  const newProject: Project = {
    ...project,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  projects.push(newProject);
  saveProjects(projects);
  return newProject;
}

export function updateProject(id: string, updates: Partial<Project>): Project | null {
  const projects = getProjects();
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return null;
  projects[index] = { ...projects[index], ...updates };
  saveProjects(projects);
  return projects[index];
}

export function deleteProject(id: string): boolean {
  const projects = getProjects();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) return false;
  saveProjects(filtered);
  return true;
}

export function getWorkExperiences(): WorkExperience[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEYS.workExperiences);
  if (!data) {
    // Default work experience
    const defaultWork: WorkExperience[] = [
      {
        id: '1',
        company: 'ShipIQ',
        position: 'Software Engineer',
        description: 'Leading frontend and full-stack architecture for shipping intelligence, logistics tracking automation, and high-performance analytics dashboards.',
        startDate: '2026-08-01',
        current: true,
        technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        company: 'Travels and Payments',
        position: 'Software Developer',
        description: 'Engineered secure payment processing workflows, booking system modules, and responsive checkout experiences with high reliability and throughput.',
        startDate: '2026-05-01',
        endDate: '2026-07-31',
        current: false,
        technologies: ['React', 'TypeScript', 'Payment Gateways', 'Tailwind CSS', 'REST API'],
        concurrentWith: 'Utpatti Fellowship Program',
        createdAt: new Date().toISOString(),
      },
      {
        id: '3',
        company: 'Utpatti Fellowship Program',
        position: 'Technical Mentor',
        description: 'Served as Technical Mentor guiding fellows in modern web engineering, architecture design, and production code reviews, operating concurrently alongside roles at Mittarv and Travels & Payments.',
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
        description: 'Developed responsive user-facing product features, modular frontend state management, and reusable UI components across the platform.',
        startDate: '2025-02-01',
        endDate: '2025-04-30',
        current: false,
        technologies: ['React', 'JavaScript', 'Node.js', 'Redux', 'SCSS'],
        concurrentWith: 'Utpatti Fellowship Program',
        createdAt: new Date().toISOString(),
      },
    ];
    saveWorkExperiences(defaultWork);
    return defaultWork;
  }
  return JSON.parse(data);
}

export function saveWorkExperiences(experiences: WorkExperience[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.workExperiences, JSON.stringify(experiences));
}

export function addWorkExperience(experience: Omit<WorkExperience, 'id' | 'createdAt'>): WorkExperience {
  const experiences = getWorkExperiences();
  const newExperience: WorkExperience = {
    ...experience,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  experiences.push(newExperience);
  saveWorkExperiences(experiences);
  return newExperience;
}

export function updateWorkExperience(id: string, updates: Partial<WorkExperience>): WorkExperience | null {
  const experiences = getWorkExperiences();
  const index = experiences.findIndex((e) => e.id === id);
  if (index === -1) return null;
  experiences[index] = { ...experiences[index], ...updates };
  saveWorkExperiences(experiences);
  return experiences[index];
}

export function deleteWorkExperience(id: string): boolean {
  const experiences = getWorkExperiences();
  const filtered = experiences.filter((e) => e.id !== id);
  if (filtered.length === experiences.length) return false;
  saveWorkExperiences(filtered);
  return true;
}

export function getAdminPasswordHash(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.adminPassword);
}

export function setAdminPasswordHash(hash: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.adminPassword, hash);
}

