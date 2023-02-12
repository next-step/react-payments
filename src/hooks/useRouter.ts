import { useMemo, useContext } from 'react';
//
import { RouteStateContext, RouteDispatchContext, RouterKeys } from '@/contexts';

export const useRouteState = () => {
  const context = useContext(RouteStateContext);
  if (!context) {
    throw new Error('useRouteState는 반드시 RouteProvider에서 사용해주세요.');
  }
  return context;
};

export const useRouteDispatch = () => {
  const context = useContext(RouteDispatchContext);
  if (!context) {
    throw new Error('useRouteDispatch는 반드시 RouteProvider에서 사용해주세요.');
  }
  return context;
};

export const useRouter = () => {
  const state = useRouteState();
  const dispatch = useRouteDispatch();
  return useMemo(
    () => ({
      getRouterState: () => {
        return state;
      },
      push: (route: RouterKeys, params?: Record<string, any>) => {
        dispatch({ type: 'PUSH', route, params });
      },
      back: () => {
        dispatch({ type: 'BACK' });
      },
    }),
    [state, dispatch],
  );
};
