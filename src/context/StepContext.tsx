import React, { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';

export const PAYMENTS_STEP = {
  LIST: 1,
  ADD: 2,
  EDIT: 3,
  DONE: 4,
} as const;

type TStep = {
  step?: number;
  setStep?: Dispatch<SetStateAction<number>>;
};

type TStepContextProps = {
  children: React.ReactNode;
};

export const StepContext = createContext<TStep | null>(null);

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
    throw new Error('Not found StepContext');
  }
  return value;
}
