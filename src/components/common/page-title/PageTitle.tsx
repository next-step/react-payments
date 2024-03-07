import { PropsWithChildren } from 'react';

const PageTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="page-title">{children}</h2>;
};

export default PageTitle;
