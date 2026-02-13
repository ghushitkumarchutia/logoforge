import { useContext, useCallback, useMemo, useState, useEffect } from "react";
import { CanvasContext } from "../../../contexts/CanvasContext.jsx";
import { Sidebar } from "../../layout/Sidebar.jsx";
import { LayerList } from "./LayerList.jsx";
import { Layers } from "lucide-react";
import "../../../styles/layers.css";

export const LayerPanel = ({ collapsed, onToggle }) => {
  const { canvas, objects, selectedObject } = useContext(CanvasContext);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    if (!canvas) return;

    const bump = () => setVersion((v) => v + 1);

    canvas.on("object:modified", bump);
    canvas.on("object:added", bump);
    canvas.on("object:removed", bump);

    return () => {
      canvas.off("object:modified", bump);
      canvas.off("object:added", bump);
      canvas.off("object:removed", bump);
    };
  }, [canvas]);

  const layers = useMemo(() => {
    if (!objects || objects.length === 0) return [];

    return objects.map((obj, index) => ({
      id: obj.id || obj.uuid || `layer-${index}`,
      name: obj.name || obj.text || `${obj.type || "Object"}`,
      type: obj.type,
      visible: obj.visible !== false,
      locked: obj.selectable === false || obj.evented === false,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objects, version]);

  const selectedId = useMemo(() => {
    if (!selectedObject) return null;
    return selectedObject.id || selectedObject.uuid || null;
  }, [selectedObject]);

  const handleSelect = useCallback(
    (id) => {
      if (!canvas) return;

      const canvasObjects = canvas.getObjects();
      const target = canvasObjects.find(
        (obj) => obj.id === id || obj.uuid === id,
      );

      if (target) {
        canvas.discardActiveObject();
        canvas.setActiveObject(target);
        canvas.requestRenderAll();
      }
    },
    [canvas],
  );

  const handleToggleVisibility = useCallback(
    (id) => {
      if (!canvas) return;

      const canvasObjects = canvas.getObjects();
      const target = canvasObjects.find(
        (obj) => obj.id === id || obj.uuid === id,
      );

      if (target) {
        target.set("visible", !target.visible);
        canvas.requestRenderAll();
        canvas.fire("object:modified", { target });
      }
    },
    [canvas],
  );

  const handleToggleLock = useCallback(
    (id) => {
      if (!canvas) return;

      const canvasObjects = canvas.getObjects();
      const target = canvasObjects.find(
        (obj) => obj.id === id || obj.uuid === id,
      );

      if (target) {
        const isLocked = target.selectable === false;
        target.set({
          selectable: isLocked,
          evented: isLocked,
          hasControls: isLocked,
        });

        if (!isLocked && canvas.getActiveObject() === target) {
          canvas.discardActiveObject();
        }

        canvas.requestRenderAll();
        canvas.fire("object:modified", { target });
      }
    },
    [canvas],
  );

  const handleReorder = useCallback(
    (newLayers) => {
      if (!canvas) return;

      const canvasObjects = canvas.getObjects();
      const objectMap = new Map();

      canvasObjects.forEach((obj) => {
        const key = obj.id || obj.uuid;
        if (key) objectMap.set(key, obj);
      });

      newLayers.forEach((layer, index) => {
        const obj = objectMap.get(layer.id);
        if (obj) {
          canvas.moveTo(obj, index);
        }
      });

      canvas.requestRenderAll();
    },
    [canvas],
  );

  return (
    <Sidebar
      side='right'
      width='260px'
      collapsible
      collapsed={collapsed}
      onToggle={onToggle}
      title={
        <span className='flex items-center gap-2'>
          <Layers size={16} />
          <span>Layers</span>
        </span>
      }
    >
      <LayerList
        layers={layers}
        selectedId={selectedId}
        onReorder={handleReorder}
        onSelect={handleSelect}
        onToggleVisibility={handleToggleVisibility}
        onToggleLock={handleToggleLock}
      />
    </Sidebar>
  );
};
