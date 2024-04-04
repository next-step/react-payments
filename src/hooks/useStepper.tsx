import { ReactElement, ReactNode, useState } from 'react'

type StepProps = {
	name: string
	children: ReactNode
}

type StepperProps = {
	children: Array<ReactElement<StepProps>>
}

function useStepper<T>(defaultStep: T) {
	const [step, setStep] = useState<T>(defaultStep)

	const Step = (props: StepProps): ReactElement => {
		return <>{props.children}</>
	}

	const Stepper = ({ children }: StepperProps) => {
		const targetStep = children.find((childStep) => childStep.props.name === step)

		return <>{targetStep}</>
	}

	// return [step, setStep, Stepper, Step]
	return { step, setStep, Stepper, Step } as const
}
export default useStepper
