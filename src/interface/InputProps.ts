import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
    inputRule?: (value: string) => boolean
    defaultState?: string
}
