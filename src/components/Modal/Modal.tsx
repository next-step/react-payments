import './modal.css';
//
import { useCallback, useEffect } from 'react';
//
import { useClickAway } from '@/hooks';
import Portal from '../Portal';
//
import type { ModalProps } from './Modal.types';

const Modal = ({ modalRef, open, onClose, children }: ModalProps) => {
  const onModalClose = useCallback(
    (event: KeyboardEvent | MouseEvent) => onClose && onClose(event),
    [onClose],
  );

  useClickAway(modalRef, onModalClose);

  useEffect(() => {
    const closeOnEscapeKey = (event: KeyboardEvent) =>
      event.key === 'Escape' ? onModalClose(event) : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
  }, [onModalClose]);

  return <Portal.Consumer>{open && children}</Portal.Consumer>;
};

export default Modal;
