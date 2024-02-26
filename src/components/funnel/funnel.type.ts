import { STEP } from './funnel.constant';

export type StepType = (typeof STEP)[keyof typeof STEP];

export interface FunnelContextProps {
  step: StepType;
  setStep: (step: StepType) => void;
}

export interface StepProps<T> {
  name: T;
  children: React.ReactNode;
}

export interface FunnelContainerProps<T> {
  initialStep: T;
  children: React.ReactNode;
}
