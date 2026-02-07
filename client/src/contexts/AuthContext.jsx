import { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const checkAuth = useCallback(async () => {
    try {
      const response = await getCurrentUser();
      if (response.success && response.data) {
        setUser(response.data);
      }
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (email, password) => {
    const response = await loginUser({ email, password });
    if (response.success && response.data) {
      setUser(response.data);
      navigate("/dashboard");
    }
    return response;
  };

  const register = async (username, email, password) => {
    const response = await registerUser({ username, email, password });
    if (response.success && response.data) {
      setUser(response.data);
      navigate("/dashboard");
    }
    return response;
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
    navigate("/login");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
