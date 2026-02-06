import { useState, useContext, useEffect } from "react";
import { CanvasContext } from "../../../contexts/CanvasContext.jsx";
import { Modal } from "../../common/Modal.jsx";
import { Button } from "../../common/Button.jsx";
import { Input } from "../../common/Input.jsx";
import {
  createProject,
  updateProject,
} from "../../../services/projectService.js";
import { generateThumbnail } from "../../../utils/canvasHelpers.js";
import { validateProjectName } from "../../../utils/validators.js";
import toast from "react-hot-toast";
import { Save } from "lucide-react";

export const SaveProjectModal = ({
  isOpen,
  onClose,
  projectId,
  currentName = "",
  onSave,
}) => {
  const { canvas, operations, markSaved } = useContext(CanvasContext);
  const [projectName, setProjectName] = useState(currentName);
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setProjectName(currentName);
      setError("");
    }
  }, [isOpen, currentName]);

  const handleNameChange = (e) => {
    setProjectName(e.target.value);
    setError("");
  };

  const handleSave = async () => {
    const validation = validateProjectName(projectName);
    if (!validation.isValid) {
      setError(validation.message);
      return;
    }

    if (!canvas) {
      toast.error("No canvas available");
      return;
    }

    setIsSaving(true);

    try {
      const thumbnail = generateThumbnail(canvas, 200);
      const canvasData = operations.getCanvasJSON();

      const projectData = {
        name: projectName.trim(),
        canvasData: JSON.stringify(canvasData),
        thumbnail,
      };

      let response;

      if (projectId) {
        response = await updateProject(projectId, projectData);
      } else {
        response = await createProject(projectData);
      }

      if (response.success) {
        markSaved?.();
        toast.success(
          projectId
            ? "Project updated successfully!"
            : "Project saved successfully!",
        );
        onSave?.(response.data?.project || response.data);
        onClose();
      } else {
        throw new Error(response.message || "Failed to save project");
      }
    } catch (err) {
      toast.error(err.message || "Failed to save project");
    } finally {
      setIsSaving(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isSaving) {
      handleSave();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={projectId ? "Rename Project" : "Save Project"}
      size='sm'
      footer={
        <>
          <Button variant='secondary' onClick={onClose} disabled={isSaving}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            isLoading={isSaving}
            leftIcon={<Save size={16} />}
          >
            {projectId ? "Update" : "Save"}
          </Button>
        </>
      }
    >
      <div className='space-y-4'>
        <Input
          label='Project Name'
          name='projectName'
          value={projectName}
          onChange={handleNameChange}
          onKeyDown={handleKeyDown}
          placeholder='Enter project name'
          error={error}
          required
          autoFocus
        />

        <p className='text-sm text-gray-500 dark:text-gray-400'>
          {projectId
            ? "Update the name for your existing project."
            : "Give your project a name to save it to your dashboard."}
        </p>
      </div>
    </Modal>
  );
};
