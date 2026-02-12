import { createContext, useState, useRef, useCallback, useEffect } from "react";
import { useCanvas } from "../hooks/useCanvas";
import { useCanvasHistory } from "../hooks/useCanvasHistory";
import { useClipboard } from "../hooks/useClipboard";

export const CanvasContext = createContext(null);

export const CanvasProvider = ({ children }) => {
  const canvasRef = useRef(null);
  const [isModified, setIsModified] = useState(false);
  const saveTimerRef = useRef(null);

  const {
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
  } = useCanvas(canvasRef);

  const {
    canUndo,
    canRedo,
    undo,
    redo,
    saveState,
    clearHistory,
    isRestoringRef,
  } = useCanvasHistory(canvas);

  const { hasClipboard, copy, cut, paste, duplicate } = useClipboard(canvas);

  const markModified = useCallback(() => {
    setIsModified(true);
  }, []);

  const markSaved = useCallback(() => {
    setIsModified(false);
  }, []);

  useEffect(() => {
    if (!canvas) return;

    const debouncedSave = () => {
      if (isRestoringRef.current) return;
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      saveTimerRef.current = setTimeout(() => {
        saveState();
        setIsModified(true);
      }, 100);
    };

    saveState();

    canvas.on("object:added", debouncedSave);
    canvas.on("object:removed", debouncedSave);
    canvas.on("object:modified", debouncedSave);

    return () => {
      canvas.off("object:added", debouncedSave);
      canvas.off("object:removed", debouncedSave);
      canvas.off("object:modified", debouncedSave);
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [canvas, saveState]);

  const operations = {
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
    undo,
    redo,
    saveState,
    clearHistory,
    copy,
    cut,
    paste,
    duplicate,
  };

  const value = {
    canvasRef,
    canvas,
    selectedObject,
    objects,
    isModified,
    canUndo,
    canRedo,
    hasClipboard,
    initCanvas,
    markModified,
    markSaved,
    operations,
  };

  return (
    <CanvasContext.Provider value={value}>{children}</CanvasContext.Provider>
  );
};
