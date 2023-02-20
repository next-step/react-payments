import { ButtonHTMLAttributes } from 'react';
import { theme } from 'styles/theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof theme.color;
}
