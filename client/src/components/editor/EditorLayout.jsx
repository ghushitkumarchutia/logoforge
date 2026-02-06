import { useState, useCallback } from "react";
import { Toolbar } from "./Toolbar.jsx";
import { CanvasArea } from "./CanvasArea.jsx";
import { LayerPanel } from "./layers/LayerPanel.jsx";
import { PropertiesPanel } from "./properties/PropertiesPanel.jsx";

export const EditorLayout = ({ onSave, isSaving = false }) => {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  const handleLeftToggle = useCallback(() => {
    setLeftCollapsed((prev) => !prev);
  }, []);

  const handleRightToggle = useCallback(() => {
    setRightCollapsed((prev) => !prev);
  }, []);

  return (
    <div className='flex flex-col h-screen bg-gray-100 dark:bg-gray-900'>
      <Toolbar onSave={onSave} isSaving={isSaving} />

      <div className='flex flex-1 overflow-hidden'>
        <LayerPanel collapsed={leftCollapsed} onToggle={handleLeftToggle} />

        <main className='flex-1 overflow-hidden'>
          <CanvasArea />
        </main>

        <PropertiesPanel
          collapsed={rightCollapsed}
          onToggle={handleRightToggle}
        />
      </div>
    </div>
  );
};
