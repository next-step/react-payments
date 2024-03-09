import { createContext, useContext, useState } from 'react';
import { FUNNEL } from './funnel.constant';
import {
  GetFunnelProps,
  FunnelContextProps,
  FunnelStepProps,
} from './funnel.type';

/**
 * 커스텀 훅의 형태를 취할까 했지만, 합성컴포넌트 반환 로직 및 컨텍스트 로직이 캡슐화되어있어,
 * context에 접근하기 위해 커스텀 훅을 반복적으로 호출해야 한다는 문제가 있어 함수의 형태로 설계했습니다.
 * 현재 설계에 대해 어떻게 생각하시는지 궁금합니다. :)
 * 그리고, 이 createFunnel 함수가 components 폴더에 위치할 것인지 utils 폴더로 빠져야할 것인지 고민이 됩니다.
 * FIXME: FunnelClient 인스턴스 생성해서 Provider에 주입하는 형식으로 해도 됨.
 */
export const createFunnel = <StepKey,>({
  initialStep,
}: GetFunnelProps<StepKey>) => {
  const FunnelContext = createContext<FunnelContextProps<StepKey>>({
    step: null,
    setStep: () => {
      throw new Error(FUNNEL.MESSAGE.ERROR.NOT_INITIALIZED);
    },
  });

  const Step = ({ name, children }: FunnelStepProps<StepKey>) => {
    const { step } = useContext(FunnelContext);

    if (name === step) return <>{children}</>;

    return null;
  };

  const FunnelContainer = ({ children }: React.PropsWithChildren) => {
    const [step, setStep] = useState<StepKey>(initialStep);

    return (
      <FunnelContext.Provider value={{ step, setStep }}>
        {children}
      </FunnelContext.Provider>
    );
  };

  return {
    Funnel: Object.assign(FunnelContainer, {
      Step,
    }),

    useFunnel: () => useContext(FunnelContext),
  };
};
