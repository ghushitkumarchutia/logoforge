const Icon = require("../models/Icon");
const { successResponse, errorResponse } = require("../utils/responseHelpers");

const VALID_CATEGORIES = ["Business", "Social", "General", "Technology"];

const getIcons = async (req, res) => {
  try {
    const { category, search } = req.query;
    let filter = {};

    if (category) {
      if (!VALID_CATEGORIES.includes(category)) {
        return errorResponse(
          res,
          400,
          "Invalid category. Must be Business, Social, General, or Technology",
        );
      }
      filter.category = category;
    }

    if (search) {
      filter.$text = { $search: search };
    }

    const icons = await Icon.find(filter)
      .select("name category svgPath viewBox")
      .sort({ name: 1 });

    return successResponse(res, 200, "Icons retrieved successfully", {
      icons,
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error fetching icons");
  }
};

module.exports = {
  getIcons,
};
