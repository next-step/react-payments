import { FC } from 'react';
import { PageTitleEl } from './pageTitleStyle';

const PageTitle: FC<{
  className?: string;
}> = ({ className = '', children }) => {
  return <PageTitleEl className={className}>{children}</PageTitleEl>;
};

export default PageTitle;
