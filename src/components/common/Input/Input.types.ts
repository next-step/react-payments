import { ColorType } from 'types';

export type InputProps = {
  type: string;
  placeholder?: string;
  theme: 'underline' | 'primary';
  fontColor?: ColorType;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  active: boolean;
  error?: boolean;
};
export type RootProps = {
  theme: 'underline' | 'primary';
  active?: boolean;
  error?: boolean;
  fontColor?: ColorType;
};
