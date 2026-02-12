import { useState } from "react";
import { Link } from "react-router-dom";
import { ConfirmDialog } from "../common/ConfirmDialog";
import { Tooltip } from "../common/Tooltip";
import { formatRelativeTime } from "../../utils/formatters";
import { Edit, Trash2, Copy } from "lucide-react";

export const ProjectCard = ({ project, onDelete, onDuplicate }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDuplicating, setIsDuplicating] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await onDelete(project._id || project.id);
    setIsDeleting(false);
    setShowDeleteDialog(false);
  };

  const handleDuplicate = async () => {
    if (!onDuplicate) return;
    setIsDuplicating(true);
    await onDuplicate(project._id || project.id);
    setIsDuplicating(false);
  };

  return (
    <>
      <div className='bg-white dark:bg-[#1a1a1a] rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden group transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700'>
        <Link to={`/editor/${project._id || project.id}`}>
          <div className='aspect-video bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden'>
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.projectName}
                className='w-full h-full object-cover'
              />
            ) : (
              <div className='w-full h-full flex items-center justify-center'>
                <span className='text-4xl font-bold text-neutral-300 dark:text-neutral-600'>
                  {project.projectName?.charAt(0)?.toUpperCase() || "P"}
                </span>
              </div>
            )}
          </div>
        </Link>
        <div className='p-4'>
          <div className='flex items-start justify-between'>
            <div className='flex-1 min-w-0'>
              <h3 className='font-medium text-neutral-900 dark:text-white truncate text-sm'>
                {project.projectName}
              </h3>
              <p className='text-xs text-neutral-500 dark:text-neutral-400 mt-1'>
                {formatRelativeTime(project.updatedAt)}
              </p>
            </div>
            <div className='flex items-center gap-0.5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity'>
              <Link
                to={`/editor/${project._id || project.id}`}
                className='p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors'
              >
                <Edit size={14} />
              </Link>
              {onDuplicate && (
                <Tooltip content='Duplicate' position='bottom'>
                  <button
                    onClick={handleDuplicate}
                    disabled={isDuplicating}
                    className='p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors disabled:opacity-50 cursor-pointer'
                  >
                    <Copy size={14} />
                  </button>
                </Tooltip>
              )}
              <button
                onClick={() => setShowDeleteDialog(true)}
                className='p-1.5 text-neutral-400 hover:text-red-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer'
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

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
