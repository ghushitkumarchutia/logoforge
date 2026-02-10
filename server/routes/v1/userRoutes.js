const express = require("express");
const router = express.Router();
const {
  updateProfile,
  changePassword,
  deleteAccount,
  getDashboardStats,
} = require("../../controllers/userController");
const {
  updateProfileValidation,
  changePasswordValidation,
  deleteAccountValidation,
} = require("../../validators/userValidators");
const { validate } = require("../../middleware/validateMiddleware");
const { protect } = require("../../middleware/authMiddleware");

router.use(protect);

router.put("/profile", updateProfileValidation, validate, updateProfile);
router.put(
  "/change-password",
  changePasswordValidation,
  validate,
  changePassword,
);
router.delete("/account", deleteAccountValidation, validate, deleteAccount);
router.get("/stats", getDashboardStats);

module.exports = router;
