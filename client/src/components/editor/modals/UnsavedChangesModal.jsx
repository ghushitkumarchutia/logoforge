import { Modal } from "../../common/Modal.jsx";
import { Button } from "../../common/Button.jsx";
import { AlertTriangle } from "lucide-react";

export const UnsavedChangesModal = ({
  isOpen,
  onSave,
  onDiscard,
  onCancel,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      title='Unsaved Changes'
      size='sm'
      closeOnBackdrop={false}
      footer={
        <div className='flex gap-3 w-full'>
          <Button variant='secondary' onClick={onCancel} className='flex-1'>
            Cancel
          </Button>
          <Button variant='danger' onClick={onDiscard} className='flex-1'>
            Discard
          </Button>
          <Button onClick={onSave} className='flex-1'>
            Save
          </Button>
        </div>
      }
    >
      <div className='flex flex-col items-center text-center py-4'>
        <div className='w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-4'>
          <AlertTriangle className='w-6 h-6 text-yellow-600 dark:text-yellow-500' />
        </div>

        <p className='text-gray-600 dark:text-gray-300 mb-2'>
          You have unsaved changes that will be lost if you leave this page.
        </p>

        <p className='text-sm text-gray-500 dark:text-gray-400'>
          Would you like to save your changes before continuing?
        </p>
      </div>
    </Modal>
  );
};
