import { useMemo, useCallback } from "react";
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

export const TextProperties = ({ object, onUpdate }) => {
  const properties = useMemo(() => {
    if (!object) {
      return {
        fill: "#111827",
        fontFamily: "Arial",
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        underline: false,
        textAlign: "left",
      };
    }

    return {
      fill: object.fill || "#111827",
      fontFamily: object.fontFamily || "Arial",
      fontSize: object.fontSize || 24,
      fontWeight: object.fontWeight || "normal",
      fontStyle: object.fontStyle || "normal",
      underline: object.underline || false,
      textAlign: object.textAlign || "left",
    };
  }, [object]);

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
    const newWeight = properties.fontWeight === "bold" ? "normal" : "bold";
    onUpdate?.({ fontWeight: newWeight });
  }, [properties.fontWeight, onUpdate]);

  const toggleItalic = useCallback(() => {
    const newStyle = properties.fontStyle === "italic" ? "normal" : "italic";
    onUpdate?.({ fontStyle: newStyle });
  }, [properties.fontStyle, onUpdate]);

  const toggleUnderline = useCallback(() => {
    onUpdate?.({ underline: !properties.underline });
  }, [properties.underline, onUpdate]);

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
        <ColorPicker color={properties.fill} onChange={handleColorChange} />
      </div>

      <div className='mb-3'>
        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
          Font Family
        </label>
        <select
          value={properties.fontFamily}
          onChange={handleFontFamilyChange}
          className='w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500'
          style={{ fontFamily: properties.fontFamily }}
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
        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
          Font Size
        </label>
        <select
          value={properties.fontSize}
          onChange={handleFontSizeChange}
          className='w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500'
        >
          {FONT_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}px
            </option>
          ))}
        </select>
      </div>

      <div className='mb-3'>
        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
          Style
        </label>
        <div className='flex gap-2'>
          <button
            onClick={toggleBold}
            className={clsx(
              "flex-1 p-2 rounded-lg transition-colors flex items-center justify-center",
              properties.fontWeight === "bold"
                ? "bg-green-500 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600",
            )}
            aria-label='Toggle bold'
          >
            <Bold size={18} />
          </button>

          <button
            onClick={toggleItalic}
            className={clsx(
              "flex-1 p-2 rounded-lg transition-colors flex items-center justify-center",
              properties.fontStyle === "italic"
                ? "bg-green-500 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600",
            )}
            aria-label='Toggle italic'
          >
            <Italic size={18} />
          </button>

          <button
            onClick={toggleUnderline}
            className={clsx(
              "flex-1 p-2 rounded-lg transition-colors flex items-center justify-center",
              properties.underline
                ? "bg-green-500 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600",
            )}
            aria-label='Toggle underline'
          >
            <Underline size={18} />
          </button>
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
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
                  properties.textAlign === option.value
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600",
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
