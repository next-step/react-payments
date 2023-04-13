import { TModalProps } from '../Modal/Modal';

export type TVirtualNumPad = {
  onClick?: (newValue: string) => void;
} & TModalProps;
