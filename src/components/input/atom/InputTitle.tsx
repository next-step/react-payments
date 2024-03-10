import { PropsWithChildren } from 'react';
import { INPUT } from '../input.constant';

export const InputTitle = ({ children }: PropsWithChildren) => {
  return <span className={`${INPUT.CLASSNAME.TITLE}`}>{children}</span>;
};
