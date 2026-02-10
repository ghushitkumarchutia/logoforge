const express = require("express");
const router = express.Router();
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  duplicateProject,
  searchProjects,
} = require("../../controllers/projectController");
const {
  createProjectValidation,
  updateProjectValidation,
  mongoIdValidation,
} = require("../../validators/projectValidators");
const { validate } = require("../../middleware/validateMiddleware");
const { protect } = require("../../middleware/authMiddleware");

router.use(protect);

router.get("/search", searchProjects);
router.get("/", getProjects);
router.get("/:id", mongoIdValidation, validate, getProjectById);
router.post("/", createProjectValidation, validate, createProject);
router.put(
  "/:id",
  mongoIdValidation,
  updateProjectValidation,
  validate,
  updateProject,
);
router.delete("/:id", mongoIdValidation, validate, deleteProject);
router.post("/:id/duplicate", mongoIdValidation, validate, duplicateProject);

module.exports = router;
