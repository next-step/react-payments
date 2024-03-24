import React, {createContext, useContext, useState} from 'react'

interface StepperContextType {
    step: string
    setCurrentStep: (step: string) => void
}

const StepperContext = createContext<StepperContextType>({
    step: "/",
    setCurrentStep: () => {}
});

export const StepperProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [step, setStep] = useState<string>("/")

    const setCurrentStep = (step: string) => {
        setStep(step)
    }

    return (
        <StepperContext.Provider value={{ step, setCurrentStep }}>
            {children}
        </StepperContext.Provider>
    )
}

export const useStepper = () => useContext(StepperContext);