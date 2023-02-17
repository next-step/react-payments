import { ReactNode } from 'react';

interface Props {
  open: boolean;
  children: ReactNode;
}

export default function Model({ children, open }: Props) {
  if (!open) return;

  return (
    <div className="modal-dimmed">
      <div className="modal">
        {children}
      </div>
    </div>
  );
}