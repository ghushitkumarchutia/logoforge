import { useState, useEffect, useCallback, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CanvasProvider, CanvasContext } from "../contexts/CanvasContext.jsx";
import { getProjectById } from "../services/projectService.js";
import { useAutoSave } from "../hooks/useAutoSave.js";
import { EditorLayout } from "../components/editor/EditorLayout.jsx";
import { SaveProjectModal } from "../components/editor/modals/SaveProjectModal.jsx";
import { UnsavedChangesModal } from "../components/editor/modals/UnsavedChangesModal.jsx";
import { Loader } from "../components/common/Loader.jsx";
import toast from "react-hot-toast";

const EditorContent = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const { canvas, operations, isModified, markSaved } =
    useContext(CanvasContext);

  const [projectName, setProjectName] = useState("Untitled Project");
  const [isLoading, setIsLoading] = useState(!!projectId);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showUnsavedModal, setShowUnsavedModal] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);

  const { isSaving, saveNow, setHasChanges } = useAutoSave(
    projectId,
    canvas,
    !!projectId,
  );

  useEffect(() => {
    if (!isModified) return;
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isModified]);

  useEffect(() => {
    if (!projectId) {
      setIsLoading(false);
      return;
    }

    const loadProject = async () => {
      try {
        const response = await getProjectById(projectId);
        const project = response.data?.project || response.data;

        if (project) {
          setProjectName(project.name || "Untitled Project");

          if (project.canvasData && operations.loadFromJSON) {
            const canvasData =
              typeof project.canvasData === "string"
                ? JSON.parse(project.canvasData)
                : project.canvasData;
            operations.loadFromJSON(canvasData);
          }
        }
      } catch {
        toast.error("Failed to load project");
        navigate("/dashboard");
      } finally {
        setIsLoading(false);
      }
    };

    if (canvas) {
      loadProject();
    }
  }, [projectId, canvas, operations, navigate]);

  useEffect(() => {
    if (isModified) {
      setHasChanges(true);
    }
  }, [isModified, setHasChanges]);

  const handleSave = useCallback(() => {
    if (projectId) {
      saveNow();
    } else {
      setShowSaveModal(true);
    }
  }, [projectId, saveNow]);

  const handleSaveSuccess = useCallback(
    (savedProject) => {
      markSaved();
      if (!projectId && savedProject?._id) {
        navigate(`/editor/${savedProject._id}`, { replace: true });
      }
    },
    [projectId, navigate, markSaved],
  );

  const handleUnsavedSave = useCallback(async () => {
    setShowUnsavedModal(false);
    if (projectId) {
      await saveNow();
    } else {
      setShowSaveModal(true);
      return;
    }
    pendingNavigation?.proceed?.();
  }, [projectId, saveNow, pendingNavigation]);

  const handleUnsavedDiscard = useCallback(() => {
    setShowUnsavedModal(false);
    pendingNavigation?.proceed?.();
  }, [pendingNavigation]);

  const handleUnsavedCancel = useCallback(() => {
    setShowUnsavedModal(false);
    pendingNavigation?.reset?.();
    setPendingNavigation(null);
  }, [pendingNavigation]);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-screen bg-neutral-100 dark:bg-neutral-950'>
        <div className='flex flex-col items-center gap-4'>
          <Loader size='lg' />
          <p className='text-neutral-500 dark:text-neutral-400'>
            Loading project...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <EditorLayout onSave={handleSave} isSaving={isSaving} />

      <SaveProjectModal
        isOpen={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        projectId={projectId}
        currentName={projectName}
        onSave={handleSaveSuccess}
      />

      <UnsavedChangesModal
        isOpen={showUnsavedModal}
        onSave={handleUnsavedSave}
        onDiscard={handleUnsavedDiscard}
        onCancel={handleUnsavedCancel}
      />
    </>
  );
};

export const EditorPage = () => {
  return (
    <CanvasProvider>
      <EditorContent />
    </CanvasProvider>
  );
};
