const Template = require("../models/Template");
const { successResponse, errorResponse } = require("../utils/responseHelpers");

const getTemplates = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = { isPublic: true };

    if (category) {
      filter.category = category;
    }

    const templates = await Template.find(filter)
      .select("name category thumbnail createdAt")
      .sort({ createdAt: -1 });

    return successResponse(res, 200, "Templates retrieved successfully", {
      templates,
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error fetching templates");
  }
};

const getTemplateById = async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);

    if (!template) {
      return errorResponse(res, 404, "Template not found");
    }

    return successResponse(res, 200, "Template retrieved successfully", {
      template: {
        id: template._id,
        name: template.name,
        category: template.category,
        canvasData: template.canvasData,
        thumbnail: template.thumbnail,
      },
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error fetching template");
  }
};

module.exports = {
  getTemplates,
  getTemplateById,
};
