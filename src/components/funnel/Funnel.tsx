import { createContext, useContext, useState } from 'react';
import {
  FunnelContainerProps,
  FunnelContextProps,
  FunnelStepProps,
} from '@/components/funnel/funnel.type';
import { FUNNEL } from './funnel.constant';

export const getFunnel = <T,>({ initialState }: { initialState: T }) => {
  const FunnelContext = createContext<FunnelContextProps<T>>({
    step: null,
    setStep: () => {
      throw new Error(FUNNEL.MESSAGE.ERROR.NOT_INITIALIZED);
    },
  });

  const Step = ({ name, children }: FunnelStepProps<T>) => {
    const { step } = useContext(FunnelContext);

    if (name === step) return <>{children}</>;

    return null;
  };

  const FunnelContainer = ({ children }: FunnelContainerProps<T>) => {
    const [step, setStep] = useState<T>(initialState);

    return (
      <FunnelContext.Provider value={{ step, setStep }}>
        {children}
      </FunnelContext.Provider>
    );
  };

  return {
    Funnel: Object.assign(FunnelContainer, {
      Step,
    }),

    useFunnel: () => useContext(FunnelContext),
  };
};
