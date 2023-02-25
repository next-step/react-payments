import type { HTMLAttributes, ElementType, CSSProperties } from 'react';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;

  display?: CSSProperties['display'];
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
}
