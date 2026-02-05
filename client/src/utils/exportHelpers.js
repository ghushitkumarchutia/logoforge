import { saveAs } from "file-saver";
import { EXPORT_RESOLUTIONS } from "./constants";

export const exportToPNG = (canvas, options = {}) => {
  const resolution = EXPORT_RESOLUTIONS[options.resolution] || 1;
  const dataURL = canvas.toDataURL({
    format: "png",
    multiplier: resolution,
    quality: 1,
  });

  const link = document.createElement("a");
  link.href = dataURL;
  link.download = options.filename || generateFilename("design", "png");
  link.click();
};

export const exportToSVG = (canvas, filename) => {
  const svg = canvas.toSVG();
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  saveAs(blob, filename || generateFilename("design", "svg"));
};

export const exportToJSON = (canvas, filename) => {
  const json = JSON.stringify(canvas.toJSON(), null, 2);
  const blob = new Blob([json], { type: "application/json" });
  saveAs(blob, filename || generateFilename("design", "json"));
};

export const importFromJSON = (canvas, jsonData) => {
  return new Promise((resolve, reject) => {
    try {
      const data =
        typeof jsonData === "string" ? JSON.parse(jsonData) : jsonData;
      canvas.loadFromJSON(data, () => {
        canvas.renderAll();
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const generateFilename = (projectName, format) => {
  const safeName = projectName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  const timestamp = new Date().toISOString().slice(0, 10);
  return `${safeName}-${timestamp}.${format}`;
};
