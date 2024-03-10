import {
  Children,
  PropsWithChildren,
  ReactElement,
  isValidElement,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
} from 'react'
import { FunnelContextProvider, FunnelState } from '@/contexts/funnel-context.tsx'

type StepProps = PropsWithChildren<{ name: string }>

export const Step = ({ children }: StepProps) => {
  return <>{children}</>
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>> | ReactElement<StepProps>
}

export const FunnelRoot =
  <T,>(funnelState: FunnelState<T>, setFunnelState: Dispatch<SetStateAction<FunnelState<T>>>) =>
  ({ children }: FunnelProps) => {
    const validChildren = Children.toArray(children).filter(isValidElement) as Array<
      ReactElement<StepProps>
    >

    const targetStep = validChildren.find(childStep => childStep.props.name === funnelState.step)

    const contextValue = useMemo(
      () => ({
        state: funnelState,
        setState: setFunnelState,
      }),
      [funnelState, setFunnelState],
    )

    return <FunnelContextProvider value={contextValue}>{targetStep}</FunnelContextProvider>
  }

export const Funnel = <T,>(args: Parameters<typeof FunnelRoot<T>>) => ({
  Root: FunnelRoot(...args),
  Step,
})

export const useFunnel = <T,>(steps: readonly string[], initialState: T) => {
  const funnelStateResult = useState<FunnelState<T>>({
    step: steps[0],
    ...initialState,
  })

  const FunnelComponent = Funnel(funnelStateResult)

  return [FunnelComponent, ...funnelStateResult] as const
}
