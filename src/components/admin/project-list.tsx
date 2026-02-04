// 'use client';

// import { useMemo } from 'react';
// import { getProjects, deleteProject } from '@/lib/data-storage';
// import { Edit, Trash2 } from 'lucide-react';

// interface ProjectListProps {
//   onEdit: (id: string) => void;
//   refreshKey?: number;
// }

// export function ProjectList({ onEdit, refreshKey }: ProjectListProps) {
//   const projects = useMemo(() => {
//     if (typeof window === 'undefined') return [];
//     return getProjects();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [refreshKey]);

//   const handleDelete = (id: string) => {
//     if (confirm('Are you sure you want to delete this project?')) {
//       deleteProject(id);
//       // Trigger parent refresh by using window location reload as fallback
//       window.location.reload();
//     }
//   };

//   if (projects.length === 0) {
//     return (
//       <div className="text-center py-12 text-gray-500 dark:text-gray-400">
//         No projects yet. Add your first project to get started!
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {projects.map((project) => (
//         <div
//           key={project.id}
//           className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
//         >
//           <div className="flex items-start justify-between mb-4">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
//             {project.featured && (
//               <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded">
//                 Featured
//               </span>
//             )}
//           </div>

//           <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
//             {project.description}
//           </p>

//           <div className="flex flex-wrap gap-2 mb-4">
//             {project.technologies.slice(0, 3).map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
//               >
//                 {tech}
//               </span>
//             ))}
//             {project.technologies.length > 3 && (
//               <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
//                 +{project.technologies.length - 3} more
//               </span>
//             )}
//           </div>

//           <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
//             <button
//               onClick={() => onEdit(project.id)}
//               className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
//             >
//               <Edit className="h-4 w-4" />
//               Edit
//             </button>
//             <button
//               onClick={() => handleDelete(project.id)}
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
import { getProjects, deleteProject } from '@/lib/data-storage';
import { Edit, Trash2 } from 'lucide-react';
import './ProjectList.css';

interface ProjectListProps {
  onEdit: (id: string) => void;
  refreshKey?: number;
}

export function ProjectList({ onEdit, refreshKey }: ProjectListProps) {
  const projects = useMemo(() => {
    if (typeof window === 'undefined') return [];
    return getProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshKey]);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      deleteProject(id);
      window.location.reload();
    }
  };

  if (projects.length === 0) {
    return (
      <div className="no-projects">
        No projects yet. Add your first project to get started!
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="card-header">
            <h3>{project.title}</h3>
            {project.featured && <span className="featured">Featured</span>}
          </div>

          <p className="description">{project.description}</p>

          <div className="tech-tags">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="more-tags">+{project.technologies.length - 3} more</span>
            )}
          </div>

          <div className="card-actions">
            <button onClick={() => onEdit(project.id)} className="edit-btn">
              <Edit className="icon" />
              Edit
            </button>
            <button onClick={() => handleDelete(project.id)} className="delete-btn">
              <Trash2 className="icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
