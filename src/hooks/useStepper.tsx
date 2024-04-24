import { ReactElement, ReactNode, useState } from 'react';

import { TSteps } from '@/features/card/constants/step';

interface StepProps<T> {
  name: T;
  children: ReactNode;
}

interface StepperProps<T> {
  children: Array<ReactElement<StepProps<T>>>;
}

export const useStepper = <T extends TSteps>(steps: T) => {
  const initialStep = steps[0];
  const [step, setStep] = useState<T[number]>(initialStep);

  const Step = (props: StepProps<T[number]>): ReactNode => {
    return <>{props.children}</>;
  };

  const Stepper = ({ children }: StepperProps<T[number]>) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  return { Stepper, Step, step, setStep };
};
