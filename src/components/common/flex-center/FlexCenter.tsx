import { PropsWithChildren } from 'react';

const FlexCenter = ({ children }: PropsWithChildren) => {
  return <div className="d-flex direction-column align-items">{children}</div>;
};

export default FlexCenter;
