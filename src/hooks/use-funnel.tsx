import { Children, PropsWithChildren, ReactElement, isValidElement, useState } from 'react'

type StepProps = PropsWithChildren<{ name: string }>

export type FunnelState<T> = T & {
  step: string
}

export const Step = ({ children }: StepProps) => {
  return <>{children}</>
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>> | ReactElement<StepProps>
}

export const FunnelRoot =
  <T,>(funnelState: FunnelState<T>) =>
  ({ children }: FunnelProps) => {
    const validChildren = Children.toArray(children).filter(isValidElement) as Array<
      ReactElement<StepProps>
    >

    const targetStep = validChildren.find(childStep => childStep.props.name === funnelState.step)

    return <>{targetStep}</>
  }

export const Funnel = <T,>(funnelState: FunnelState<T>) => ({
  Root: FunnelRoot(funnelState),
  Step,
})

export const useFunnel = <T,>(steps: readonly string[], initialState: T) => {
  const [funnelState, setFunnelState] = useState<FunnelState<T>>({
    step: steps[0],
    ...initialState,
  })

  const FunnelComponent = Funnel(funnelState)

  return [FunnelComponent, funnelState, setFunnelState] as const
}
