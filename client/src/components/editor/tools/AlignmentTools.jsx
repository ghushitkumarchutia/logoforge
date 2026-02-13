import { useContext, useCallback, useState } from "react";
import { CanvasContext } from "../../../contexts/CanvasContext.jsx";
import { Tooltip } from "../../common/Tooltip.jsx";
import {
  AlignHorizontalJustifyStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
} from "lucide-react";
import clsx from "clsx";

const horizontalOptions = [
  { id: "left", icon: AlignHorizontalJustifyStart, label: "Align Left" },
  { id: "center-h", icon: AlignHorizontalJustifyCenter, label: "Align Center" },
  { id: "right", icon: AlignHorizontalJustifyEnd, label: "Align Right" },
];

const verticalOptions = [
  { id: "top", icon: AlignVerticalJustifyStart, label: "Align Top" },
  { id: "center-v", icon: AlignVerticalJustifyCenter, label: "Align Middle" },
  { id: "bottom", icon: AlignVerticalJustifyEnd, label: "Align Bottom" },
];

export const AlignmentTools = () => {
  const { canvas, selectedObject } = useContext(CanvasContext);
  const [activeId, setActiveId] = useState(null);

  const alignObject = useCallback(
    (alignment) => {
      if (!canvas || !selectedObject) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const ow = selectedObject.getScaledWidth();
      const oh = selectedObject.getScaledHeight();
      const ox = selectedObject.originX || "left";
      const oy = selectedObject.originY || "top";

      const offsetX = ox === "center" ? ow / 2 : ox === "right" ? ow : 0;
      const offsetY = oy === "center" ? oh / 2 : oy === "bottom" ? oh : 0;

      switch (alignment) {
        case "left":
          selectedObject.set("left", offsetX);
          break;
        case "center-h":
          selectedObject.set("left", cw / 2 - ow / 2 + offsetX);
          break;
        case "right":
          selectedObject.set("left", cw - ow + offsetX);
          break;
        case "top":
          selectedObject.set("top", offsetY);
          break;
        case "center-v":
          selectedObject.set("top", ch / 2 - oh / 2 + offsetY);
          break;
        case "bottom":
          selectedObject.set("top", ch - oh + offsetY);
          break;
        default:
          break;
      }

      selectedObject.setCoords();
      canvas.requestRenderAll();
      canvas.fire("object:modified", { target: selectedObject });

      setActiveId(alignment);
      setTimeout(() => setActiveId(null), 400);
    },
    [canvas, selectedObject],
  );

  const isDisabled = !selectedObject;

  const renderButton = (option) => {
    const IconComponent = option.icon;
    const isActive = activeId === option.id;
    return (
      <Tooltip key={option.id} content={option.label} position='bottom'>
        <button
          onClick={() => alignObject(option.id)}
          disabled={isDisabled}
          className={clsx(
            "p-2 rounded-lg transition-all duration-200 flex items-center justify-center",
            isDisabled
              ? "text-neutral-300 dark:text-neutral-700 cursor-not-allowed"
              : isActive
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 scale-95"
                : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800",
          )}
        >
          <IconComponent size={18} />
        </button>
      </Tooltip>
    );
  };

  return (
    <div className='flex items-center gap-0.5'>
      <div className='flex items-center gap-0.5'>
        {horizontalOptions.map(renderButton)}
      </div>
      <div className='w-px h-5 bg-neutral-200 dark:bg-neutral-700 mx-1' />
      <div className='flex items-center gap-0.5'>
        {verticalOptions.map(renderButton)}
      </div>
    </div>
  );
};
