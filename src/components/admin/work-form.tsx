// 'use client';

// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { addWorkExperience, updateWorkExperience, getWorkExperiences } from '@/lib/data-storage';
// import { X } from 'lucide-react';

// const workSchema = z.object({
//   company: z.string().min(1, 'Company name is required'),
//   position: z.string().min(1, 'Position is required'),
//   description: z.string().min(10, 'Description must be at least 10 characters'),
//   startDate: z.string().min(1, 'Start date is required'),
//   endDate: z.string().optional().or(z.literal('')),
//   technologies: z.string().min(1, 'At least one technology is required'),
//   current: z.boolean(),
// });

// type WorkFormData = z.infer<typeof workSchema>;

// interface WorkFormProps {
//   editingId: string | null;
//   onClose: () => void;
//   onSave?: () => void;
// }

// export function WorkForm({ editingId, onClose, onSave }: WorkFormProps) {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     watch,
//   } = useForm<WorkFormData>({
//     resolver: zodResolver(workSchema),
//     defaultValues: {
//       technologies: '',
//       current: false,
//     },
//   });

//   const isCurrent = watch('current');

//   useEffect(() => {
//     if (editingId) {
//       const experiences = getWorkExperiences();
//       const experience = experiences.find((e) => e.id === editingId);
//       if (experience) {
//         setValue('company', experience.company);
//         setValue('position', experience.position);
//         setValue('description', experience.description);
//         setValue('startDate', experience.startDate);
//         setValue('endDate', experience.endDate || '');
//         setValue('technologies', experience.technologies.join(', '));
//         setValue('current', experience.current);
//       }
//     }
//   }, [editingId, setValue]);

//   const onSubmit = async (data: WorkFormData) => {
//     setIsSubmitting(true);
//     try {
//       const technologies = data.technologies
//         .split(',')
//         .map((tech) => tech.trim())
//         .filter((tech) => tech.length > 0);

//       const experienceData = {
//         company: data.company,
//         position: data.position,
//         description: data.description,
//         startDate: data.startDate,
//         endDate: data.current ? undefined : data.endDate || undefined,
//         technologies,
//         current: data.current,
//       };

//       if (editingId) {
//         updateWorkExperience(editingId, experienceData);
//       } else {
//         addWorkExperience(experienceData);
//       }

//       onSave?.();
//       onClose();
//     } catch (error) {
//       console.error('Error saving work experience:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
//           {editingId ? 'Edit Work Experience' : 'Add New Work Experience'}
//         </h2>
//         <button
//           type="button"
//           onClick={onClose}
//           className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//         >
//           <X className="h-6 w-6" />
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//             Company *
//           </label>
//           <input
//             {...register('company')}
//             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.company && (
//             <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//             Position *
//           </label>
//           <input
//             {...register('position')}
//             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.position && (
//             <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.position.message}</p>
//           )}
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//           Description *
//         </label>
//         <textarea
//           {...register('description')}
//           rows={4}
//           className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//         />
//         {errors.description && (
//           <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.description.message}</p>
//         )}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//             Start Date *
//           </label>
//           <input
//             {...register('startDate')}
//             type="date"
//             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.startDate && (
//             <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.startDate.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//             End Date
//           </label>
//           <input
//             {...register('endDate')}
//             type="date"
//             disabled={isCurrent}
//             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//           Technologies (comma-separated) *
//         </label>
//         <input
//           {...register('technologies')}
//           placeholder="React, Node.js, MongoDB, Jira, Notion"
//           className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//         />
//         {errors.technologies && (
//           <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.technologies.message}</p>
//         )}
//       </div>

//       <div className="flex items-center gap-2">
//         <input
//           {...register('current')}
//           type="checkbox"
//           id="current"
//           className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
//         />
//         <label htmlFor="current" className="text-sm font-medium text-gray-700 dark:text-gray-300">
//           Currently working here
//         </label>
//       </div>

//       <div className="flex gap-4">
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
//         >
//           {isSubmitting ? 'Saving...' : editingId ? 'Update Experience' : 'Add Experience'}
//         </button>
//         <button
//           type="button"
//           onClick={onClose}
//           className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//         >
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addWorkExperience, updateWorkExperience, getWorkExperiences } from '@/lib/data-storage';
import { X } from 'lucide-react';
import './WorkForm.css';

const workSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  position: z.string().min(1, 'Position is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional().or(z.literal('')),
  technologies: z.string().min(1, 'At least one technology is required'),
  current: z.boolean(),
});

type WorkFormData = z.infer<typeof workSchema>;

interface WorkFormProps {
  editingId: string | null;
  onClose: () => void;
  onSave?: () => void;
}

export function WorkForm({ editingId, onClose, onSave }: WorkFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<WorkFormData>({
    resolver: zodResolver(workSchema),
    defaultValues: {
      technologies: '',
      current: false,
    },
  });

  const isCurrent = watch('current');

  useEffect(() => {
    if (editingId) {
      const experiences = getWorkExperiences();
      const experience = experiences.find((e) => e.id === editingId);
      if (experience) {
        setValue('company', experience.company);
        setValue('position', experience.position);
        setValue('description', experience.description);
        setValue('startDate', experience.startDate);
        setValue('endDate', experience.endDate || '');
        setValue('technologies', experience.technologies.join(', '));
        setValue('current', experience.current);
      }
    }
  }, [editingId, setValue]);

  const onSubmit = async (data: WorkFormData) => {
    setIsSubmitting(true);
    try {
      const technologies = data.technologies
        .split(',')
        .map((tech) => tech.trim())
        .filter((tech) => tech.length > 0);

      const experienceData = {
        company: data.company,
        position: data.position,
        description: data.description,
        startDate: data.startDate,
        endDate: data.current ? undefined : data.endDate || undefined,
        technologies,
        current: data.current,
      };

      if (editingId) {
        updateWorkExperience(editingId, experienceData);
      } else {
        addWorkExperience(experienceData);
      }

      onSave?.();
      onClose();
    } catch (error) {
      console.error('Error saving work experience:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="work-form">
      <div className="form-header">
        <h2>{editingId ? 'Edit Work Experience' : 'Add New Work Experience'}</h2>
        <button type="button" onClick={onClose} className="close-btn">
          <X />
        </button>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label>Company *</label>
          <input {...register('company')} />
          {errors.company && <p className="error">{errors.company.message}</p>}
        </div>

        <div className="form-group">
          <label>Position *</label>
          <input {...register('position')} />
          {errors.position && <p className="error">{errors.position.message}</p>}
        </div>
      </div>

      <div className="form-group">
        <label>Description *</label>
        <textarea {...register('description')} rows={4} />
        {errors.description && <p className="error">{errors.description.message}</p>}
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label>Start Date *</label>
          <input {...register('startDate')} type="date" />
          {errors.startDate && <p className="error">{errors.startDate.message}</p>}
        </div>

        <div className="form-group">
          <label>End Date</label>
          <input {...register('endDate')} type="date" disabled={isCurrent} className="disabled-input"/>
        </div>
      </div>

      <div className="form-group">
        <label>Technologies (comma-separated) *</label>
        <input {...register('technologies')} placeholder="React, Node.js, MongoDB, Jira, Notion" />
        {errors.technologies && <p className="error">{errors.technologies.message}</p>}
      </div>

      <div className="checkbox-group">
        <input {...register('current')} type="checkbox" id="current" />
        <label htmlFor="current">Currently working here</label>
      </div>

      <div className="form-actions">
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : editingId ? 'Update Experience' : 'Add Experience'}
        </button>
        <button type="button" onClick={onClose} className="cancel-btn">
          Cancel
        </button>
      </div>
    </form>
  );
}
