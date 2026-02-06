import { Button } from "../common/Button.jsx";
import { Tooltip } from "../common/Tooltip.jsx";
import { ZoomIn, ZoomOut, Grid, RotateCcw } from "lucide-react";
import clsx from "clsx";

export const CanvasControls = ({
  zoom = 1,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  showGrid = false,
  onToggleGrid,
}) => {
  const zoomPercent = Math.round(zoom * 100);

  return (
    <div className='canvas-controls-wrapper'>
      <Tooltip content='Zoom Out' position='top'>
        <Button
          variant='ghost'
          size='sm'
          onClick={onZoomOut}
          disabled={zoom <= 0.25}
          className='p-2'
        >
          <ZoomOut size={18} />
        </Button>
      </Tooltip>

      <span className='canvas-zoom-display'>{zoomPercent}%</span>

      <Tooltip content='Zoom In' position='top'>
        <Button
          variant='ghost'
          size='sm'
          onClick={onZoomIn}
          disabled={zoom >= 3}
          className='p-2'
        >
          <ZoomIn size={18} />
        </Button>
      </Tooltip>

      <div className='w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1' />

      <Tooltip content='Reset Zoom' position='top'>
        <Button
          variant='ghost'
          size='sm'
          onClick={onResetZoom}
          disabled={zoom === 1}
          className='p-2'
        >
          <RotateCcw size={18} />
        </Button>
      </Tooltip>

      <Tooltip content={showGrid ? "Hide Grid" : "Show Grid"} position='top'>
        <Button
          variant={showGrid ? "secondary" : "ghost"}
          size='sm'
          onClick={onToggleGrid}
          className={clsx("p-2", showGrid && "text-green-500")}
        >
          <Grid size={18} />
        </Button>
      </Tooltip>
    </div>
  );
};
