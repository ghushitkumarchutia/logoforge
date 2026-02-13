import { useCallback } from "react";
import { Input } from "../../common/Input.jsx";

export const DimensionInputs = ({ object, onUpdate, version }) => {
  const scaledWidth = Math.round((object?.width || 0) * (object?.scaleX || 1));
  const scaledHeight = Math.round(
    (object?.height || 0) * (object?.scaleY || 1),
  );
  const left = Math.round(object?.left || 0);
  const top = Math.round(object?.top || 0);
  const angle = Math.round(object?.angle || 0);

  const handleWidthChange = useCallback(
    (e) => {
      if (!object || !onUpdate) return;
      const value = parseFloat(e.target.value) || 0;
      const newScaleX = value / (object.width || 1);
      onUpdate({ scaleX: newScaleX });
    },
    [object, onUpdate],
  );

  const handleHeightChange = useCallback(
    (e) => {
      if (!object || !onUpdate) return;
      const value = parseFloat(e.target.value) || 0;
      const newScaleY = value / (object.height || 1);
      onUpdate({ scaleY: newScaleY });
    },
    [object, onUpdate],
  );

  const handleLeftChange = useCallback(
    (e) => {
      if (!onUpdate) return;
      const value = parseFloat(e.target.value) || 0;
      onUpdate({ left: value });
    },
    [onUpdate],
  );

  const handleTopChange = useCallback(
    (e) => {
      if (!onUpdate) return;
      const value = parseFloat(e.target.value) || 0;
      onUpdate({ top: value });
    },
    [onUpdate],
  );

  const handleAngleChange = useCallback(
    (e) => {
      if (!onUpdate) return;
      const value = parseFloat(e.target.value) || 0;
      onUpdate({ angle: value });
    },
    [onUpdate],
  );

  return (
    <div className='properties-section'>
      <div className='properties-section-title'>Dimensions</div>

      <div className='grid grid-cols-2 gap-3'>
        <Input
          label='Width'
          name='width'
          type='number'
          value={scaledWidth}
          onChange={handleWidthChange}
          className='properties-input-wrapper'
        />

        <Input
          label='Height'
          name='height'
          type='number'
          value={scaledHeight}
          onChange={handleHeightChange}
          className='properties-input-wrapper'
        />

        <Input
          label='X Position'
          name='left'
          type='number'
          value={left}
          onChange={handleLeftChange}
          className='properties-input-wrapper'
        />

        <Input
          label='Y Position'
          name='top'
          type='number'
          value={top}
          onChange={handleTopChange}
          className='properties-input-wrapper'
        />
      </div>

      <div className='mt-3'>
        <Input
          label='Rotation'
          name='angle'
          type='number'
          value={angle}
          onChange={handleAngleChange}
          className='properties-input-wrapper'
          helperText='Degrees (0-360)'
        />
      </div>
    </div>
  );
};
