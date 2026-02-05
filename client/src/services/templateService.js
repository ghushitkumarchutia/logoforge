import api from "./api";

export const getAllTemplates = async (category) => {
  const url = category ? `/templates?category=${category}` : "/templates";
  const response = await api.get(url);
  return response;
};

export const getTemplateById = async (id) => {
  const response = await api.get(`/templates/${id}`);
  return response;
};

export const getTemplatesByCategory = async (category) => {
  const response = await api.get(`/templates?category=${category}`);
  return response;
};
