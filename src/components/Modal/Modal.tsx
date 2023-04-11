import React from 'react';

type TModalProps = { children?: React.ReactNode; onDimmedClick?: () => void };

function Modal({ children, onDimmedClick }: TModalProps) {
  return (
    <>
      <div className="modal-dimmed" onClick={() => onDimmedClick?.()}></div>
      <div className="modal">{children}</div>
    </>
  );
}

export default Modal;
