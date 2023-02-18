import { memo, ReactNode } from 'react';

interface Props {
  open: boolean;
  children: ReactNode;
}

function Model({ children, open }: Props) {
  if (!open) return;

  return (
    <div className="modal-dimmed">
      <div className="modal">
        {children}
      </div>
    </div>
  );
}

export default memo(Model);