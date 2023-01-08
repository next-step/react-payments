import type { ReactNode, RefObject } from 'react';

export type ModalProps = {
  modalRef: RefObject<HTMLElement | null>;
  open?: boolean;
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
  children: ReactNode;
};
