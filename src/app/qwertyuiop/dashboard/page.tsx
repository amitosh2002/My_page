
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
import './AdminDashboard.css'; // import the new CSS

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
    router.push('/');
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

  if (typeof window === 'undefined') return null;

  const projects = getProjects();
  const workExperiences = getWorkExperiences();

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="max-w-7xl flex justify-between items-center px-4 py-4">
          <h1>Admin Dashboard</h1>
          <div className="flex gap-4 items-center">
            <ThemeToggle />
            <button onClick={handleLogout}>
              <LogOut className="icon" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === 'projects' ? 'active' : 'inactive'}
            onClick={() => {
              setActiveTab('projects');
              setShowForm(false);
              setEditingId(null);
            }}
          >
            <FolderKanban className="icon" />
            Projects ({projects.length})
          </button>
          <button
            className={activeTab === 'work' ? 'active' : 'inactive'}
            onClick={() => {
              setActiveTab('work');
              setShowForm(false);
              setEditingId(null);
            }}
          >
            <Briefcase className="icon" />
            Work Experience ({workExperiences.length})
          </button>
        </div>

        {/* Add New Button */}
        {!showForm && (
          <div className="mb-6">
            <button
              className="add-new-btn"
              onClick={() => setShowForm(true)}
            >
              <Plus className="icon" />
              Add New {activeTab === 'projects' ? 'Project' : 'Work Experience'}
            </button>
          </div>
        )}

        {/* Form Panel */}
        {showForm ? (
          <div className="form-panel">
            {activeTab === 'projects' ? (
              <ProjectForm
                editingId={editingId}
                onClose={handleFormClose}
                onSave={handleSave}
              />
            ) : (
              <WorkForm
                editingId={editingId}
                onClose={handleFormClose}
                onSave={handleSave}
              />
            )}
          </div>
        ) : (
          <div className="list-panel">
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
