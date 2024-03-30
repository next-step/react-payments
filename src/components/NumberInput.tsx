import React, {ChangeEvent, useState} from "react"
import {InputProps} from "../interface/InputProps.ts"

const NumberInput: React.FC<InputProps> = ({
                                               inputRule,
                                               onChange,
                                               defaultState = '',
                                               ...rest
                                           }) => {
    const [inputNumber, setInputNumber] = useState<string>(defaultState)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        if (!(/^\d*$/.test(value) && (!inputRule || inputRule(value)))) {
            return
        }

        setInputNumber(value)
        onChange?.(event)
    };

    return (
        <>
            <input
                value={inputNumber}
                onChange={handleChange}
                {...rest}
            />
        </>
    );
}

export default NumberInput;
