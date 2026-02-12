import { useState, useEffect, useCallback, useRef } from "react";
import { Canvas, FabricImage, Path } from "fabric";
import {
  createRectangle,
  createCircle,
  createTriangle,
  createLine,
  createText,
  centerObjectOnCanvas,
} from "../utils/canvasHelpers";
import { CANVAS_DEFAULTS } from "../utils/constants";

export const useCanvas = (canvasRef) => {
  const [canvas, setCanvas] = useState(null);
  const [selectedObject, setSelectedObject] = useState(null);
  const [objects, setObjects] = useState([]);
  const initializedRef = useRef(false);

  const initCanvas = useCallback(() => {
    if (!canvasRef.current || canvas || initializedRef.current) return;
    initializedRef.current = true;

    const fabricCanvas = new Canvas(canvasRef.current, {
      width: CANVAS_DEFAULTS.width,
      height: CANVAS_DEFAULTS.height,
      backgroundColor: CANVAS_DEFAULTS.backgroundColor,
      selection: true,
      preserveObjectStacking: true,
    });

    fabricCanvas.on("selection:created", (e) => {
      setSelectedObject(e.selected?.[0] || null);
    });

    fabricCanvas.on("selection:updated", (e) => {
      setSelectedObject(e.selected?.[0] || null);
    });

    fabricCanvas.on("selection:cleared", () => {
      setSelectedObject(null);
    });

    fabricCanvas.on("object:added", () => {
      setObjects(fabricCanvas.getObjects());
    });

    fabricCanvas.on("object:removed", () => {
      setObjects(fabricCanvas.getObjects());
    });

    setCanvas(fabricCanvas);
  }, [canvasRef, canvas]);

  useEffect(() => {
    return () => {
      if (canvas) {
        canvas.dispose();
        initializedRef.current = false;
      }
    };
  }, [canvas]);

  const addShape = useCallback(
    (type, options = {}) => {
      if (!canvas) return;

      let shape;
      switch (type) {
        case "rectangle":
          shape = createRectangle(options);
          break;
        case "circle":
          shape = createCircle(options);
          break;
        case "triangle":
          shape = createTriangle(options);
          break;
        case "line":
          shape = createLine(undefined, options);
          break;
        default:
          return;
      }

      canvas.add(shape);
      centerObjectOnCanvas(canvas, shape);
      canvas.setActiveObject(shape);
      canvas.renderAll();
    },
    [canvas],
  );

  const addText = useCallback(
    (text = "Text", options = {}) => {
      if (!canvas) return;

      const textObj = createText(text, options);
      canvas.add(textObj);
      centerObjectOnCanvas(canvas, textObj);
      canvas.setActiveObject(textObj);
      canvas.renderAll();
    },
    [canvas],
  );

  const addIcon = useCallback(
    (svgPath) => {
      if (!canvas) return;

      const path = new Path(svgPath, {
        left: 100,
        top: 100,
        fill: "#374151",
        scaleX: 2,
        scaleY: 2,
      });

      canvas.add(path);
      centerObjectOnCanvas(canvas, path);
      canvas.setActiveObject(path);
      canvas.renderAll();
    },
    [canvas],
  );

  const removeSelected = useCallback(() => {
    if (!canvas) return;
    const active = canvas.getActiveObject();
    if (active) {
      canvas.remove(active);
      canvas.discardActiveObject();
      canvas.renderAll();
    }
  }, [canvas]);

  const duplicateSelected = useCallback(async () => {
    if (!canvas) return;
    const active = canvas.getActiveObject();
    if (!active) return;

    const cloned = await active.clone();
    cloned.set({
      left: active.left + 10,
      top: active.top + 10,
    });
    canvas.add(cloned);
    canvas.setActiveObject(cloned);
    canvas.renderAll();
  }, [canvas]);

  const setFillColor = useCallback(
    (color) => {
      if (!canvas || !selectedObject) return;
      selectedObject.set("fill", color);
      canvas.renderAll();
    },
    [canvas, selectedObject],
  );

  const setStrokeColor = useCallback(
    (color) => {
      if (!canvas || !selectedObject) return;
      selectedObject.set("stroke", color);
      canvas.renderAll();
    },
    [canvas, selectedObject],
  );

  const setOpacity = useCallback(
    (value) => {
      if (!canvas || !selectedObject) return;
      selectedObject.set("opacity", value);
      canvas.renderAll();
    },
    [canvas, selectedObject],
  );

  const setFontSize = useCallback(
    (size) => {
      if (!canvas || !selectedObject || selectedObject.type !== "i-text")
        return;
      selectedObject.set("fontSize", size);
      canvas.renderAll();
    },
    [canvas, selectedObject],
  );

  const setFontFamily = useCallback(
    (family) => {
      if (!canvas || !selectedObject || selectedObject.type !== "i-text")
        return;
      selectedObject.set("fontFamily", family);
      canvas.renderAll();
    },
    [canvas, selectedObject],
  );

  const bringForward = useCallback(() => {
    if (!canvas || !selectedObject) return;
    canvas.bringObjectForward(selectedObject);
    canvas.renderAll();
  }, [canvas, selectedObject]);

  const sendBackward = useCallback(() => {
    if (!canvas || !selectedObject) return;
    canvas.sendObjectBackwards(selectedObject);
    canvas.renderAll();
  }, [canvas, selectedObject]);

  const bringToFront = useCallback(() => {
    if (!canvas || !selectedObject) return;
    canvas.bringObjectToFront(selectedObject);
    canvas.renderAll();
  }, [canvas, selectedObject]);

  const sendToBack = useCallback(() => {
    if (!canvas || !selectedObject) return;
    canvas.sendObjectToBack(selectedObject);
    canvas.renderAll();
  }, [canvas, selectedObject]);

  const getCanvasJSON = useCallback(() => {
    if (!canvas) return null;
    return canvas.toJSON();
  }, [canvas]);

  const loadFromJSON = useCallback(
    async (json) => {
      if (!canvas) return;
      await canvas.loadFromJSON(json);
      canvas.renderAll();
      setObjects(canvas.getObjects());
    },
    [canvas],
  );

  const clearCanvas = useCallback(() => {
    if (!canvas) return;
    canvas.clear();
    canvas.set("backgroundColor", CANVAS_DEFAULTS.backgroundColor);
    canvas.renderAll();
    setObjects([]);
  }, [canvas]);

  return {
    canvas,
    selectedObject,
    objects,
    initCanvas,
    addShape,
    addText,
    addIcon,
    removeSelected,
    duplicateSelected,
    setFillColor,
    setStrokeColor,
    setOpacity,
    setFontSize,
    setFontFamily,
    bringForward,
    sendBackward,
    bringToFront,
    sendToBack,
    getCanvasJSON,
    loadFromJSON,
    clearCanvas,
  };
};
