const { body } = require("express-validator");

const updateProfileValidation = [
  body("username")
    .optional()
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3 and 20 characters")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage("Username can only contain letters, numbers, and underscores"),

  body("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
];

const changePasswordValidation = [
  body("currentPassword")
    .notEmpty()
    .withMessage("Current password is required"),

  body("newPassword")
    .notEmpty()
    .withMessage("New password is required")
    .isLength({ min: 8 })
    .withMessage("New password must be at least 8 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      "New password must contain at least one uppercase letter, one lowercase letter, and one number",
    ),
];

const deleteAccountValidation = [
  body("password")
    .notEmpty()
    .withMessage("Password is required to delete account"),
];

module.exports = {
  updateProfileValidation,
  changePasswordValidation,
  deleteAccountValidation,
};
