import api from "./api";

export const updateProfile = (profileData) => {
  return api.put("/user/profile", profileData);
};

export const changePassword = (passwordData) => {
  return api.put("/user/change-password", passwordData);
};

export const deleteAccount = (password) => {
  return api.delete("/user/account", { data: { password } });
};

export const getDashboardStats = () => {
  return api.get("/user/stats");
};
