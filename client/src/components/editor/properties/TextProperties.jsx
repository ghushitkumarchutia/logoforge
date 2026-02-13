import { useCallback } from "react";
import { ColorPicker } from "./ColorPicker.jsx";
import { fontOptions } from "../../../data/fontOptions.js";
import { FONT_SIZES } from "../../../utils/constants.js";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import clsx from "clsx";

const alignOptions = [
  { value: "left", icon: AlignLeft },
  { value: "center", icon: AlignCenter },
  { value: "right", icon: AlignRight },
];

export const TextProperties = ({ object, onUpdate, version }) => {
  const fill = object?.fill || "#111827";
  const fontFamily = object?.fontFamily || "Arial";
  const fontSize = object?.fontSize || 24;
  const fontWeight = object?.fontWeight || "normal";
  const fontStyle = object?.fontStyle || "normal";
  const underline = object?.underline || false;
  const textAlign = object?.textAlign || "left";

  const handleColorChange = useCallback(
    (color) => {
      onUpdate?.({ fill: color });
    },
    [onUpdate],
  );

  const handleFontFamilyChange = useCallback(
    (e) => {
      onUpdate?.({ fontFamily: e.target.value });
    },
    [onUpdate],
  );

  const handleFontSizeChange = useCallback(
    (e) => {
      const value = parseInt(e.target.value, 10) || 24;
      onUpdate?.({ fontSize: value });
    },
    [onUpdate],
  );

  const toggleBold = useCallback(() => {
    if (!object) return;
    const current = object.fontWeight || "normal";
    onUpdate?.({ fontWeight: current === "bold" ? "normal" : "bold" });
  }, [object, onUpdate]);

  const toggleItalic = useCallback(() => {
    if (!object) return;
    const current = object.fontStyle || "normal";
    onUpdate?.({ fontStyle: current === "italic" ? "normal" : "italic" });
  }, [object, onUpdate]);

  const toggleUnderline = useCallback(() => {
    if (!object) return;
    const current = !!object.underline;
    onUpdate?.({ underline: !current });
  }, [object, onUpdate]);

  const handleAlignChange = useCallback(
    (align) => {
      onUpdate?.({ textAlign: align });
    },
    [onUpdate],
  );

  return (
    <div className='properties-section'>
      <div className='properties-section-title'>Text Properties</div>

      <div className='properties-row'>
        <span className='properties-label'>Color</span>
        <ColorPicker color={fill} onChange={handleColorChange} />
      </div>

      <div className='mb-3'>
        <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1'>
          Font Family
        </label>
        <select
          value={fontFamily}
          onChange={handleFontFamilyChange}
          className='w-full px-3 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500'
          style={{ fontFamily }}
        >
          {fontOptions.map((font) => (
            <option
              key={font.value}
              value={font.value}
              style={{ fontFamily: font.value }}
            >
              {font.label}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-3'>
        <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1'>
          Font Size
        </label>
        <select
          value={fontSize}
          onChange={handleFontSizeChange}
          className='w-full px-3 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500'
        >
          {FONT_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}px
            </option>
          ))}
        </select>
      </div>

      <div className='mb-3'>
        <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1'>
          Style
        </label>
        <div className='flex gap-2'>
          <button
            onClick={toggleBold}
            className={clsx(
              "flex-1 p-2 rounded-lg transition-colors flex items-center justify-center",
              fontWeight === "bold"
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700",
            )}
            aria-label='Toggle bold'
          >
            <Bold size={18} />
          </button>

          <button
            onClick={toggleItalic}
            className={clsx(
              "flex-1 p-2 rounded-lg transition-colors flex items-center justify-center",
              fontStyle === "italic"
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700",
            )}
            aria-label='Toggle italic'
          >
            <Italic size={18} />
          </button>

          <button
            onClick={toggleUnderline}
            className={clsx(
              "flex-1 p-2 rounded-lg transition-colors flex items-center justify-center",
              underline
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700",
            )}
            aria-label='Toggle underline'
          >
            <Underline size={18} />
          </button>
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1'>
          Alignment
        </label>
        <div className='flex gap-2'>
          {alignOptions.map((option) => {
            const AlignIcon = option.icon;
            return (
              <button
                key={option.value}
                onClick={() => handleAlignChange(option.value)}
                className={clsx(
                  "flex-1 p-2 rounded-lg transition-colors flex items-center justify-center",
                  textAlign === option.value
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700",
                )}
                aria-label={`Align ${option.value}`}
              >
                <AlignIcon size={18} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
