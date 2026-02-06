import { Card } from "../common/Card";
import { Badge } from "../common/Badge";

export const TemplateCard = ({ template, onClick }) => {
  return (
    <Card
      hoverable
      padding='none'
      onClick={() => onClick(template)}
      className='cursor-pointer overflow-hidden group'
    >
      <div className='aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden'>
        {template.thumbnail ? (
          <img
            src={template.thumbnail}
            alt={template.name}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center text-gray-400'>
            <span className='text-3xl font-bold'>
              {template.name?.charAt(0)?.toUpperCase() || "T"}
            </span>
          </div>
        )}
        <div className='absolute top-2 right-2'>
          <Badge variant='primary' size='sm'>
            {template.category}
          </Badge>
        </div>
      </div>
      <div className='p-3'>
        <h3 className='font-medium text-gray-900 dark:text-white truncate'>
          {template.name}
        </h3>
      </div>
    </Card>
  );
};
