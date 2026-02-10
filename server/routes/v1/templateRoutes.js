const express = require("express");
const router = express.Router();
const {
  getTemplates,
  getTemplateById,
} = require("../../controllers/templateController");
const { mongoIdValidation } = require("../../validators/projectValidators");
const { validate } = require("../../middleware/validateMiddleware");

router.get("/", getTemplates);
router.get("/:id", mongoIdValidation, validate, getTemplateById);

module.exports = router;
