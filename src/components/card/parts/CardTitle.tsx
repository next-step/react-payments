import { PropsWithChildren } from 'react';

const CardTitle = ({ children }: PropsWithChildren) => {
  return <div className="card-top">{children}</div>;
};

export default CardTitle;
