const express = require("express");
const router = express.Router();
const {
  getTemplates,
  getTemplateById,
} = require("../../controllers/templateController");
const { projectIdValidation } = require("../../validators/projectValidators");
const { validate } = require("../../middleware/validateMiddleware");

router.get("/", getTemplates);
router.get("/:id", projectIdValidation, validate, getTemplateById);

module.exports = router;
