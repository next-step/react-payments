import React, { ReactElement, ReactNode, useState } from 'react';

interface StepProps<T> {
  name: T;
  children: ReactNode;
}

interface StepperProps<T> {
  children: Array<ReactElement<StepProps<T>>>;
}

export const useStepper = <T extends readonly string[]>(steps: T) => {
  const initialStep = steps[0];
  const [step, setStep] = useState<T[number]>(initialStep);

  const Step = React.memo((props: StepProps<T[number]>): ReactNode => {
    return <>{props.children}</>;
  });

  const Stepper = React.memo(({ children }: StepperProps<T[number]>) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step
    );

    return <>{targetStep}</>;
  });

  return { Stepper, Step, setStep };
};
