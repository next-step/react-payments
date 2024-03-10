import { Children, PropsWithChildren, ReactElement, isValidElement, useState } from 'react'

type StepProps = PropsWithChildren<{ name: string }>

export const Step = ({ children }: StepProps) => {
  return <>{children}</>
}

export interface FunnelProps {
  step: string
  children: Array<ReactElement<StepProps>> | ReactElement<StepProps>
}

export const FunnelRoot = ({ step, children }: FunnelProps) => {
  const validChildren = Children.toArray(children).filter(isValidElement) as Array<
    ReactElement<StepProps>
  >

  const targetStep = validChildren.find(childStep => childStep.props.name === step)

  return targetStep
}

export const Funnel = {
  Root: FunnelRoot,
  Step,
}

export const useFunnel = (initialStep: string) => {
  const [step, setStep] = useState<string>(initialStep)

  return [Funnel, step, setStep] as const
}
