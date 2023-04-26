import React, { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';
import { PAYMENTS_STEP } from '../domain/payments/constants';

type TStep = {
  step?: number;
  setStep?: Dispatch<SetStateAction<number>>;
};

type TStepContextProps = {
  children: React.ReactNode;
};

const StepContext = createContext<TStep | null>(null);

export function StepContextProvider({ children }: TStepContextProps) {
  const [step, setStep] = useState<number>(PAYMENTS_STEP.LIST);

  const value = useMemo(
    () => ({
      step,
      setStep,
    }),
    [step, setStep]
  );

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
}

export function useStepContext() {
  const value = useContext(StepContext);

  if (value === null) {
    throw new Error('StepContext 초기화 작업이 진행되지 않았습니다');
  }
  return value;
}
