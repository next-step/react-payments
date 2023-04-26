import React from 'react';

export type TModalProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  onBlur?: (event: React.FocusEvent) => void;
};

function Modal({ children, onClick, onBlur }: TModalProps) {
  return (
    <>
      <div className="modal-dimmed" onClick={() => onClick?.()} onBlur={onBlur}></div>
      <div className="modal">{children}</div>
    </>
  );
}

export default Modal;
