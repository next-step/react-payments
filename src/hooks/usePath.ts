import { useEffect, useState } from 'react';

const usePath = () => {
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    const listenToPopstate = (event: PopStateEvent) => {
      console.log(event);
      setPath(location.pathname);
    };

    window.addEventListener('popstate', listenToPopstate);
    return () => window.removeEventListener('popstate', listenToPopstate);
  }, []);

  return path;
};

export default usePath;
