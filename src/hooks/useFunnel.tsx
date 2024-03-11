import { ReactElement, ReactNode, useState } from 'react'

type StepProps = {
  name: string
  children: ReactNode
}

type FunnelProps = {
  children: Array<ReactElement<StepProps>>
}

function useFunnel(defaultStep: string) {
  const [step, setStep] = useState<string>(defaultStep)

  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>
  }

  const Funnel = ({ children }: FunnelProps) => {
    console.log('children', children)
    const targetStep = children.find(
      (childStep: any) => childStep.props.name === step,
    )

    return <>{targetStep}</>
  }

  // return [step, setStep, Funnel, Step]
  return { step, setStep, Funnel, Step } as const
}
export default useFunnel
