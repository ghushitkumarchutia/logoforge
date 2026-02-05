const mongoose = require("mongoose");

const iconSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Icon name is required"],
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: ["Business", "Social", "General", "Technology"],
        message: "Category must be Business, Social, General, or Technology",
      },
    },
    svgPath: {
      type: String,
      required: [true, "SVG path is required"],
    },
    viewBox: {
      type: String,
      required: [true, "ViewBox is required"],
      default: "0 0 24 24",
    },
    keywords: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

iconSchema.index({ category: 1 });
iconSchema.index({ name: 1 }, { unique: true });
iconSchema.index({ keywords: "text", name: "text" });

const Icon = mongoose.model("Icon", iconSchema);

module.exports = Icon;
