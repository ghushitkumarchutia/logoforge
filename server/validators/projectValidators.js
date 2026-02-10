const { body, param } = require("express-validator");

const validateCanvasData = (value) => {
  if (typeof value !== "object" || value === null) {
    throw new Error("Canvas data must be a valid object");
  }
  if (!value.objects || !Array.isArray(value.objects)) {
    throw new Error("Canvas data must contain an objects array");
  }
  return true;
};

const validateTags = (value) => {
  if (value && !value.every((tag) => typeof tag === "string")) {
    throw new Error("Each tag must be a string");
  }
  return true;
};

const createProjectValidation = [
  body("projectName")
    .trim()
    .notEmpty()
    .withMessage("Project name is required")
    .isLength({ min: 1, max: 50 })
    .withMessage("Project name must be between 1 and 50 characters"),

  body("canvasData")
    .notEmpty()
    .withMessage("Canvas data is required")
    .isObject()
    .withMessage("Canvas data must be an object")
    .custom(validateCanvasData),

  body("thumbnail")
    .optional()
    .isString()
    .withMessage("Thumbnail must be a string"),

  body("tags")
    .optional()
    .isArray()
    .withMessage("Tags must be an array")
    .custom(validateTags),
];

const updateProjectValidation = [
  body("projectName")
    .optional()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("Project name must be between 1 and 50 characters"),

  body("canvasData")
    .optional()
    .isObject()
    .withMessage("Canvas data must be an object")
    .custom(validateCanvasData),

  body("thumbnail")
    .optional()
    .isString()
    .withMessage("Thumbnail must be a string"),

  body("tags")
    .optional()
    .isArray()
    .withMessage("Tags must be an array")
    .custom(validateTags),
];

const mongoIdValidation = [
  param("id").isMongoId().withMessage("Invalid resource ID format"),
];

module.exports = {
  createProjectValidation,
  updateProjectValidation,
  mongoIdValidation,
};
