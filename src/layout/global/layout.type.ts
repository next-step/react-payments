import { PropsWithChildren } from 'react';
import { LAYOUT } from './layout.constant';

export type LayoutType = (typeof LAYOUT.TYPE)[keyof typeof LAYOUT.TYPE];

export interface GlobalLayoutProps extends PropsWithChildren {
  type: LayoutType;
}
