const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { errorResponse } = require("../utils/responseHelpers");

const protect = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return errorResponse(res, 401, "Not authorized, no token");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return errorResponse(res, 401, "Not authorized, user not found");
    }

    req.user = user;
    next();
  } catch (error) {
    return errorResponse(res, 401, "Not authorized, token failed");
  }
};

module.exports = { protect };
