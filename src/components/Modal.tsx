import { memo, PropsWithChildren } from 'react';
import { useModalContext } from '../provider/modal';

function Modal({ children }: PropsWithChildren) {
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