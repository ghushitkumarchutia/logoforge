import { useState, useEffect, useCallback, useMemo } from "react";
import {
  getAllProjects,
  deleteProject,
  duplicateProject,
} from "../services/projectService.js";
import { Navbar } from "../components/layout/Navbar.jsx";
import { PageContainer } from "../components/layout/PageContainer.jsx";
import { ProjectGrid } from "../components/dashboard/ProjectGrid.jsx";
import { ProjectSearch } from "../components/dashboard/ProjectSearch.jsx";
import { CreateProjectBtn } from "../components/dashboard/CreateProjectBtn.jsx";
import { DashboardStats } from "../components/dashboard/DashboardStats.jsx";
import toast from "react-hot-toast";

export const DashboardPage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProjects = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getAllProjects(1, 100);
      setProjects(response.data?.projects || response.data || []);
    } catch {
      toast.error("Failed to load projects");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleDelete = useCallback(async (projectId) => {
    try {
      await deleteProject(projectId);
      setProjects((prev) => prev.filter((p) => (p._id || p.id) !== projectId));
      toast.success("Project deleted successfully");
    } catch {
      toast.error("Failed to delete project");
    }
  }, []);

  const handleDuplicate = useCallback(async (projectId) => {
    try {
      const response = await duplicateProject(projectId);
      const newProject = response.data?.project;
      if (newProject) {
        setProjects((prev) => [newProject, ...prev]);
      }
      toast.success("Project duplicated successfully");
    } catch {
      toast.error("Failed to duplicate project");
    }
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    const query = searchQuery.toLowerCase();
    return projects.filter(
      (project) =>
        project.projectName?.toLowerCase().includes(query) ||
        project.tags?.some((tag) => tag.toLowerCase().includes(query)),
    );
  }, [projects, searchQuery]);

  return (
    <div className='min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950'>
      <Navbar />

      <main className='flex-1 pt-20 pb-12'>
        <PageContainer>
          <div className='mb-4'>
            <h1 className='text-2xl font-semibold text-neutral-900 dark:text-white tracking-tight'>
              Dashboard
            </h1>
          </div>

          <DashboardStats />

          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8'>
            <ProjectSearch value={searchQuery} onChange={handleSearchChange} />
            <CreateProjectBtn />
          </div>

          <ProjectGrid
            projects={filteredProjects}
            isLoading={isLoading}
            onDelete={handleDelete}
            onDuplicate={handleDuplicate}
          />
        </PageContainer>
      </main>
    </div>
  );
};
