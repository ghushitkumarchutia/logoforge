import { useContext, useCallback } from "react";
import { CanvasContext } from "../../../contexts/CanvasContext.jsx";
import { Dropdown } from "../../common/Dropdown.jsx";
import { Button } from "../../common/Button.jsx";
import { Download, FileImage, FileCode, FileJson } from "lucide-react";

export const ExportTools = () => {
  const { canvas, operations } = useContext(CanvasContext);

  const handleExportPNG = useCallback(() => {
    if (!canvas) return;

    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1,
      multiplier: 2,
    });

    const link = document.createElement("a");
    link.download = `logo-${Date.now()}.png`;
    link.href = dataURL;
    link.click();
  }, [canvas]);

  const handleExportSVG = useCallback(() => {
    if (!canvas) return;

    const svg = canvas.toSVG();
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.download = `logo-${Date.now()}.svg`;
    link.href = url;
    link.click();

    URL.revokeObjectURL(url);
  }, [canvas]);

  const handleExportJSON = useCallback(() => {
    if (!canvas || !operations?.getCanvasJSON) return;

    const json = operations.getCanvasJSON();
    const blob = new Blob([JSON.stringify(json, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.download = `logo-${Date.now()}.json`;
    link.href = url;
    link.click();

    URL.revokeObjectURL(url);
  }, [canvas, operations]);

  const exportItems = [
    {
      label: "Export as PNG",
      icon: <FileImage size={16} />,
      onClick: handleExportPNG,
    },
    {
      label: "Export as SVG",
      icon: <FileCode size={16} />,
      onClick: handleExportSVG,
    },
    {
      label: "Export as JSON",
      icon: <FileJson size={16} />,
      onClick: handleExportJSON,
    },
  ];

  return (
    <Dropdown
      trigger={
        <Button variant='ghost' size='sm' leftIcon={<Download size={18} />}>
          Export
        </Button>
      }
      items={exportItems}
      align='left'
    />
  );
};
