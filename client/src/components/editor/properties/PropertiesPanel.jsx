import { useContext, useCallback, useMemo } from "react";
import { CanvasContext } from "../../../contexts/CanvasContext.jsx";
import { Sidebar } from "../../layout/Sidebar.jsx";
import { ShapeProperties } from "./ShapeProperties.jsx";
import { TextProperties } from "./TextProperties.jsx";
import { OpacitySlider } from "./OpacitySlider.jsx";
import { DimensionInputs } from "./DimensionInputs.jsx";
import { MousePointer } from "lucide-react";
import "../../../styles/properties.css";

const TEXT_TYPES = ["text", "i-text", "textbox"];
const SHAPE_TYPES = [
  "rect",
  "rectangle",
  "circle",
  "ellipse",
  "triangle",
  "polygon",
  "path",
];

export const PropertiesPanel = ({ collapsed, onToggle }) => {
  const { canvas, selectedObject } = useContext(CanvasContext);

  const objectType = useMemo(() => {
    if (!selectedObject) return null;
    return selectedObject.type?.toLowerCase() || null;
  }, [selectedObject]);

  const isTextObject = useMemo(() => {
    return objectType && TEXT_TYPES.includes(objectType);
  }, [objectType]);

  const isShapeObject = useMemo(() => {
    return objectType && SHAPE_TYPES.includes(objectType);
  }, [objectType]);

  const handleUpdate = useCallback(
    (updates) => {
      if (!selectedObject || !canvas) return;

      selectedObject.set(updates);
      selectedObject.setCoords();
      canvas.requestRenderAll();
      canvas.fire("object:modified", { target: selectedObject });
    },
    [selectedObject, canvas],
  );

  const handleOpacityChange = useCallback(
    (opacity) => {
      handleUpdate({ opacity });
    },
    [handleUpdate],
  );

  const renderContent = () => {
    if (!selectedObject) {
      return (
        <div className='properties-empty'>
          <MousePointer className='w-10 h-10 mb-3 opacity-50' />
          <p className='text-sm font-medium'>No object selected</p>
          <p className='text-xs mt-1 opacity-75'>
            Select an object on the canvas to edit its properties
          </p>
        </div>
      );
    }

    return (
      <>
        {isTextObject && (
          <TextProperties object={selectedObject} onUpdate={handleUpdate} />
        )}

        {isShapeObject && (
          <ShapeProperties object={selectedObject} onUpdate={handleUpdate} />
        )}

        <OpacitySlider
          value={selectedObject.opacity ?? 1}
          onChange={handleOpacityChange}
        />

        <DimensionInputs object={selectedObject} onUpdate={handleUpdate} />
      </>
    );
  };

  return (
    <Sidebar
      side='right'
      width='280px'
      collapsible
      collapsed={collapsed}
      onToggle={onToggle}
      title='Properties'
    >
      {renderContent()}
    </Sidebar>
  );
};
