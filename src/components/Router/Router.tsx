import React, { useEffect, useState } from 'react';
import routerContext from '../../context/routerContext';

type TRouterProps = {
  children: JSX.Element;
};

function Router({ children }: TRouterProps) {
  const [path, setPath] = useState(window.location.pathname);

  const changePath = (to: string) => {
    setPath(to);
    window.history.pushState({ path }, '', to);
  };

  const contextValue = {
    path,
    changePath,
  };

  useEffect(() => {
    const handleOnPopState = (event: PopStateEvent) => {
      changePath(event.state?.path || '/');
    };

    window.addEventListener('popstate', handleOnPopState);

    return () => {
      window.removeEventListener('popstate', handleOnPopState);
    };
  }, []);

  return <routerContext.Provider value={contextValue}>{children}</routerContext.Provider>;
}

export default Router;
