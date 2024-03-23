import React from 'react';
import {useStepper} from "../context/StepperContext.tsx";
import IntrinsicElements = React.JSX.IntrinsicElements;

export interface HeaderButtonProps {
    tag: string
    className: string
    step?: string
    value?: string
}


const HeaderButton: React.FC<HeaderButtonProps> = ({tag, className, step, value}) => {
    const {setCurrentStep} = useStepper()
    const handleClick = () => {
        if (step) {
            setCurrentStep(step)
        }
    }

    const Tag = tag as keyof IntrinsicElements;

    return (
        <>
            <Tag
                className={className}
                onClick={handleClick}
            >
                {value}
            </Tag>
        </>
    )
}


export default HeaderButton;