const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { successResponse, errorResponse } = require("../utils/responseHelpers");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      const field = existingUser.email === email ? "Email" : "Username";
      return errorResponse(res, 409, `${field} already exists`);
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    generateToken(res, user._id);

    return successResponse(res, 201, "User registered successfully", {
      id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
    });
  } catch (error) {
    console.error(`[Auth] Registration Error: ${error.message}`, error);
    return errorResponse(
      res,
      500,
      "Server error during registration: " + error.message,
    );
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return errorResponse(res, 401, "Invalid email or password");
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return errorResponse(res, 401, "Invalid email or password");
    }

    generateToken(res, user._id);

    return successResponse(res, 200, "Login successful", {
      id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error during login");
  }
};

const logoutUser = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return successResponse(res, 200, "Logout successful");
};

const getMe = async (req, res) => {
  return successResponse(res, 200, "User profile retrieved", {
    id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    createdAt: req.user.createdAt,
  });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
};
