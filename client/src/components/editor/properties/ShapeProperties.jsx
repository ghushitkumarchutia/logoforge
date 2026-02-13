import { useCallback } from "react";
import { ColorPicker } from "./ColorPicker.jsx";

export const ShapeProperties = ({ object, onUpdate, version }) => {
  const fill = object?.fill || "#3b82f6";
  const stroke = object?.stroke || "#1e40af";
  const strokeWidth = object?.strokeWidth || 0;
  const rx = object?.rx || 0;

  const handleFillChange = useCallback(
    (color) => {
      onUpdate?.({ fill: color });
    },
    [onUpdate],
  );

  const handleStrokeChange = useCallback(
    (color) => {
      onUpdate?.({ stroke: color });
    },
    [onUpdate],
  );

  const handleStrokeWidthChange = useCallback(
    (e) => {
      const value = parseFloat(e.target.value) || 0;
      onUpdate?.({ strokeWidth: value });
    },
    [onUpdate],
  );

  const handleCornerRadiusChange = useCallback(
    (e) => {
      const value = parseFloat(e.target.value) || 0;
      onUpdate?.({ rx: value, ry: value });
    },
    [onUpdate],
  );

  const isRectangle = object?.type === "rect" || object?.type === "rectangle";

  return (
    <div className='properties-section'>
      <div className='properties-section-title'>Shape Properties</div>

      <div className='properties-row'>
        <span className='properties-label'>Fill Color</span>
        <ColorPicker color={fill} onChange={handleFillChange} />
      </div>

      <div className='properties-row'>
        <span className='properties-label'>Stroke Color</span>
        <ColorPicker color={stroke} onChange={handleStrokeChange} />
      </div>

      <div className='properties-row'>
        <span className='properties-label'>Stroke Width</span>
        <input
          type='number'
          min='0'
          max='50'
          value={strokeWidth}
          onChange={handleStrokeWidthChange}
          className='properties-input'
        />
      </div>

      {isRectangle && (
        <div className='properties-row'>
          <span className='properties-label'>Corner Radius</span>
          <input
            type='number'
            min='0'
            max='100'
            value={rx}
            onChange={handleCornerRadiusChange}
            className='properties-input'
          />
        </div>
      )}
    </div>
  );
};
