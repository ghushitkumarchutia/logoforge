import { useRef, useEffect, useContext, useState, useCallback } from "react";
import * as fabric from "fabric";
import { CanvasContext } from "../../contexts/CanvasContext.jsx";
import { useKeyboardShortcuts } from "../../hooks/useKeyboardShortcuts.js";
import { CanvasControls } from "./CanvasControls.jsx";
import { CANVAS_DEFAULTS } from "../../utils/constants.js";
import "../../styles/canvas.css";
import clsx from "clsx";

export const CanvasArea = () => {
  const canvasElRef = useRef(null);
  const containerRef = useRef(null);
  const { canvasRef, canvas, initCanvas, operations } =
    useContext(CanvasContext);

  const [zoom, setZoom] = useState(1);
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    if (!canvasElRef.current || canvas) return;

    const fabricCanvas = new fabric.Canvas(canvasElRef.current, {
      width: CANVAS_DEFAULTS.width,
      height: CANVAS_DEFAULTS.height,
      backgroundColor: CANVAS_DEFAULTS.backgroundColor,
      preserveObjectStacking: true,
      selection: true,
      controlsAboveOverlay: true,
    });

    canvasRef.current = fabricCanvas;
    initCanvas?.(fabricCanvas);

    return () => {
      fabricCanvas.dispose();
    };
  }, [canvas, canvasRef, initCanvas]);

  const handleZoomIn = useCallback(() => {
    if (!canvas || zoom >= 3) return;
    const newZoom = Math.min(zoom + 0.25, 3);
    canvas.setZoom(newZoom);
    setZoom(newZoom);
    canvas.requestRenderAll();
  }, [canvas, zoom]);

  const handleZoomOut = useCallback(() => {
    if (!canvas || zoom <= 0.25) return;
    const newZoom = Math.max(zoom - 0.25, 0.25);
    canvas.setZoom(newZoom);
    setZoom(newZoom);
    canvas.requestRenderAll();
  }, [canvas, zoom]);

  const handleResetZoom = useCallback(() => {
    if (!canvas) return;
    canvas.setZoom(1);
    setZoom(1);
    canvas.requestRenderAll();
  }, [canvas]);

  const handleToggleGrid = useCallback(() => {
    setShowGrid((prev) => !prev);
  }, []);

  const handleDeselect = useCallback(() => {
    if (!canvas) return;
    canvas.discardActiveObject();
    canvas.requestRenderAll();
  }, [canvas]);

  useKeyboardShortcuts({
    onUndo: operations?.undo,
    onRedo: operations?.redo,
    onCopy: operations?.copy,
    onPaste: operations?.paste,
    onCut: operations?.cut,
    onDuplicate: operations?.duplicate,
    onDelete: operations?.removeSelected,
    onDeselect: handleDeselect,
    onSave: null,
  });

  return (
    <div className='canvas-container' ref={containerRef}>
      <div
        className={clsx("canvas-grid", showGrid && "canvas-grid--visible")}
      />

      <div className='canvas-scrollable'>
        <div
          className='canvas-wrapper'
          style={{
            width: CANVAS_DEFAULTS.width * zoom,
            height: CANVAS_DEFAULTS.height * zoom,
          }}
        >
          <canvas ref={canvasElRef} />
        </div>
      </div>

      <CanvasControls
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={handleResetZoom}
        showGrid={showGrid}
        onToggleGrid={handleToggleGrid}
      />
    </div>
  );
};
