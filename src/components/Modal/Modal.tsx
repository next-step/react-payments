import React from 'react';

export type TModalProps = {
  children?: React.ReactNode;
  onDimmedClick?: () => void;
  onBlur?: (event: React.FocusEvent) => void;
};

function Modal({ children, onDimmedClick, onBlur }: TModalProps) {
  return (
    <>
      <div className="modal-dimmed" onClick={() => onDimmedClick?.()} onBlur={onBlur}></div>
      <div className="modal">{children}</div>
    </>
  );
}

export default Modal;
