import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../common/Card";
import { ConfirmDialog } from "../common/ConfirmDialog";
import { formatRelativeTime } from "../../utils/formatters";
import { Edit, Trash2 } from "lucide-react";

export const ProjectCard = ({ project, onDelete }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await onDelete(project._id || project.id);
    setIsDeleting(false);
    setShowDeleteDialog(false);
  };

  return (
    <>
      <Card hoverable className='overflow-hidden group'>
        <Link to={`/editor/${project._id || project.id}`}>
          <div className='aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden'>
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.projectName}
                className='w-full h-full object-cover'
              />
            ) : (
              <div className='w-full h-full flex items-center justify-center text-gray-400'>
                <span className='text-4xl font-bold'>
                  {project.projectName?.charAt(0)?.toUpperCase() || "P"}
                </span>
              </div>
            )}
          </div>
        </Link>
        <div className='p-4'>
          <div className='flex items-start justify-between'>
            <div className='flex-1 min-w-0'>
              <h3 className='font-medium text-gray-900 dark:text-white truncate'>
                {project.projectName}
              </h3>
              <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
                {formatRelativeTime(project.updatedAt)}
              </p>
            </div>
            <div className='flex items-center gap-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity'>
              <Link
                to={`/editor/${project._id || project.id}`}
                className='p-2 text-gray-500 hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors'
              >
                <Edit size={16} />
              </Link>
              <button
                onClick={() => setShowDeleteDialog(true)}
                className='p-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors'
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </Card>

      <ConfirmDialog
        isOpen={showDeleteDialog}
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteDialog(false)}
        title='Delete Project'
        message={`Are you sure you want to delete "${project.projectName}"? This action cannot be undone.`}
        confirmText='Delete'
        isLoading={isDeleting}
      />
    </>
  );
};
