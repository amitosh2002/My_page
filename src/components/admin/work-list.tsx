// 'use client';

// import { useMemo } from 'react';
// import { getWorkExperiences, deleteWorkExperience } from '@/lib/data-storage';
// import { Edit, Trash2, Calendar } from 'lucide-react';

// interface WorkListProps {
//   onEdit: (id: string) => void;
//   refreshKey?: number;
// }

// export function WorkList({ onEdit, refreshKey }: WorkListProps) {
//   const experiences = useMemo(() => {
//     if (typeof window === 'undefined') return [];
//     return getWorkExperiences();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [refreshKey]);

//   const handleDelete = (id: string) => {
//     if (confirm('Are you sure you want to delete this work experience?')) {
//       deleteWorkExperience(id);
//       // Trigger parent refresh by using window location reload as fallback
//       window.location.reload();
//     }
//   };

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
//   };

//   if (experiences.length === 0) {
//     return (
//       <div className="text-center py-12 text-gray-500 dark:text-gray-400">
//         No work experiences yet. Add your first work experience to get started!
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {experiences.map((experience) => (
//         <div
//           key={experience.id}
//           className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
//         >
//           <div className="flex items-start justify-between mb-4">
//             <div>
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                 {experience.position}
//               </h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300">{experience.company}</p>
//             </div>
//             {experience.current && (
//               <span className="px-3 py-1 text-sm font-semibold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
//                 Current
//               </span>
//             )}
//           </div>

//           <p className="text-gray-600 dark:text-gray-400 mb-4">{experience.description}</p>

//           <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
//             <Calendar className="h-4 w-4" />
//             <span className="text-sm">
//               {formatDate(experience.startDate)} -{' '}
//               {experience.current ? 'Present' : experience.endDate && formatDate(experience.endDate)}
//             </span>
//           </div>

//           <div className="flex flex-wrap gap-2 mb-4">
//             {experience.technologies.slice(0, 5).map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded"
//               >
//                 {tech}
//               </span>
//             ))}
//             {experience.technologies.length > 5 && (
//               <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
//                 +{experience.technologies.length - 5} more
//               </span>
//             )}
//           </div>

//           <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
//             <button
//               onClick={() => onEdit(experience.id)}
//               className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
//             >
//               <Edit className="h-4 w-4" />
//               Edit
//             </button>
//             <button
//               onClick={() => handleDelete(experience.id)}
//               className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm"
//             >
//               <Trash2 className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

'use client';

import { useMemo } from 'react';
import { getWorkExperiences, deleteWorkExperience } from '@/lib/data-storage';
import { Edit, Trash2, Calendar } from 'lucide-react';
import './WorkList.css';

interface WorkListProps {
  onEdit: (id: string) => void;
  refreshKey?: number;
}

export function WorkList({ onEdit, refreshKey }: WorkListProps) {
  const experiences = useMemo(() => {
    if (typeof window === 'undefined') return [];
    return getWorkExperiences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshKey]);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this work experience?')) {
      deleteWorkExperience(id);
      window.location.reload();
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  if (experiences.length === 0) {
    return <div className="empty-message">No work experiences yet. Add your first work experience to get started!</div>;
  }

  return (
    <div className="work-list">
      {experiences.map((experience) => (
        <div key={experience.id} className="work-card">
          <div className="work-header">
            <div>
              <h3>{experience.position}</h3>
              <p>{experience.company}</p>
            </div>
            {experience.current && <span className="current-badge">Current</span>}
          </div>

          <p className="description">{experience.description}</p>

          <div className="dates">
            <Calendar className="icon" />
            <span>
              {formatDate(experience.startDate)} - {experience.current ? 'Present' : experience.endDate && formatDate(experience.endDate)}
            </span>
          </div>

          <div className="tech-tags">
            {experience.technologies.slice(0, 5).map((tech, index) => (
              <span key={index} className="tech">
                {tech}
              </span>
            ))}
            {experience.technologies.length > 5 && <span className="more">+{experience.technologies.length - 5} more</span>}
          </div>

          <div className="actions">
            <button onClick={() => onEdit(experience.id)} className="edit-btn">
              <Edit className="icon-small" /> Edit
            </button>
            <button onClick={() => handleDelete(experience.id)} className="delete-btn">
              <Trash2 className="icon-small" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
