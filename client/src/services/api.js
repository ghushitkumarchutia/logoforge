import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (import.meta.env.DEV) {
      console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        window.location.href = "/login";
      }

      const errorMessage = data?.message || "An error occurred";
      return Promise.reject(new Error(errorMessage));
    }

    if (error.request) {
      return Promise.reject(
        new Error("Network error. Please check your connection."),
      );
    }

    return Promise.reject(new Error("Request failed. Please try again."));
  },
);

export default api;
