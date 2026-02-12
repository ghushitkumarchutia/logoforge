import { ProjectCard } from "./ProjectCard";
import { Skeleton } from "../common/Skeleton";
import { EmptyState } from "./EmptyState";

export const ProjectGrid = ({ projects, isLoading, onDelete, onDuplicate }) => {
  if (isLoading) {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} variant='card' />
        ))}
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
      {projects.map((project) => (
        <ProjectCard
          key={project._id || project.id}
          project={project}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
        />
      ))}
    </div>
  );
};
