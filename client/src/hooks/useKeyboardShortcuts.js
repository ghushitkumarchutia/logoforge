import { useEffect, useCallback } from "react";

export const useKeyboardShortcuts = (handlers) => {
  const handleKeyDown = useCallback(
    (event) => {
      const target = event.target;
      const tagName = target.tagName.toLowerCase();

      if (
        tagName === "input" ||
        tagName === "textarea" ||
        target.isContentEditable
      ) {
        return;
      }

      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const modifier = isMac ? event.metaKey : event.ctrlKey;

      if (modifier && event.key === "z" && !event.shiftKey) {
        event.preventDefault();
        handlers.onUndo?.();
        return;
      }

      if (
        modifier &&
        (event.key === "y" || (event.key === "z" && event.shiftKey))
      ) {
        event.preventDefault();
        handlers.onRedo?.();
        return;
      }

      if (modifier && event.key === "c") {
        event.preventDefault();
        handlers.onCopy?.();
        return;
      }

      if (modifier && event.key === "v") {
        event.preventDefault();
        handlers.onPaste?.();
        return;
      }

      if (modifier && event.key === "x") {
        event.preventDefault();
        handlers.onCut?.();
        return;
      }

      if (modifier && event.key === "d") {
        event.preventDefault();
        handlers.onDuplicate?.();
        return;
      }

      if (modifier && event.key === "s") {
        event.preventDefault();
        handlers.onSave?.();
        return;
      }

      if (event.key === "Delete" || event.key === "Backspace") {
        event.preventDefault();
        handlers.onDelete?.();
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        handlers.onDeselect?.();
        return;
      }
    },
    [handlers],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};
