'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addProject, updateProject, getProjects } from '@/lib/data-storage';
import { X } from 'lucide-react';

const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  technologies: z.string().min(1, 'At least one technology is required'),
  githubUrl: z.string().optional().or(z.literal('')),
  liveUrl: z.string().optional().or(z.literal('')),
  imageUrl: z.string().optional().or(z.literal('')),
  featured: z.boolean(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  editingId: string | null;
  onClose: () => void;
  onSave?: () => void;
}

export function ProjectForm({ editingId, onClose, onSave }: ProjectFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      technologies: '',
      featured: false,
    },
  });

  useEffect(() => {
    if (editingId) {
      const projects = getProjects();
      const project = projects.find((p) => p.id === editingId);
      if (project) {
        setValue('title', project.title);
        setValue('description', project.description);
        setValue('technologies', project.technologies.join(', '));
        setValue('githubUrl', project.githubUrl || '');
        setValue('liveUrl', project.liveUrl || '');
        setValue('imageUrl', project.imageUrl || '');
        setValue('featured', project.featured);
      }
    }
  }, [editingId, setValue]);

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);
    try {
      const technologies = data.technologies
        .split(',')
        .map((tech) => tech.trim())
        .filter((tech) => tech.length > 0);

      const projectData = {
        title: data.title,
        description: data.description,
        technologies,
        githubUrl: data.githubUrl || undefined,
        liveUrl: data.liveUrl || undefined,
        imageUrl: data.imageUrl || undefined,
        featured: data.featured,
      };

      if (editingId) {
        updateProject(editingId, projectData);
      } else {
        addProject(projectData);
      }

      onSave?.();
      onClose();
    } catch (error) {
      console.error('Error saving project:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {editingId ? 'Edit Project' : 'Add New Project'}
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Title *
        </label>
        <input
          {...register('title')}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Description *
        </label>
        <textarea
          {...register('description')}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Technologies (comma-separated) *
        </label>
        <input
          {...register('technologies')}
          placeholder="React, Node.js, MongoDB"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
        />
        {errors.technologies && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.technologies.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            GitHub URL
          </label>
          <input
            {...register('githubUrl')}
            type="url"
            placeholder="https://github.com/username/repo"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Live URL
          </label>
          <input
            {...register('liveUrl')}
            type="url"
            placeholder="https://example.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Image URL
        </label>
        <input
          {...register('imageUrl')}
          type="url"
          placeholder="https://example.com/image.jpg"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          {...register('featured')}
          type="checkbox"
          id="featured"
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
        />
        <label htmlFor="featured" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Featured Project
        </label>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : editingId ? 'Update Project' : 'Add Project'}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

