import { PropsWithChildren, useContext } from 'react'
import { FunnelStep } from './constant/step'
import { FunnelStepContext } from './context/funnelStepContext'

const Stepper = ({ children }: PropsWithChildren<{}>) => {
  return <>{children}</>
}

const Step = ({ step, children }: PropsWithChildren<FunnelStep>) => {
  const funnelStep = useContext(FunnelStepContext)
  return <>{funnelStep.step === step && children}</>
}

Stepper.Step = Step

export { Stepper }
