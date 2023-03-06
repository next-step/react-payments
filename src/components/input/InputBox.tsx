import { PropsWithChildren } from 'react'

interface InputBoxProps {
  addtionalClassName?: string
}

const InputBox = ({ children, addtionalClassName }: PropsWithChildren<InputBoxProps>) => {
  return <div className={`input-box ${addtionalClassName}`}>{children}</div>
}

export default InputBox
