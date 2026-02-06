import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Plus, Folder } from "lucide-react";
import { ROUTES } from "../../utils/constants";

export const EmptyState = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 px-4'>
      <div className='w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6'>
        <Folder size={48} className='text-gray-400' />
      </div>
      <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
        No projects yet
      </h3>
      <p className='text-gray-500 dark:text-gray-400 text-center max-w-sm mb-6'>
        Create your first design project and start building amazing logos and
        graphics.
      </p>
      <Link to={ROUTES.EDITOR}>
        <Button leftIcon={<Plus size={20} />}>Create Your First Project</Button>
      </Link>
    </div>
  );
};
