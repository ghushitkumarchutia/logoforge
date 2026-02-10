const User = require("../models/User");
const Project = require("../models/Project");
const { hashPassword, comparePassword } = require("../utils/hashPassword");
const { getCookieOptions } = require("../utils/generateToken");
const { successResponse, errorResponse } = require("../utils/responseHelpers");

const updateProfile = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return errorResponse(res, 404, "User not found");
    }

    if (username && username !== user.username) {
      const existingUsername = await User.findOne({ username });
      if (existingUsername) {
        return errorResponse(res, 409, "Username already taken");
      }
      user.username = username;
    }

    if (email && email !== user.email) {
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        return errorResponse(res, 409, "Email already in use");
      }
      user.email = email;
    }

    await user.save();

    return successResponse(res, 200, "Profile updated successfully", {
      id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error updating profile");
  }
};

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user._id).select("+password");

    if (!user) {
      return errorResponse(res, 404, "User not found");
    }

    const isMatch = await comparePassword(currentPassword, user.password);

    if (!isMatch) {
      return errorResponse(res, 401, "Current password is incorrect");
    }

    user.password = newPassword;
    await user.save();

    return successResponse(res, 200, "Password changed successfully");
  } catch (error) {
    return errorResponse(res, 500, "Server error changing password");
  }
};

const deleteAccount = async (req, res) => {
  try {
    const { password } = req.body;

    const user = await User.findById(req.user._id).select("+password");

    if (!user) {
      return errorResponse(res, 404, "User not found");
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return errorResponse(res, 401, "Password is incorrect");
    }

    await Project.deleteMany({ userId: req.user._id });
    await user.deleteOne();

    res.cookie("token", "", {
      ...getCookieOptions(0),
      expires: new Date(0),
    });

    return successResponse(res, 200, "Account deleted successfully");
  } catch (error) {
    return errorResponse(res, 500, "Server error deleting account");
  }
};

const getDashboardStats = async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments({
      userId: req.user._id,
    });

    const recentProjects = await Project.find({ userId: req.user._id })
      .select("projectName updatedAt")
      .sort({ updatedAt: -1 })
      .limit(5);

    const oldestProject = await Project.findOne({ userId: req.user._id })
      .select("createdAt")
      .sort({ createdAt: 1 });

    return successResponse(res, 200, "Dashboard stats retrieved", {
      totalProjects,
      recentProjects,
      memberSince: req.user.createdAt,
      firstProjectDate: oldestProject ? oldestProject.createdAt : null,
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error fetching stats");
  }
};

module.exports = {
  updateProfile,
  changePassword,
  deleteAccount,
  getDashboardStats,
};
