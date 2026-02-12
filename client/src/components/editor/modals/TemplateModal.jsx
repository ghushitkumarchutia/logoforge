import { useState, useEffect } from "react";
import { Modal } from "../../common/Modal.jsx";
import { Loader } from "../../common/Loader.jsx";
import { TemplateGrid } from "../../templates/TemplateGrid.jsx";
import { TemplateCategory } from "../../templates/TemplateCategory.jsx";
import {
  getAllTemplates,
  getTemplateById,
} from "../../../services/templateService.js";

export const TemplateModal = ({ isOpen, onClose, onSelectTemplate }) => {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    const fetchTemplates = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await getAllTemplates(activeCategory || undefined);

        if (response.success && response.data?.templates) {
          setTemplates(response.data.templates);
        } else {
          setTemplates([]);
        }
      } catch {
        setError("Failed to load templates");
        setTemplates([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTemplates();
  }, [isOpen, activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleTemplateSelect = async (template) => {
    setIsSelecting(true);

    try {
      const templateId = template._id || template.id;
      const response = await getTemplateById(templateId);

      if (response.success && response.data?.template) {
        onSelectTemplate?.(response.data.template);
        onClose();
      } else {
        throw new Error("Failed to load template data");
      }
    } catch (err) {
      setError(err.message || "Failed to select template");
    } finally {
      setIsSelecting(false);
    }
  };

  const handleClose = () => {
    setActiveCategory("");
    setError(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title='Choose a Template'
      size='xl'
      closeOnBackdrop={!isSelecting}
    >
      <div className='space-y-4'>
        <TemplateCategory
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {error && (
          <div className='p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm'>
            {error}
          </div>
        )}

        <div className='min-h-[350px] relative'>
          {isSelecting && (
            <div className='absolute inset-0 bg-white/50 dark:bg-neutral-900/50 flex items-center justify-center z-10 rounded-lg'>
              <div className='text-center'>
                <Loader size='lg' />
                <p className='mt-2 text-sm text-neutral-600 dark:text-neutral-400'>
                  Loading template...
                </p>
              </div>
            </div>
          )}

          <TemplateGrid
            templates={templates}
            isLoading={isLoading}
            onSelect={handleTemplateSelect}
          />
        </div>
      </div>
    </Modal>
  );
};
