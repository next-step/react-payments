import React, { useContext } from 'react';
import routerContext from '../../context/routerContext';

type TLinkProps = {
  to: string;
  children: React.ReactNode;
};

function Link({ to, children }: TLinkProps) {
  const { changePath } = useContext(routerContext);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    changePath(to);
  };
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
