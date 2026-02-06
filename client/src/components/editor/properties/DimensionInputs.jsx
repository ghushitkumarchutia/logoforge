import { useMemo, useCallback } from "react";
import { Input } from "../../common/Input.jsx";

export const DimensionInputs = ({ object, onUpdate }) => {
  const dimensions = useMemo(() => {
    if (!object) {
      return { width: 0, height: 0, left: 0, top: 0, angle: 0 };
    }

    const scaledWidth = Math.round((object.width || 0) * (object.scaleX || 1));
    const scaledHeight = Math.round(
      (object.height || 0) * (object.scaleY || 1),
    );

    return {
      width: scaledWidth,
      height: scaledHeight,
      left: Math.round(object.left || 0),
      top: Math.round(object.top || 0),
      angle: Math.round(object.angle || 0),
    };
  }, [object]);

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
          value={dimensions.width}
          onChange={handleWidthChange}
          className='properties-input-wrapper'
        />

        <Input
          label='Height'
          name='height'
          type='number'
          value={dimensions.height}
          onChange={handleHeightChange}
          className='properties-input-wrapper'
        />

        <Input
          label='X Position'
          name='left'
          type='number'
          value={dimensions.left}
          onChange={handleLeftChange}
          className='properties-input-wrapper'
        />

        <Input
          label='Y Position'
          name='top'
          type='number'
          value={dimensions.top}
          onChange={handleTopChange}
          className='properties-input-wrapper'
        />
      </div>

      <div className='mt-3'>
        <Input
          label='Rotation'
          name='angle'
          type='number'
          value={dimensions.angle}
          onChange={handleAngleChange}
          className='properties-input-wrapper'
          helperText='Degrees (0-360)'
        />
      </div>
    </div>
  );
};
