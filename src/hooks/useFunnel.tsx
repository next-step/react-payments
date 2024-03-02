import { useState, Children, isValidElement } from 'react';

import type { ReactNode, ReactElement } from 'react';

interface StepProps {
  name: string;
  children: ReactNode;
}

const useFunnel = (initialStep: string) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const Step = ({ children }: StepProps) => <>{children}</>;
  const FunnelElement = ({
    children,
  }: {
    children: Array<ReactElement<StepProps>>;
  }) => {
    // name === currentStep 인것 만 렌더링
    return (
      <>
        {Children.map(children, (child) => {
          if (isValidElement(child) && child.props.name === currentStep) {
            return child;
          }
          return null;
        })}
      </>
    );
  };
  const Funnel = Object.assign(FunnelElement, {
    Step,
  });
  return [Funnel, setCurrentStep] as const;
};
export default useFunnel;
