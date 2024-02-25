import { ContainerProps } from '@/types';
import { LAYOUT } from './layout.constant';

export type LayoutType = (typeof LAYOUT.TYPE)[keyof typeof LAYOUT.TYPE];

export interface GlobalLayoutProps extends ContainerProps {
  type: LayoutType;
}
