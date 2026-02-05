import api from "./api";

export const getAllProjects = async (page = 1, limit = 10) => {
  const response = await api.get(`/projects?page=${page}&limit=${limit}`);
  return response;
};

export const getProjectById = async (id) => {
  const response = await api.get(`/projects/${id}`);
  return response;
};

export const createProject = async (projectData) => {
  const response = await api.post("/projects", projectData);
  return response;
};

export const updateProject = async (id, updateData) => {
  const response = await api.put(`/projects/${id}`, updateData);
  return response;
};

export const deleteProject = async (id) => {
  const response = await api.delete(`/projects/${id}`);
  return response;
};
