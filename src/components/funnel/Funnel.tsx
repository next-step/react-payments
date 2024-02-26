import { useState } from 'react';
import { FunnelContext, useFunnel } from './context';
import { FunnelContainerProps, StepProps, StepType } from './funnel.type';

const Step = <T,>({ name, children }: StepProps<T>) => {
  const { step } = useFunnel();

  if (name === step) return <>{children}</>;

  return null;
};

const FunnelContainer = ({
  initialStep,
  children,
}: FunnelContainerProps<StepType>) => {
  const [step, setStep] = useState<StepType>(initialStep);

  return (
    <FunnelContext.Provider value={{ step, setStep }}>
      {children}
    </FunnelContext.Provider>
  );
};

// 흠.. 여기서 추상화하는게 최선인가. 도메인별로 추상화하고 여기서 타입 주입하는 쪽으로 일단 진행.
export const Funnel = Object.assign(FunnelContainer, {
  Step: Step as (props: StepProps<StepType>) => JSX.Element,
});
