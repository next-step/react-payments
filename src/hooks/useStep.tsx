import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { NavigateFunction } from 'react-router-dom'

type StepperProps = { children: ReactNode }
type StepProps<T extends readonly string[]> = {
  children: Exclude<ReactNode, null | undefined>
  name: T[number]
}

type StepperContextProps = [string, (step: string) => void]
const StepperContext = createContext<StepperContextProps>(['', () => {}])

export const useStep = <T extends readonly string[]>(
  steps: T,
  location?: Location,
  navigate?: NavigateFunction
) => {
  const stepQuery = new URLSearchParams(location?.search).get('step')

  const initialStep = stepQuery || steps[0]
  const [currentStep, setCurrentStep] = useState<string>(initialStep)

  useEffect(() => {
    if (stepQuery && steps.includes(stepQuery as T[number])) {
      setCurrentStep(stepQuery)
    }
  }, [location?.search, steps, stepQuery])

  const setStep = useCallback(
    (step: T[number]) => {
      if (!steps.includes(step)) {
        return
      }

      setCurrentStep(step)
      navigate?.(`?step=${step}`)
    },
    [steps, navigate]
  )

  const Stepper = ({ children }: StepperProps) => (
    <StepperContext.Provider value={[currentStep, setCurrentStep]}>
      {children}
    </StepperContext.Provider>
  )

  const Step = <U extends T>({ name, children }: StepProps<U>) => {
    const [step] = useContext(StepperContext)
    return step === name ? children : null
  }
  Stepper.Step = Step

  return [Stepper, setStep] as const
}
