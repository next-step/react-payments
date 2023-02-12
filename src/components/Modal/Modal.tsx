import './modal.css';
//
import { useCallback, useEffect, useRef } from 'react';
//
import { useClickAway } from '@/hooks';
import Portal from '../Portal';
//
import type { ModalProps } from './Modal.types';

const Modal = ({ open, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleModalClose = useCallback(
    (event: KeyboardEvent | MouseEvent) => {
      event.preventDefault();
      onClose && onClose(event);
    },
    [onClose],
  );

  useClickAway<KeyboardEvent | MouseEvent>(modalRef, handleModalClose);

  useEffect(() => {
    const closeOnEscapeKey = (event: KeyboardEvent) =>
      event.key === 'Escape' && handleModalClose(event);

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
  }, [handleModalClose]);

  return (
    <Portal.Consumer>
      {open && (
        <>
          <div className="modal-dimmed" />
          <div className="modal" data-testid="select-modal" ref={modalRef}>
            {children}
          </div>
        </>
      )}
    </Portal.Consumer>
  );
};

export default Modal;
