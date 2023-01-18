import { useMemo, useContext } from 'react';
//
import { RouteStateContext, RouteDispatchContext, 라우터_키 } from '@/contexts';

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
  const dispatch = useRouteDispatch();
  return useMemo(
    () => ({
      push: (경로: 라우터_키, params?: Record<string, any>) => {
        dispatch({ type: 'PUSH', route: 경로, params });
      },
      back: () => {
        dispatch({ type: 'BACK' });
      },
    }),
    [dispatch],
  );
};
