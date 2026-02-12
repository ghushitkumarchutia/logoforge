import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { ROUTES } from "../../utils/constants";

export const CreateProjectBtn = () => {
  return (
    <Link to={ROUTES.EDITOR}>
      <button className='inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-[10px] hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer shrink-0'>
        <Plus size={18} />
        New Project
      </button>
    </Link>
  );
};
