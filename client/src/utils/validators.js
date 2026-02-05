export const validateEmail = (email) => {
  if (!email) {
    return { isValid: false, message: "Email is required" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: "Please enter a valid email address" };
  }
  return { isValid: true, message: "" };
};

export const validatePassword = (password) => {
  if (!password) {
    return { isValid: false, message: "Password is required" };
  }
  if (password.length < 8) {
    return {
      isValid: false,
      message: "Password must be at least 8 characters",
    };
  }
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one uppercase letter",
    };
  }
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one lowercase letter",
    };
  }
  if (!/\d/.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one number",
    };
  }
  return { isValid: true, message: "" };
};

export const validateUsername = (username) => {
  if (!username) {
    return { isValid: false, message: "Username is required" };
  }
  if (username.length < 3 || username.length > 20) {
    return {
      isValid: false,
      message: "Username must be between 3 and 20 characters",
    };
  }
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return {
      isValid: false,
      message: "Username can only contain letters, numbers, and underscores",
    };
  }
  return { isValid: true, message: "" };
};

export const validatePasswordMatch = (password, confirmPassword) => {
  if (!confirmPassword) {
    return { isValid: false, message: "Please confirm your password" };
  }
  if (password !== confirmPassword) {
    return { isValid: false, message: "Passwords do not match" };
  }
  return { isValid: true, message: "" };
};

export const validateProjectName = (name) => {
  if (!name || !name.trim()) {
    return { isValid: false, message: "Project name is required" };
  }
  if (name.length > 50) {
    return {
      isValid: false,
      message: "Project name cannot exceed 50 characters",
    };
  }
  return { isValid: true, message: "" };
};

export const validateRequired = (value, fieldName) => {
  if (!value || (typeof value === "string" && !value.trim())) {
    return { isValid: false, message: `${fieldName} is required` };
  }
  return { isValid: true, message: "" };
};
