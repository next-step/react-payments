import React, {
  useRef,
  useCallback,
  type MouseEvent,
  type PropsWithChildren,
} from 'react';
import { createPortal } from 'react-dom';

import './modal.css';

interface Props {
  containerRef?: React.RefObject<HTMLElement | null>;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({
  containerRef = useRef(document.body),
  children,
  isOpen,
  onClose,
}: PropsWithChildren<Props>) {
  if (!containerRef.current) return null;

  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }, []);

  return isOpen
    ? createPortal(
        <div className="modal-dimmed" onClick={handleClick}>
          <div className="modal">{children}</div>
        </div>,
        containerRef.current
      )
    : null;
}

export default Modal;
