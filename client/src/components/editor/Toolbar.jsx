import { useState, useContext } from "react";
import { CanvasContext } from "../../contexts/CanvasContext.jsx";
import { ShapeTools } from "./tools/ShapeTools.jsx";
import { TextTool } from "./tools/TextTool.jsx";
import { ImageUpload } from "./tools/ImageUpload.jsx";
import { AlignmentTools } from "./tools/AlignmentTools.jsx";
import { HistoryTools } from "./tools/HistoryTools.jsx";
import { ExportTools } from "./tools/ExportTools.jsx";
import { ToolbarGroup } from "./ToolbarGroup.jsx";
import { KeyboardShortcutsModal } from "./modals/KeyboardShortcutsModal.jsx";
import { Button } from "../common/Button.jsx";
import { Tooltip } from "../common/Tooltip.jsx";
import { Save, Keyboard } from "lucide-react";

export const Toolbar = ({ onSave, isSaving = false }) => {
  const { isModified } = useContext(CanvasContext);
  const [showShortcuts, setShowShortcuts] = useState(false);

  return (
    <>
      <div className='flex items-center justify-between h-14 px-4 bg-white dark:bg-[#1a1a1a] border-b border-neutral-200 dark:border-neutral-800'>
        <div className='flex items-center'>
          <ToolbarGroup label='Shapes'>
            <ShapeTools />
          </ToolbarGroup>

          <ToolbarGroup label='Text'>
            <TextTool />
          </ToolbarGroup>

          <ToolbarGroup label='Image'>
            <ImageUpload />
          </ToolbarGroup>

          <ToolbarGroup label='Align'>
            <AlignmentTools />
          </ToolbarGroup>
        </div>

        <div className='flex items-center'>
          <ToolbarGroup>
            <HistoryTools />
          </ToolbarGroup>

          <ToolbarGroup>
            <ExportTools />
          </ToolbarGroup>

          <ToolbarGroup>
            <Tooltip content='Keyboard Shortcuts' position='bottom'>
              <button
                onClick={() => setShowShortcuts(true)}
                className='p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 rounded-lg transition-colors'
              >
                <Keyboard size={20} />
              </button>
            </Tooltip>
          </ToolbarGroup>

          <ToolbarGroup>
            <Tooltip content='Save Project (Ctrl+S)' position='bottom'>
              <Button
                variant='primary'
                size='sm'
                onClick={onSave}
                isLoading={isSaving}
                leftIcon={<Save size={16} />}
                disabled={!isModified}
              >
                Save
              </Button>
            </Tooltip>
          </ToolbarGroup>
        </div>
      </div>

      <KeyboardShortcutsModal
        isOpen={showShortcuts}
        onClose={() => setShowShortcuts(false)}
      />
    </>
  );
};
