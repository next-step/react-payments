import React, {ChangeEvent, useState} from "react";
import {InputProps} from "../interface/InputProps.ts";

const NumberInput: React.FC<InputProps> = ({type, className, maxLength, placeHolder, inputRule, inputChange}) => {
    const [inputNumber, setInputNumber] = useState<string | ''>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (/^\d*$/.test(value) && (!inputRule || inputRule(value))) {
            setInputNumber(value);
            if (inputChange) {
                inputChange(value)
            }
        }
    };

    return (
        <>
            <input
                type={type}
                className={className}
                value={inputNumber}
                maxLength={maxLength}
                placeholder={placeHolder}
                onChange={handleChange}
            />
        </>
    );
}

export default NumberInput;
