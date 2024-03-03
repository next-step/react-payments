import { ReactElement, useState } from "react";

import { CurrentPage } from "common/types/page.type";

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export interface StepProps {
  name: string;
  children: React.ReactNode;
}

export default function useFunnel() {
  const [currentStep, setCurrentStep] = useState<CurrentPage>("addCard");

  const handleChangeCurrentStep = (step: CurrentPage) => {
    setCurrentStep(step);
  };

  const Step = ({ children }: StepProps) => {
    return <>{children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const currentChildren = children.find(
      (childStep) => childStep.props.name === currentStep
    );

    return <>{currentChildren}</>;
  };

  return { Funnel, Step, handleChangeCurrentStep };
}
