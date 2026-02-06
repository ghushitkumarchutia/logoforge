import { useContext, useCallback } from "react";
import { CanvasContext } from "../../../contexts/CanvasContext.jsx";
import { Button } from "../../common/Button.jsx";
import { Tooltip } from "../../common/Tooltip.jsx";
import { Type } from "lucide-react";

export const TextTool = () => {
  const { operations } = useContext(CanvasContext);

  const handleAddText = useCallback(() => {
    if (!operations?.addText) return;
    operations.addText();
  }, [operations]);

  return (
    <Tooltip content='Add Text' position='bottom'>
      <Button variant='ghost' size='sm' onClick={handleAddText} className='p-2'>
        <Type size={18} />
      </Button>
    </Tooltip>
  );
};
