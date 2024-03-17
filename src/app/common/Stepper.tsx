import { PropsWithChildren, useContext } from 'react'
import { FunnelStep } from '../../constant/step'
import FunnelStepProvider, { FunnelStepContext, UpdateFunnelStepContext } from '../../context/funnelStepContext'

const Stepper = ({ children }: PropsWithChildren<{}>) => {
  return <FunnelStepProvider>{children}</FunnelStepProvider>
}

const Step = ({ step, renderStep }: PropsWithChildren<Required<FunnelStep>>) => {
  const funnelStep = useContext(FunnelStepContext)
  const updateFunnelStep = useContext(UpdateFunnelStepContext)

  if (!renderStep || funnelStep.step !== step) return null

  return renderStep(updateFunnelStep)
}

Stepper.Step = Step

export { Stepper }
