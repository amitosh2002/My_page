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
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform built with MERN stack featuring user authentication, payment integration, and admin dashboard.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
        githubUrl: '#',
        liveUrl: '#',
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
        company: 'Tech Company',
        position: 'Full Stack Developer',
        description: 'Developed and maintained web applications using MERN stack. Collaborated with cross-functional teams using Jira and Notion.',
        startDate: '2023-01-01',
        current: true,
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Jira', 'Notion'],
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

