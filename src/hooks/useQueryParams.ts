import { useState, useEffect } from 'react';
import { CardContext } from '../App';
import { PagesType } from '../constants/pages';
import { goPageEventTypeMap } from '../types';

export const useQueryParams = () => {
  const [params, setParams] = useState(new URLSearchParams(location.search));
  const { send } = CardContext.useActorRef();

  const setQueryParams = (newParams: { [key: string]: string }) => {
    const searchParams = new URLSearchParams();

    for (const key in newParams) {
      if (
        Object.prototype.hasOwnProperty.call(newParams, key) &&
        newParams[key]
      ) {
        searchParams.set(key, newParams[key]);
      }
    }

    history.pushState({}, '', '?' + searchParams.toString());
    setParams(searchParams);
  };

  useEffect(() => {
    const handlePopState = () => {
      const newParams = new URLSearchParams(location.search);
      const newStep = newParams.get('step') as PagesType;

      if (newStep) {
        send({ type: goPageEventTypeMap[newStep] });
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
