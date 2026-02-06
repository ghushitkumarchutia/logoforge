import { useContext } from "react";
import { CanvasContext } from "../../../contexts/CanvasContext.jsx";
import { Button } from "../../common/Button.jsx";
import { Tooltip } from "../../common/Tooltip.jsx";
import { Undo2, Redo2 } from "lucide-react";

export const HistoryTools = () => {
  const { canUndo, canRedo, operations } = useContext(CanvasContext);

  const handleUndo = () => {
    operations?.undo?.();
  };

  const handleRedo = () => {
    operations?.redo?.();
  };

  return (
    <div className='flex items-center gap-1'>
      <Tooltip content='Undo (Ctrl+Z)' position='bottom'>
        <Button
          variant='ghost'
          size='sm'
          onClick={handleUndo}
          disabled={!canUndo}
          className='p-2'
        >
          <Undo2 size={18} />
        </Button>
      </Tooltip>

      <Tooltip content='Redo (Ctrl+Shift+Z)' position='bottom'>
        <Button
          variant='ghost'
          size='sm'
          onClick={handleRedo}
          disabled={!canRedo}
          className='p-2'
        >
          <Redo2 size={18} />
        </Button>
      </Tooltip>
    </div>
  );
};
