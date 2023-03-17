import { FontSizeType } from 'types';
import { ButtonHTMLAttributes } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: FontSizeType;
  label?: string;
}
