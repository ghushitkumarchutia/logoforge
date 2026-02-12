import { Link } from "react-router-dom";
import { Plus, Folder } from "lucide-react";
import { ROUTES } from "../../utils/constants";

export const EmptyState = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 px-4'>
      <div className='w-20 h-20 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-6'>
        <Folder size={36} className='text-neutral-400 dark:text-neutral-500' />
      </div>
      <h3 className='text-lg font-semibold text-neutral-900 dark:text-white mb-2'>
        No projects yet
      </h3>
      <p className='text-sm text-neutral-500 dark:text-neutral-400 text-center max-w-xs mb-8'>
        Create your first design project and start building amazing logos and
        graphics.
      </p>
      <Link to={ROUTES.EDITOR}>
        <button className='inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-[10px] hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer'>
          <Plus size={18} />
          Create Your First Project
        </button>
      </Link>
    </div>
  );
};
