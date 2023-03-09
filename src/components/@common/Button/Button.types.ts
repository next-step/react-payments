import { ButtonHTMLAttributes } from 'react';
import type { ThemeKeys } from 'styles/theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ThemeKeys;
}
