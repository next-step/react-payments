import { ReactNode, createContext, useState } from 'react';

interface StepType {
  route: string;
  navigate: (path: string) => void;
}
const initialState: StepType = {
  route: 'CARD',
  navigate: () => null,
};
interface StepProviderProps {
  children: (route: string) => ReactNode;
}
export const StepContext = createContext(initialState);
const StepProvider = ({ children }: StepProviderProps) => {
  const [route, setRoute] = useState<string>('CARD');
  const navigate = (path: string) => setRoute(path);

  return <StepContext.Provider value={{ route, navigate }}>{children(route)}</StepContext.Provider>;
};

export default StepProvider;
