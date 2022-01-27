import { FC } from 'react';
import { PageContainerEl } from './pageContainerStyle';

const PageContainer: FC<{
  className?: string;
}> = ({ className = '', children }) => {
  return <PageContainerEl className={className}>{children}</PageContainerEl>;
};

export default PageContainer;
