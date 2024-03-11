import { PropsWithChildren, useContext } from 'react'
import { FunnelStep } from '../../constant/step'
import FunnelStepProvider, { FunnelStepContext } from '../../context/funnelStepContext'

const Stepper = ({ children }: PropsWithChildren<{}>) => {
  return <FunnelStepProvider>{children}</FunnelStepProvider>
}

const Step = ({ step, children }: PropsWithChildren<FunnelStep>) => {
  const funnelStep = useContext(FunnelStepContext)
  return <>{funnelStep.step === step && children}</>
}

Stepper.Step = Step

export { Stepper }
