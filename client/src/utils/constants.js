export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1";
export const APP_NAME = import.meta.env.VITE_APP_NAME || "LogoForge";

export const CANVAS_DEFAULTS = {
  width: 800,
  height: 600,
  backgroundColor: "#ffffff",
};

export const AUTOSAVE_INTERVAL = 120000;
export const HISTORY_LIMIT = 20;

export const EXPORT_RESOLUTIONS = {
  "1x": 1,
  "2x": 2,
  "3x": 3,
};

export const EXPORT_FORMATS = ["png", "svg", "json"];

export const SHAPE_TYPES = ["rectangle", "circle", "triangle", "line"];

export const FONT_SIZES = [12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 64, 72];

export const TEMPLATE_CATEGORIES = ["Logo", "Banner", "Card", "Poster"];

export const ICON_CATEGORIES = ["Business", "Social", "General", "Technology"];

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  EDITOR: "/editor",
  PROFILE: "/profile",
};
