import { Children, PropsWithChildren, ReactElement, isValidElement } from 'react'

export interface StepProps extends PropsWithChildren {
  name: string
}

export const Step = ({ children }: StepProps) => {
  return <>{children}</>
}

export interface StepperProps {
  currentStep: string
  children: Array<ReactElement<StepProps>> | ReactElement<StepProps>
}

export const StepperRoot = ({ currentStep, children }: StepperProps) => {
  const validChildren = Children.toArray(children).filter(isValidElement) as Array<
    ReactElement<StepProps>
  >

  return <>{validChildren.find(childStep => childStep.props.name === currentStep)}</>
}

export const Stepper = Object.assign(StepperRoot, {
  Step,
})
