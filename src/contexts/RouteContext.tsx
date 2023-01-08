import { createContext, Dispatch, useReducer } from 'react';

import { 라우터_프로퍼티 } from '@/constants';
import { ChildrenProps } from 'components';

export type 라우터_키 = typeof 라우터_프로퍼티[keyof typeof 라우터_프로퍼티];

type State = {
  prevRoute: string[];
  currentRoute: 라우터_키;
};

type Action = { type: 'PUSH'; route: 라우터_키 } | { type: 'BACK' };

const 라우터_초깃값: State = {
  prevRoute: [],
  currentRoute: '/',
};

export const RouteStateContext = createContext<State>(라우터_초깃값);

export const RouteDispatchContext = createContext<Dispatch<Action> | null>(null);

const routeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'PUSH':
      return {
        ...state,
        prevRoute: [...state.prevRoute, location.href],
        currentRoute: action.route,
      };
    case 'BACK': {
      const currentRoute = (state.prevRoute.pop() || '/') as 라우터_키;
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
