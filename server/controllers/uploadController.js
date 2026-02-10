const { successResponse, errorResponse } = require("../utils/responseHelpers");

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return errorResponse(res, 400, "No image file provided");
    }

    const imageUrl = `/uploads/${req.file.filename}`;

    return successResponse(res, 201, "Image uploaded successfully", {
      url: imageUrl,
      filename: req.file.filename,
      originalName: req.file.originalname,
      size: req.file.size,
      mimetype: req.file.mimetype,
    });
  } catch (error) {
    return errorResponse(res, 500, "Server error uploading image");
  }
};

module.exports = { uploadImage };
