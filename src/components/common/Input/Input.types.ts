import { ColorType } from 'types';
import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  theme: 'underline' | 'primary';
  fontColor?: ColorType;
  active?: boolean;
  error?: boolean;
}
export type RootProps = Partial<InputProps>;
