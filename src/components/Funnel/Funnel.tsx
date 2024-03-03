import React, { createContext, useState, useMemo, PropsWithChildren, useContext } from 'react';

type FunnelContextType = {
  currentIndex: number;
  goToNext: () => void;
  goToPrev: () => void;
};

export const FunnelContext = createContext<FunnelContextType | undefined>(undefined);

type FunnelProps = PropsWithChildren<{
  startIndex?: number;
}>;

export const Funnel = ({ children, startIndex }: FunnelProps) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex ?? 0);
  const lastIndex = React.Children.count(children) - 1;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= lastIndex ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? lastIndex : prevIndex - 1));
  };

  const contextValue = useMemo(() => ({ currentIndex, goToNext, goToPrev }), [currentIndex]);

  return <FunnelContext.Provider value={contextValue}>{children}</FunnelContext.Provider>;
};

type FunnelStepProps = PropsWithChildren<{ index: number }>;
const FunnelStep = ({ index, children }: FunnelStepProps) => {
  const { currentIndex } = useFunnel();
  return currentIndex === index ? <>{children}</> : null;
};

export const useFunnel = () => {
  const context = useContext(FunnelContext);
  if (!context) {
    throw new Error('useFunnel은 Funnel.Root 하위에서 사용되어야 합니다.');
  }
  return context;
};

Funnel.Root = Funnel;
Funnel.Step = FunnelStep;

Funnel.displayName = 'Funnel';
