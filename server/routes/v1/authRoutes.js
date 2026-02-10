const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
  forgotPassword,
  resetPassword,
} = require("../../controllers/authController");
const {
  registerValidation,
  loginValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
} = require("../../validators/authValidators");
const { validate } = require("../../middleware/validateMiddleware");
const { protect } = require("../../middleware/authMiddleware");

router.post("/register", registerValidation, validate, registerUser);
router.post("/login", loginValidation, validate, loginUser);
router.post("/logout", logoutUser);
router.get("/me", protect, getMe);
router.post(
  "/forgot-password",
  forgotPasswordValidation,
  validate,
  forgotPassword,
);
router.put(
  "/reset-password/:token",
  resetPasswordValidation,
  validate,
  resetPassword,
);

module.exports = router;
