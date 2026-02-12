import { useState, useCallback } from "react";
import { LayerItem } from "./LayerItem.jsx";

export const LayerList = ({
  layers,
  selectedId,
  onReorder,
  onSelect,
  onToggleVisibility,
  onToggleLock,
}) => {
  const [dragState, setDragState] = useState({
    draggingId: null,
    dropTargetId: null,
    dropPosition: null,
  });

  const handleDragStart = useCallback((id) => {
    setDragState((prev) => ({
      ...prev,
      draggingId: id,
    }));
  }, []);

  const handleDragEnd = useCallback(() => {
    setDragState({
      draggingId: null,
      dropTargetId: null,
      dropPosition: null,
    });
  }, []);

  const handleDragOver = useCallback((targetId, position) => {
    setDragState((prev) => {
      if (prev.dropTargetId === targetId && prev.dropPosition === position) {
        return prev;
      }
      return {
        ...prev,
        dropTargetId: targetId,
        dropPosition: position,
      };
    });
  }, []);

  const handleDrop = useCallback(
    (draggedId, targetId, position) => {
      if (!draggedId || !targetId || draggedId === targetId) {
        handleDragEnd();
        return;
      }

      const currentIndex = layers.findIndex((l) => l.id === draggedId);
      let targetIndex = layers.findIndex((l) => l.id === targetId);

      if (currentIndex === -1 || targetIndex === -1) {
        handleDragEnd();
        return;
      }

      if (position === "below") {
        targetIndex += 1;
      }

      if (currentIndex < targetIndex) {
        targetIndex -= 1;
      }

      if (currentIndex !== targetIndex) {
        const newLayers = [...layers];
        const [removed] = newLayers.splice(currentIndex, 1);
        newLayers.splice(targetIndex, 0, removed);
        onReorder?.(newLayers);
      }

      handleDragEnd();
    },
    [layers, onReorder, handleDragEnd],
  );

  const handleDragLeave = useCallback(() => {
    setDragState((prev) => ({
      ...prev,
      dropTargetId: null,
      dropPosition: null,
    }));
  }, []);

  if (!layers || layers.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-12 text-neutral-400 dark:text-neutral-500'>
        <p className='text-sm'>No layers yet</p>
        <p className='text-xs mt-1'>Add shapes or text to get started</p>
      </div>
    );
  }

  return (
    <div className='layer-list' onDragLeave={handleDragLeave}>
      {layers.map((layer) => (
        <LayerItem
          key={layer.id}
          layer={layer}
          isSelected={selectedId === layer.id}
          onSelect={onSelect}
          onToggleVisibility={onToggleVisibility}
          onToggleLock={onToggleLock}
          isDragging={dragState.draggingId === layer.id}
          isDropTarget={
            dragState.dropTargetId === layer.id &&
            dragState.draggingId !== layer.id
          }
          dropPosition={
            dragState.dropTargetId === layer.id &&
            dragState.draggingId !== layer.id
              ? dragState.dropPosition
              : null
          }
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
};
