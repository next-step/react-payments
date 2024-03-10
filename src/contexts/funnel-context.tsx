import { createContext, Dispatch, PropsWithChildren, SetStateAction } from 'react'

export type FunnelState<T> = T & {
  step: string
}

export type FunnelContextValue<T> = {
  state: FunnelState<T>
  setState: Dispatch<SetStateAction<FunnelState<T>>>
}
const createFunnelContext = <T,>() => createContext<FunnelContextValue<T> | null>(null)

export interface FunnelContextProvider<T> extends PropsWithChildren {
  value: FunnelContextValue<T>
}

export const FunnelContextProvider = <T,>({ children, value }: FunnelContextProvider<T>) => {
  const FunnelContext = createFunnelContext<T>()

  return <FunnelContext.Provider value={value}>{children}</FunnelContext.Provider>
}
