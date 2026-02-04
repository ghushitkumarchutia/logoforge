const { validationResult } = require("express-validator");
const { errorResponse } = require("../utils/responseHelpers");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map((error) => ({
      field: error.path,
      message: error.msg,
    }));

    return errorResponse(res, 400, "Validation failed", formattedErrors);
  }

  next();
};

module.exports = { validate };
