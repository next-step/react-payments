import React, {ChangeEvent, useState} from "react"
import {InputProps} from "../interface/InputProps.ts"

const Input: React.FC<InputProps> = ({onChange, ...rest}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setInputValue(value)
        onChange?.(event)
    }

    return (
        <>
            <input
                value={inputValue}
                onChange={handleChange}
                {...rest}
            />
        </>
    )
}

export default Input
