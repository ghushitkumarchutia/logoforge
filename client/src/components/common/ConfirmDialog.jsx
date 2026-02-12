import { Modal } from "./Modal";
import { Button } from "./Button";

export const ConfirmDialog = ({
  isOpen,
  onConfirm,
  onCancel,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "danger",
  isLoading = false,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      title={title}
      size='sm'
      footer={
        <>
          <Button variant='secondary' onClick={onCancel} disabled={isLoading}>
            {cancelText}
          </Button>
          <Button variant={variant} onClick={onConfirm} isLoading={isLoading}>
            {confirmText}
          </Button>
        </>
      }
    >
      <p className='text-neutral-600 dark:text-neutral-300'>{message}</p>
    </Modal>
  );
};
