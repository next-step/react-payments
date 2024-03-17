import React, {ChangeEvent, useState} from "react";
import {InputProps} from "../interface/InputProps.ts";

const Input: React.FC<InputProps> = ({type, className, maxLength, placeHolder, inputChange}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setInputValue(value)
        if (inputChange) {
            inputChange(value)
        }
    };

    return (
        <>
            <input
                type={type}
                className={className}
                value={inputValue}
                maxLength={maxLength}
                placeholder={placeHolder}
                onChange={handleChange}
            />
        </>
    );
}

export default Input;
