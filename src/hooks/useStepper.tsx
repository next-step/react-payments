import { Children, ReactElement, ReactNode, isValidElement } from 'react';
import { PAGES } from '../constants/pages';

export interface StepperProps<Step extends PagesType> {
  children:
    | Array<ReactElement<StepProps<Step>>>
    | ReactElement<StepProps<Step>>;
}

export interface StepProps<Step extends PagesType> {
  name: Step;
  children: ReactNode;
}

export type PagesType = (typeof PAGES)[keyof typeof PAGES];

const useStepper = <Step extends PagesType>(initialStep: Step) => {
  const searchParams = new URLSearchParams(location.search);
  const step = searchParams.get('step') ?? initialStep;

  const setStep = (step: PagesType) => {
    searchParams.set('step', step);
    location.search = searchParams.toString();
  };

  const Stepper = <Step extends PagesType>({
    children,
  }: StepperProps<Step>) => {
    const validChildren = Children.toArray(children).filter(
      isValidElement
    ) as Array<ReactElement<StepProps<Step>>>;

    const targetStep = validChildren.find((child) => child.props.name === step);

    return targetStep;
  };

  const Step = <Step extends PagesType>({ children }: StepProps<Step>) => {
    return <>{children}</>;
  };

  Stepper.Step = Step;

  return { Stepper, setStep };
};

export default useStepper;
