import { Rect, Circle, Triangle, Line, IText } from "fabric";

export const createRectangle = (options = {}) => {
  return new Rect({
    left: options.left || 100,
    top: options.top || 100,
    width: options.width || 100,
    height: options.height || 80,
    fill: options.fill || "#3b82f6",
    stroke: options.stroke || "#1e40af",
    strokeWidth: options.strokeWidth || 0,
    rx: options.rx || 0,
    ry: options.ry || 0,
    ...options,
  });
};

export const createCircle = (options = {}) => {
  return new Circle({
    left: options.left || 100,
    top: options.top || 100,
    radius: options.radius || 50,
    fill: options.fill || "#10b981",
    stroke: options.stroke || "#047857",
    strokeWidth: options.strokeWidth || 0,
    ...options,
  });
};

export const createTriangle = (options = {}) => {
  return new Triangle({
    left: options.left || 100,
    top: options.top || 100,
    width: options.width || 100,
    height: options.height || 100,
    fill: options.fill || "#f59e0b",
    stroke: options.stroke || "#d97706",
    strokeWidth: options.strokeWidth || 0,
    ...options,
  });
};

export const createLine = (points = [50, 100, 200, 100], options = {}) => {
  return new Line(points, {
    stroke: options.stroke || "#374151",
    strokeWidth: options.strokeWidth || 2,
    ...options,
  });
};

export const createText = (text = "Text", options = {}) => {
  return new IText(text, {
    left: options.left || 100,
    top: options.top || 100,
    fontSize: options.fontSize || 24,
    fontFamily: options.fontFamily || "Arial",
    fill: options.fill || "#111827",
    fontWeight: options.fontWeight || "normal",
    fontStyle: options.fontStyle || "normal",
    textAlign: options.textAlign || "left",
    ...options,
  });
};

export const centerObjectOnCanvas = (canvas, object) => {
  const canvasCenter = canvas.getCenterPoint();
  object.set({
    left: canvasCenter.x - (object.width * object.scaleX) / 2,
    top: canvasCenter.y - (object.height * object.scaleY) / 2,
  });
  object.setCoords();
  canvas.renderAll();
};

export const getObjectBounds = (object) => {
  const boundingRect = object.getBoundingRect();
  return {
    left: boundingRect.left,
    top: boundingRect.top,
    width: boundingRect.width,
    height: boundingRect.height,
  };
};

export const cloneObject = async (object) => {
  return new Promise((resolve) => {
    object.clone((cloned) => {
      cloned.set({
        left: object.left + 20,
        top: object.top + 20,
      });
      resolve(cloned);
    });
  });
};

export const generateThumbnail = (canvas, width = 200) => {
  const scale = width / canvas.width;
  return canvas.toDataURL({
    format: "png",
    multiplier: scale,
    quality: 0.8,
  });
};
