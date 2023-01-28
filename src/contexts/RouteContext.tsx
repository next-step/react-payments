import { createContext, Dispatch, useReducer } from 'react';
//
import { 라우터_초깃값 } from '@/constants';
//
import type { ChildrenProps } from 'components';
import type { RouterState, RouterAction, RouterKeys } from './contexts.types';

export const RouteStateContext = createContext<RouterState>(라우터_초깃값);
export const RouteDispatchContext = createContext<Dispatch<RouterAction> | null>(null);

const routeReducer = (state: RouterState, action: RouterAction) => {
  switch (action.type) {
    case 'PUSH':
      return {
        ...state,
        prevRoute: [...state.prevRoute, location.href],
        currentRoute: action.route,
        params: action.params,
      };
    case 'BACK': {
      const currentRoute = (state.prevRoute.pop() || '/') as RouterKeys;
      return { ...state, prevRoute: state.prevRoute, currentRoute };
    }
    default:
      throw new Error('incorrect action type');
  }
};

export const RouteProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(routeReducer, 라우터_초깃값);

  return (
    <RouteStateContext.Provider value={state}>
      <RouteDispatchContext.Provider value={dispatch}>{children}</RouteDispatchContext.Provider>
    </RouteStateContext.Provider>
  );
};
