import { useState, useRef, useEffect } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import {
  getItem,
  setItem,
  STORAGE_KEYS,
} from "../../../utils/storageHelpers.js";
import "../../../styles/colorpicker.css";

const MAX_RECENT_COLORS = 8;

const DEFAULT_COLORS = [
  "#000000",
  "#ffffff",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
];

export const ColorPicker = ({ color = "#000000", onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [recentColors, setRecentColors] = useState(() => {
    const savedColors = getItem(STORAGE_KEYS.RECENT_COLORS);
    return Array.isArray(savedColors) && savedColors.length > 0
      ? savedColors
      : [];
  });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleColorChange = (newColor) => {
    onChange?.(newColor);
  };

  const handleColorComplete = (newColor) => {
    const upperColor = newColor.toUpperCase();
    const filtered = recentColors.filter((c) => c.toUpperCase() !== upperColor);
    const updated = [upperColor, ...filtered].slice(0, MAX_RECENT_COLORS);
    setRecentColors(updated);
    setItem(STORAGE_KEYS.RECENT_COLORS, updated);
  };

  const handlePresetClick = (presetColor) => {
    handleColorChange(presetColor);
    handleColorComplete(presetColor);
  };

  const togglePicker = () => {
    if (isOpen && color) {
      handleColorComplete(color);
    }
    setIsOpen(!isOpen);
  };

  const displayColors = recentColors.length > 0 ? recentColors : DEFAULT_COLORS;

  return (
    <div className='relative' ref={containerRef}>
      {label && (
        <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2'>
          {label}
        </label>
      )}

      <button
        onClick={togglePicker}
        className='properties-color-swatch'
        style={{ backgroundColor: color }}
        aria-label={`Select color: ${color}`}
      />

      {isOpen && (
        <div className='absolute z-50 mt-2 color-picker-container'>
          <HexColorPicker color={color} onChange={handleColorChange} />

          <div className='color-input-group'>
            <span className='text-sm text-neutral-500 dark:text-neutral-400'>
              #
            </span>
            <HexColorInput
              color={color}
              onChange={handleColorChange}
              className='color-input-hex'
              prefixed={false}
            />
          </div>

          <div className='color-picker-presets'>
            {displayColors.map((presetColor, index) => (
              <button
                key={`${presetColor}-${index}`}
                onClick={() => handlePresetClick(presetColor)}
                className={`color-preset ${
                  color.toUpperCase() === presetColor.toUpperCase()
                    ? "color-preset--active"
                    : ""
                }`}
                style={{ backgroundColor: presetColor }}
                aria-label={`Select ${presetColor}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
