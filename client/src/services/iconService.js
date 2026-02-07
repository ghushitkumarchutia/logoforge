import api from "./api";
import { defaultIcons } from "../data/defaultIcons";

export const getAllIcons = async (category, search) => {
  try {
    const params = new URLSearchParams();
    if (category) params.append("category", category);
    if (search) params.append("search", search);

    const queryString = params.toString();
    const url = queryString ? `/icons?${queryString}` : "/icons";

    return await api.get(url);
  } catch (error) {
    console.warn(
      "Failed to fetch icons from API, using defaults:",
      error.message,
    );

    let icons = defaultIcons;

    if (category) {
      icons = icons.filter((icon) => icon.category === category);
    }

    if (search) {
      const q = search.toLowerCase();
      icons = icons.filter(
        (icon) =>
          icon.name.toLowerCase().includes(q) ||
          icon.keywords.some((k) => k.toLowerCase().includes(q)),
      );
    }

    return { success: true, data: { icons } };
  }
};
