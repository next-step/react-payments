import { Route } from '@/domain/type';
import { ReactNode, createContext, useState } from 'react';

type StepType = {
  route: Route;
  navigate: (path: Route) => void;
};

const initialState: StepType = {
  route: 'CARD',
  navigate: () => undefined,
};

interface StepProviderProps {
  children: (route: string) => ReactNode;
}

export const StepContext = createContext(initialState);

const StepProvider = ({ children }: StepProviderProps) => {
  const [route, setRoute] = useState<Route>('CARD');
  const navigate = (path: Route) => setRoute(path);

  return <StepContext.Provider value={{ route, navigate }}>{children(route)}</StepContext.Provider>;
};

export default StepProvider;
