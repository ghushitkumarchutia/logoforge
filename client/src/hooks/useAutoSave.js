import { useState, useCallback, useRef, useEffect } from "react";
import { updateProject } from "../services/projectService";
import { AUTOSAVE_INTERVAL } from "../utils/constants";
import { generateThumbnail } from "../utils/canvasHelpers";
import toast from "react-hot-toast";

export const useAutoSave = (projectId, canvas, enabled = true) => {
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [hasUnsavedChanges, setHasChanges] = useState(false);
  const intervalRef = useRef(null);

  const saveNow = useCallback(async () => {
    if (!projectId || !canvas || !hasUnsavedChanges) return;

    setIsSaving(true);
    try {
      const canvasData = canvas.toJSON();
      const thumbnail = generateThumbnail(canvas);

      await updateProject(projectId, {
        canvasData,
        thumbnail,
      });

      setLastSaved(new Date());
      setHasChanges(false);
      toast.success("Project saved");
    } catch {
      toast.error("Failed to save project");
    } finally {
      setIsSaving(false);
    }
  }, [projectId, canvas, hasUnsavedChanges]);

  useEffect(() => {
    if (!enabled || !projectId) return;

    intervalRef.current = setInterval(() => {
      if (hasUnsavedChanges) {
        saveNow();
      }
    }, AUTOSAVE_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [enabled, projectId, hasUnsavedChanges, saveNow]);

  return {
    isSaving,
    lastSaved,
    hasUnsavedChanges,
    saveNow,
    setHasChanges,
  };
};
