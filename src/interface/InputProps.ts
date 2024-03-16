type InputRuleFunction = (value: string) => boolean

export interface InputProps {
    type: string
    className: string
    maxLength?: number
    placeHolder?: string
    inputRule?: InputRuleFunction
}
