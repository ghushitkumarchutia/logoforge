import api from "./api";

export const getAllTemplates = (category) => {
  const url = category ? `/templates?category=${category}` : "/templates";
  return api.get(url);
};

export const getTemplateById = (id) => {
  return api.get(`/templates/${id}`);
};
