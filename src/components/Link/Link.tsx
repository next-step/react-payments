import React, { useCallback, useContext } from 'react';
import routerContext from '../../context/routerContext';

type TLinkProps = {
  to: string;
  children: React.ReactNode;
};

function Link({ to, children }: TLinkProps) {
  const { changePath } = useContext(routerContext);

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      changePath(to);
    },
    [to]
  );

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default React.memo(Link);
