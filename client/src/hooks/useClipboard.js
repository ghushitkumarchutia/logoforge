import { useState, useCallback } from "react";

export const useClipboard = (canvas) => {
  const [clipboardData, setClipboardData] = useState(null);

  const copy = useCallback(async () => {
    if (!canvas) return;
    const activeObject = canvas.getActiveObject();
    if (!activeObject) return;

    const cloned = await activeObject.clone();
    setClipboardData(cloned);
  }, [canvas]);

  const cut = useCallback(async () => {
    if (!canvas) return;
    const activeObject = canvas.getActiveObject();
    if (!activeObject) return;

    const cloned = await activeObject.clone();
    setClipboardData(cloned);
    canvas.remove(activeObject);
    canvas.discardActiveObject();
    canvas.renderAll();
  }, [canvas]);

  const paste = useCallback(async () => {
    if (!canvas || !clipboardData) return;

    const cloned = await clipboardData.clone();
    cloned.set({
      left: cloned.left + 10,
      top: cloned.top + 10,
      evented: true,
    });

    if (cloned.type === "activeSelection") {
      cloned.canvas = canvas;
      cloned.forEachObject((obj) => {
        canvas.add(obj);
      });
      cloned.setCoords();
    } else {
      canvas.add(cloned);
    }

    canvas.setActiveObject(cloned);
    canvas.renderAll();
  }, [canvas, clipboardData]);

  const duplicate = useCallback(async () => {
    if (!canvas) return;
    const activeObject = canvas.getActiveObject();
    if (!activeObject) return;

    const cloned = await activeObject.clone();
    cloned.set({
      left: activeObject.left + 10,
      top: activeObject.top + 10,
      evented: true,
    });

    canvas.add(cloned);
    canvas.setActiveObject(cloned);
    canvas.renderAll();
  }, [canvas]);

  return {
    hasClipboard: !!clipboardData,
    copy,
    cut,
    paste,
    duplicate,
  };
};
