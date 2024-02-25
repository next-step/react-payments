import { createContext, useContext } from 'react';
import { FunnelContextProps } from './funnel.type';
import { STEP } from './funnel.constant';

export const FunnelContext = createContext<FunnelContextProps>({
  step: STEP.INITIAL_STEP,
  setStep: () => {
    throw new Error('setStep 함수를 초기화 해야합니다.');
  },
});

export const useFunnel = () => useContext(FunnelContext);
