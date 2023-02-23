import { memo, ReactNode } from 'react';

export interface IModal {
  open: boolean;
  children: ReactNode;
}

function Modal({ children, open }: IModal) {
  if (!open) return null;

  return (
    <div className="modal-dimmed">
      <div className="modal">
        {children}
      </div>
    </div>
  );
}

export default memo(Modal);