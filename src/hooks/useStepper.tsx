import { Children, ReactElement, ReactNode, isValidElement } from 'react';
import { PAGES } from '../constants/pages';
import { useQueryParams } from './useQueryParams';
import { CardContext } from '../App';

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

const useStepper = () => {
  const state = CardContext.useSelector(({ value }) => value);
  const { send } = CardContext.useActorRef();
  const { params, setQueryParams } = useQueryParams();
  const step = params.get('step') ?? state;

  const setStep = (newStep: PagesType, id?: string) => {
    setQueryParams({ step: newStep, id: id || '' });
    send({ type: newStep });
  };

  const Stepper = <Step extends PagesType>({
    children,
  }: StepperProps<Step>) => {
    const validChildren = Children.toArray(children).filter(
      isValidElement
    ) as Array<ReactElement<StepProps<Step>>>;

    const targetStep = validChildren.find(({ props }) => {
      return props.name === step;
    });

    return targetStep;
  };

  const Step = <Step extends PagesType>({ children }: StepProps<Step>) => {
    return <>{children}</>;
  };

  Stepper.Step = Step;

  return { Stepper, setStep };
};

export default useStepper;
