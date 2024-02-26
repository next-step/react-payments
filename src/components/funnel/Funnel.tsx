import { createContext, useContext, useState } from 'react';
import { ContainerProps } from '@/types';
import { FUNNEL } from './funnel.constant';
import {
  GetFunnelProps,
  FunnelContextProps,
  FunnelStepProps,
} from './funnel.type';

export const getFunnel = <StepKey,>({
  initialState,
}: GetFunnelProps<StepKey>) => {
  const FunnelContext = createContext<FunnelContextProps<StepKey>>({
    step: null,
    setStep: () => {
      throw new Error(FUNNEL.MESSAGE.ERROR.NOT_INITIALIZED);
    },
  });

  const Step = ({ name, children }: FunnelStepProps<StepKey>) => {
    const { step } = useContext(FunnelContext);

    if (name === step) return <>{children}</>;

    return null;
  };

  const FunnelContainer = ({ children }: ContainerProps) => {
    const [step, setStep] = useState<StepKey>(initialState);

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
