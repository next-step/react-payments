import { useState, useEffect } from 'react';

export const useQueryParams = () => {
  const [params, setParams] = useState(new URLSearchParams(location.search));

  const setQueryParams = (newParams: { [key: string]: string }) => {
    const searchParams = new URLSearchParams();

    for (const key in newParams) {
      // eslint-disable-next-line no-prototype-builtins
      if (newParams.hasOwnProperty(key)) {
        searchParams.set(key, newParams[key]);
      }
    }

    history.pushState({}, '', '?' + searchParams.toString());
    setParams(searchParams);
  };

  useEffect(() => {
    const handlePopState = () => {
      setParams(new URLSearchParams(location.search));
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return { params, setQueryParams };
};
