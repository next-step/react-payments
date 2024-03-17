export interface InputProps {
    type: string
    className: string
    maxLength?: number
    placeHolder?: string
    inputRule?: (value: string) => boolean
    inputChange?: (value: string) => void
}
