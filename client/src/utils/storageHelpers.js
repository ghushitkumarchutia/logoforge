export const STORAGE_KEYS = {
  THEME: "logoforge_theme",
  RECENT_COLORS: "logoforge_recent_colors",
  CLIPBOARD: "logoforge_clipboard",
  USER_PREFERENCES: "logoforge_preferences",
};

export const getItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    // Silent fail
  }
};

export const clearStorage = () => {
  try {
    localStorage.clear();
  } catch {
    // Silent fail
  }
};
