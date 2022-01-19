import { InputHTMLAttributes, Ref } from 'react';

export type variant = 'underline' | 'basic';

export interface InputProps
  extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  variant?: variant;
  ref?: Ref<HTMLInputElement>;
}
