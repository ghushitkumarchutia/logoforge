import { TemplateCard } from "./TemplateCard";
import { Skeleton } from "../common/Skeleton";

export const TemplateGrid = ({ templates, isLoading, onSelect }) => {
  if (isLoading) {
    return (
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} variant='card' />
        ))}
      </div>
    );
  }

  if (!templates || templates.length === 0) {
    return (
      <div className='text-center py-12 text-gray-500 dark:text-gray-400'>
        No templates found in this category.
      </div>
    );
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
      {templates.map((template) => (
        <TemplateCard
          key={template._id || template.id}
          template={template}
          onClick={onSelect}
        />
      ))}
    </div>
  );
};
