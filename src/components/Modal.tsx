import { memo, ReactNode } from 'react';
import { useModalContext } from '../provider/modal';

export interface IModal {
  children: ReactNode;
}

function Modal({ children }: IModal) {
  const { modalState } = useModalContext();
  if (!modalState) return;

  return (
    <div className="modal-dimmed">
      <div className="modal">
        {children}
      </div>
    </div>
  );
}

export default memo(Modal);