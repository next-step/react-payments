import { ContainerProps } from '@/types';
import { INPUT } from '../input.constant';

export const InputContainer = ({ children }: ContainerProps) => {
  return <div className={`${INPUT.CLASSNAME.CONTAINER}`}>{children}</div>;
};
