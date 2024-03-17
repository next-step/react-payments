import { useState, useEffect } from 'react';
import { CardContext } from '../App';
import { PAGES } from '../constants/pages';

export const useQueryParams = () => {
  const [params, setParams] = useState(new URLSearchParams(location.search));
  const { send } = CardContext.useActorRef();

  const setQueryParams = (newParams: { [key: string]: string }) => {
    const searchParams = new URLSearchParams();

    for (const key in newParams) {
      // eslint-disable-next-line no-prototype-builtins
      if (newParams.hasOwnProperty(key) && newParams[key]) {
        searchParams.set(key, newParams[key]);
      }
    }

    history.pushState({}, '', '?' + searchParams.toString());
    setParams(searchParams);
  };

  useEffect(() => {
    const handlePopState = () => {
      const newParams = new URLSearchParams(location.search);
      const newStep = newParams.get('step') as PAGES;

      if (newStep) {
        send({ type: newStep });
      }

      setParams(newParams);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [send]);

  return { params, setQueryParams };
};
