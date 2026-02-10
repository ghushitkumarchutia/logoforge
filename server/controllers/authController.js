const crypto = require("crypto");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { getCookieOptions } = require("../utils/generateToken");
const sendEmail = require("../utils/sendEmail");
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
    return errorResponse(res, 500, "Server error during registration");
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
  try {
    res.cookie("token", "", {
      ...getCookieOptions(0),
      expires: new Date(0),
    });

    return successResponse(res, 200, "Logout successful");
  } catch (error) {
    return errorResponse(res, 500, "Server error during logout");
  }
};

const getMe = async (req, res) => {
  try {
    return successResponse(res, 200, "User profile retrieved", {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      createdAt: req.user.createdAt,
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error fetching profile");
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return successResponse(
        res,
        200,
        "If an account with that email exists, a password reset link has been sent",
      );
    }

    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #22c55e;">LogoForge - Password Reset</h2>
        <p>You requested a password reset. Click the button below to set a new password:</p>
        <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background-color: #22c55e; color: #fff; text-decoration: none; border-radius: 6px; margin: 16px 0;">Reset Password</a>
        <p style="color: #666; font-size: 14px;">This link will expire in 30 minutes.</p>
        <p style="color: #666; font-size: 14px;">If you didn't request this, please ignore this email.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
        <p style="color: #999; font-size: 12px;">LogoForge &mdash; Professional Logo Designer</p>
      </div>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "LogoForge - Password Reset Request",
        html,
      });
    } catch (emailError) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });

      return errorResponse(
        res,
        500,
        "Email could not be sent. Please try again later.",
      );
    }

    return successResponse(
      res,
      200,
      "If an account with that email exists, a password reset link has been sent",
    );
  } catch (error) {
    return errorResponse(res, 500, "Server error processing password reset");
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    }).select("+resetPasswordToken +resetPasswordExpire");

    if (!user) {
      return errorResponse(res, 400, "Invalid or expired password reset token");
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    generateToken(res, user._id);

    return successResponse(res, 200, "Password reset successful", {
      id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error resetting password");
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
  forgotPassword,
  resetPassword,
};
