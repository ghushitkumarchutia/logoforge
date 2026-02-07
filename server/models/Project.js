const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    projectName: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
      minlength: [1, "Project name cannot be empty"],
      maxlength: [50, "Project name cannot exceed 50 characters"],
    },
    canvasData: {
      type: Object,
      required: [true, "Canvas data is required"],
      validate: {
        validator: function (v) {
          return v && Array.isArray(v.objects);
        },
        message: "Canvas data must contain an objects array",
      },
    },
    thumbnail: {
      type: String,
      default: "",
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

projectSchema.index({ userId: 1 });
projectSchema.index({ userId: 1, updatedAt: -1 });

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
