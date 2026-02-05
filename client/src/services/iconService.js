import api from "./api";
import { defaultIcons } from "../data/defaultIcons";

export const getAllIcons = async (category, search) => {
  try {
    const params = new URLSearchParams();
    if (category) params.append("category", category);
    if (search) params.append("search", search);

    const queryString = params.toString();
    const url = queryString ? `/icons?${queryString}` : "/icons";

    const response = await api.get(url);
    return response;
  } catch (error) {
    console.warn(
      "Failed to fetch icons from API, using defaults:",
      error.message,
    );
    return { success: true, data: { icons: defaultIcons } };
  }
};

export const getIconsByCategory = async (category) => {
  try {
    const response = await api.get(`/icons/category/${category}`);
    return response;
  } catch (error) {
    console.warn(
      "Failed to fetch icons by category, using defaults:",
      error.message,
    );
    const filtered = defaultIcons.filter((icon) => icon.category === category);
    return { success: true, data: { icons: filtered } };
  }
};

export const searchIcons = async (query) => {
  try {
    const response = await api.get(
      `/icons?search=${encodeURIComponent(query)}`,
    );
    return response;
  } catch (error) {
    console.warn("Failed to search icons, using defaults:", error.message);
    const filtered = defaultIcons.filter(
      (icon) =>
        icon.name.toLowerCase().includes(query.toLowerCase()) ||
        icon.keywords.some((k) =>
          k.toLowerCase().includes(query.toLowerCase()),
        ),
    );
    return { success: true, data: { icons: filtered } };
  }
};
