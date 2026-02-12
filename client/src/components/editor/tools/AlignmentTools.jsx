import { useContext, useCallback } from "react";
import { CanvasContext } from "../../../contexts/CanvasContext.jsx";
import { Button } from "../../common/Button.jsx";
import { Tooltip } from "../../common/Tooltip.jsx";
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignStartVertical,
  AlignCenterVertical,
  AlignEndVertical,
} from "lucide-react";

const alignmentOptions = [
  { id: "left", icon: AlignLeft, label: "Align Left" },
  { id: "center-h", icon: AlignCenter, label: "Align Center" },
  { id: "right", icon: AlignRight, label: "Align Right" },
  { id: "top", icon: AlignStartVertical, label: "Align Top" },
  { id: "center-v", icon: AlignCenterVertical, label: "Align Middle" },
  { id: "bottom", icon: AlignEndVertical, label: "Align Bottom" },
];

export const AlignmentTools = () => {
  const { canvas, selectedObject } = useContext(CanvasContext);

  const alignObject = useCallback(
    (alignment) => {
      if (!canvas || !selectedObject) return;

      const canvasWidth = canvas.getWidth();
      const canvasHeight = canvas.getHeight();
      const objectWidth = selectedObject.getScaledWidth();
      const objectHeight = selectedObject.getScaledHeight();

      switch (alignment) {
        case "left":
          selectedObject.set("left", 0);
          break;
        case "center-h":
          selectedObject.set("left", (canvasWidth - objectWidth) / 2);
          break;
        case "right":
          selectedObject.set("left", canvasWidth - objectWidth);
          break;
        case "top":
          selectedObject.set("top", 0);
          break;
        case "center-v":
          selectedObject.set("top", (canvasHeight - objectHeight) / 2);
          break;
        case "bottom":
          selectedObject.set("top", canvasHeight - objectHeight);
          break;
        default:
          break;
      }

      selectedObject.setCoords();
      canvas.requestRenderAll();
      canvas.fire("object:modified", { target: selectedObject });
    },
    [canvas, selectedObject],
  );

  const isDisabled = !selectedObject;

  return (
    <div className='flex items-center gap-1'>
      {alignmentOptions.map((option) => {
        const IconComponent = option.icon;
        return (
          <Tooltip key={option.id} content={option.label} position='bottom'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => alignObject(option.id)}
              disabled={isDisabled}
              className='p-2'
            >
              <IconComponent size={18} />
            </Button>
          </Tooltip>
        );
      })}
    </div>
  );
};
