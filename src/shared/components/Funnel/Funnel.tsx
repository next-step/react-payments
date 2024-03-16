import { Children, createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import { funnelMachine } from './Funnel.machine';

type FunnelProps = PropsWithChildren<{
  startIndex?: number;
}>;

const FunnelContext = createContext<any>(null);

export const Funnel = ({ children, startIndex = 0 }: FunnelProps) => {
  const childrenCount = Children.count(children) - 1;
  const [state, send] = useMachine(funnelMachine);
  useEffect(() => {
    send({
      type: 'initLastIndex',
      value: { currentIndex: startIndex, lastIndex: childrenCount },
    });
  }, [send, startIndex, childrenCount]);
  const contextValue = useMemo(() => ({ state, send }), [state, send]);
  return <FunnelContext.Provider value={contextValue}>{children}</FunnelContext.Provider>;
};

type FunnelStepProps = PropsWithChildren<{ index: number }>;
export const FunnelStep = ({ index, children }: FunnelStepProps) => {
  const { state } = useContext(FunnelContext);
  return state.context.currentIndex === index ? children : null;
};

export const useFunnel = () => {
  const context = useContext(FunnelContext);
  if (context === null) {
    throw new Error('useFunnel은 Funnel.Root 하위에서 사용되어야 합니다.');
  }
  const {
    state: {
      context: { currentIndex, lastIndex },
    },
  } = context;

  const goToNext = useCallback(() => {
    context.send({ type: 'goToNext', value: { lastIndex } });
  }, [context, lastIndex]);

  const goToPrev = useCallback(() => {
    context.send({ type: 'goToPrev', value: { lastIndex } });
  }, [context, lastIndex]);

  const goToIndex = useCallback(
    (value: number) => {
      context.send({
        type: 'goToIndex',
        value: { lastIndex, currentIndex: value },
      });
    },
    [context, lastIndex],
  );

  return {
    currentIndex,
    lastIndex,
    goToNext,
    goToPrev,
    goToIndex,
  };
};
Funnel.Root = Funnel;
Funnel.Step = FunnelStep;

Funnel.displayName = 'Funnel';
