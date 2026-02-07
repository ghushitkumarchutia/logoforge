import { saveAs } from "file-saver";
import { EXPORT_RESOLUTIONS } from "./constants";

export const exportToPNG = (canvas, options = {}) => {
  const resolution = EXPORT_RESOLUTIONS[options.resolution] || 1;
  const dataURL = canvas.toDataURL({
    format: "png",
    multiplier: resolution,
    quality: 1,
  });

  const byteString = atob(dataURL.split(",")[1]);
  const mimeType = dataURL.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], { type: mimeType });
  saveAs(blob, options.filename || generateFilename("design", "png"));
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
