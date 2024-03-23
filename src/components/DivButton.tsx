import React from "react";
import {useStepper} from "../context/StepperContext.tsx";

export interface DivInputProps {
    className: string
    step?: string
    value?: string
}

const DivButton: React.FC<DivInputProps> = ({className, step, value}) => {
    const {setCurrentStep} = useStepper()
    const handleClick = () => {
        if (step) {
            setCurrentStep(step)
        }
    }

    return (
        <>
            <div
                className={className}
                onClick={handleClick}
            >
                {value}
            </div>
        </>
    )
}

export default DivButton