import { useContext } from "react";
import { CanvasContext } from "../../contexts/CanvasContext.jsx";
import { ShapeTools } from "./tools/ShapeTools.jsx";
import { TextTool } from "./tools/TextTool.jsx";
import { AlignmentTools } from "./tools/AlignmentTools.jsx";
import { HistoryTools } from "./tools/HistoryTools.jsx";
import { ExportTools } from "./tools/ExportTools.jsx";
import { ToolbarGroup } from "./ToolbarGroup.jsx";
import { Button } from "../common/Button.jsx";
import { Tooltip } from "../common/Tooltip.jsx";
import { Save } from "lucide-react";

export const Toolbar = ({ onSave, isSaving = false }) => {
  const { isModified } = useContext(CanvasContext);

  return (
    <div className='flex items-center justify-between h-14 px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700'>
      <div className='flex items-center'>
        <ToolbarGroup label='Shapes'>
          <ShapeTools />
        </ToolbarGroup>

        <ToolbarGroup label='Text'>
          <TextTool />
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
  );
};
