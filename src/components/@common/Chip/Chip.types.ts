import { HTMLAttributes } from 'react';
import type { ThemeKeys } from 'styles/theme';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  color?: ThemeKeys;
}
