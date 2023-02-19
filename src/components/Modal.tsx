import { memo, ReactNode } from 'react';

export interface Props {
  open: boolean;
  children: ReactNode;
}

function Modal({ children, open }: Props) {
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