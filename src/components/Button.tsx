import React from "react";
import {ButtonProps} from "../interface/ButtonProps.ts";

const Button: React.FC<ButtonProps> = ({onClick, children}) => {
    return (
        <button className={"button-box"} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button