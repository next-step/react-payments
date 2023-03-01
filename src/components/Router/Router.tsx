import React, { useCallback, useEffect, useState } from 'react';
import routerContext from '../../context/routerContext';

type TRouterProps = {
  children: JSX.Element;
};

function Router({ children }: TRouterProps) {
  const [path, setPath] = useState(window.location.pathname);

  const changePath = useCallback(
    (to: string) => {
      setPath(to);
      window.history.pushState({ path }, '', to);
    },
    [path]
  );

  const handleOnPopState = useCallback(
    (event: PopStateEvent) => {
      changePath(event.state?.path || '/');
    },
    [path]
  );

  useEffect(() => {
    window.addEventListener('popstate', handleOnPopState);

    return () => {
      window.removeEventListener('popstate', handleOnPopState);
    };
  }, []);

  const contextValue = {
    path,
    changePath,
  };

  return <routerContext.Provider value={contextValue}>{children}</routerContext.Provider>;
}

export default Router;
