import { ContainerProps } from '@/types';

type DefaultStep = null;
type DefaultSetState = () => never;

/**
 * 주입받는 제네릭 타입은 Step의 name들의 유니온 타입입니다.
 * @template T
 * @property {T} step - 현재 Step
 * @property {(step: T) => void} setStep - Step 변경 함수
 */
export interface FunnelContextProps<T> {
  step: T | DefaultStep;
  setStep: ((step: T) => void) | DefaultSetState;
}

export interface FunnelStepProps<T> extends ContainerProps {
  name: T;
}

export interface GetFunnelProps<T> {
  initialState: T;
}
