const express = require("express");
const router = express.Router();
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../../controllers/projectController");
const {
  createProjectValidation,
  updateProjectValidation,
  projectIdValidation,
} = require("../../validators/projectValidators");
const { validate } = require("../../middleware/validateMiddleware");
const { protect } = require("../../middleware/authMiddleware");

router.use(protect);

router.get("/", getProjects);
router.get("/:id", projectIdValidation, validate, getProjectById);
router.post("/", createProjectValidation, validate, createProject);
router.put(
  "/:id",
  projectIdValidation,
  updateProjectValidation,
  validate,
  updateProject,
);
router.delete("/:id", projectIdValidation, validate, deleteProject);

module.exports = router;
