import { useContext, useCallback, useState, useEffect } from "react";
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
  const [version, setVersion] = useState(0);

  useEffect(() => {
    if (!canvas) return;

    const bumpVersion = () => setVersion((v) => v + 1);

    canvas.on("object:modified", bumpVersion);
    canvas.on("selection:created", bumpVersion);
    canvas.on("selection:updated", bumpVersion);
    canvas.on("selection:cleared", bumpVersion);
    canvas.on("object:scaling", bumpVersion);
    canvas.on("object:moving", bumpVersion);
    canvas.on("object:rotating", bumpVersion);

    return () => {
      canvas.off("object:modified", bumpVersion);
      canvas.off("selection:created", bumpVersion);
      canvas.off("selection:updated", bumpVersion);
      canvas.off("selection:cleared", bumpVersion);
      canvas.off("object:scaling", bumpVersion);
      canvas.off("object:moving", bumpVersion);
      canvas.off("object:rotating", bumpVersion);
    };
  }, [canvas]);

  const objectType = selectedObject?.type?.toLowerCase() || null;
  const isTextObject = objectType && TEXT_TYPES.includes(objectType);
  const isShapeObject = objectType && SHAPE_TYPES.includes(objectType);

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
          <TextProperties
            object={selectedObject}
            onUpdate={handleUpdate}
            version={version}
          />
        )}

        {isShapeObject && (
          <ShapeProperties
            object={selectedObject}
            onUpdate={handleUpdate}
            version={version}
          />
        )}

        <OpacitySlider
          value={selectedObject.opacity ?? 1}
          onChange={handleOpacityChange}
          version={version}
        />

        <DimensionInputs
          object={selectedObject}
          onUpdate={handleUpdate}
          version={version}
        />
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
