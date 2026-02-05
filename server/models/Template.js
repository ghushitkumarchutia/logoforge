const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Template name is required"],
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: ["Logo", "Banner", "Card", "Poster"],
        message: "Category must be Logo, Banner, Card, or Poster",
      },
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
      required: [true, "Thumbnail is required"],
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

templateSchema.index({ category: 1 });
templateSchema.index({ isPublic: 1 });

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;
