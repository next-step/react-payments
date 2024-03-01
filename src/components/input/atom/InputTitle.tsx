import { ContainerProps } from '@/types';
import { INPUT } from '../input.constant';

export const InputTitle = ({ children }: ContainerProps) => {
  return <span className={`${INPUT.CLASSNAME.TITLE}`}>{children}</span>;
};
