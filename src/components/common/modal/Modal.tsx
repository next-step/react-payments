import { PropsWithChildren } from 'react';

interface ModalProps extends PropsWithChildren {
  onToggle: () => void;
  isOpen: boolean;
}
const Modal = ({ onToggle, isOpen, children }: ModalProps) => {
  return isOpen ? (
    <div className="modal-dimmed" onClick={onToggle}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
