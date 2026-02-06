import {
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Square,
  Circle,
  Type,
  Image,
} from "lucide-react";
import clsx from "clsx";

const getLayerIcon = (type) => {
  const iconProps = { size: 16, className: "text-gray-500 dark:text-gray-400" };
  switch (type) {
    case "rect":
    case "rectangle":
      return <Square {...iconProps} />;
    case "circle":
    case "ellipse":
      return <Circle {...iconProps} />;
    case "text":
    case "i-text":
    case "textbox":
      return <Type {...iconProps} />;
    case "image":
      return <Image {...iconProps} />;
    default:
      return <Square {...iconProps} />;
  }
};

export const LayerItem = ({
  layer,
  isSelected,
  onSelect,
  onToggleVisibility,
  onToggleLock,
  isDragging,
  isDropTarget,
  dropPosition,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onSelect(layer.id);
  };

  const handleVisibilityClick = (e) => {
    e.stopPropagation();
    onToggleVisibility(layer.id);
  };

  const handleLockClick = (e) => {
    e.stopPropagation();
    onToggleLock(layer.id);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", layer.id);
    onDragStart?.(layer.id);
  };

  const handleDragEnd = () => {
    onDragEnd?.();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const rect = e.currentTarget.getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    const position = e.clientY < midY ? "above" : "below";
    onDragOver?.(layer.id, position);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData("text/plain");
    onDrop?.(draggedId, layer.id, dropPosition);
  };

  return (
    <div
      className={clsx(
        "layer-item relative",
        isSelected && "layer-item--selected",
        isDragging && "layer-item--dragging",
        isDropTarget && "layer-item--drop-target",
        dropPosition === "above" && "layer-item--drop-above",
        dropPosition === "below" && "layer-item--drop-below",
      )}
      onClick={handleClick}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className='layer-thumbnail'>{getLayerIcon(layer.type)}</div>

      <span className='layer-name'>
        {layer.name || `Layer ${layer.id.slice(-4)}`}
      </span>

      <div className='layer-actions'>
        <button
          className='layer-action-btn'
          onClick={handleVisibilityClick}
          aria-label={layer.visible ? "Hide layer" : "Show layer"}
        >
          {layer.visible ? <Eye size={14} /> : <EyeOff size={14} />}
        </button>

        <button
          className='layer-action-btn'
          onClick={handleLockClick}
          aria-label={layer.locked ? "Unlock layer" : "Lock layer"}
        >
          {layer.locked ? <Lock size={14} /> : <Unlock size={14} />}
        </button>
      </div>
    </div>
  );
};
