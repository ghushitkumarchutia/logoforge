import { Search } from "lucide-react";

export const ProjectSearch = ({ value, onChange }) => {
  return (
    <div className='relative w-full max-w-sm'>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400'>
        <Search size={16} />
      </div>
      <input
        name='search'
        type='text'
        placeholder='Search projects...'
        value={value}
        onChange={onChange}
        className='w-full pl-9 pr-4 py-2 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] text-neutral-900 dark:text-white text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:border-transparent transition-colors'
      />
    </div>
  );
};
