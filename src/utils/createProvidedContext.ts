import React from 'react';

type CreateProvidedContext<A> = readonly [() => A, React.ProviderExoticComponent<React.ProviderProps<A | undefined>>];

export default function createProvidedContext<T>(): CreateProvidedContext<T> {
  const context = React.createContext<T | undefined>(undefined);

  function useProvidedContext(): T {
    const contextValue = React.useContext(context);

    if (!contextValue) {
      throw new Error('useProvidedContext는 값이 있는 Provider 내부에 있어야 합니다.');
    }

    return contextValue;
  }

  return [useProvidedContext, context.Provider] as const;
}
