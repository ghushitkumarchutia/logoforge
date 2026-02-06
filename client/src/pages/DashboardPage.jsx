import { useState, useEffect, useCallback, useMemo } from "react";
import { useAuth } from "../hooks/useAuth.js";
import { getAllProjects, deleteProject } from "../services/projectService.js";
import { Navbar } from "../components/layout/Navbar.jsx";
import { PageContainer } from "../components/layout/PageContainer.jsx";
import { ProjectGrid } from "../components/dashboard/ProjectGrid.jsx";
import { ProjectSearch } from "../components/dashboard/ProjectSearch.jsx";
import { CreateProjectBtn } from "../components/dashboard/CreateProjectBtn.jsx";
import toast from "react-hot-toast";

export const DashboardPage = () => {
  const { user } = useAuth();
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

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    const query = searchQuery.toLowerCase();
    return projects.filter(
      (project) =>
        project.name?.toLowerCase().includes(query) ||
        project.title?.toLowerCase().includes(query),
    );
  }, [projects, searchQuery]);

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <Navbar />

      <main className='pt-20 pb-12'>
        <PageContainer>
          <div className='mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
              Welcome back, {user?.username || "User"}
            </h1>
            <p className='text-gray-600 dark:text-gray-400'>
              Manage your logo projects
            </p>
          </div>

          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8'>
            <ProjectSearch value={searchQuery} onChange={handleSearchChange} />
            <CreateProjectBtn />
          </div>

          <ProjectGrid
            projects={filteredProjects}
            isLoading={isLoading}
            onDelete={handleDelete}
          />
        </PageContainer>
      </main>
    </div>
  );
};
