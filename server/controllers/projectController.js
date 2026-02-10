const Project = require("../models/Project");
const {
  successResponse,
  errorResponse,
  paginatedResponse,
} = require("../utils/responseHelpers");

const findUserProject = async (projectId, userId) => {
  const project = await Project.findById(projectId);

  if (!project) {
    return { error: { status: 404, message: "Project not found" } };
  }

  if (project.userId.toString() !== userId.toString()) {
    return {
      error: { status: 403, message: "Not authorized to access this project" },
    };
  }

  return { project };
};

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

    return paginatedResponse(
      res,
      "Projects retrieved successfully",
      projects,
      page,
      limit,
      total,
    );
  } catch (error) {
    return errorResponse(res, 500, "Server error fetching projects");
  }
};

const getProjectById = async (req, res) => {
  try {
    const { project, error } = await findUserProject(
      req.params.id,
      req.user._id,
    );

    if (error) {
      return errorResponse(res, error.status, error.message);
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
    const { project, error } = await findUserProject(
      req.params.id,
      req.user._id,
    );

    if (error) {
      return errorResponse(res, error.status, error.message);
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
    const { project, error } = await findUserProject(
      req.params.id,
      req.user._id,
    );

    if (error) {
      return errorResponse(res, error.status, error.message);
    }

    await project.deleteOne();

    return successResponse(res, 200, "Project deleted successfully");
  } catch (error) {
    return errorResponse(res, 500, "Server error deleting project");
  }
};

const duplicateProject = async (req, res) => {
  try {
    const { project, error } = await findUserProject(
      req.params.id,
      req.user._id,
    );

    if (error) {
      return errorResponse(res, error.status, error.message);
    }

    const duplicate = await Project.create({
      userId: req.user._id,
      projectName: `${project.projectName} (Copy)`,
      canvasData: project.canvasData,
      thumbnail: project.thumbnail,
      tags: [...project.tags],
    });

    return successResponse(res, 201, "Project duplicated successfully", {
      project: duplicate,
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error duplicating project");
  }
};

const searchProjects = async (req, res) => {
  try {
    const { q } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    if (!q || !q.trim()) {
      return errorResponse(res, 400, "Search query is required");
    }

    const searchRegex = new RegExp(
      q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "i",
    );

    const filter = {
      userId: req.user._id,
      $or: [{ projectName: searchRegex }, { tags: searchRegex }],
    };

    const total = await Project.countDocuments(filter);
    const projects = await Project.find(filter)
      .select("projectName thumbnail tags createdAt updatedAt")
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(limit);

    return paginatedResponse(
      res,
      "Search results retrieved",
      projects,
      page,
      limit,
      total,
    );
  } catch (error) {
    return errorResponse(res, 500, "Server error searching projects");
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  duplicateProject,
  searchProjects,
};
