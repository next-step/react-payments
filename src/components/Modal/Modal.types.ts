import type { ReactNode } from 'react';

export type ModalProps = {
  open?: boolean;
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
  children: ReactNode;
};
