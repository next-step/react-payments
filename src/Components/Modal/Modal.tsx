import React, {
  useRef,
  useCallback,
  type MouseEvent,
  type PropsWithChildren,
  useEffect,
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
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (modalRef.current as HTMLDivElement)?.focus();
  });

  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }, []);

  return isOpen
    ? createPortal(
        <div className="modal-dimmed" onClick={handleClick}>
          <div className="modal" ref={modalRef} tabIndex={0}>
            {children}
          </div>
        </div>,
        containerRef.current as HTMLElement
      )
    : null;
}

export default Modal;
