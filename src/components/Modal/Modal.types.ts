import type { KeyboardEvent, MouseEvent, ReactNode } from 'react';

export type ModalProps = {
  open?: boolean;
  onClose?: <T extends HTMLElement>(event: KeyboardEvent<T> | MouseEvent<T>) => void;
  children: ReactNode;
};
