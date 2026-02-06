import { useContext, useCallback } from "react";
import { CanvasContext } from "../../../contexts/CanvasContext.jsx";
import { Button } from "../../common/Button.jsx";
import { Tooltip } from "../../common/Tooltip.jsx";
import { Square, Circle, Triangle, Minus } from "lucide-react";

const shapeOptions = [
  { id: "rect", icon: Square, label: "Rectangle" },
  { id: "circle", icon: Circle, label: "Circle" },
  { id: "triangle", icon: Triangle, label: "Triangle" },
  { id: "line", icon: Minus, label: "Line" },
];

export const ShapeTools = () => {
  const { operations } = useContext(CanvasContext);

  const handleAddShape = useCallback(
    (shapeType) => {
      if (!operations?.addShape) return;
      operations.addShape(shapeType);
    },
    [operations],
  );

  return (
    <div className='flex items-center gap-1'>
      {shapeOptions.map((shape) => {
        const IconComponent = shape.icon;
        return (
          <Tooltip key={shape.id} content={shape.label} position='bottom'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => handleAddShape(shape.id)}
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
