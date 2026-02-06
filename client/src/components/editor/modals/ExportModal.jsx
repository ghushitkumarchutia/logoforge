import { useState, useContext } from "react";
import { CanvasContext } from "../../../contexts/CanvasContext.jsx";
import { Modal } from "../../common/Modal.jsx";
import { Button } from "../../common/Button.jsx";
import { Input } from "../../common/Input.jsx";
import {
  exportToPNG,
  exportToSVG,
  exportToJSON,
} from "../../../utils/exportHelpers.js";
import {
  EXPORT_RESOLUTIONS,
  EXPORT_FORMATS,
} from "../../../utils/constants.js";
import toast from "react-hot-toast";
import { Download } from "lucide-react";

const formatOptions = EXPORT_FORMATS.map((format) => ({
  value: format,
  label: format.toUpperCase(),
}));

const resolutionOptions = Object.keys(EXPORT_RESOLUTIONS).map((key) => ({
  value: key,
  label: `${key} (${EXPORT_RESOLUTIONS[key] * 100}%)`,
}));

export const ExportModal = ({ isOpen, onClose, defaultFormat = "png" }) => {
  const { canvas } = useContext(CanvasContext);
  const [format, setFormat] = useState(defaultFormat);
  const [resolution, setResolution] = useState("1x");
  const [filename, setFilename] = useState("my-design");
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    if (!canvas) {
      toast.error("No canvas available");
      return;
    }

    if (!filename.trim()) {
      toast.error("Please enter a filename");
      return;
    }

    setIsExporting(true);

    try {
      const exportFilename = `${filename.trim()}.${format}`;

      switch (format) {
        case "png":
          exportToPNG(canvas, { filename: exportFilename, resolution });
          break;
        case "svg":
          exportToSVG(canvas, exportFilename);
          break;
        case "json":
          exportToJSON(canvas, exportFilename);
          break;
        default:
          throw new Error(`Unsupported format: ${format}`);
      }

      toast.success(`Exported as ${format.toUpperCase()} successfully!`);
      onClose();
    } catch (error) {
      toast.error(`Export failed: ${error.message}`);
    } finally {
      setIsExporting(false);
    }
  };

  const handleFilenameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9-_]/g, "");
    setFilename(value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='Export Design'
      size='md'
      footer={
        <>
          <Button variant='secondary' onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleExport}
            isLoading={isExporting}
            leftIcon={<Download size={16} />}
          >
            Export
          </Button>
        </>
      }
    >
      <div className='space-y-4'>
        <Input
          label='Filename'
          name='filename'
          value={filename}
          onChange={handleFilenameChange}
          placeholder='Enter filename'
          required
          helperText='Only letters, numbers, dashes, and underscores allowed'
        />

        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Format
          </label>
          <div className='flex gap-2'>
            {formatOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFormat(option.value)}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  format === option.value
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {format === "png" && (
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Resolution
            </label>
            <div className='flex gap-2'>
              {resolutionOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setResolution(option.value)}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    resolution === option.value
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className='p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            <span className='font-medium'>Output:</span>{" "}
            {filename || "my-design"}.{format}
            {format === "png" && ` @ ${resolution}`}
          </p>
        </div>
      </div>
    </Modal>
  );
};
