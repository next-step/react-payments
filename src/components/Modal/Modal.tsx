import React from 'react';

export type TModalProps = {
  children?: React.ReactNode;
  onDimmedClick?: () => void;
  onBlur?: (event: React.FocusEvent) => void;
};

function Modal({ children, onDimmedClick, onBlur }: TModalProps) {
  return (
    <div className="modal-wrap" onBlur={onBlur}>
      <div className="modal-dimmed" onClick={() => onDimmedClick?.()}></div>
      <div className="modal">{children}</div>
    </div>
  );
}

export default Modal;
