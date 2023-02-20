import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type * as Route from '@/route/Route';

export const useRouter = () => {
  const navigate = useNavigate();

  const back = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const go = useCallback(
    (path: Route.RoutePath) => {
      navigate({ pathname: path });
    },
    [navigate]
  );

  return {
    back,
    go,
  };
};
