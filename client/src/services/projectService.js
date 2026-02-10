import api from "./api";

export const getAllProjects = (page = 1, limit = 10) => {
  return api.get(`/projects?page=${page}&limit=${limit}`);
};

export const getProjectById = (id) => {
  return api.get(`/projects/${id}`);
};

export const createProject = (projectData) => {
  return api.post("/projects", projectData);
};

export const updateProject = (id, updateData) => {
  return api.put(`/projects/${id}`, updateData);
};

export const deleteProject = (id) => {
  return api.delete(`/projects/${id}`);
};

export const duplicateProject = (id) => {
  return api.post(`/projects/${id}/duplicate`);
};

export const searchProjects = (query, page = 1, limit = 10) => {
  return api.get(
    `/projects/search?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`,
  );
};
