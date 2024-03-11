import { TSteps } from '@/constants/stepConstants';
import { ReactElement, useState } from 'react';

interface StepProps<T> {
  name: T;
  children: ReactElement;
}

interface StepperProps<T> {
  children: Array<ReactElement<StepProps<T>>>;
}

export const useStepper = <T extends TSteps>(steps: T) => {
  const initialStep = steps[0];
  const [currentStep, setCurrentStep] = useState<T[number]>(initialStep);

  const Step = (props: StepProps<T[number]>): ReactElement => {
    return <>{props.children}</>;
  };

  const Stepper = ({ children }: StepperProps<T[number]>) => {
    const targetStep = children.find((childStep) => childStep.props.name === currentStep);

    return <>{targetStep}</>;
  };

  return { Stepper, Step, currentStep, setCurrentStep };
};
