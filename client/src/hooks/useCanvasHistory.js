import { useState, useCallback, useRef, useEffect } from "react";
import { HISTORY_LIMIT } from "../utils/constants";

export const useCanvasHistory = (canvas) => {
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const historyIndexRef = useRef(-1);

  useEffect(() => {
    historyIndexRef.current = historyIndex;
  }, [historyIndex]);

  const saveState = useCallback(() => {
    if (!canvas) return;

    const currentState = JSON.stringify(canvas.toJSON());
    setHistory((prev) => {
      const newHistory = prev.slice(0, historyIndexRef.current + 1);
      newHistory.push(currentState);
      if (newHistory.length > HISTORY_LIMIT) {
        newHistory.shift();
      }
      return newHistory;
    });
    setHistoryIndex((prev) => Math.min(prev + 1, HISTORY_LIMIT - 1));
  }, [canvas]);

  const undo = useCallback(async () => {
    if (!canvas || historyIndex <= 0) return;

    const newIndex = historyIndex - 1;
    const state = history[newIndex];

    await canvas.loadFromJSON(JSON.parse(state));
    canvas.renderAll();
    setHistoryIndex(newIndex);
  }, [canvas, history, historyIndex]);

  const redo = useCallback(async () => {
    if (!canvas || historyIndex >= history.length - 1) return;

    const newIndex = historyIndex + 1;
    const state = history[newIndex];

    await canvas.loadFromJSON(JSON.parse(state));
    canvas.renderAll();
    setHistoryIndex(newIndex);
  }, [canvas, history, historyIndex]);

  const clearHistory = useCallback(() => {
    setHistory([]);
    setHistoryIndex(-1);
  }, []);

  return {
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1,
    undo,
    redo,
    saveState,
    clearHistory,
  };
};
