import {type Route} from '@/domain/type';
import {
  type PropsWithChildren, ReactNode, createContext, useState,
} from 'react';

type StepType = {
  route: Route;
  navigate: (path: Route) => void;
};

const initialState: StepType = {
  route: 'CARD',
  navigate: () => undefined,
};

export const StepContext = createContext(initialState);

const StepProvider = ({children}: PropsWithChildren) => {
  const [route, setRoute] = useState<Route>('CARD');
  const navigate = (path: Route) => {
    setRoute(path);
  };

  return <StepContext.Provider value={{route, navigate}}>{children}</StepContext.Provider>;
};

export default StepProvider;
