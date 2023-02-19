import type { HTMLAttributes, ElementType } from 'react';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;

  display?: 'flex' | 'inline-flex';
  flexDirection?: 'column-reverse' | 'column' | 'row-reverse' | 'row';
  justifyContent?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
}
