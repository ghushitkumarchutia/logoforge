import { Modal } from "../../common/Modal.jsx";

const shortcuts = [
  {
    category: "General",
    items: [
      { keys: ["Ctrl", "S"], description: "Save project" },
      { keys: ["Ctrl", "Z"], description: "Undo" },
      { keys: ["Ctrl", "Shift", "Z"], description: "Redo" },
      { keys: ["Delete"], description: "Delete selected" },
      { keys: ["Escape"], description: "Deselect all" },
    ],
  },
  {
    category: "Clipboard",
    items: [
      { keys: ["Ctrl", "C"], description: "Copy" },
      { keys: ["Ctrl", "V"], description: "Paste" },
      { keys: ["Ctrl", "D"], description: "Duplicate" },
    ],
  },
  {
    category: "Canvas",
    items: [
      { keys: ["Ctrl", "+"], description: "Zoom in" },
      { keys: ["Ctrl", "-"], description: "Zoom out" },
      { keys: ["Ctrl", "0"], description: "Reset zoom" },
      { keys: ["Ctrl", "G"], description: "Toggle grid" },
    ],
  },
  {
    category: "Objects",
    items: [
      { keys: ["Ctrl", "A"], description: "Select all" },
      { keys: ["↑ ↓ ← →"], description: "Move selected (1px)" },
      { keys: ["Shift", "↑ ↓ ← →"], description: "Move selected (10px)" },
    ],
  },
];

export const KeyboardShortcutsModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='Keyboard Shortcuts'
      size='lg'
    >
      <div className='space-y-6 max-h-[60vh] overflow-y-auto'>
        {shortcuts.map((group) => (
          <div key={group.category}>
            <h4 className='text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3'>
              {group.category}
            </h4>
            <div className='space-y-2'>
              {group.items.map((shortcut) => (
                <div
                  key={shortcut.description}
                  className='flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50'
                >
                  <span className='text-sm text-gray-700 dark:text-gray-300'>
                    {shortcut.description}
                  </span>
                  <div className='flex items-center gap-1'>
                    {shortcut.keys.map((key) => (
                      <kbd
                        key={key}
                        className='px-2 py-1 text-xs font-mono font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm'
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};
