import { ElementType } from 'react';

export type AsProps<T extends ElementType = ElementType> = {
  as?: T;
};
