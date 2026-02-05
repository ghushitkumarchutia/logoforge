const Project = require("../models/Project");
const {
  successResponse,
  errorResponse,
  paginatedResponse,
} = require("../utils/responseHelpers");

const getProjects = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Project.countDocuments({ userId: req.user._id });
    const projects = await Project.find({ userId: req.user._id })
      .select("projectName thumbnail tags createdAt updatedAt")
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(limit);

    return paginatedResponse(res, projects, page, limit, total);
  } catch (error) {
    return errorResponse(res, 500, "Server error fetching projects");
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return errorResponse(res, 404, "Project not found");
    }

    if (project.userId.toString() !== req.user._id.toString()) {
      return errorResponse(res, 403, "Not authorized to access this project");
    }

    return successResponse(res, 200, "Project retrieved successfully", {
      project,
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error fetching project");
  }
};

const createProject = async (req, res) => {
  try {
    const { projectName, canvasData, thumbnail, tags } = req.body;

    const project = await Project.create({
      userId: req.user._id,
      projectName: projectName || "Untitled Project",
      canvasData,
      thumbnail: thumbnail || "",
      tags: tags || [],
    });

    return successResponse(res, 201, "Project created successfully", {
      project,
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error creating project");
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return errorResponse(res, 404, "Project not found");
    }

    if (project.userId.toString() !== req.user._id.toString()) {
      return errorResponse(res, 403, "Not authorized to update this project");
    }

    const { projectName, canvasData, thumbnail, tags } = req.body;

    if (projectName !== undefined) project.projectName = projectName;
    if (canvasData !== undefined) project.canvasData = canvasData;
    if (thumbnail !== undefined) project.thumbnail = thumbnail;
    if (tags !== undefined) project.tags = tags;

    await project.save();

    return successResponse(res, 200, "Project updated successfully", {
      project,
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error updating project");
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return errorResponse(res, 404, "Project not found");
    }

    if (project.userId.toString() !== req.user._id.toString()) {
      return errorResponse(res, 403, "Not authorized to delete this project");
    }

    await project.deleteOne();

    return successResponse(res, 200, "Project deleted successfully");
  } catch (error) {
    return errorResponse(res, 500, "Server error deleting project");
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
