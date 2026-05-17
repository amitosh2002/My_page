'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ProjectForm } from '@/components/admin/project-form';
import { WorkForm } from '@/components/admin/work-form';
import { ProjectList } from '@/components/admin/project-list';
import { WorkList } from '@/components/admin/work-list';
import { LogOut, Plus, FolderKanban, Briefcase } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { getProjects, getWorkExperiences } from '@/lib/data-storage';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'projects' | 'work'>('projects');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('admin_authenticated');
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    router.push('/admin');
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingId(null);
  };

  const handleSave = () => {
    setRefreshKey((prev) => prev + 1);
  };

  if (typeof window === 'undefined') {
    return null;
  }

  const projects = getProjects();
  const workExperiences = getWorkExperiences();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => {
              setActiveTab('projects');
              setShowForm(false);
              setEditingId(null);
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'projects'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <FolderKanban className="h-5 w-5" />
            Projects ({projects.length})
          </button>
          <button
            onClick={() => {
              setActiveTab('work');
              setShowForm(false);
              setEditingId(null);
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'work'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Briefcase className="h-5 w-5" />
            Work Experience ({workExperiences.length})
          </button>
        </div>

        {!showForm && (
          <div className="mb-6">
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
            >
              <Plus className="h-5 w-5" />
              Add New {activeTab === 'projects' ? 'Project' : 'Work Experience'}
            </button>
          </div>
        )}

        {showForm ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            {activeTab === 'projects' ? (
              <ProjectForm editingId={editingId} onClose={handleFormClose} onSave={handleSave} />
            ) : (
              <WorkForm editingId={editingId} onClose={handleFormClose} onSave={handleSave} />
            )}
          </div>
        ) : (
          <div>
            {activeTab === 'projects' ? (
              <ProjectList onEdit={handleEdit} refreshKey={refreshKey} />
            ) : (
              <WorkList onEdit={handleEdit} refreshKey={refreshKey} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

