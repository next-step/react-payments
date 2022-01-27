import { FC } from 'react';
import { PageBottomEl } from './pageBottomStyle';

export const PageBottom: FC<{
  className?: string;
}> = ({ className = '', children }) => {
  return <PageBottomEl className={className}>{children}</PageBottomEl>;
};
