import React, { PropsWithChildren } from 'react';

interface PageTitle {
  title: string;
}
const PageTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="page-title">{children}</h2>;
};

export default PageTitle;
